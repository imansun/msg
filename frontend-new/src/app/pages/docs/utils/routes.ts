import { lazy, LazyExoticComponent, ComponentType } from "react";

interface Route {
  label: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>>;
}

export const routes: Route[] = [
  { label: "ایجاد هندلر کلید اختصاصی", path: "createScopedKeydownHandler", Component: lazy(() => import("./components/createScopedKeydownHandler")) },
  { label: "تشخیص نوع دستگاه", path: "detectDeviceType", Component: lazy(() => import("./components/detectDeviceType")) },
  { label: "تشخیص صفحه لمسی", path: "detectTouch", Component: lazy(() => import("./components/detectTouch")) },
  { label: "دریافت عرض اسکرولبار", path: "getScrollbarWidth", Component: lazy(() => import("./components/getScrollbarWidth")) },
  { label: "دریافت مرورگر از User Agent", path: "getUserAgentBrowser", Component: lazy(() => import("./components/getUserAgentBrowser")) },
  { label: "دریافت سیستم عامل از User Agent", path: "getUserAgentOS", Component: lazy(() => import("./components/getUserAgentOS")) },
  { label: "تزریق استایل‌ها به Head", path: "injectStylesToHead", Component: lazy(() => import("./components/injectStylesToHead")) },
  { label: "بررسی Ref بودن", path: "isRef", Component: lazy(() => import("./components/isRef")) },
  { label: "اجرای فلش پس از حرکت", path: "triggerPostMoveFlash", Component: lazy(() => import("./components/triggerPostMoveFlash")) },
  { label: "حذف Ref", path: "unRef", Component: lazy(() => import("./components/unRef")) },
  { label: "رنگ از متن", path: "colorFromText", Component: lazy(() => import("./components/colorFromText")) },
  { label: "مقایسه آرایه‌ها", path: "compareArrays", Component: lazy(() => import("./components/compareArrays")) },
  { label: "ایجاد Context ایمن", path: "createSafeContext", Component: lazy(() => import("./components/createSafeContext")) },
  { label: "اطمینان از رشته بودن", path: "ensureString", Component: lazy(() => import("./components/ensureString")) },
  { label: "فرمت‌بندی بایت‌ها", path: "formatBytes", Component: lazy(() => import("./components/formatBytes")) },
  { label: "فرمت‌بندی اعداد", path: "formatNumber", Component: lazy(() => import("./components/formatNumber")) },
  { label: "دریافت چند مقدار تصادفی", path: "getMultipleRandom", Component: lazy(() => import("./components/getMultipleRandom")) },
  { label: "بررسی فعال بودن مسیر", path: "isRouteActive", Component: lazy(() => import("./components/isRouteActive")) },
  { label: "بررسی سرور بودن", path: "isServer", Component: lazy(() => import("./components/isServer")) },
  { label: "توکن JWT", path: "jwt", Component: lazy(() => import("./components/jwt")) },
  { label: "تبدیل میلی‌ثانیه به زمان", path: "msToTime", Component: lazy(() => import("./components/msToTime")) },
  { label: "تبدیل HTML به Delta", path: "htmlToDelta", Component: lazy(() => import("./components/htmlToDelta")) },
  { label: "بررسی خالی نبودن Delta", path: "isDeltaNotEmpty", Component: lazy(() => import("./components/isDeltaNotEmpty")) },
  { label: "شناسه تصادفی", path: "randomId", Component: lazy(() => import("./components/randomId")) },
  { label: "محدوده (Range)", path: "range", Component: lazy(() => import("./components/range")) },
  { label: "اعمال کلاس مشخص", path: "setThisClass", Component: lazy(() => import("./components/setThisClass")) },
  { label: "تبدیل رشته به اسلاگ", path: "stringToSlug", Component: lazy(() => import("./components/stringToSlug")) },
];
