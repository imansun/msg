// Import Dependencies
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, Resolver } from "react-hook-form";
import { FaCar, FaPassport, FaRegIdCard } from "react-icons/fa";
import { IconType } from "react-icons";

// Local Imports
import { useDidUpdate } from "@/hooks";
import { Button } from "@/components/ui";
import { useKYCFormContext } from "../KYCFormContext";
import { DocumentType } from "../components/DocumentType";
import { DocumentUpload } from "../components/DocumentUpload";
import {
  identifyDocumentSchema,
  DocumentType as DocType,
  IdentifyDocumentType,
} from "../schema";

// ----------------------------------------------------------------------

interface DocumentTypeItem {
  key: DocType;
  label: string;
  description: string;
  icon: IconType;
  rules: string[];
}

const documentTypes: DocumentTypeItem[] = [
  {
    key: "passport",
    label: "گذرنامه",
    description: "پشتیبانی از بیش از ۱۶۰ کشور",
    icon: FaPassport,
    rules: [
      "عکس را در اتاقی با نور کافی بگیرید.",
      "تصویر خود را با یکی از فرمت‌های .png، .jpg یا .jpeg بارگذاری کنید. حجم فایل نباید بیشتر از ۴ مگابایت باشد.",
      "اطمینان حاصل کنید که چهره و مشخصات شما و گذرنامه به طور واضح در عکس قابل مشاهده هستند و هیچ بخشی از گذرنامه پوشانده یا سانسور نشده باشد.",
    ],
  },
  {
    key: "nationalID",
    label: "کارت ملی",
    description: "پشتیبانی از بیش از ۱۱۰ کشور",
    icon: FaRegIdCard,
    rules: [
      "عکس را در اتاقی با نور کافی بگیرید.",
      "کارت ملی خود را روبروی سینه با دو دست نگه دارید. هیچ بخشی از کارت، مانند نام، عکس یا امضاء خود را نپوشانید یا سانسور نکنید.",
      "تصویر خود را با یکی از فرمت‌های .png، .jpg یا .jpeg بارگذاری کنید. حجم فایل نباید بیشتر از ۴ مگابایت باشد.",
      "بررسی کنید که عکس کارت ملی شما صحیح باشد. در غیر اینصورت دوباره تلاش کنید.",
    ],
  },
  {
    key: "driverLicense",
    label: "گواهینامه رانندگی",
    description: "کشورهای اتحادیه اروپا، آمریکا و کانادا",
    icon: FaCar,
    rules: [
      "عکس را در اتاقی با نور کافی بگیرید.",
      "تصویر خود را با یکی از فرمت‌های .png، .jpg یا .jpeg بارگذاری کنید. حجم فایل نباید بیشتر از ۴ مگابایت باشد.",
      "گواهینامه خود را روبروی سینه با دو دست نگه دارید. هیچ بخشی از گواهینامه مانند نام، عکس یا امضاء خود را نپوشانید یا سانسور نکنید.",
    ],
  },
];

interface IdenficationProps {
  setCurrentStep: (step: number) => void;
}

export function Idenfication({ setCurrentStep }: IdenficationProps) {
  const kycFormCtx = useKYCFormContext();

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    resetField,
  } = useForm({
    resolver: yupResolver(
      identifyDocumentSchema,
    ) as unknown as Resolver<IdentifyDocumentType>,
    defaultValues: kycFormCtx.state.formData.identifyDocument,
  });

  const documentType = watch("type");

  const onSubmit = (data: IdentifyDocumentType) => {
    kycFormCtx.dispatch({
      type: "SET_FORM_DATA",
      payload: { identifyDocument: { ...data } },
    });
    kycFormCtx.dispatch({
      type: "SET_STEP_STATUS",
      payload: { identifyDocument: { isDone: true } },
    });
    setCurrentStep(3);
  };

  useDidUpdate(() => {
    resetField("imageFront");
    resetField("imageBack");
    resetField("passportPage");
  }, [documentType]);

  return (
    <form
      className="max-w-3xl"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      dir="rtl"
    >
      <div className="mt-6">
        <p>نوع مدرک شناسایی را انتخاب کنید</p>
        <Controller
          render={({ field }) => (
            <DocumentType {...field} documentTypes={documentTypes} />
          )}
          name="type"
          control={control}
          defaultValue="passport"
        />

        <p className="dark:text-dark-100 mt-6 text-base font-medium text-gray-800">
          برای تکمیل بارگذاری مدرک و تأیید حساب کاربری خود، لطفا مراحل زیر را دنبال کنید:
        </p>

        <ul className="mt-3 space-y-2">
          {documentTypes
            .find((doc) => doc.key === documentType)
            ?.rules.map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <CheckCircleIcon className="text-primary-500 size-5 shrink-0" />
                <p>{item}</p>
              </li>
            ))}
        </ul>

        <div className="mt-5 grid w-full place-items-start gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {documentType === "passport" && (
            <>
              <Controller
                render={({ field }) => (
                  <DocumentUpload
                    {...field}
                    error={errors?.imageFront?.message}
                    label="جلد گذرنامه"
                    classNames={{
                      box: "mt-2",
                    }}
                  />
                )}
                name="imageFront"
                control={control}
              />

              <Controller
                render={({ field }) => (
                  <DocumentUpload
                    {...field}
                    value={field.value || null}
                    error={errors?.passportPage?.message}
                    label="صفحه گذرنامه"
                    classNames={{
                      box: "mt-2",
                    }}
                  />
                )}
                name="passportPage"
                control={control}
              />
            </>
          )}
          {documentType === "nationalID" && (
            <>
              <Controller
                render={({ field }) => (
                  <DocumentUpload
                    {...field}
                    error={errors?.imageFront?.message}
                    label="روی کارت ملی"
                    classNames={{
                      box: "mt-2",
                    }}
                  />
                )}
                name="imageFront"
                control={control}
              />

              <Controller
                render={({ field }) => (
                  <DocumentUpload
                    {...field}
                    value={field.value || null}
                    error={errors?.imageBack?.message}
                    label="پشت کارت ملی"
                    classNames={{
                      box: "mt-2",
                    }}
                  />
                )}
                name="imageBack"
                control={control}
              />
            </>
          )}
          {documentType === "driverLicense" && (
            <>
              <Controller
                render={({ field }) => (
                  <DocumentUpload
                    {...field}
                    value={field.value || null}
                    error={errors?.imageFront?.message}
                    label="روی گواهینامه رانندگی"
                    classNames={{
                      box: "mt-2",
                    }}
                  />
                )}
                name="imageFront"
                control={control}
              />

              <Controller
                render={({ field }) => (
                  <DocumentUpload
                    {...field}
                    value={field.value || null}
                    error={errors?.imageBack?.message}
                    label="پشت گواهینامه رانندگی"
                    classNames={{
                      box: "mt-2",
                    }}
                  />
                )}
                name="imageBack"
                control={control}
              />
            </>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <Button className="min-w-[7rem]" onClick={() => setCurrentStep(1)}>
          بازگشت
        </Button>
        <Button type="submit" className="min-w-[7rem]" color="primary">
          ادامه
        </Button>
      </div>
    </form>
  );
}
