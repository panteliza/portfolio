import React from "react";
import { BsDownload, BsEye } from "react-icons/bs";

const CV = () => {
  const resumeFile = "/Eliza Pant Resume.pdf";

  return (
    <section className="min-h-screen bg-[#070B14] px-4 py-8 text-white sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-5xl rounded-[24px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:p-6 md:rounded-[30px]">
        <div className="mb-6 flex flex-col gap-5 md:mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">Eliza Pant Resume</h1>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Frontend Developer • React.js • Next.js
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#070B14] transition hover:scale-[1.03] sm:px-6"
            >
              <BsEye />
              View Resume
            </a>

            <a
              href={resumeFile}
              download="Eliza Pant Resume.pdf"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:px-6"
            >
              <BsDownload />
              Download Resume
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white md:rounded-3xl">
          <iframe
            src={resumeFile}
            title="Eliza Pant Resume"
            className="h-[620px] w-full sm:h-[750px] md:h-[850px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CV;