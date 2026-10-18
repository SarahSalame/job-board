import { ArrowUpLeft } from "lucide-react";

function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-white"
    >
      {/* Main Footer */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-4">

            {/* Brand */}
            <div className="md:col-span-2">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#138A43] text-xl font-bold text-white">
                  ف
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    فرصتك
                  </h2>

                  <p className="text-[9px] tracking-[0.2em] text-slate-400">
                    OPPORTUNITIES
                  </p>
                </div>

              </div>

              <p className="mt-6 max-w-md text-sm leading-8 text-slate-500">
                منصة تجمع الباحثين عن فرص جديدة مع الشركات
                التي تبحث عن المواهب والمهارات المناسبة.
              </p>

              <button
                type="button"
                className="mt-6 flex items-center gap-2 font-bold text-[#138A43] transition hover:gap-3"
              >
                أضف فرصة وظيفية
                <ArrowUpLeft size={17} />
              </button>

            </div>

            {/* Platform */}
            <div>

              <h3 className="mb-6 font-bold text-slate-950">
                المنصة
              </h3>

              <ul className="space-y-4 text-sm text-slate-500">

                <li>
                  <a
                    href="#jobs"
                    className="transition hover:text-[#138A43]"
                  >
                    الفرص الوظيفية
                  </a>
                </li>

                <li>
                  <a
                    href="#categories"
                    className="transition hover:text-[#138A43]"
                  >
                    المجالات
                  </a>
                </li>

                <li>
                  <a
                    href="#companies"
                    className="transition hover:text-[#138A43]"
                  >
                    الشركات
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:text-[#138A43]"
                  >
                    كيف تعمل المنصة؟
                  </a>
                </li>

              </ul>

            </div>

            {/* Account */}
            <div>

              <h3 className="mb-6 font-bold text-slate-950">
                الحساب
              </h3>

              <ul className="space-y-4 text-sm text-slate-500">

                <li>
                  <a
                    href="#"
                    className="transition hover:text-[#138A43]"
                  >
                    تسجيل الدخول
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:text-[#138A43]"
                  >
                    إنشاء حساب
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:text-[#138A43]"
                  >
                    للشركات
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:text-[#138A43]"
                  >
                    تواصل معنا
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </div>

      {/* Big Typography */}
      <div className="overflow-hidden border-t border-slate-100">

        <div className="mx-auto max-w-7xl px-6">

          <div className="select-none text-center">

            <h2 className="whitespace-nowrap text-[100px] font-black leading-none tracking-[-0.08em] text-slate-100 sm:text-[160px] lg:text-[220px]">
              فرصتك
            </h2>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200">

        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 فرصتك — جميع الحقوق محفوظة
          </p>

          <p>
            صُمم لبناء فرص أفضل.
          </p>

          {/* Social */}
          <div className="flex items-center gap-2">

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-xs font-bold transition hover:border-[#138A43] hover:bg-[#138A43]/5 hover:text-[#138A43]"
            >
              in
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold transition hover:border-[#138A43] hover:bg-[#138A43]/5 hover:text-[#138A43]"
            >
              ◎
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;