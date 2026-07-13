// Local Imports
import { Table, THead, TBody, Th, Tr, Td } from "@/components/ui";

// ----------------------------------------------------------------------

const cols = ["#", "نام", "شغل", "رنگ مورد علاقه"];

interface Data {
  uid: string;
  name: string;
  job: string;
  favColor: string;
}

const data: Data[] = [
  {
    uid: "1",
    name: "سای گندرتون",
    job: "متخصص کنترل کیفیت",
    favColor: "آبی",
  },
  {
    uid: "2",
    name: "هارت هگرتی",
    job: "تکنسین پشتیبانی دسکتاپ",
    favColor: "بنفش",
  },
  {
    uid: "3",
    name: "برایس سوایر",
    job: "حسابدار مالیاتی",
    favColor: "قرمز",
  },
  {
    uid: "4",
    name: "مارجی فرنچ",
    job: "دستیار اداری I",
    favColor: "زرشکی",
  },
];

export function Dense() {
  return (
    <div className="hide-scrollbar min-w-full overflow-x-auto">
      <Table dense className="w-full text-left rtl:text-right">
        <THead>
          <Tr>
            {cols.map((title, index) => (
              <Th
                key={index}
                className="dark:bg-dark-800 dark:text-dark-100 bg-gray-200 font-semibold text-gray-800 uppercase first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg"
              >
                {title}
              </Th>
            ))}
          </Tr>
        </THead>
        <TBody>
          {data.map((tr) => (
            <Tr
              key={tr.uid}
              className="dark:border-b-dark-500 border-y border-transparent border-b-gray-200"
            >
              <Td className="ltr:rounded-l-lg rtl:rounded-r-lg">{tr.uid}</Td>
              <Td>{tr.name}</Td>
              <Td>{tr.job}</Td>
              <Td className="ltr:rounded-r-lg rtl:rounded-l-lg">
                {tr.favColor}
              </Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
