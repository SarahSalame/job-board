import {
  ArrowLeft,
  Search,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#f7f8f5]"
    >
      {/* =========================
          ANIMATED BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div className="hero-grid" />

        {/* Moving blobs */}
        <div className="hero-blob hero-blob-one" />
        <div className="hero-blob hero-blob-two" />
        <div className="hero-blob hero-blob-three" />

        {/* Decorative circles */}
        <div className="hero-circle hero-circle-one" />
        <div className="hero-circle hero-circle-two" />

        {/* Floating dots */}
        <div className="hero-dot hero-dot-one" />
        <div className="hero-dot hero-dot-two" />
        <div className="hero-dot hero-dot-three" />
      </div>

      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">

        <div className="mx-auto max-w-4xl text-center">

          {/* Small badge */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#138A43]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#138A43] shadow-sm backdrop-blur">
            <Sparkles size={15} />

            <span>
              اكتشف فرصتك القادمة
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-6xl lg:text-8xl">

            مستقبلك المهني

            <span className="mt-2 block text-[#138A43]">
              يبدأ من هنا
            </span>

          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            اكتشف فرص العمل المناسبة لمهاراتك،
            وتواصل مع أفضل الشركات التي تبحث عن
            أشخاص مثلك.
          </p>

          {/* =========================
              SEARCH
          ========================= */}

          <div className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

            <div className="flex flex-col gap-2 sm:flex-row">

              {/* Search input */}

              <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">

                <Search
                  size={20}
                  className="shrink-0 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="ابحث عن وظيفة أو مهارة..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />

              </div>

              {/* Location */}

              <div className="flex flex-1 items-center rounded-2xl bg-slate-50 px-5">

                <input
                  type="text"
                  placeholder="الموقع أو المدينة"
                  className="w-full bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />

              </div>

              {/* Search button */}

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#138A43] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#0f7137] hover:shadow-lg"
              >

                ابحث الآن

                <ArrowLeft size={17} />

              </button>

            </div>
          </div>

          {/* =========================
              POPULAR SEARCHES
          ========================= */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">

            <span>
              الأكثر بحثًا:
            </span>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-[#138A43]/30 hover:text-[#138A43]"
            >
              UI/UX
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-[#138A43]/30 hover:text-[#138A43]"
            >
              برمجة
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-[#138A43]/30 hover:text-[#138A43]"
            >
              تسويق
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-[#138A43]/30 hover:text-[#138A43]"
            >
              إدارة
            </button>

          </div>

        </div>
      </div>

      {/* =========================
          MOVING GREEN RIBBON
      ========================= */}

      <div
        className="ticker-wrapper"
        aria-hidden="true"
      >

        <div className="ticker-track">

          <span>
            فرص جديدة
          </span>

          <span>
            شركات تبحث عنك
          </span>

          <span>
            وظائف عن بُعد
          </span>

          <span>
            فرص للموهوبين
          </span>

          <span>
            مستقبلك يبدأ هنا
          </span>

          <span>
            فرص جديدة
          </span>

          <span>
            شركات تبحث عنك
          </span>

          <span>
            وظائف عن بُعد
          </span>

          <span>
            فرص للموهوبين
          </span>

          <span>
            مستقبلك يبدأ هنا
          </span>

        </div>

      </div>

    </section>
  );
}

export default Hero;