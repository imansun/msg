import { lazy, LazyExoticComponent, ComponentType } from "react";

interface Route {
  label: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>>;
}


export const routes: Route[] = [
    {
        label: 'تیک متحرک',
        path: 'animated-tick',
        Component: lazy(() => import('./components/AnimatedTickExamples')),
    },
    {
        label: 'رپپر اپلای',
        path: 'apply-wrapper',
        Component: lazy(() => import('./components/ApplyWrapperExamples')),
    },
    {
        label: 'ناوبری مسیر',
        path: 'breadcrumbs',
        Component: lazy(() => import('./components/BreadcrumbsExamples')),
    },
    {
        label: 'جستجوی قابل جمع شدن',
        path: 'collapsible-search',
        Component: lazy(() => import('./components/CollapsibleSearchExamples')),
    },
    {
        label: 'تاخیر (Delayed)',
        path: 'delayed',
        Component: lazy(() => import('./components/DelayedExample')),
    },
    {
        label: 'هایلایت',
        path: 'hightlight',
        Component: lazy(() => import('./components/HighlightExample')),
    },
    {
        label: 'صفحه',
        path: 'page',
        Component: lazy(() => import('./components/PageExample')),
    },
    {
        label: 'تصویر پیش‌نمایش',
        path: 'preview-image',
        Component: lazy(() => import('./components/PreviewImageExample')),
    },
    {
        label: 'هایلایتر کد',
        path: 'syntax-hightlighter',
        Component: lazy(() => import('./components/SyntaxHightlighterExample')),
    },
]
