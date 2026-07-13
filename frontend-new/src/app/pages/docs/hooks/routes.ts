import { lazy, LazyExoticComponent, ComponentType } from 'react';

interface Route {
    label: string;
    path: string;
    Component: LazyExoticComponent<ComponentType<any>>;
}

export const routes: Route[] = [
    { label: 'هوک موقعیت المان', path: 'useBoxPosition', Component: lazy(() => import('./components/useBoxPosition')) },
    { label: 'هوک اندازه المان', path: 'useBoxSize', Component: lazy(() => import('./components/useBoxSize')) },
    { label: 'هوک مدیریت کلیپ‌بورد', path: 'useClipboard', Component: lazy(() => import('./components/useClipboard')) },
    { label: 'هوک جمع و باز شدن المان', path: 'useCollapse', Component: lazy(() => import('./components/useCollapse')) },
    { label: 'هوک بررسی سرریز اسکرول داده‌ها', path: 'useDataScrollOverflow', Component: lazy(() => import('./components/useDataScrollOverflow')) },
    { label: 'هوک پس از به‌روزرسانی', path: 'useDidUpdate', Component: lazy(() => import('./components/useDidUpdate')) },
    { label: 'هوک مدیریت باز/بسته شدن', path: 'useDisclosure', Component: lazy(() => import('./components/useDisclosure')) },
    { label: 'هوک تغییر عنوان سند', path: 'useDocumentTitle', Component: lazy(() => import('./components/useDocumentTitle')) },
    { label: 'هوک کال‌بک رویداد', path: 'useEventCallback', Component: lazy(() => import('./components/useEventCallback')) },
    { label: 'هوک شنونده رویداد', path: 'useEventListener', Component: lazy(() => import('./components/useEventListener')) },
    { label: 'هوک جستجو با Fuse', path: 'useFuse', Component: lazy(() => import('./components/useFuse')) },
    { label: 'هوک برجسته‌سازی متن', path: 'useHighlight', Component: lazy(() => import('./components/useHighlight')) },
    { label: 'هوک شناسایی هاور', path: 'useHover', Component: lazy(() => import('./components/useHover')) },
    { label: 'هوک مدیریت شناسه', path: 'useId', Component: lazy(() => import('./components/useId')) },
    { label: 'هوک مدیریت لیست', path: 'useListState', Component: lazy(() => import('./components/useListState')) },
    { label: 'هوک مدیریت حافظه محلی', path: 'useLocalStorage', Component: lazy(() => import('./components/useLocalStorage')) },
    { label: 'هوک قفل اسکرولبار', path: 'useLockScrollbar', Component: lazy(() => import('./components/useLockScrollbar')) },
    { label: 'هوک بررسی مدیا کوئری', path: 'useMediaQuery', Component: lazy(() => import('./components/useMediaQuery')) },
    { label: 'هوک ارجاع ترکیبی', path: 'useMergedRef', Component: lazy(() => import('./components/useMergedRef')) },
    { label: 'هوک تغییر وضعیت روشن/خاموش', path: 'useToggle', Component: lazy(() => import('./components/useToggle')) },
    { label: 'هوک مدیریت بدون کنترل', path: 'useUncontrolled', Component: lazy(() => import('./components/useUncontrolled')) },
    { label: 'هوک هنگام از بین رفتن کامپوننت', path: 'useUnmount', Component: lazy(() => import('./components/useUnmount')) },
];
