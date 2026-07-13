import { useState, useEffect } from "react";
import { EnvelopeIcon, LockClosedIcon, UserIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Card, Input, InputErrorMsg } from "@/components/ui";
import { useAuthContext } from "@/app/contexts/auth/context";
import { Page } from "@/components/shared/Page";
import { detectLocalIp } from "@/utils/detectIp";
import axios from "@/utils/axios";

function generateFingerprint() {
  let fp = localStorage.getItem("fingerprint");
  if (!fp) {
    fp = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem("fingerprint", fp);
  }
  return fp;
}

const loginSchema = yup.object({
  username: yup.string().min(3, "حداقل ۳ کاراکتر").required("نام کاربری الزامی است"),
  password: yup.string().min(6, "حداقل ۶ کاراکتر").required("رمز عبور الزامی است"),
});

const registerSchema = yup.object({
  username: yup.string().min(3, "حداقل ۳ کاراکتر").required("نام کاربری الزامی است"),
  password: yup.string().min(6, "حداقل ۶ کاراکتر").required("رمز عبور الزامی است"),
  windowsUser: yup.string().required("نام کاربری ویندوز الزامی است"),
});

type LoginForm = yup.InferType<typeof loginSchema>;
type RegisterForm = yup.InferType<typeof registerSchema>;

async function detectWindowsUser(): Promise<string> {
  try {
    const res = await axios.get<{ windowsUser: string | null }>("/auth/detect-windows-user");
    return res.data.windowsUser || "";
  } catch {
    return "";
  }
}

export default function Auth() {
  const { login, register, errorMessage } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  const loginForm = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const registerForm = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
    defaultValues: { username: "", password: "", windowsUser: "" },
  });

  useEffect(() => {
    if (!isLogin) {
      detectWindowsUser().then((wu) => {
        if (wu) registerForm.setValue("windowsUser", wu);
      });
    }
  }, [isLogin]);

  const onLogin = (data: LoginForm) => {
    login({ username: data.username, password: data.password });
  };

  const onRegister = async (data: RegisterForm) => {
    try {
      const clientIp = await detectLocalIp();
      const msg = await register({
        username: data.username,
        password: data.password,
        fingerprint: generateFingerprint(),
        clientIp,
        windowsUser: data.windowsUser,
      });
      setSuccessMsg(msg);
      setTimeout(() => { setIsLogin(true); setSuccessMsg(""); }, 2000);
    } catch (err: any) {
      setSuccessMsg(err?.message || "خطا در ثبت نام");
    }
  };

  return (
    <Page title={isLogin ? "ورود" : "ثبت نام"}>
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <div className="mt-4">
              <p className="text-gray-400 dark:text-dark-300">
                {isLogin ? "لطفاً برای ادامه وارد شوید" : "حساب کاربری جدید بسازید"}
              </p>
            </div>
          </div>

          <Card className="mt-5 rounded-lg p-5 lg:p-7">
            {isLogin ? (
              <form onSubmit={loginForm.handleSubmit(onLogin)} autoComplete="off">
                <div className="space-y-4">
                  <Input
                    label="نام کاربری"
                    placeholder="نام کاربری خود را وارد کنید"
                    prefix={<EnvelopeIcon className="size-5 transition-colors duration-200" strokeWidth="1" />}
                    {...loginForm.register("username")}
                    error={loginForm.formState.errors?.username?.message}
                  />
                  <Input
                    label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                    type="password"
                    prefix={<LockClosedIcon className="size-5 transition-colors duration-200" strokeWidth="1" />}
                    {...loginForm.register("password")}
                    error={loginForm.formState.errors?.password?.message}
                  />
                </div>

                <div className="mt-2">
                  <InputErrorMsg when={(errorMessage && errorMessage !== "") as boolean}>
                    {errorMessage}
                  </InputErrorMsg>
                </div>

                <Button type="submit" className="mt-5 w-full" color="primary" loading={loginForm.formState.isSubmitting}>
                  ورود
                </Button>
              </form>
            ) : (
              <form onSubmit={registerForm.handleSubmit(onRegister)} autoComplete="off">
                <div className="space-y-4">
                  <Input
                    label="نام کاربری"
                    placeholder="نام کاربری انتخاب کنید"
                    prefix={<UserIcon className="size-5 transition-colors duration-200" strokeWidth="1" />}
                    {...registerForm.register("username")}
                    error={registerForm.formState.errors?.username?.message}
                  />
                  <Input
                    label="نام کاربری ویندوز"
                    placeholder="مثال: norouzi-i"
                    prefix={<ComputerDesktopIcon className="size-5 transition-colors duration-200" strokeWidth="1" />}
                    {...registerForm.register("windowsUser")}
                    error={registerForm.formState.errors?.windowsUser?.message}
                  />
                  <Input
                    label="رمز عبور"
                    placeholder="رمز عبور انتخاب کنید"
                    type="password"
                    prefix={<LockClosedIcon className="size-5 transition-colors duration-200" strokeWidth="1" />}
                    {...registerForm.register("password")}
                    error={registerForm.formState.errors?.password?.message}
                  />
                </div>

                {successMsg && (
                  <div className="mt-3 rounded-lg bg-success/10 p-3 text-sm text-success">
                    {successMsg}
                  </div>
                )}

                <Button type="submit" className="mt-5 w-full" color="primary" loading={registerForm.formState.isSubmitting}>
                  ثبت نام
                </Button>
              </form>
            )}

            <div className="mt-4 text-center text-xs-plus">
              <p>
                {isLogin ? "حساب کاربری ندارید؟" : "قبلاً ثبت نام کرده‌اید؟"}{" "}
                <button
                  type="button"
                  onClick={() => { setIsLogin(!isLogin); setSuccessMsg(""); }}
                  className="text-primary-600 transition-colors hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
                >
                  {isLogin ? "ثبت نام" : "ورود"}
                </button>
              </p>
            </div>
          </Card>
        </div>
      </main>
    </Page>
  );
}
