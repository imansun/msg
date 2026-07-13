// Import Dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import type { Delta as DeltaType } from "quill";

// Local Imports
import { schema, type SchemaType } from "./schema";
import { Page } from "@/components/shared/Page";
import { Button, Card, Input, Textarea } from "@/components/ui";
import { Delta, TextEditor } from "@/components/shared/form/TextEditor/TextEditor";
import { CoverImageUpload } from "./components/CoverImageUpload";
import { Tags } from "./components/Tags";
import { ContextualHelp } from "@/components/shared/ContextualHelp";
import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";
import { Listbox } from "@/components/shared/form/StyledListbox";
import { Combobox } from "@/components/shared/form/StyledCombobox";

// ----------------------------------------------------------------------

const initialState = {
  title: "",
  caption: "",
  content: new Delta(),
  cover: "",
  category_id: "",
  author_id: "",
  tags: [],
  publish_date: null,
  meta: {
    title: "",
    description: "",
    keywords: [],
  },
};

const editorModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }, "image"],
    ["clean"], // remove formatting button
  ],
};

const categories = [
  {
    id: "1",
    label: "لوازم جانبی",
  },
  {
    id: "2",
    label: "دیجیتال",
  },
  {
    id: "3",
    label: "خانه",
  },
  {
    id: "4",
    label: "تکنولوژی",
  },
];

const people = [
  { id: 1, name: "وید کوپر" },
  { id: 2, name: "آرلین مک‌کوی" },
  { id: 3, name: "دِون وب" },
  { id: 4, name: "تام کوک" },
  { id: 5, name: "تانیا فاکس" },
  { id: 6, name: "هلن اشمیت" },
];

const NewPostFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SchemaType>({
    resolver: yupResolver(schema) as Resolver<SchemaType>,
    defaultValues: initialState as unknown as SchemaType,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast("پست جدید منتشر شد. حالا می‌توانید پست جدید دیگری اضافه کنید.", {
      invert: true,
    });
    reset();
  };

  return (
    <Page title="فرم پست جدید">
      <div className="transition-content px-(--margin-x) pb-6">
        <div className="flex flex-col items-center justify-between space-y-4 py-5 sm:flex-row sm:space-y-0 lg:py-6">
          <div className="flex items-center gap-1">
            <DocumentPlusIcon className="size-6" />
            <h2 className="dark:text-dark-50 line-clamp-1 text-xl font-medium text-gray-700">
              پست جدید
            </h2>
          </div>
          <div className="flex gap-2">
            <Button className="min-w-[7rem]" variant="outlined">
              پیش‌نمایش
            </Button>
            <Button
              className="min-w-[7rem]"
              color="primary"
              type="submit"
              form="new-post-form"
            >
              ذخیره
            </Button>
          </div>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          id="new-post-form"
        >
          <div className="grid grid-cols-12 place-content-start gap-4 sm:gap-5 lg:gap-6">
            <div className="col-span-12 lg:col-span-8">
              <Card className="p-4 sm:px-5">
                <h3 className="dark:text-dark-100 text-base font-medium text-gray-800">
                  اطلاعات کلی
                </h3>
                <div className="mt-5 space-y-5">
                  <Input
                    label="عنوان"
                    placeholder="عنوان پست را وارد کنید"
                    {...register("title")}
                    error={errors?.title?.message}
                  />

                  <Input
                    label="زیرعنوان"
                    placeholder="زیرعنوان پست را وارد کنید"
                    {...register("caption")}
                    error={errors?.caption?.message}
                  />

                  <div className="flex flex-col">
                    <span>توضیحات</span>
                    <Controller
                      control={control}
                      name="content"
                      render={({ field: { value, onChange, ...rest } }) => (
                        <TextEditor
                          value={value as DeltaType}
                          onChange={(val) => onChange(val)}
                          placeholder="محتوای خود را وارد کنید..."
                          className="mt-1.5 [&_.ql-editor]:max-h-80 [&_.ql-editor]:min-h-[12rem]"
                          modules={editorModules}
                          error={errors?.content?.message}
                          {...rest}
                        />
                      )}
                    />
                  </div>

                  <Controller
                    render={({ field: { onChange, value, ...rest } }) => (
                      <CoverImageUpload
                        classNames={{
                          box: "mt-1.5",
                        }}
                        label="تصویر روی جلد"
                        error={errors?.cover?.message}
                        value={value as File}
                        onChange={onChange}
                        {...rest}
                      />
                    )}
                    name="cover"
                    control={control}
                  />
                </div>
              </Card>
            </div>
            <div className="col-span-12 space-y-4 sm:space-y-5 lg:col-span-4 lg:space-y-6">
              <Card className="space-y-5 p-4 sm:px-5">
                <Controller
                  render={({ field }) => (
                    <Listbox
                      data={categories}
                      value={
                        categories.find((cat) => cat.id === field.value) || null
                      }
                      onChange={(val) => field.onChange(val.id)}
                      name={field.name}
                      label="دسته‌بندی"
                      placeholder="دسته‌بندی را انتخاب کنید"
                      displayField="label"
                      error={errors?.category_id?.message}
                    />
                  )}
                  control={control}
                  name="category_id"
                />

                <Controller
                  render={({ field: { value, onChange, ...rest } }) => (
                    <Combobox
                      data={people}
                      displayField="name"
                      value={
                        people.find(
                          (user) => String(user.id) === String(value),
                        ) || null
                      }
                      onChange={(val: any) => onChange(val?.id)}
                      placeholder="نویسنده را انتخاب کنید"
                      label="انتخاب نویسنده"
                      searchFields={["name"]}
                      error={errors?.author_id?.message}
                      highlight
                      {...rest}
                    />
                  )}
                  control={control}
                  name="author_id"
                />

                <Controller
                  render={({ field: { value, onChange, ...rest } }) => (
                    <Tags
                      value={
                        value?.map((val, i) => {
                          return { id: String(i), value: String(val) };
                        }) || []
                      }
                      placeholder="برچسب‌ها را وارد کنید"
                      onChange={(val) => onChange(val.map((i) => i.value))}
                      error={errors?.tags?.message}
                      label="برچسب‌ها"
                      {...rest}
                    />
                  )}
                  control={control}
                  name="tags"
                />

                <Controller
                  render={({ field: { onChange, value, ...rest } }) => (
                    <DatePicker
                      onChange={onChange}
                      value={value || ""}
                      label="تاریخ انتشار"
                      error={errors?.publish_date?.message}
                      options={{ disableMobile: true }}
                      placeholder="تاریخ را انتخاب کنید..."
                      {...rest}
                    />
                  )}
                  control={control}
                  name="publish_date"
                />
              </Card>

              <Card className="p-4 sm:px-5">
                <h6 className="dark:text-dark-100 flex space-x-1.5 text-base font-medium text-gray-800">
                  <span>اطلاعات متا سئو</span>
                  <ContextualHelp
                    title="اطلاعات متا سئو"
                    anchor={{ to: "bottom", gap: 8 }}
                    content={
                      <p>
                        داده‌های سئو اطلاعات مرتبطی هستند که شرکت شما برای بهره‌برداری کامل از استراتژی‌های فرصت‌های موجود، باید از آن‌ها آگاه باشد.
                      </p>
                    }
                  />
                </h6>

                <div className="mt-3 space-y-5">
                  <Input
                    {...register("meta.title")}
                    label="عنوان متا"
                    error={errors?.meta?.title?.message}
                    placeholder="عنوان متا را وارد کنید"
                  />
                  <Textarea
                    rows={4}
                    {...register("meta.description")}
                    label="توضیحات متا"
                    error={errors?.meta?.description?.message}
                    placeholder="توضیحات متا را وارد کنید"
                  />
                  <Controller
                    render={({ field }) => (
                      <Tags
                        placeholder="کلمات کلیدی متا را وارد کنید"
                        label="کلمات کلیدی متا"
                        value={
                          field.value?.map((val, i) => {
                            return { id: String(i), value: String(val) };
                          }) || []
                        }
                        onChange={(val) =>
                          field.onChange(val.map((i) => i.value))
                        }
                        error={errors?.meta?.keywords?.message}
                      />
                    )}
                    control={control}
                    name="meta.keywords"
                  />
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default NewPostFrom;
