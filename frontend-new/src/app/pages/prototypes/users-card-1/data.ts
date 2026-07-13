import { MaskType } from "@/@types/common";
import { ColorType } from "@/constants/app";

export interface User {
  uid: string;
  name: string;
  avatar?: string | null;
  position: string;
  skills: string[];
  color: ColorType;
  shape: MaskType;
}

export const users: User[] = [
  {
    uid: "1",
    name: "کانر گوزمان",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "توسعه‌دهنده ارشد",
    skills: ["پی‌اچ‌پی", "نود جی‌اس", "ری‌اکت جی‌اس"],
    color: "success",
    shape: "circle",
  },
  {
    uid: "2",
    name: "تراویس فولر",
    avatar: "/images/avatar/avatar-19.jpg",
    position: "توسعه‌دهنده وب",
    skills: ["ری‌اکت", "لاراول"],
    color: "primary",
    shape: "circle",
  },
  {
    uid: "3",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-18.jpg",
    position: "طراح UI/UX",
    skills: ["جاوااسکریپت", "سی‌اس‌اس", "ES6"],
    color: "secondary",
    shape: "squircle",
  },
  {
    uid: "4",
    name: "Amir Fadaei",
    avatar: null,
    position: "توسعه‌دهنده ری‌اکت",
    skills: ["آلپاین جی‌اس", "تیلویند سی‌اس‌اس"],
    color: "warning",
    shape: "circle",
  },
  {
    uid: "5",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
    position: "توسعه‌دهنده اندروید",
    skills: ["آیونیک", "ری‌اکت", "فلاتر"],
    color: "info",
    shape: "triangle",
  },
  {
    uid: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "توسعه‌دهنده فول‌استک",
    skills: ["ری‌اکت جی‌اس", "تایپ‌اسکریپت", "نست جی‌اس"],
    color: "success",
    shape: "circle",
  },
  {
    uid: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
    position: "توسعه‌دهنده لاراول",
    skills: ["ماریا دی‌بی", "لاراول"],
    color: "error",
    shape: "diamond",
  },
  {
    uid: "8",
    name: "Mehdi Hashemi",
    avatar: null,
    position: "توسعه‌دهنده بک‌اند",
    skills: ["ماریا دی‌بی", "لاراول"],
    color: "primary",
    shape: "hexagon",
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "توسعه‌دهنده فرانت‌اند",
    skills: ["سالید جی‌اس", "ری‌اکت جی‌اس", "تایپ‌اسکریپت"],
    color: "secondary",
    shape: "hexagon2",
  },
  {
    uid: "10",
    name: "Mohammad Taghipoor",
    avatar: null,
    position: "توسعه‌دهنده نود جی‌اس",
    skills: ["نست جی‌اس", "اکسپرس", "تایپ‌اسکریپت"],
    color: "warning",
    shape: "star",
  },
  {
    uid: "11",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-1.jpg",
    position: "طراح UI/UX",
    skills: ["فیگما", "ایلاستریتور", "اسکچ"],
    color: "info",
    shape: "star2",
  },
  {
    uid: "12",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-2.jpg",
    position: "توسعه‌دهنده بک‌اند",
    skills: ["نکست جی‌اس", "رمیکس", "تایپ‌اسکریپت"],
    color: "success",
    shape: "octagon",
  },
];
