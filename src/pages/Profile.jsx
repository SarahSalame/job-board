import { useMemo, useState } from "react";

import {
  Camera,
  Plus,
  Trash2,
  Pencil,
  MapPin,
  Mail,
  Phone,
  BriefcaseBusiness,
  GraduationCap,
  Link2,
  ExternalLink,
  Save,
  X,
} from "lucide-react";


function Profile() {
  /* =========================
     PROFILE DATA
  ========================= */

  const [profile, setProfile] = useState({
    name: "ليان منصور",
    jobTitle: "Product Designer",
    email: "layan.mansour@example.com",
    phone: "+1 416 555 0182",
    location: "Toronto, Canada",

    bio:
      "مصممة منتجات رقمية تهتم ببناء تجارب بسيطة وذكية تساعد المستخدمين على إنجاز مهامهم بسهولة، مع اهتمام خاص بالتفاصيل وأنظمة التصميم.",

    linkedin: "linkedin.com/in/layan-mansour",
    behance: "behance.net/layanmansour",
    portfolio: "layan.design",
  });


  /* =========================
     IMAGE
  ========================= */

  const [profileImage, setProfileImage] =
    useState("/profile.png");


  /* =========================
     SKILLS
  ========================= */

  const [skills, setSkills] = useState([
    "Figma",
    "Product Design",
    "UX Strategy",
    "Design Systems",
    "Prototyping",
    "User Research",
  ]);

  const [newSkill, setNewSkill] = useState("");


  /* =========================
     EXPERIENCE
  ========================= */

  const [experiences, setExperiences] =
    useState([
      {
        id: 1,
        position: "Product Designer",
        company: "North Studio",
        period: "2023 — Present",
        description:
          "تصميم تجارب ومنتجات رقمية متكاملة، والعمل على تطوير أنظمة التصميم وتحسين تجربة المستخدم عبر مختلف نقاط التفاعل.",
      },

      {
        id: 2,
        position: "UX Designer",
        company: "Pixel House",
        period: "2021 — 2023",
        description:
          "البحث في احتياجات المستخدمين، إنشاء النماذج الأولية، وتحويل الأفكار إلى تجارب رقمية واضحة وسهلة الاستخدام.",
      },
    ]);


  /* =========================
     EDUCATION
  ========================= */

  const [education, setEducation] =
    useState([
      {
        id: 1,
        degree: "Bachelor of Digital Design",
        university: "Toronto School of Design",
        period: "2017 — 2021",
      },
    ]);


  /* =========================
     EXPERIENCE MODAL
  ========================= */

  const [showExperienceForm, setShowExperienceForm] =
    useState(false);

  const [editingExperience, setEditingExperience] =
    useState(null);


  const [experienceForm, setExperienceForm] =
    useState({
      position: "",
      company: "",
      period: "",
      description: "",
    });


  /* =========================
     EDUCATION MODAL
  ========================= */

  const [showEducationForm, setShowEducationForm] =
    useState(false);


  const [educationForm, setEducationForm] =
    useState({
      degree: "",
      university: "",
      period: "",
    });


  /* =========================
     PROFILE INPUT
  ========================= */

  function handleProfileChange(event) {
    const {
      name,
      value,
    } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  }


  /* =========================
     IMAGE UPLOAD
  ========================= */

  function handleImageChange(event) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    const imageUrl =
      URL.createObjectURL(file);

    setProfileImage(imageUrl);
  }


  /* =========================
     ADD SKILL
  ========================= */

  function addSkill() {
    const trimmedSkill =
      newSkill.trim();

    if (
      !trimmedSkill ||
      skills.includes(trimmedSkill)
    ) {
      return;
    }

    setSkills((previous) => [
      ...previous,
      trimmedSkill,
    ]);

    setNewSkill("");
  }


  /* =========================
     REMOVE SKILL
  ========================= */

  function removeSkill(skillToRemove) {
    setSkills((previous) =>
      previous.filter(
        (skill) =>
          skill !== skillToRemove
      )
    );
  }


  /* =========================
     ADD / EDIT EXPERIENCE
  ========================= */

  function openExperienceForm(
    experience = null
  ) {
    if (experience) {
      setEditingExperience(
        experience.id
      );

      setExperienceForm({
        position:
          experience.position,

        company:
          experience.company,

        period:
          experience.period,

        description:
          experience.description,
      });
    } else {
      setEditingExperience(null);

      setExperienceForm({
        position: "",
        company: "",
        period: "",
        description: "",
      });
    }

    setShowExperienceForm(true);
  }


  function saveExperience() {
    if (
      !experienceForm.position.trim() ||
      !experienceForm.company.trim()
    ) {
      return;
    }


    if (editingExperience) {
      setExperiences((previous) =>
        previous.map((experience) =>
          experience.id === editingExperience
            ? {
                ...experience,
                ...experienceForm,
              }
            : experience
        )
      );
    } else {
      setExperiences((previous) => [
        ...previous,

        {
          id: Date.now(),
          ...experienceForm,
        },
      ]);
    }


    setShowExperienceForm(false);

    setEditingExperience(null);

    setExperienceForm({
      position: "",
      company: "",
      period: "",
      description: "",
    });
  }


  function deleteExperience(id) {
    setExperiences((previous) =>
      previous.filter(
        (experience) =>
          experience.id !== id
      )
    );
  }


  /* =========================
     ADD EDUCATION
  ========================= */

  function openEducationForm() {
    setEducationForm({
      degree: "",
      university: "",
      period: "",
    });

    setShowEducationForm(true);
  }


  function saveEducation() {
    if (
      !educationForm.degree.trim() ||
      !educationForm.university.trim()
    ) {
      return;
    }


    setEducation((previous) => [
      ...previous,

      {
        id: Date.now(),
        ...educationForm,
      },
    ]);


    setShowEducationForm(false);
  }


  function deleteEducation(id) {
    setEducation((previous) =>
      previous.filter(
        (item) =>
          item.id !== id
      )
    );
  }


  /* =========================
     PROFILE COMPLETION
  ========================= */

  const completion = useMemo(() => {
    const checks = [
      profile.name,
      profile.jobTitle,
      profile.email,
      profile.location,
      profile.bio,
      profile.linkedin,
      profile.behance,
      profile.portfolio,
      profileImage,
      skills.length > 0,
      experiences.length > 0,
      education.length > 0,
    ];

    const completed =
      checks.filter(Boolean).length;

    return Math.round(
      (completed / checks.length) * 100
    );
  }, [
    profile,
    profileImage,
    skills,
    experiences,
    education,
  ]);


  /* =========================
     SAVE
  ========================= */

  function handleSave() {
    alert(
      "تم حفظ الملف المهني بنجاح ✓"
    );
  }


  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#f7f8f5] pb-24 pt-32"
    >

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="profile-orb profile-orb-one" />

        <div className="profile-orb profile-orb-two" />

        <div className="profile-orb profile-orb-three" />

        <div className="profile-grid" />

      </div>


      {/* =========================
          PAGE CONTENT
      ========================= */}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">


        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-10">

          <span className="text-sm font-semibold text-[#138A43]">
            الملف الشخصي
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            ملفي المهني
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            أنشئ ملفك المهني وخلّي الشركات
            تتعرف على خبراتك ومهاراتك.
          </p>

        </div>


        {/* =========================
            PROFILE TOP CARD
        ========================= */}

        <section className="mb-6 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.07)]">

          {/* COVER */}

          <div className="relative h-36 overflow-hidden bg-gradient-to-l from-[#138A43] via-[#39a965] to-[#9ac4d3] sm:h-40">

            <div className="absolute inset-0 opacity-20">

              <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/20" />

              <div className="absolute -left-20 bottom-[-180px] h-96 w-96 rounded-full border-[70px] border-white/10" />

            </div>

          </div>


          {/* PROFILE CONTENT */}

          <div className="px-5 pb-7 sm:px-8">

            <div className="-mt-16 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">


              {/* PROFILE IMAGE + INFO */}

              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end">

                {/* PROFILE IMAGE */}

                <div className="relative">

                  <div className="h-32 w-32 overflow-hidden rounded-[30px] border-4 border-white bg-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.18)] sm:h-36 sm:w-36">

                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="صورة ليان منصور"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#138A43]/10 text-4xl font-bold text-[#138A43]">
                        {profile.name.charAt(0)}
                      </div>
                    )}

                  </div>


                  {/* CAMERA */}

                  <label
                    htmlFor="profile-image"
                    className="absolute -bottom-2 -left-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-[#138A43] text-white shadow-md transition hover:scale-105 hover:bg-[#0f7137]"
                  >

                    <Camera size={18} />

                    <input
                      id="profile-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />

                  </label>

                </div>


                {/* PROFILE DETAILS */}

                <div className="pb-1 text-center sm:text-right">

                  <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                    {profile.name}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-[#138A43]">
                    {profile.jobTitle}
                  </p>

                  <div className="mt-2 flex items-center justify-center gap-1 text-xs text-slate-400 sm:justify-start">

                    <MapPin size={13} />

                    {profile.location}

                  </div>

                </div>

              </div>


              {/* COMPLETION */}

              <div className="w-full sm:max-w-xs">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-xs font-medium text-slate-500">
                    اكتمال الملف
                  </span>

                  <span className="text-sm font-bold text-[#138A43]">
                    {completion}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-[#138A43] transition-all duration-500"
                    style={{
                      width: `${completion}%`,
                    }}
                  />

                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  أضف المعلومات الناقصة لتحسين ظهور ملفك.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            PERSONAL INFORMATION
        ========================= */}

        <section className="mb-6 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <SectionHeader
            title="المعلومات الشخصية"
            description="المعلومات الأساسية التي ستظهر في ملفك المهني."
          />


          <div className="grid gap-5 md:grid-cols-2">

            <InputField
              label="الاسم الكامل"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="مثال: ليان منصور"
            />


            <InputField
              label="المسمى الوظيفي"
              name="jobTitle"
              value={profile.jobTitle}
              onChange={handleProfileChange}
              placeholder="مثال: Product Designer"
            />


            <InputField
              label="البريد الإلكتروني"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="email@example.com"
              icon={<Mail size={17} />}
            />


            <InputField
              label="رقم الهاتف"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              placeholder="+1 555 000 0000"
              icon={<Phone size={17} />}
            />


            <InputField
              label="الموقع"
              name="location"
              value={profile.location}
              onChange={handleProfileChange}
              placeholder="المدينة، الدولة"
              icon={<MapPin size={17} />}
            />

          </div>


          {/* BIO */}

          <div className="mt-5">

            <label className="mb-2 block text-sm font-semibold text-slate-800">
              نبذة عني
            </label>

            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleProfileChange}
              rows={5}
              placeholder="اكتب نبذة قصيرة عن نفسك..."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#138A43] focus:bg-white focus:ring-4 focus:ring-[#138A43]/10"
            />

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section className="mb-6 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <SectionHeader
            title="المهارات"
            description="أضف المهارات التي تساعد الشركات على معرفة نقاط قوتك."
          />


          <div className="flex flex-wrap gap-2">

            {skills.map((skill) => (

              <div
                key={skill}
                className="group flex items-center gap-2 rounded-full bg-[#138A43]/10 px-4 py-2.5 text-sm font-medium text-[#138A43]"
              >

                {skill}

                <button
                  type="button"
                  onClick={() =>
                    removeSkill(skill)
                  }
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[#138A43]/60 transition hover:bg-red-100 hover:text-red-500"
                >
                  <X size={13} />
                </button>

              </div>

            ))}

          </div>


          {/* ADD SKILL */}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">

            <input
              type="text"
              value={newSkill}
              onChange={(event) =>
                setNewSkill(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addSkill();
                }
              }}
              placeholder="أضف مهارة جديدة..."
              className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#138A43] focus:bg-white focus:ring-4 focus:ring-[#138A43]/10"
            />

            <button
              type="button"
              onClick={addSkill}
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#138A43]"
            >
              <Plus size={17} />
              إضافة مهارة
            </button>

          </div>

        </section>


        {/* =========================
            EXPERIENCE
        ========================= */}

        <section className="mb-6 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <SectionHeader
            title="الخبرات العملية"
            description="أضف خبراتك السابقة والمشاريع التي عملت عليها."
            action={
              <button
                type="button"
                onClick={() =>
                  openExperienceForm()
                }
                className="flex items-center gap-2 rounded-xl bg-[#138A43] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0f7137]"
              >
                <Plus size={15} />
                إضافة خبرة
              </button>
            }
          />


          <div className="space-y-4">

            {experiences.map(
              (experience) => (

                <div
                  key={experience.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#138A43] shadow-sm">

                        <BriefcaseBusiness
                          size={20}
                        />

                      </div>


                      <div>

                        <h3 className="font-bold text-slate-950">
                          {experience.position}
                        </h3>

                        <p className="mt-1 text-sm text-[#138A43]">
                          {experience.company}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {experience.period}
                        </p>

                      </div>

                    </div>


                    <div className="flex items-center gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          openExperienceForm(
                            experience
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-[#138A43]/30 hover:text-[#138A43]"
                      >
                        <Pencil size={15} />
                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          deleteExperience(
                            experience.id
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={15} />
                      </button>

                    </div>

                  </div>


                  <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-500">
                    {experience.description}
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================= */}

        <section className="mb-6 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <SectionHeader
            title="التعليم"
            description="أضف مؤهلاتك التعليمية."
            action={
              <button
                type="button"
                onClick={openEducationForm}
                className="flex items-center gap-2 rounded-xl bg-[#138A43] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0f7137]"
              >
                <Plus size={15} />
                إضافة تعليم
              </button>
            }
          />


          <div className="space-y-4">

            {education.map(
              (item) => (

                <div
                  key={item.id}
                  className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#138A43] shadow-sm">

                      <GraduationCap
                        size={21}
                      />

                    </div>


                    <div>

                      <h3 className="font-bold text-slate-950">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm text-[#138A43]">
                        {item.university}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item.period}
                      </p>

                    </div>

                  </div>


                  <button
                    type="button"
                    onClick={() =>
                      deleteEducation(
                        item.id
                      )
                    }
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={15} />
                  </button>

                </div>

              )
            )}

          </div>

        </section>


        {/* =========================
            LINKS
        ========================= */}

        <section className="mb-6 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <SectionHeader
            title="الروابط المهنية"
            description="أضف روابط أعمالك وحساباتك المهنية."
          />


          <div className="grid gap-5 md:grid-cols-3">

            <InputField
              label="LinkedIn"
              name="linkedin"
              value={profile.linkedin}
              onChange={handleProfileChange}
              placeholder="linkedin.com/in/..."
              icon={<ExternalLink size={18} />}
            />


            <InputField
              label="Behance"
              name="behance"
              value={profile.behance}
              onChange={handleProfileChange}
              placeholder="behance.net/..."
              icon={<ExternalLink size={17} />}
            />


            <InputField
              label="Portfolio"
              name="portfolio"
              value={profile.portfolio}
              onChange={handleProfileChange}
              placeholder="yourportfolio.com"
              icon={<Link2 size={17} />}
            />

          </div>

        </section>


        {/* =========================
            SAVE BUTTON
        ========================= */}

        <div className="flex justify-end">

          <button
            type="button"
            onClick={handleSave}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#138A43] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#138A43]/15 transition hover:bg-[#0f7137] sm:w-auto"
          >

            <Save
              size={18}
              className="transition-transform group-hover:scale-110"
            />

            حفظ الملف المهني

          </button>

        </div>

      </div>


      {/* =========================
          EXPERIENCE MODAL
      ========================= */}

      {showExperienceForm && (

        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">

          <div className="max-h-[90vh] w-full overflow-y-auto rounded-t-[30px] bg-white p-6 shadow-2xl sm:max-w-xl sm:rounded-[30px]">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-950">
                  {editingExperience
                    ? "تعديل الخبرة"
                    : "إضافة خبرة"}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  أضف تفاصيل الخبرة العملية.
                </p>

              </div>


              <button
                type="button"
                onClick={() =>
                  setShowExperienceForm(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500"
              >
                <X size={18} />
              </button>

            </div>


            <div className="space-y-4">

              <InputField
                label="المسمى الوظيفي"
                value={experienceForm.position}
                onChange={(event) =>
                  setExperienceForm({
                    ...experienceForm,
                    position:
                      event.target.value,
                  })
                }
                placeholder="مثال: Product Designer"
              />


              <InputField
                label="اسم الشركة"
                value={experienceForm.company}
                onChange={(event) =>
                  setExperienceForm({
                    ...experienceForm,
                    company:
                      event.target.value,
                  })
                }
                placeholder="مثال: North Studio"
              />


              <InputField
                label="الفترة"
                value={experienceForm.period}
                onChange={(event) =>
                  setExperienceForm({
                    ...experienceForm,
                    period:
                      event.target.value,
                  })
                }
                placeholder="2023 — Present"
              />


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  وصف الخبرة
                </label>

                <textarea
                  rows={4}
                  value={
                    experienceForm.description
                  }
                  onChange={(event) =>
                    setExperienceForm({
                      ...experienceForm,
                      description:
                        event.target.value,
                    })
                  }
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none focus:border-[#138A43] focus:bg-white focus:ring-4 focus:ring-[#138A43]/10"
                  placeholder="اكتب وصفاً مختصراً..."
                />

              </div>

            </div>


            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowExperienceForm(false)
                }
                className="flex-1 rounded-2xl border border-slate-200 py-3 text-sm font-bold text-slate-600"
              >
                إلغاء
              </button>


              <button
                type="button"
                onClick={saveExperience}
                className="flex-[1.5] rounded-2xl bg-[#138A43] py-3 text-sm font-bold text-white"
              >
                حفظ الخبرة
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =========================
          EDUCATION MODAL
      ========================= */}

      {showEducationForm && (

        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">

          <div className="w-full rounded-t-[30px] bg-white p-6 shadow-2xl sm:max-w-xl sm:rounded-[30px]">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-950">
                  إضافة تعليم
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  أضف مؤهلك الدراسي.
                </p>

              </div>


              <button
                type="button"
                onClick={() =>
                  setShowEducationForm(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500"
              >
                <X size={18} />
              </button>

            </div>


            <div className="space-y-4">

              <InputField
                label="الشهادة"
                value={educationForm.degree}
                onChange={(event) =>
                  setEducationForm({
                    ...educationForm,
                    degree:
                      event.target.value,
                  })
                }
                placeholder="مثال: Bachelor of Digital Design"
              />


              <InputField
                label="الجامعة / المؤسسة"
                value={
                  educationForm.university
                }
                onChange={(event) =>
                  setEducationForm({
                    ...educationForm,
                    university:
                      event.target.value,
                  })
                }
                placeholder="اسم الجامعة"
              />


              <InputField
                label="الفترة"
                value={
                  educationForm.period
                }
                onChange={(event) =>
                  setEducationForm({
                    ...educationForm,
                    period:
                      event.target.value,
                  })
                }
                placeholder="2017 — 2021"
              />

            </div>


            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowEducationForm(false)
                }
                className="flex-1 rounded-2xl border border-slate-200 py-3 text-sm font-bold text-slate-600"
              >
                إلغاء
              </button>


              <button
                type="button"
                onClick={saveEducation}
                className="flex-[1.5] rounded-2xl bg-[#138A43] py-3 text-sm font-bold text-white"
              >
                حفظ التعليم
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}


/* =========================
   SECTION HEADER
========================= */

function SectionHeader({
  title,
  description,
  action,
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

      <div>

        <h2 className="text-xl font-bold text-slate-950">
          {title}
        </h2>

        <p className="mt-1 text-xs leading-6 text-slate-400">
          {description}
        </p>

      </div>

      {action}

    </div>
  );
}


/* =========================
   INPUT FIELD
========================= */

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>


      <div className="relative">

        {icon && (
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}


        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#138A43] focus:bg-white focus:ring-4 focus:ring-[#138A43]/10 ${
            icon
              ? "pr-11 pl-4"
              : "px-4"
          }`}
        />

      </div>

    </div>
  );
}


export default Profile;