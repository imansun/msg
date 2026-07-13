// Local Imports
import { Table, THead, TBody, Th, Tr, Td } from "@/components/ui";

// ----------------------------------------------------------------------

interface Item {
  uid: string;
  title: string;
  desc: string;
  hrs: string;
  rate: string;
  subtotal: string;
}

const data: Item[] = [
  {
    uid: "۱",
    title: "طراحی قالب",
    desc: "طراحی و پیاده‌سازی قالب اختصاصی برای پروژه.",
    hrs: "۱۰ ساعت",
    rate: "۵,۵۰۰,۰۰۰ تومان",
    subtotal: "۵۵,۰۰۰,۰۰۰ تومان",
  },
  {
    uid: "۲",
    title: "اپلیکیشن موبایل",
    desc: "توسعه اپلیکیشن موبایل با امکانات سفارشی.",
    hrs: "۸ ساعت",
    rate: "۴,۰۰۰,۰۰۰ تومان",
    subtotal: "۳۲,۰۰۰,۰۰۰ تومان",
  },
  {
    uid: "۳",
    title: "طراحی UI/UX",
    desc: "طراحی تجربه و رابط کاربری حرفه‌ای.",
    hrs: "۲۵ ساعت",
    rate: "۱,۵۰۰,۰۰۰ تومان",
    subtotal: "۳۷,۵۰۰,۰۰۰ تومان",
  },
  {
    uid: "۴",
    title: "اپلیکیشن CRM",
    desc: "پیاده‌سازی سامانه مدیریت ارتباط با مشتریان.",
    hrs: "۸۰ ساعت",
    rate: "۶,۵۰۰,۰۰۰ تومان",
    subtotal: "۵۲۰,۰۰۰,۰۰۰ تومان",
  },
  {
    uid: "۵",
    title: "اپلیکیشن CMS",
    desc: "توسعه سامانه مدیریت محتوا.",
    hrs: "۲۵ ساعت",
    rate: "۳,۵۰۰,۰۰۰ تومان",
    subtotal: "۸۷,۵۰۰,۰۰۰ تومان",
  },
];

export function ItemsTable() {
  return (
    <div className="hide-scrollbar min-w-full overflow-x-auto">
      <Table zebra className="w-full text-left rtl:text-right">
        <THead>
          <Tr>
            <Th className="dark:bg-dark-800 dark:text-dark-100 bg-gray-200 font-semibold text-gray-800 uppercase first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg">
              #
            </Th>
            <Th className="dark:bg-dark-800 dark:text-dark-100 bg-gray-200 font-semibold text-gray-800 uppercase first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg">
              شرح خدمات
            </Th>
            <Th className="dark:bg-dark-800 dark:text-dark-100 bg-gray-200 text-end font-semibold text-gray-800 uppercase first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg">
              ساعت
            </Th>
            <Th className="dark:bg-dark-800 dark:text-dark-100 bg-gray-200 text-end font-semibold text-gray-800 uppercase first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg">
              نرخ (تومان)
            </Th>
            <Th className="dark:bg-dark-800 dark:text-dark-100 bg-gray-200 text-end font-semibold text-gray-800 uppercase first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg">
              جمع جزء (تومان)
            </Th>
          </Tr>
        </THead>
        <TBody>
          {data.map((tr) => (
            <Tr key={tr.uid}>
              <Td className="ltr:rounded-l-lg rtl:rounded-r-lg">{tr.uid}</Td>
              <Td className="whitespace-normal">
                <div className="min-w-[16rem]">
                  <p className="dark:text-dark-100 truncate font-medium text-gray-800">
                    {tr.title}
                  </p>
                  <p className="text-xs-plus line-clamp-2">{tr.desc}</p>
                </div>
              </Td>
              <Td className="text-end">{tr.hrs}</Td>
              <Td className="text-end">{tr.rate}</Td>
              <Td className="text-end font-semibold ltr:rounded-r-lg rtl:rounded-l-lg">
                {tr.subtotal}
              </Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
