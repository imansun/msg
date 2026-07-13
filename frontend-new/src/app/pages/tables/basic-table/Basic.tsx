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
    name: "بِرایس سوایر",
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

export function Basic() {
  return (
    <div className="hide-scrollbar min-w-full overflow-x-auto">
      <Table className="w-full text-left rtl:text-right">
        <THead>
          <Tr className="dark:border-b-dark-500 border-y border-transparent border-b-gray-200">
            {cols.map((title, index) => (
              <Th
                key={index}
                className="dark:text-dark-100 font-semibold text-gray-800 uppercase"
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
              <Td>{tr.uid}</Td>
              <Td>{tr.name}</Td>
              <Td>{tr.job}</Td>
              <Td>{tr.favColor}</Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
