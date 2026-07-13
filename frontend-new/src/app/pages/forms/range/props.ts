import { type ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
    {
        componentName: "Range",
        desc: "یک کامپوننت اسلایدر بازه قابل سفارشی‌سازی برای انتخاب مقدار.",
        props: [
            {
                name: "defaultValue",
                type: "number",
                default: "0",
                description: "مقدار اولیه اسلایدر بازه.",
            },           
            {
                name: "className",
                type: "string",
                description: "کلاس‌های CSS اضافی برای اعمال روی عنصر ورودی بازه.",
            },
            {
                name: "color",
                type: "ColorType",
                default: "neutral",
                description: "رنگ (تم) اسلایدر بازه را مشخص می‌کند.",
            },
            {
                name: "thumbSize",
                type: "string",
                default: "1.125rem",
                description: "اندازه دایره (thumb) اسلایدر را تعیین می‌کند.",
            },
            {
                name: "trackSize",
                type: "string",
                default: "0.375rem",
                description: "اندازه (ضخامت) خط اسلایدر را تعیین می‌کند.",
            },
            {
                name: "style",
                type: "React.CSSProperties",
                description: "استایل‌های خطی برای المنت ریشه اعمال می‌شود.",
            },
        ],
    }
];
