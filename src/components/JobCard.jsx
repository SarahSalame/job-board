import {
  MapPin,
  Heart,
  Clock,
  ArrowLeft,
} from "lucide-react";

function JobCard({ job }) {
  return (
    <article
      dir="rtl"
      className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#138A43]/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    >

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          {/* Company Logo */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#138A43]/10 text-xl font-bold text-[#138A43]">
            {job.company.charAt(0)}
          </div>

          <div>

            <p className="text-sm text-slate-400">
              {job.company}
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-950">
              {job.title}
            </h3>

          </div>

        </div>

        {/* Favorite */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 text-slate-400 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
        >
          <Heart size={18} />
        </button>

      </div>

      {/* Job Information */}
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">

        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {job.location}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1">
          {job.workplace}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1">
          {job.type}
        </span>

      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">

        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#138A43]/5 px-3 py-1.5 text-xs font-medium text-[#138A43]"
          >
            {skill}
          </span>
        ))}

      </div>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

        <div>

          <p className="font-bold text-slate-950">
            {job.salary}
          </p>

          <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
            <Clock size={13} />
            {job.posted}
          </p>

        </div>

        <button
          type="button"
          className="group flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#138A43]"
        >

          تقدّم الآن

          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />

        </button>

      </div>

    </article>
  );
}

export default JobCard;