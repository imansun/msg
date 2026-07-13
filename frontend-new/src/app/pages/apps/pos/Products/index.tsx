// Local Imports
import { Product, ProductCard } from "./ProductCard";

// ----------------------------------------------------------------------

const products: Product[] = [
  {
    uid: "1",
    image: "/images/foods/food-1.jpg",
    name: "سالاد اردک",
    category: "پیتزا",
    price: "۳۵.۰۰",
  },
  {
    uid: "2",
    image: "/images/foods/food-2.jpg",
    name: "تخته صبحانه",
    category: "تاکو",
    price: "۱۴.۰۰",
  },
  {
    uid: "3",
    image: "/images/foods/food-3.jpg",
    name: "حمص",
    category: "ساندویچ",
    price: "۲۴.۰۰",
  },
  {
    uid: "4",
    image: "/images/foods/food-4.jpg",
    name: "گوشت گاو بریان",
    category: "کباب",
    price: "۱۷.۵۰",
  },
  {
    uid: "5",
    image: "/images/foods/food-5.jpg",
    name: "سالاد تن",
    category: "پاپ‌کورن",
    price: "۳۵.۰۰",
  },
  {
    uid: "6",
    image: "/images/foods/food-6.jpg",
    name: "سالمون",
    category: "برگر",
    price: "۴۸.۰۰",
  },
  {
    uid: "7",
    image: "/images/foods/food-7.jpg",
    name: "رول کالیفرنیا",
    category: "تاکو",
    price: "۷۴.۰۰",
  },
  {
    uid: "8",
    image: "/images/foods/food-8.jpg",
    name: "ساشیمی",
    category: "بوریتو",
    price: "۷۴.۰۰",
  },
  {
    uid: "9",
    image: "/images/foods/food-9.jpg",
    name: "سالاد پاب",
    category: "سالاد",
    price: "۶۲.۰۰",
  },
  {
    uid: "10",
    image: "/images/foods/food-10.jpg",
    name: "کارپاچیو اردک",
    category: "پاپ‌کورن",
    price: "۱۶.۰۰",
  },
  {
    uid: "11",
    image: "/images/foods/food-11.jpg",
    name: "غذای مائویی",
    category: "هات‌داگ",
    price: "۳۲.۰۰",
  },
  {
    uid: "12",
    image: "/images/foods/food-12.jpg",
    name: "سالمون اسکاتلندی",
    category: "برگر",
    price: "۳۶.۰۰",
  },
];

export function Products() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.uid} {...product} />
      ))}
    </div>
  );
}
