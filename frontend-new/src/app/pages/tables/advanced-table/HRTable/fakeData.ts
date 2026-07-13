interface Status {
  key: "full-time" | "part-time" | "intern" | "contractor" | "freelance";
  title: "تمام وقت" | "پاره وقت" | "کارآموز" | "پیمانکار" | "فریلنسر";
}
export interface User {
  user_id: number;
  name: string;
  avatar?: string;
  position: string;
  department: string;
  email: string;
  level: string;
  status: Status;
  office: string;
  stack: string[];
  info: { phone?: string; twitter?: string };
}

export const usersList: User[] = [
  {
    user_id: 1,
    name: "Brent MacCallum",
    position: "مدیر پروژه نرم‌افزار",
    department: "سیستم‌ عامل‌ها",
    email: "bmaccallum0@bigcartel.com",
    level: "مهندس ارشد",
    status: { key: "full-time", title: "تمام وقت" },
    office: "۴ نووا جانکشن",
    stack: [
      "express",
      "vuetify",
      "laravel jetstream",
      "tailwind ui",
      "foundation",
    ],
    info: {
      phone: "427-739-8100",
      twitter: "bmaccallum0",
    },
  },
  {
    user_id: 2,
    name: "Zacherie Hambly",
    avatar: "/images/avatar/avatar-9.jpg",
    position: "مهندس امنیت سایبری",
    department: "مدیریت پایگاه‌داده",
    email: "zhambly1@a8.net",
    level: "برنامه‌نویس ۱",
    status: { key: "part-time", title: "پاره وقت" },
    office: "۵۹۵ باب‌وایت کورت",
    stack: ["sqlite", "next", "mongodb", "bootstrap studio", "ember"],
    info: { phone: "619-216-8672" },
  },
  {
    user_id: 3,
    name: "Tabbitha Benedito",
    avatar: "/images/avatar/avatar-14.jpg",
    position: "طراح بازی ویدئویی",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "tbenedito2@skype.com",
    level: "برنامه‌نویس ۱",
    status: { key: "intern", title: "کارآموز" },
    office: "۸۳ خیابان هولم‌برگ",
    stack: ["postgresql", "bootstrap studio"],
    info: {
      phone: "510-452-9619",
      twitter: "tbenedito2",
    },
  },
  {
    user_id: 4,
    name: "Hadlee Hanmer",
    position: "توسعه‌دهنده موبایل",
    department: "بلاک‌چین",
    email: "hhanmer3@tripadvisor.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۵۲۹ اورت درایو",
    stack: ["flask", "bootstrapvue", "mysql"],
    info: {
      phone: "417-540-1770",

      twitter: "hhanmer3",
    },
  },
  {
    user_id: 5,
    name: "Gayleen Kurt",
    avatar: "/images/avatar/avatar-5.jpg",
    position: "توسعه‌دهنده وب",
    department: "توسعه وب",
    email: "gkurt4@google.pl",
    level: "برنامه‌نویس ارشد",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۵۴۷۲۱ اسپرینگز پوینت",
    stack: ["alpine js", "nuxt", "bulma"],
    info: { phone: "434-831-0680" },
  },
  {
    user_id: 6,
    name: "Nevin Coolson",
    position: "مهندس سیستم های جاسازی‌شده",
    department: "بلاک‌چین",
    email: "ncoolson5@arizona.edu",
    level: "برنامه‌نویس ارشد",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۹۲۳ مانومنت کراسینگ",
    stack: ["react native", "tailwind ui", "bootstrapvue", "sqlite"],
    info: {
      phone: "148-544-9729",

      twitter: "ncoolson5",
    },
  },
  {
    user_id: 7,
    name: "Ammamaria Tongs",
    position: "مهندس برنامه‌های کاربردی",
    department: "سیستم های جاسازی‌شده",
    email: "atongs6@studiopress.com",
    level: "مهندس برجسته",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۸۷۴۷۸ فاراگوت پس",
    stack: ["django", "gatsby", "nuxt", "alpine js"],
    info: {
      phone: "681-483-2145",

      twitter: "atongs6",
    },
  },
  {
    user_id: 8,
    name: "Clementius Skoate",
    avatar: "/images/avatar/avatar-15.jpg",
    position: "مدیر پروژه نرم‌افزار",
    department: "رایانش ابری",
    email: "cskoate7@blinklist.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۶۲ هاربارت کورت",
    stack: ["materialize", "django", "semantic ui", "bootstrap studio"],
    info: { phone: "502-147-7633" },
  },
  {
    user_id: 9,
    name: "Alameda Krysztofiak",
    avatar: "/images/avatar/avatar-5.jpg",
    position: "مهندس دواپس",
    department: "سخت‌افزار سیستم",
    email: "akrysztofiak8@tripod.com",
    level: "برنامه‌نویس ۱",

    status: { key: "intern", title: "کارآموز" },
    office: "۱ دوک پلازا",
    stack: ["spring boot", "firebase", "express", "rails"],
    info: { phone: "600-535-6428" },
  },
  {
    user_id: 10,
    name: "Nesta Aylwin",
    avatar: "/images/avatar/avatar-1.jpg",
    position: "دانشمند داده",
    department: "کاربرد نرم‌افزاری",
    email: "naylwin9@irs.gov",
    level: "برنامه‌نویس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۴ مری درایو",
    stack: ["sqlite", "gatsby", "angular", "spring boot"],
    info: {
      phone: "310-139-0629",

      twitter: "naylwin9",
    },
  },
  {
    user_id: 11,
    name: "Mickey Dunstone",
    avatar: "/images/avatar/avatar-12.jpg",
    position: "مهندس بلاک‌چین",
    department: "توسعه وب",
    email: "mdunstonea@tmall.com",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۶۰۴۷۰ جان وال کراسینگ",
    stack: ["materialize", "rails"],
    info: {
      phone: "373-608-1976",

      twitter: "mdunstonea",
    },
  },
  {
    user_id: 12,
    name: "Cornall Santarelli",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "مهندس بلاک‌چین",
    department: "کاربرد نرم‌افزاری",
    email: "csantarellib@bloglines.com",
    level: "برنامه‌نویس ۲",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۹۹۶۴۰ هانور رود",
    stack: ["react native", "flask", "ant design"],
    info: {
      phone: "577-220-0836",

      twitter: "csantarellib",
    },
  },
  {
    user_id: 13,
    name: "Dixie Pursehouse",
    avatar: "/images/avatar/avatar-7.jpg",
    position: "برنامه‌نویس کامپیوتر",
    department: "مدیریت پایگاه‌داده",
    email: "dpursehousec@yahoo.co.jp",
    level: "مهندس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۰ خیابان لا فولت",
    stack: ["ember", "next", "sqlite", "graphql", "mysql"],
    info: { phone: "463-838-0586" },
  },
  {
    user_id: 14,
    name: "Camel Edmunds",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "مهندس یادگیری ماشین",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "cedmundsd@acquirethisname.com",
    level: "برنامه‌نویس ۱",

    status: { key: "intern", title: "کارآموز" },
    office: "۵۱۴۶۵ بدو اوونیو",
    stack: ["mongodb", "nuxt", "materialize", "alpine js"],
    info: {
      phone: "872-691-8067",

      twitter: "cedmundsd",
    },
  },
  {
    user_id: 15,
    name: "Sylvia Du Pre",
    position: "برنامه‌نویس کامپیوتر",
    department: "علوم داده",
    email: "sdue@networkadvertising.org",
    level: "مهندس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۶۹۳ ساچس کورت",
    stack: ["nuxt", "foundation"],
    info: { phone: "579-510-5441" },
  },
  {
    user_id: 16,
    name: "Benjy Rignall",
    position: "مهندس سیستم های جاسازی‌شده",
    department: "توسعه موبایل",
    email: "brignallf@simplemachines.org",
    level: "برنامه‌نویس ارشد",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۹۳۲ کودی وی",
    stack: ["bootstrap studio", "ember"],
    info: {
      phone: "745-292-1894",

      twitter: "brignallf",
    },
  },
  {
    user_id: 17,
    name: "Fremont Paterson",
    position: "مهندس جاوااسکریپت",
    department: "بلاک‌چین",
    email: "fpatersong@amazon.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۷۶۰۳ اوریل اوونیو",
    stack: ["bulma", "flask", "express", "rails", "ember"],
    info: {
      phone: "557-271-3897",

      twitter: "fpatersong",
    },
  },
  {
    user_id: 18,
    name: "Budd Laver",
    avatar: "/images/avatar/avatar-9.jpg",
    position: "مدیر پروژه نرم‌افزار",
    department: "سیستم های جاسازی‌شده",
    email: "blaverh@si.edu",
    level: "برنامه‌نویس ۳",

    status: { key: "intern", title: "کارآموز" },
    office: "۴۲ برنینگ وود وی",
    stack: ["bootstrap studio", "mongodb", "express", "spring boot", "gatsby"],
    info: {
      phone: "511-584-8747",

      twitter: "blaverh",
    },
  },
  {
    user_id: 19,
    name: "Philomena Oppie",
    position: "مهندس امنیت سایبری",
    department: "کاربرد نرم‌افزاری",
    email: "poppiei@geocities.jp",
    level: "برنامه‌نویس ۱",

    status: { key: "intern", title: "کارآموز" },
    office: "۵۲۴ هالو ریج لین",
    stack: ["vuetify", "laravel jetstream", "postgresql"],
    info: {
      phone: "160-489-6775",

      twitter: "poppiei",
    },
  },
  {
    user_id: 20,
    name: "Rafaelia Gallety",
    avatar: "/images/avatar/avatar-3.jpg",
    position: "طراح بازی ویدئویی",
    department: "سیستم‌ عامل‌ها",
    email: "rgalletyj@spotify.com",
    level: "برنامه‌نویس ۱",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۶ کیپلینگ جانکشن",
    stack: ["bootstrap studio", "ember", "vuetify"],
    info: {
      phone: "453-748-5882",

      twitter: "rgalletyj",
    },
  },
  {
    user_id: 21,
    name: "Bernardo Wort",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "برنامه‌نویس کامپیوتر",
    department: "معماری نرم‌افزار",
    email: "bwortk@sourceforge.net",
    level: "برنامه‌نویس ۱",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۶۲ باندینگ پارک‌وی",
    stack: ["bootstrap studio", "bootstrapvue", "nuxt", "mongodb", "alpine js"],
    info: {
      phone: "107-648-2688",

      twitter: "bwortk",
    },
  },
  {
    user_id: 22,
    name: "Elisha Levensky",
    avatar: "/images/avatar/avatar-10.jpg",
    position: "مهندس امنیت سایبری",
    department: "یادگیری ماشین",
    email: "elevenskyl@altervista.org",
    level: "مهندس ارشد",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۰۷ مل‌بی پارک",
    stack: ["bootstrap studio", "rails", "semantic ui", "gatsby"],
    info: {
      phone: "433-121-3811",

      twitter: "elevenskyl",
    },
  },
  {
    user_id: 23,
    name: "Gregoor Pagett",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "معمار نرم‌افزار",
    department: "کاربرد نرم‌افزاری",
    email: "gpagettm@studiopress.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۲ براون پارک‌وی",
    stack: ["alpine js", "graphql"],
    info: { phone: "462-171-6356" },
  },
  {
    user_id: 24,
    name: "Denver Spelsbury",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "مهندس امنیت سایبری",
    department: "معماری نرم‌افزار",
    email: "dspelsburyn@ox.ac.uk",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۹ استوارت لین",
    stack: ["gatsby", "bulma", "svelte", "vue", "foundation"],
    info: { phone: "146-609-1574" },
  },
  {
    user_id: 25,
    name: "Pennie Osgar",
    avatar: "/images/avatar/avatar-15.jpg",
    position: "توسعه‌دهنده وب",
    department: "دواپس",
    email: "posgaro@furl.net",
    level: "برنامه‌نویس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۱۳۵۹ نانسی پارک‌وی",
    stack: ["nuxt", "firebase", "react native", "spring boot", "postgresql"],
    info: { phone: "813-329-3675" },
  },
  {
    user_id: 26,
    name: "Giuditta Fruchter",
    avatar: "/images/avatar/avatar-3.jpg",
    position: "مهندس امنیت سایبری",
    department: "مهندسی داده",
    email: "gfruchterp@indiegogo.com",
    level: "برنامه‌نویس ۲",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۱۰۴۵۷ ریون کورت",
    stack: ["materialize", "graphql", "gatsby"],
    info: { phone: "271-618-1557" },
  },
  {
    user_id: 27,
    name: "Hector Czapla",
    position: "مهندس برنامه‌های کاربردی",
    department: "دواپس",
    email: "hczaplaq@youku.com",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۸۸۳ گری‌هاک هیل",
    stack: ["mongodb", "vue", "gatsby", "django", "spring boot"],
    info: {
      phone: "551-751-1490",

      twitter: "hczaplaq",
    },
  },
  {
    user_id: 28,
    name: "Vyky Clemensen",
    avatar: "/images/avatar/avatar-5.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "سیستم های جاسازی‌شده",
    email: "vclemensenr@dell.com",
    level: "برنامه‌نویس ۱",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۸ گاریسون کراسینگ",
    stack: ["sqlite", "svelte"],
    info: {
      phone: "280-336-8471",

      twitter: "vclemensenr",
    },
  },
  {
    user_id: 29,
    name: "Franz Sibray",
    position: "مهندس تست نرم‌افزار",
    department: "بلاک‌چین",
    email: "fsibrays@microsoft.com",
    level: "برنامه‌نویس ۲",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۳۲۲۰ خیابان اشمدمان",
    stack: ["vue", "angular", "ember"],
    info: {
      phone: "۴۴۲-۵۱۲-۳۴۰۸",

      twitter: "fsibrays",
    },
  },
  {
    user_id: 30,
    name: "Gregoire Eisikowitz",
    avatar: "/images/avatar/avatar-17.jpg",
    position: "دانشمند داده",
    department: "دواپس",
    email: "geisikowitzt@geocities.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۷۴۴۴ خیابان توبان",
    stack: ["alpine js", "firebase"],
    info: {
      phone: "۴۰۰-۸۹۹-۴۳۶۸",

      twitter: "geisikowitzt",
    },
  },
  {
    user_id: 31,
    name: "Venita Fidell",
    avatar: "/images/avatar/avatar-15.jpg",
    position: "دانشمند داده",
    department: "توسعه وب",
    email: "vfidellu@de.vu",
    level: "برنامه‌نویس ارشد",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۲۶۶۰ خیابان ناتسون",
    stack: ["foundation", "mongodb", "flask", "postgresql"],
    info: { phone: "۴۱۲-۸۳۲-۹۴۴۷" },
  },
  {
    user_id: 32,
    name: "Jabez Brendeke",
    avatar: "/images/avatar/avatar-14.jpg",
    position: "مدیر پایگاه داده",
    department: "نرم‌افزار کاربردی",
    email: "jbrendekev@time.com",
    level: "برنامه‌نویس ۱",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۵۸۳۴۹ کوچه ورا",
    stack: ["rails", "express", "firebase"],
    info: {
      phone: "۱۶۶-۵۵۲-۵۷۲۶",

      twitter: "jbrendekev",
    },
  },
  {
    user_id: 33,
    name: "Jacenta Tschersich",
    position: "مهندس دواپس",
    department: "نرم‌افزار کاربردی",
    email: "jtschersichw@dailymail.co.uk",
    level: "مهندس اصلی",

    status: { key: "intern", title: "کارآموز" },
    office: "۷ کوچه واشنگتن",
    stack: ["materialize", "ant design", "ember", "vue", "bootstrapvue"],
    info: {
      phone: "۱۲۷-۹۲۱-۲۲۲۷",

      twitter: "jtschersichw",
    },
  },
  {
    user_id: 34,
    name: "Odilia Chaplyn",
    position: "مهندس رایانش ابری",
    department: "سیستم‌عامل‌ها",
    email: "ochaplynx@nifty.com",
    level: "برنامه‌نویس کارکنان",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۳۹ میدان باربی",
    stack: ["django", "vue"],
    info: { phone: "۵۲۶-۵۶۱-۱۴۵۲" },
  },
  {
    user_id: 35,
    name: "Isidro Skepper",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "توسعه‌دهنده وب",
    department: "رایانش ابری",
    email: "iskeppery@mit.edu",
    level: "برنامه‌نویس ۳",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۰ دایره بلوستم",
    stack: ["bulma", "mysql"],
    info: {
      phone: "۵۰۶-۲۹۹-۵۹۵۳",

      twitter: "iskeppery",
    },
  },
  {
    user_id: 36,
    name: "Theo Curdell",
    avatar: "/images/avatar/avatar-7.jpg",
    position: "مهندس سیستم‌های نهفته",
    department: "سخت‌افزار سیستم",
    email: "tcurdellz@github.com",
    level: "مهندس اصلی",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۰۱۷۳۹ راه کروپف",
    stack: ["postgresql", "bootstrapvue", "ember", "angular"],
    info: { phone: "۶۳۳-۷۲۵-۴۲۸۳" },
  },
  {
    user_id: 37,
    name: "Karlens Ward",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "دواپس",
    email: "kward10@china.com.cn",
    level: "مهندس اصلی",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۱۹ گذرگاه مک‌گوایر",
    stack: ["angular", "next", "vue", "rails"],
    info: {
      phone: "۱۰۸-۹۳۹-۶۶۱۵",

      twitter: "kward10",
    },
  },
  {
    user_id: 38,
    name: "Freddi Debell",
    position: "مهندس یادگیری ماشین",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "fdebell11@about.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۹۲۴۲۰ خیابان آلپاین",
    stack: ["react native", "alpine js", "express", "ember"],
    info: {
      phone: "۳۵۵-۹۶۸-۵۰۶۶",

      twitter: "fdebell11",
    },
  },
  {
    user_id: 39,
    name: "Roscoe Blindt",
    avatar: "/images/avatar/avatar-8.jpg",
    position: "مهندس تست نرم‌افزار",
    department: "نرم‌افزار کاربردی",
    email: "rblindt12@apache.org",
    level: "مهندس برجسته",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۸۹۳ راه نوروی میپل",
    stack: ["laravel jetstream", "mysql"],
    info: {
      phone: "۱۵۷-۶۲۸-۸۳۳۴",

      twitter: "rblindt12",
    },
  },
  {
    user_id: 40,
    name: "Jaquith Byrne",
    avatar: "/images/avatar/avatar-15.jpg",
    position: "مهندس جاوااسکریپت",
    department: "دواپس",
    email: "jbyrne13@theguardian.com",
    level: "برنامه‌نویس ۳",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۷۱۴۶ گذر هادسون",
    stack: ["express", "rails", "bulma", "materialize"],
    info: { phone: "۸۰۳-۸۵۳-۶۳۵۳" },
  },
  {
    user_id: 41,
    name: "Bartie Checo",
    avatar: "/images/avatar/avatar-19.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "معماری نرم‌افزار",
    email: "bcheco14@example.com",
    level: "مهندس اصلی",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۶۶۴۸۸ مکان آرکانزاس",
    stack: ["bootstrapvue", "mongodb"],
    info: {
      phone: "۵۶۳-۸۶۰-۶۶۳۱",

      twitter: "bcheco14",
    },
  },
  {
    user_id: 42,
    name: "Othelia Szwandt",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "مهندس سیستم‌های نهفته",
    department: "بلاک‌چین",
    email: "oszwandt15@devhub.com",
    level: "برنامه‌نویس کارکنان",

    status: { key: "intern", title: "کارآموز" },
    office: "۶ خیابان شوشون",
    stack: ["spring boot", "react native"],
    info: {
      phone: "۹۴۴-۸۷۸-۶۵۵۰",

      twitter: "oszwandt15",
    },
  },
  {
    user_id: 43,
    name: "Shaine Goodey",
    avatar: "/images/avatar/avatar-10.jpg",
    position: "مدیر پروژه نرم‌افزار",
    department: "بلاک‌چین",
    email: "sgoodey16@sogou.com",
    level: "برنامه‌نویس کارکنان",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۲ راه گریسلند",
    stack: ["vue", "flask", "semantic ui", "bootstrapvue", "tailwind ui"],
    info: { phone: "۸۵۸-۹۰۷-۹۵۵۴" },
  },
  {
    user_id: 44,
    name: "Kurtis Muggeridge",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "مهندس فول‌استک",
    department: "دواپس",
    email: "kmuggeridge17@istockphoto.com",
    level: "مهندس برجسته",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۹۶۰۹۶ دنباله ایگل کریست",
    stack: ["laravel jetstream", "svelte", "vuetify"],
    info: {
      phone: "۷۰۳-۶۳۲-۲۶۷۸",

      twitter: "kmuggeridge17",
    },
  },
  {
    user_id: 45,
    name: "Erinna Guildford",
    avatar: "/images/avatar/avatar-8.jpg",
    position: "مهندس تست نرم‌افزار",
    department: "سخت‌افزار سیستم",
    email: "eguildford18@independent.co.uk",
    level: "برنامه‌نویس ۱",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۳۸۷ چهارراه آرکانزاس",
    stack: ["sqlite", "flask", "rails", "express", "mysql"],
    info: {
      phone: "۸۵۵-۸۵۰-۸۷۳۴",

      twitter: "eguildford18",
    },
  },
  {
    user_id: 46,
    name: "Oliviero Satch",
    position: "توسعه‌دهنده موبایل",
    department: "سیستم‌عامل‌ها",
    email: "osatch19@nyu.edu",
    level: "برنامه‌نویس ۲",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۳۶۵۱ مرکز ریدر",
    stack: ["tailwind ui", "bulma"],
    info: {
      phone: "۴۰۵-۳۲۷-۹۷۵۶",

      twitter: "osatch19",
    },
  },
  {
    user_id: 47,
    name: "Ediva Heamus",
    avatar: "/images/avatar/avatar-9.jpg",
    position: "مهندس تست نرم‌افزار",
    department: "توسعه موبایل",
    email: "eheamus1a@1und1.de",
    level: "برنامه‌نویس کارکنان",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۳۷۷۶۸ کوچه پاینیو",
    stack: ["spring boot", "express", "flask", "postgresql"],
    info: {
      phone: "۸۶۶-۵۷۰-۴۶۹۴",

      twitter: "eheamus1a",
    },
  },
  {
    user_id: 48,
    name: "Shane Press",
    avatar: "/images/avatar/avatar-18.jpg",
    position: "مهندس سیستم‌های نهفته",
    department: "رایانش ابری",
    email: "spress1b@jiathis.com",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۲۴۷۲۱ میدان بارتیلون",
    stack: ["bootstrapvue", "firebase", "django", "next", "alpine js"],
    info: { phone: "۷۰۰-۳۰۴-۰۱۱۶" },
  },
  {
    user_id: 49,
    name: "Mandie Pearne",
    position: "مهندس امنیت سایبری",
    department: "مدیریت پایگاه داده",
    email: "mpearne1c@vinaora.com",
    level: "برنامه‌نویس کارکنان",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۲۲۹۴ میدان فیسک",
    stack: ["vue", "bootstrap studio", "ember", "bulma"],
    info: { phone: "۶۴۵-۲۰۶-۸۶۰۹" },
  },
  {
    user_id: 50,
    name: "Dynah Huish",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "توسعه‌دهنده موبایل",
    department: "معماری نرم‌افزار",
    email: "dhuish1d@dot.gov",
    level: "برنامه‌نویس ارشد",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۱۵۵ مرکز مالارد",
    stack: ["express", "spring boot"],
    info: { phone: "۳۵۲-۳۱۸-۶۶۳۱" },
  },
  {
    user_id: 51,
    name: "Kacie Sproul",
    avatar: "/images/avatar/avatar-11.jpg",
    position: "مهندس رایانش ابری",
    department: "توسعه وب",
    email: "ksproul1e@ucsd.edu",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۸۶۱ جاده دونالد",
    stack: ["rails", "vuetify", "next", "graphql"],
    info: {
      phone: "۲۵۷-۵۱۳-۱۱۳۸",

      twitter: "ksproul1e",
    },
  },
  {
    user_id: 52,
    name: "Bambie Adkin",
    avatar: "/images/avatar/avatar-13.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "توسعه وب",
    email: "badkin1f@usa.gov",
    level: "مهندس برجسته",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۲۱۱۶۲ میدان گریسلند",
    stack: ["next", "svelte"],
    info: { phone: "۳۶۳-۷۵۲-۷۳۸۴" },
  },
  {
    user_id: 53,
    name: "Marchall Lacroix",
    avatar: "/images/avatar/avatar-17.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "رایانش ابری",
    email: "mlacroix1g@slideshare.net",
    level: "مهندس برجسته",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۳ کوچه لومیس",
    stack: ["vuetify", "spring boot", "alpine js"],
    info: { phone: "۱۱۸-۵۱۹-۸۹۹۸" },
  },
  {
    user_id: 54,
    name: "Chase Ruggles",
    avatar: "/images/avatar/avatar-14.jpg",
    position: "مهندس دواپس",
    department: "معماری نرم‌افزار",
    email: "cruggles1h@arstechnica.com",
    level: "مهندس اصلی",

    status: { key: "intern", title: "کارآموز" },
    office: "۴۱۲ خیابان واوبسا",
    stack: ["react native", "express", "tailwind ui", "spring boot", "rails"],
    info: {
      phone: "۴۲۷-۱۴۵-۰۶۱۸",

      twitter: "cruggles1h",
    },
  },
  {
    user_id: 55,
    name: "Jeremias McNaughton",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "مدیر پایگاه داده",
    department: "هوش مصنوعی",
    email: "jmcnaughton1i@sciencedaily.com",
    level: "برنامه‌نویس ۳",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۹۶ کوچه فورستر",
    stack: ["flask", "rails", "vue", "django"],
    info: {
      phone: "۷۱۸-۷۵۷-۷۰۳۹",

      twitter: "jmcnaughton1i",
    },
  },
  {
    user_id: 56,
    name: "Bethina Pinnigar",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "مهندس داده",
    department: "مدیریت پایگاه داده",
    email: "bpinnigar1j@walmart.com",
    level: "برنامه‌نویس ۲",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۶۲۳۶۶ داداستار کورت",
    stack: ["alpine js", "vuetify", "nuxt", "rails"],
    info: {
      phone: "۱۲۱-۳۹۷-۶۹۴۶",

      twitter: "bpinnigar1j",
    },
  },
  {
    user_id: 57,
    name: "Katey Orchart",
    avatar: "/images/avatar/avatar-10.jpg",
    position: "مهندس یادگیری ماشین",
    department: "سیستم‌های نهفته",
    email: "korchart1k@artisteer.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۴۰۷۳۵ جاده بی",
    stack: ["bulma", "firebase"],
    info: { phone: "۹۸۴-۷۴۸-۱۷۲۵" },
  },
  {
    user_id: 58,
    name: "Trixie Stokes",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "توسعه‌دهنده وب",
    department: "سیستم‌های نهفته",
    email: "tstokes1l@marketwatch.com",
    level: "مهندس اصلی",

    status: { key: "part-time", title: "پاره وقت" },
    office: "مرکز ۳ واربلر",
    stack: ["flask", "mysql", "mongodb"],
    info: { phone: "۲۷۳-۵۴۹-۱۷۸۷" },
  },
  {
    user_id: 59,
    name: "Shirleen Buckell",
    position: "مهندس آزمون نرم‌افزار",
    department: "رایانش ابری",
    email: "sbuckell1m@deviantart.com",
    level: "مهندس اصلی",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۱ جاده بومن",
    stack: ["ember", "laravel jetstream", "rails", "next", "nuxt"],
    info: { phone: "۹۹۵-۸۲۰-۶۴۵۹" },
  },
  {
    user_id: 60,
    name: "Melony Gregh",
    avatar: "/images/avatar/avatar-7.jpg",
    position: "برنامه‌نویس کامپیوتر",
    department: "سیستم‌های نهفته",
    email: "mgregh1n@barnesandnoble.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۱۹۵ خیابان مستا",
    stack: ["nuxt", "react native", "graphql", "postgresql"],
    info: { phone: "۷۴۲-۷۹۶-۰۳۰۳" },
  },
  {
    user_id: 61,
    name: "Aeriell Ruselin",
    avatar: "/images/avatar/avatar-14.jpg",
    position: "توسعه‌دهنده موبایل",
    department: "سیستم‌های نهفته",
    email: "aruselin1o@blogs.com",
    level: "مهندس برجسته",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۵ خیابان سیج",
    stack: ["nuxt", "spring boot", "postgresql", "bootstrapvue", "mysql"],
    info: {
      phone: "۷۹۵-۶۸۸-۰۳۴۲",

      twitter: "aruselin1o",
    },
  },
  {
    user_id: 62,
    name: "Bridie Millan",
    avatar: "/images/avatar/avatar-19.jpg",
    position: "مدیر پایگاه داده",
    department: "سیستم‌های نهفته",
    email: "bmillan1p@deliciousdays.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "intern", title: "کارآموز" },
    office: "۳۹ تراس تکری",
    stack: ["tailwind ui", "sqlite", "bootstrapvue"],
    info: {
      phone: "۶۵۶-۱۴۳-۷۵۷۶",

      twitter: "bmillan1p",
    },
  },
  {
    user_id: 63,
    name: "Brenda Plait",
    avatar: "/images/avatar/avatar-12.jpg",
    position: "مهندس فول‌استک",
    department: "مهندسی داده",
    email: "bplait1q@theglobeandmail.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۴ بلوار نورثپورت",
    stack: ["firebase", "spring boot", "semantic ui"],
    info: {
      phone: "۵۵۸-۳۸۲-۸۳۴۱",

      twitter: "bplait1q",
    },
  },
  {
    user_id: 64,
    name: "Penelopa Upstell",
    avatar: "/images/avatar/avatar-3.jpg",
    position: "مهندس دواپس",
    department: "یادگیری ماشین",
    email: "pupstell1r@pen.io",
    level: "برنامه‌نویس ۲",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۳۷۵ تراس سینت پل",
    stack: ["bootstrap studio", "express", "nuxt", "semantic ui"],
    info: {
      phone: "۸۸۴-۶۷۵-۵۳۹۱",

      twitter: "pupstell1r",
    },
  },
  {
    user_id: 65,
    name: "Cathleen Krugmann",
    avatar: "/images/avatar/avatar-19.jpg",
    position: "مهندس سیستم‌های نهفته",
    department: "توسعه وب",
    email: "ckrugmann1s@photobucket.com",
    level: "برنامه‌نویس ۲",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۷ درایو اگندارت",
    stack: ["ant design", "ember", "next", "semantic ui", "laravel jetstream"],
    info: {
      phone: "۹۶۷-۵۶۸-۵۲۶۸",

      twitter: "ckrugmann1s",
    },
  },
  {
    user_id: 66,
    name: "Aron Sporle",
    avatar: "/images/avatar/avatar-9.jpg",
    position: "مدیر پروژه نرم‌افزار",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "asporle1t@fema.gov",
    level: "برنامه‌نویس ۲",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۰۸ جاده دلادونا",
    stack: ["tailwind ui", "next", "vuetify", "postgresql"],
    info: {
      phone: "۲۸۳-۴۲۴-۴۹۸۶",

      twitter: "asporle1t",
    },
  },
  {
    user_id: 67,
    name: "Juline Blacksland",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "دانشمند داده",
    department: "سیستم‌های نهفته",
    email: "jblacksland1u@parallels.com",
    level: "برنامه‌نویس ۱",

    status: { key: "intern", title: "کارآموز" },
    office: "۰۷۲ خیابان کراپف",
    stack: ["gatsby", "tailwind ui", "ant design"],
    info: { phone: "۲۳۴-۶۸۰-۸۴۰۱" },
  },
  {
    user_id: 68,
    name: "Felix Llywarch",
    position: "معمار نرم‌افزار",
    department: "بلاک‌چین",
    email: "fllywarch1v@trellian.com",
    level: "مهندس اصلی",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۹ پارک کورسکات",
    stack: ["materialize", "tailwind ui", "next", "ant design", "graphql"],
    info: { phone: "۲۱۹-۱۴۵-۴۹۶۰" },
  },
  {
    user_id: 69,
    name: "Munroe Kleewein",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "مدیر پروژه نرم‌افزار",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "mkleewein1w@seattletimes.com",
    level: "برنامه‌نویس ۱",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۸۸ پوینت نوویک",
    stack: ["laravel jetstream", "nuxt", "angular", "ant design", "next"],
    info: {
      phone: "۸۰۶-۴۵۲-۷۱۷۶",

      twitter: "mkleewein1w",
    },
  },
  {
    user_id: 70,
    name: "Ciro Casserly",
    position: "برنامه‌نویس کامپیوتر",
    department: "رایانش ابری",
    email: "ccasserly1x@theatlantic.com",
    level: "برنامه‌نویس ۱",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۷ شرمن پوینت",
    stack: ["ember", "next"],
    info: {
      phone: "۴۰۵-۵۲۹-۷۴۳۹",

      twitter: "ccasserly1x",
    },
  },
  {
    user_id: 71,
    name: "Dannie Hirtz",
    avatar: "/images/avatar/avatar-12.jpg",
    position: "معمار نرم‌افزار",
    department: "سیستم‌عامل‌ها",
    email: "dhirtz1y@vkontakte.ru",
    level: "برنامه‌نویس ۲",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۹۵۵۷۱ چهارراه رونالد ریگان",
    stack: ["angular", "mongodb"],
    info: {
      phone: "۴۱۲-۵۵۹-۰۳۲۹",

      twitter: "dhirtz1y",
    },
  },
  {
    user_id: 72,
    name: "Blair Serman",
    avatar: "/images/avatar/avatar-18.jpg",
    position: "مهندس برنامه‌های کاربردی",
    department: "نرم‌افزار کاربردی",
    email: "bserman1z@ca.gov",
    level: "مهندس اصلی",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۶۲۷ لاین ولچ",
    stack: ["rails", "bulma", "vue", "gatsby"],
    info: {
      phone: "۸۲۴-۲۰۰-۰۰۹۱",

      twitter: "bserman1z",
    },
  },
  {
    user_id: 73,
    name: "Jonas Kerrod",
    position: "مهندس آزمون نرم‌افزار",
    department: "معماری نرم‌افزار",
    email: "jkerrod20@posterous.com",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۴۵۷۹۶ راه ویت",
    stack: ["firebase", "vuetify", "materialize", "bulma"],
    info: {
      phone: "۸۵۴-۳۹۸-۸۳۷۸",

      twitter: "jkerrod20",
    },
  },
  {
    user_id: 74,
    name: "Donaugh Melin",
    position: "مدیر پایگاه داده",
    department: "سیستم‌های نهفته",
    email: "dmelin21@merriam-webster.com",
    level: "برنامه‌نویس ۱",

    status: { key: "intern", title: "کارآموز" },
    office: "۱۴۴ دایره اش",
    stack: ["react native", "ember"],
    info: {
      phone: "۷۶۹-۴۴۹-۳۲۴۶",

      twitter: "dmelin21",
    },
  },
  {
    user_id: 75,
    name: "Con MacDonnell",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "بلاک‌چین",
    email: "cmacdonnell22@psu.edu",
    level: "برنامه‌نویس ۳",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۳۴ تپه گلندیل",
    stack: ["bulma", "materialize", "tailwind ui"],
    info: {
      phone: "۱۱۷-۳۵۱-۶۷۱۷",

      twitter: "cmacdonnell22",
    },
  },
  {
    user_id: 76,
    name: "Ron Lingley",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "توسعه موبایل",
    email: "rlingley23@surveymonkey.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "intern", title: "کارآموز" },
    office: "۷۴۲۴ جاده منیتوویش",
    stack: ["tailwind ui", "bulma"],
    info: { phone: "۴۴۹-۴۰۹-۷۲۱۸" },
  },
  {
    user_id: 77,
    name: "Doti Celloni",
    position: "مهندس جاوااسکریپت",
    department: "معماری نرم‌افزار",
    email: "dcelloni24@princeton.edu",
    level: "برنامه‌نویس ارشد",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۱۶۷ راه سانیساید",
    stack: ["next", "materialize", "react native", "flask", "vuetify"],
    info: { phone: "۴۵۸-۴۹۶-۷۱۰۸" },
  },
  {
    user_id: 78,
    name: "Almira Dockrey",
    position: "مهندس امنیت سایبری",
    department: "مدیریت پایگاه داده",
    email: "adockrey25@dailymotion.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "intern", title: "کارآموز" },
    office: "۰۹۹ پارک ملروز",
    stack: ["graphql", "tailwind ui", "rails"],
    info: {
      phone: "۵۷۴-۲۳۲-۰۱۹۶",

      twitter: "adockrey25",
    },
  },
  {
    user_id: 79,
    name: "Darlene Linnemann",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "مهندس داده",
    department: "سخت‌افزار سیستم",
    email: "dlinnemann26@illinois.edu",
    level: "برنامه‌نویس ۲",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۹۹ خیابان ویت",
    stack: ["ember", "mysql"],
    info: {
      phone: "۱۱۴-۴۴۷-۸۸۹۹",

      twitter: "dlinnemann26",
    },
  },
  {
    user_id: 80,
    name: "Gerda Antonsen",
    avatar: "/images/avatar/avatar-8.jpg",
    position: "توسعه‌دهنده موبایل",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "gantonsen27@google.it",
    level: "برنامه‌نویس ۱",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۵۸۶۵ هاربورت جانکشن",
    stack: ["semantic ui", "ant design"],
    info: { phone: "۳۳۷-۹۸۰-۵۸۹۴" },
  },
  {
    user_id: 81,
    name: "Gypsy Gammett",
    avatar: "/images/avatar/avatar-3.jpg",
    position: "مدیر پایگاه داده",
    department: "توسعه وب",
    email: "ggammett28@list-manage.com",
    level: "برنامه‌نویس ۲",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۸ راه لافتسگوردون",
    stack: ["firebase", "semantic ui"],
    info: {
      phone: "۱۷۱-۷۸۰-۲۷۵۷",

      twitter: "ggammett28",
    },
  },
  {
    user_id: 82,
    name: "Linea Grindell",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "مهندس یادگیری ماشین",
    department: "نرم‌افزار کاربردی",
    email: "lgrindell29@jigsy.com",
    level: "برنامه‌نویس ۱",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۸۵۶۸۹ جاده استاوتن",
    stack: ["firebase", "sqlite", "materialize", "postgresql"],
    info: { phone: "۱۸۰-۶۰۷-۲۰۵۴" },
  },
  {
    user_id: 83,
    name: "Melania Stigell",
    avatar: "/images/avatar/avatar-1.jpg",
    position: "مدیر پایگاه داده",
    department: "سیستم‌های نهفته",
    email: "mstigell2a@amazonaws.com",
    level: "مهندس اصلی",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۸ درایو پنسیلوانیا",
    stack: [
      "materialize",
      "tailwind ui",
      "bulma",
      "bootstrap studio",
      "gatsby",
    ],
    info: {
      phone: "۲۶۰-۷۲۹-۲۵۰۶",

      twitter: "mstigell2a",
    },
  },
  {
    user_id: 84,
    name: "Barbaraanne Bracken",
    position: "دانشمند داده",
    department: "نرم‌افزار کاربردی",
    email: "bbracken2b@ow.ly",
    level: "برنامه‌نویس ۳",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۰۵ خیابان سانیساید",
    stack: ["foundation", "django", "mongodb", "bootstrap studio"],
    info: {
      phone: "۵۸۶-۱۶۵-۵۲۹۰",

      twitter: "bbracken2b",
    },
  },
  {
    user_id: 85,
    name: "Tiphany Kiffe",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "مهندس تضمین کیفیت نرم‌افزار",
    department: "رایانش ابری",
    email: "tkiffe2c@people.com.cn",
    level: "برنامه‌نویس ۳",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۰۰ پارک فولتون",
    stack: ["foundation", "firebase", "django", "nuxt", "graphql"],
    info: {
      phone: "۲۰۳-۴۳۷-۳۰۲۳",

      twitter: "tkiffe2c",
    },
  },
  {
    user_id: 86,
    name: "Alana Grinyer",
    avatar: "/images/avatar/avatar-16.jpg",
    position: "توسعه‌دهنده وب",
    department: "سیستم‌های نهفته",
    email: "agrinyer2d@typepad.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۰۳ نورث درایو",
    stack: ["express", "bootstrapvue", "ant design", "sqlite", "alpine js"],
    info: { phone: "۶۳۱-۹۰۱-۵۱۱۰" },
  },
  {
    user_id: 87,
    name: "Brodie Aylett",
    avatar: "/images/avatar/avatar-17.jpg",
    position: "مهندس سیستم‌های نهفته",
    department: "هوش مصنوعی",
    email: "baylett2e@sphinn.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "intern", title: "کارآموز" },
    office: "۰۰۵۵ مکان پنسیلوانیا",
    stack: ["semantic ui", "bootstrapvue", "ant design", "foundation"],
    info: { phone: "۲۳۸-۵۱۲-۸۶۷۲" },
  },
  {
    user_id: 88,
    name: "Ilise Wartonby",
    avatar: "/images/avatar/avatar-7.jpg",
    position: "مهندس یادگیری ماشین",
    department: "دواپس",
    email: "iwartonby2f@marriott.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۵۱۳ چهارراه درک",
    stack: ["mongodb", "semantic ui", "flask"],
    info: { phone: "۹۶۱-۳۲۶-۹۸۴۷" },
  },
  {
    user_id: 89,
    name: "Erin Morando",
    position: "مهندس جاوااسکریپت",
    department: "رایانش ابری",
    email: "emorando2g@house.gov",
    level: "مهندس اصلی",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۷۰۱۲ پارک کوئینسی",
    stack: ["django", "flask"],
    info: { phone: "۷۸۶-۹۰۲-۰۰۱۳" },
  },
  {
    user_id: 90,
    name: "Anthia Coda",
    avatar: "/images/avatar/avatar-15.jpg",
    position: "مهندس سیستم‌های نهفته",
    department: "توسعه وب",
    email: "acoda2h@umich.edu",
    level: "برنامه‌نویس ۱",

    status: { key: "freelance", title: "فریلنسر" },
    office: "۸۵۴ اوکریج پس",
    stack: ["svelte", "bootstrapvue", "semantic ui", "django"],
    info: {
      phone: "۴۶۹-۲۹۴-۴۷۰۵",
      twitter: "acoda2h",
    },
  },
  {
    user_id: 91,
    name: "Mellisent Chance",
    avatar: "/images/avatar/avatar-17.jpg",
    position: "مهندس داده",
    department: "سیستم‌های نهفته",
    email: "mchance2i@nyu.edu",
    level: "برنامه‌نویس ۲",

    status: { key: "intern", title: "کارآموز" },
    office: "۲۹ پارک‌وی لوتویل",
    stack: ["gatsby", "firebase", "alpine js", "mysql", "rails"],
    info: { phone: "۷۷۷-۹۴۰-۸۸۲۹" },
  },
  {
    user_id: 92,
    name: "Doreen Rochester",
    position: "برنامه‌نویس کامپیوتر",
    department: "احتمال و آمار برای علوم کامپیوتر",
    email: "drochester2j@uol.com.br",
    level: "مهندس اصلی",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۰۸۵۷۰ درایو واریور",
    stack: ["ant design", "django", "express", "semantic ui", "vue"],
    info: { phone: "۴۲۷-۴۵۲-۰۸۹۵" },
  },
  {
    user_id: 93,
    name: "Prisca Otteridge",
    avatar: "/images/avatar/avatar-2.jpg",
    position: "مدیر پایگاه داده",
    department: "توسعه وب",
    email: "potteridge2k@ucoz.com",
    level: "برنامه‌نویس ارشد",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۷۳ سامریویو کورت",
    stack: ["bulma", "alpine js", "bootstrap studio", "nuxt", "vuetify"],
    info: {
      phone: "۱۳۴-۱۵۰-۴۰۴۰",
      twitter: "potteridge2k",
    },
  },
  {
    user_id: 94,
    name: "Ardeen Covolini",
    avatar: "/images/avatar/avatar-14.jpg",
    position: "مهندس برنامه‌های کاربردی",
    department: "دواپس",
    email: "acovolini2l@seesaa.net",
    level: "مهندس اصلی",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۵۷ مرکز ساترلند",
    stack: ["graphql", "foundation", "react native", "spring boot"],
    info: { phone: "۳۷۵-۲۳۷-۶۳۳۸" },
  },
  {
    user_id: 95,
    name: "Brigitte Algy",
    avatar: "/images/avatar/avatar-1.jpg",
    position: "مهندس رایانش ابری",
    department: "کاربرد نرم‌افزاری",
    email: "balgy2m@si.edu",
    level: "برنامه‌نویس ارشد",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۷ دایره گرس‌کمپ",
    stack: ["gatsby", "angular", "graphql", "next", "rails"],
    info: { phone: "۲۱۷-۶۱۸-۴۳۱۶" },
  },
  {
    user_id: 96,
    name: "Vilhelmina Shynn",
    avatar: "/images/avatar/avatar-14.jpg",
    position: "مدیر پروژه نرم‌افزار",
    department: "توسعه وب",
    email: "vshynn2n@craigslist.org",
    level: "برنامه‌نویس ۱",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۳ شاپکو کورت",
    stack: ["rails", "graphql"],
    info: {
      phone: "۲۲۹-۶۷۸-۳۷۸۰",
      twitter: "vshynn2n",
    },
  },
  {
    user_id: 97,
    name: "Reynard Benini",
    avatar: "/images/avatar/avatar-9.jpg",
    position: "مهندس داده",
    department: "سیستم‌ عامل‌ها",
    email: "rbenini2o@adobe.com",
    level: "مهندس اصلی",

    status: { key: "part-time", title: "پاره وقت" },
    office: "۸ جاده دورتون",
    stack: ["graphql", "react native", "materialize", "mysql"],
    info: {
      phone: "۵۰۰-۵۲۵-۷۵۸۶",
      twitter: "rbenini2o",
    },
  },
  {
    user_id: 98,
    name: "Geri Mebes",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "مهندس یادگیری ماشین",
    department: "سیستم‌های نهفته",
    email: "gmebes2p@a8.net",
    level: "برنامه‌نویس ۱",
    status: { key: "freelance", title: "فریلنسر" },
    office: "۷ فِرِست ران پوینت",
    stack: ["firebase", "express", "sqlite", "bootstrapvue", "flask"],
    info: { phone: "۹۸۷-۲۷۸-۲۴۴۳" },
  },
  {
    user_id: 99,
    name: "Paulie McCloughlin",
    avatar: "/images/avatar/avatar-3.jpg",
    position: "مهندس جاوااسکریپت",
    department: "توسعه وب",
    email: "pmccloughlin2q@imgur.com",
    level: "برنامه‌نویس ۲",

    status: { key: "contractor", title: "پیمانکار" },
    office: "۱۹۵ هیل کیپلینگ",
    stack: ["express", "bootstrap studio", "react native"],
    info: { phone: "۶۶۴-۴۴۶-۲۳۶۸" },
  },
  {
    user_id: 100,
    name: "Kathi Mariault",
    avatar: "/images/avatar/avatar-7.jpg",
    position: "مهندس رایانش ابری",
    department: "دواپس",
    email: "kmariault2r@edublogs.org",
    level: "برنامه‌نویس ارشد",

    status: { key: "full-time", title: "تمام وقت" },
    office: "۳۵ آلِی آپام",
    stack: ["angular", "vue"],
    info: {
      phone: "۴۸۶-۴۷۸-۲۴۶۰",
      twitter: "kmariault2r",
    },
  },
];
