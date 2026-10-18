import { useMemo, useState } from "react";

import {
  Search,
  SlidersHorizontal,
  X,
  MapPin,
  RotateCcw,
  Check,
} from "lucide-react";

import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function AllJobs() {
  const [search, setSearch] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedWorkplaces, setSelectedWorkplaces] = useState([]);

  const [selectedTypes, setSelectedTypes] = useState([]);

  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);

  const categories = [
    "التصميم",
    "البرمجة",
    "التسويق",
    "الإدارة",
  ];

  const workplaces = [
    "عن بُعد",
    "هجين",
    "من مقر الشركة",
  ];

  const jobTypes = [
    "دوام كامل",
    "دوام جزئي",
    "عقد",
  ];

  function toggleFilter(
    value,
    selected,
    setSelected
  ) {
    if (selected.includes(value)) {
      setSelected(
        selected.filter(
          (item) => item !== value
        )
      );
    } else {
      setSelected([
        ...selected,
        value,
      ]);
    }
  }

  function clearFilters() {
    setSearch("");
    setSelectedCategories([]);
    setSelectedWorkplaces([]);
    setSelectedTypes([]);
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchValue =
        search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        job.title
          .toLowerCase()
          .includes(searchValue) ||
        job.company
          .toLowerCase()
          .includes(searchValue) ||
        job.skills.some((skill) =>
          skill
            .toLowerCase()
            .includes(searchValue)
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(
          job.category
        );

      const matchesWorkplace =
        selectedWorkplaces.length === 0 ||
        selectedWorkplaces.includes(
          job.workplace
        );

      const matchesType =
        selectedTypes.length === 0 ||
        selectedTypes.includes(
          job.type
        );

      return (
        matchesSearch &&
        matchesCategory &&
        matchesWorkplace &&
        matchesType
      );
    });
  }, [
    search,
    selectedCategories,
    selectedWorkplaces,
    selectedTypes,
  ]);

  const activeFiltersCount =
    selectedCategories.length +
    selectedWorkplaces.length +
    selectedTypes.length;

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#f7f8f5] pb-24 pt-32"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="jobs-orb jobs-orb-one" />
        <div className="jobs-orb jobs-orb-two" />
        <div className="jobs-orb jobs-orb-three" />

        <div className="jobs-grid" />

        <div className="jobs-ring jobs-ring-one" />
        <div className="jobs-ring jobs-ring-two" />
      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* PAGE HEADER */}

        <div className="mb-10">
          <span className="text-sm font-semibold text-[#138A43]">
            اكتشف الفرص
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            جميع الفرص الوظيفية
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            ابحث عن الفرصة المناسبة لمهاراتك
            واستكشف وظائف من شركات تبحث عن المواهب.
          </p>
        </div>

        {/* SEARCH */}

        <div className="mb-8 rounded-[24px] border border-slate-200 bg-white p-2 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row">

            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
              <Search
                size={20}
                className="shrink-0 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="ابحث عن وظيفة، شركة أو مهارة..."
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4 sm:min-w-[220px]">
              <MapPin
                size={19}
                className="shrink-0 text-slate-400"
              />

              <span className="text-sm text-slate-400">
                جميع المواقع
              </span>
            </div>

          </div>
        </div>

        {/* MOBILE FILTER BUTTON */}

        <div className="mb-6 lg:hidden">
          <button
            type="button"
            onClick={() =>
              setMobileFiltersOpen(true)
            }
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#138A43]/30"
          >
            <SlidersHorizontal size={19} />

            الفلاتر

            {activeFiltersCount > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#138A43] px-1.5 text-xs text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* DESKTOP LAYOUT */}

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* SIDEBAR */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-7 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-950">
                    الفلاتر
                  </h2>

                  {activeFiltersCount > 0 && (
                    <p className="mt-1 text-xs text-[#138A43]">
                      {activeFiltersCount} فلاتر مفعلة
                    </p>
                  )}
                </div>

                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-red-500"
                  >
                    <RotateCcw size={13} />
                    مسح الكل
                  </button>
                )}
              </div>

              <FilterSection title="المجال">
                {categories.map((category) => (
                  <FilterCheckbox
                    key={category}
                    label={category}
                    checked={selectedCategories.includes(
                      category
                    )}
                    onChange={() =>
                      toggleFilter(
                        category,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                  />
                ))}
              </FilterSection>

              <FilterSection title="مكان العمل">
                {workplaces.map((workplace) => (
                  <FilterCheckbox
                    key={workplace}
                    label={workplace}
                    checked={selectedWorkplaces.includes(
                      workplace
                    )}
                    onChange={() =>
                      toggleFilter(
                        workplace,
                        selectedWorkplaces,
                        setSelectedWorkplaces
                      )
                    }
                  />
                ))}
              </FilterSection>

              <FilterSection title="نوع الدوام">
                {jobTypes.map((type) => (
                  <FilterCheckbox
                    key={type}
                    label={type}
                    checked={selectedTypes.includes(
                      type
                    )}
                    onChange={() =>
                      toggleFilter(
                        type,
                        selectedTypes,
                        setSelectedTypes
                      )
                    }
                  />
                ))}
              </FilterSection>

            </div>
          </aside>

          {/* RESULTS */}

          <div>

            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-950">
                  {filteredJobs.length}
                </span>{" "}
                فرصة متاحة
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="flex items-center gap-1 text-xs text-slate-400 transition hover:text-red-500"
                >
                  <X size={14} />
                  مسح البحث
                </button>
              )}
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid gap-5 xl:grid-cols-2">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/70 px-6 py-20 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <Search size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  ما لقينا فرص مطابقة
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-400">
                  جرّب تغيير الفلاتر أو البحث عن
                  كلمات مختلفة.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-xl bg-[#138A43] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f7137]"
                >
                  مسح جميع الفلاتر
                </button>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* =========================
          MOBILE BOTTOM SHEET
      ========================= */}

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          <button
            type="button"
            aria-label="إغلاق الفلاتر"
            onClick={() =>
              setMobileFiltersOpen(false)
            }
            className="absolute inset-0 h-full w-full bg-slate-950/40 backdrop-blur-[3px]"
          />

          <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[32px] bg-white px-5 pb-7 pt-4 shadow-[0_-20px_60px_rgba(15,23,42,0.18)] animate-bottom-sheet">

            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-200" />

            <div className="mb-7 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  الفلاتر
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  حددي الخيارات المناسبة للبحث
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
              >
                <X size={19} />
              </button>
            </div>

            <FilterSection title="المجال">
              {categories.map((category) => (
                <FilterCheckbox
                  key={category}
                  label={category}
                  checked={selectedCategories.includes(
                    category
                  )}
                  onChange={() =>
                    toggleFilter(
                      category,
                      selectedCategories,
                      setSelectedCategories
                    )
                  }
                />
              ))}
            </FilterSection>

            <FilterSection title="مكان العمل">
              {workplaces.map((workplace) => (
                <FilterCheckbox
                  key={workplace}
                  label={workplace}
                  checked={selectedWorkplaces.includes(
                    workplace
                  )}
                  onChange={() =>
                    toggleFilter(
                      workplace,
                      selectedWorkplaces,
                      setSelectedWorkplaces
                    )
                  }
                />
              ))}
            </FilterSection>

            <FilterSection title="نوع الدوام">
              {jobTypes.map((type) => (
                <FilterCheckbox
                  key={type}
                  label={type}
                  checked={selectedTypes.includes(
                    type
                  )}
                  onChange={() =>
                    toggleFilter(
                      type,
                      selectedTypes,
                      setSelectedTypes
                    )
                  }
                />
              ))}
            </FilterSection>

            <div className="sticky bottom-0 mt-7 flex gap-3 border-t border-slate-100 bg-white pt-5">

              <button
                type="button"
                onClick={clearFilters}
                className="flex-1 rounded-2xl border border-slate-200 px-5 py-4 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                مسح الكل
              </button>

              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
                className="flex-[1.5] rounded-2xl bg-[#138A43] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#138A43]/20 transition hover:bg-[#0f7137]"
              >
                عرض {filteredJobs.length} فرصة
              </button>

            </div>

          </div>
        </div>
      )}
    </main>
  );
}


/* =========================
   FILTER SECTION
========================= */

function FilterSection({
  title,
  children,
}) {
  return (
    <div className="border-t border-slate-100 py-6 first:border-t-0 first:pt-0">

      <h3 className="mb-4 text-sm font-bold text-slate-900">
        {title}
      </h3>

      <div className="space-y-3">
        {children}
      </div>

    </div>
  );
}


/* =========================
   FILTER CHECKBOX
========================= */

function FilterCheckbox({
  label,
  checked,
  onChange,
}) {
  return (
    <label className="group flex cursor-pointer items-center justify-between rounded-xl px-2 py-2 transition hover:bg-slate-50">

      <span className="text-sm text-slate-600 transition group-hover:text-slate-950">
        {label}
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <span
        className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
          checked
            ? "border-[#138A43] bg-[#138A43] text-white"
            : "border-slate-300 bg-white"
        }`}
      >
        {checked && (
          <Check
            size={13}
            strokeWidth={3}
          />
        )}
      </span>

    </label>
  );
}


/* =========================
   IMPORTANT
========================= */

export default AllJobs;