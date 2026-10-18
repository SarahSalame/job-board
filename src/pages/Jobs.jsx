import { useNavigate } from "react-router-dom";

import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function Jobs() {
  const navigate = useNavigate();

  return (
    <section
      id="jobs"
      dir="rtl"
      className="relative overflow-hidden bg-[#f7f8f5] py-24"
    >
      {/* =========================
          ANIMATED BACKGROUND
      ========================= */}

      <div className="jobs-background">

        <div className="jobs-orb jobs-orb-one" />
        <div className="jobs-orb jobs-orb-two" />
        <div className="jobs-orb jobs-orb-three" />

        <div className="jobs-grid" />

        <div className="jobs-ring jobs-ring-one" />
        <div className="jobs-ring jobs-ring-two" />

        <div className="jobs-dot jobs-dot-one" />
        <div className="jobs-dot jobs-dot-two" />
        <div className="jobs-dot jobs-dot-three" />
        <div className="jobs-dot jobs-dot-four" />

      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Heading */}

          <div className="max-w-2xl">

            <span className="text-sm font-semibold text-[#138A43]">
              فرص مختارة
            </span>

            <h2 className="mt-3 text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              فرص تستحقها
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-500 sm:text-base">
              مجموعة من الفرص المميزة من شركات تبحث عن أشخاص
              لديهم الرغبة في التطور وصناعة أثر حقيقي.
            </p>

          </div>

          {/* All Jobs */}

          <div className="shrink-0">

            <button
              type="button"
              onClick={() => navigate("/jobs")}
              className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:border-[#138A43]/30 hover:bg-white hover:text-[#138A43] hover:shadow-md"
            >
              <span>
                جميع الفرص
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

            </button>

          </div>

        </div>

        {/* =========================
            JOB CARDS
        ========================= */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {jobs.slice(0, 4).map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Jobs;