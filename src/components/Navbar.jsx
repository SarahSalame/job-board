import { useState } from "react";

import {
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";


function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const navigate = useNavigate();


  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }


  function goToJobs() {
    closeMobileMenu();
    navigate("/jobs");
  }


  function goToProfile() {
    closeMobileMenu();
    navigate("/profile");
  }


  return (
    <header
      dir="rtl"
      className="fixed inset-x-0 top-0 z-50"
    >

      <div className="mx-auto px-4 pt-4 sm:px-6">

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[22px] border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-5">


          {/* =========================
              LOGO
          ========================= */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#138A43] text-xl font-bold text-white shadow-sm transition duration-300 group-hover:rotate-3 group-hover:scale-105">
              ف
            </div>

            <div className="hidden sm:block">

              <h1 className="text-lg font-bold leading-none text-slate-950">
                فرصتك
              </h1>

              <p className="mt-1 text-[8px] font-medium tracking-[0.22em] text-slate-400">
                OPPORTUNITIES
              </p>

            </div>

          </NavLink>


          {/* =========================
              DESKTOP NAV
          ========================= */}

          <div className="hidden items-center gap-1 md:flex">

            <NavItem
              to="/"
              label="الرئيسية"
            />

            <NavItem
              to="/jobs"
              label="الفرص"
            />

            <NavItem
              to="/profile"
              label="ملفي المهني"
            />

            <a
              href="#companies"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
            >
              الشركات
            </a>

            <a
              href="#categories"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
            >
              المجالات
            </a>

          </div>


          {/* =========================
              DESKTOP ACTIONS
          ========================= */}

          <div className="hidden items-center gap-3 md:flex">

            <button
              type="button"
              className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              تسجيل الدخول
            </button>

            <button
              type="button"
              onClick={goToJobs}
              className="group flex items-center gap-2 rounded-full bg-[#138A43] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-[#0f7137] hover:shadow-lg hover:shadow-[#138A43]/20"
            >

              استكشف الفرص

              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

            </button>

          </div>


          {/* =========================
              MOBILE BUTTON
          ========================= */}

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "إغلاق القائمة"
                : "فتح القائمة"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                (previous) => !previous
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 transition duration-300 hover:border-[#138A43]/30 hover:bg-[#138A43]/5 hover:text-[#138A43] md:hidden"
          >

            {mobileMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}

          </button>

        </nav>


        {/* =========================
            MOBILE MENU
        ========================= */}

        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            mobileMenuOpen
              ? "mt-3 max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >

          <div className="rounded-[24px] border border-slate-200/80 bg-white/95 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">

            <div className="space-y-1">

              <MobileNavItem
                to="/"
                label="الرئيسية"
                onClick={closeMobileMenu}
              />

              <MobileNavItem
                to="/jobs"
                label="الفرص"
                onClick={closeMobileMenu}
              />

              <MobileNavItem
                to="/profile"
                label="ملفي المهني"
                onClick={closeMobileMenu}
              />

              <a
                href="#companies"
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                الشركات
              </a>

              <a
                href="#categories"
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                المجالات
              </a>

            </div>


            <div className="my-3 h-px bg-slate-100" />


            <button
              type="button"
              onClick={closeMobileMenu}
              className="w-full rounded-2xl px-4 py-3.5 text-right text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              تسجيل الدخول
            </button>


            <button
              type="button"
              onClick={goToJobs}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#138A43] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#138A43]/15 transition duration-300 hover:bg-[#0f7137]"
            >

              استكشف الفرص

              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

            </button>

          </div>

        </div>

      </div>

    </header>
  );
}


/* =========================
   DESKTOP NAV ITEM
========================= */

function NavItem({
  to,
  label,
}) {

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-full px-5 py-2.5 text-sm font-medium transition ${
          isActive
            ? "bg-[#138A43]/10 text-[#138A43]"
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
        }`
      }
    >
      {label}
    </NavLink>
  );
}


/* =========================
   MOBILE NAV ITEM
========================= */

function MobileNavItem({
  to,
  label,
  onClick,
}) {

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
          isActive
            ? "bg-[#138A43]/10 text-[#138A43]"
            : "text-slate-700 hover:bg-slate-50"
        }`
      }
    >
      {label}
    </NavLink>
  );
}


export default Navbar;