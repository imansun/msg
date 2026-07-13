const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '97531372',
  database: 'messenger',
});

const departments = [
  { name: 'صنایع', desc: 'واحد صنایع تولیدی' },
  { name: 'مالی و حقوقی', desc: 'واحد مالی، حسابداری و حقوقی' },
  { name: 'انتظامات', desc: 'واحد حراست و انتظامات' },
  { name: 'واحد طراحی', desc: 'طراحی و مهندسی' },
  { name: 'آی‌تی', desc: 'فناوری اطلاعات' },
  { name: 'تولید', desc: 'واحد تولید و ساخت' },
  { name: 'کنترل کیفیت', desc: 'بازرسی و کنترل کیفیت' },
  { name: 'انبار و لجستیک', desc: 'مدیریت انبار و حمل‌ونقل' },
  { name: 'منابع انسانی', desc: 'اداری و استخدام' },
  { name: 'تعمیرات و نگهداری', desc: 'تعمیرات تجهیزات و تأسیسات' },
  { name: 'بازرگانی', desc: 'فروش و بازاریابی' },
  { name: 'ایمنی و بهداشت', desc: 'HSE و ایمنی محیط کار' },
];

const subDepartments = {
  'مالی و حقوقی': ['حسابداری', 'حسابرسی', 'امور حقوقی', 'بودجه'],
  'آی‌تی': ['شبکه', 'نرم‌افزار', 'پشتیبانی'],
  'تولید': ['خط تولید', 'مونتاژ', 'بسته‌بندی'],
  'انتظامات': ['حسابرسی و نظارت', 'حفاظت فیزیکی'],
  'واحد طراحی': ['طراحی صنعتی', ' CAD/CAM'],
  'منابع انسانی': ['آموزش', 'اداری', 'بیمه'],
};

(async () => {
  for (const dept of departments) {
    const res = await pool.query(
      `INSERT INTO department (name, description, level, "parentId", "createdAt")
       VALUES ($1, $2, 0, NULL, NOW())
       ON CONFLICT DO NOTHING
       RETURNING id`,
      [dept.name, dept.desc],
    );

    const deptId = res.rows[0]?.id;
    if (!deptId) {
      const existing = await pool.query(`SELECT id FROM department WHERE name = $1`, [dept.name]);
      const parentId = existing.rows[0]?.id;

      if (parentId && subDepartments[dept.name]) {
        for (const sub of subDepartments[dept.name]) {
          await pool.query(
            `INSERT INTO department (name, description, level, "parentId", "createdAt")
             VALUES ($1, '', 1, $2, NOW())
             ON CONFLICT DO NOTHING`,
            [sub, parentId],
          );
        }
      }
      continue;
    }

    if (subDepartments[dept.name]) {
      for (const sub of subDepartments[dept.name]) {
        await pool.query(
          `INSERT INTO department (name, description, level, "parentId", "createdAt")
           VALUES ($1, '', 1, $2, NOW())
           ON CONFLICT DO NOTHING`,
          [sub, deptId],
        );
      }
    }
  }

  console.log('Departments seeded successfully!');
  await pool.end();
})();
