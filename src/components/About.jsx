import React, { useEffect, useMemo, useRef, useState } from "react";
import elu from "../assets/IMG_6234.jpg";

import {
  Sparkles,
  Globe,
  Shield,
  Code2,
  Wand2,
} from "lucide-react";

const About = () => {
  const roles = useMemo(
    () => [
      "Computer Science & Information Technology Graduate",
      "Frontend Web Developer • React.js • Next.js",
      "Building Real-World Projects Across Nepal",
    ],
    []
  );

  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % roles.length);
    }, 2800);

    return () => clearInterval(t);
  }, [roles.length]);

  const ref = useRef(null);

  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20"
      aria-label="About section"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute inset-0 bg-[#070A12]" />

        <div className="absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-500/35 via-fuchsia-500/25 to-cyan-500/25 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-500/20 via-sky-500/20 to-indigo-500/25 blur-3xl animate-[float_12s_ease-in-out_infinite]" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] [background-size:56px_56px]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">

        {/* Badge */}
        <div className="mb-8 flex items-center gap-3">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">

            <Sparkles size={16} className="text-white/80" />

            Nepal • Frontend Developer • Portfolio

          </div>

        </div>

        <div
          ref={ref}
          className={`grid items-center gap-10 md:grid-cols-2 ${
            seen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          } transition-all duration-700 ease-out`}
        >

          {/* LEFT */}
          <div className="space-y-6">

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl leading-tight">

              Creating modern digital experiences with{" "}

              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-200 bg-clip-text text-transparent">

                creativity & purpose

              </span>

              .

            </h1>

            {/* Animated Roles */}
            <div className="text-base sm:text-lg text-white/85">

              <span className="text-white/50">
                I’m{" "}
              </span>

              <span
                key={i}
                className="inline-block bg-gradient-to-r from-emerald-300 via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent font-semibold"
                style={{ animation: "pop .55s ease both" }}
              >
                {roles[i]}
              </span>

            </div>

            {/* About Text */}
            <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">

              I am a passionate frontend web developer and Computer Science &
              Information Technology graduate focused on building modern,
              responsive, and real-world digital experiences.

              <br />
              <br />

              I have worked on projects for some of Nepal’s leading businesses
              and organizations including manufacturers, construction
              companies, hotels, educational institutes, clinics, and healthcare
              platforms.

              <br />
              <br />

              I enjoy creating clean user interfaces, smooth user experiences,
              and professional web solutions that combine creativity with
              functionality.

              <br />
              <br />

              Positive, fun-loving, hardworking, and highly motivated, I
              continuously push myself to learn, improve, and deliver impactful
              digital products.

            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">

              {[
                {
                  icon: <Code2 size={16} />,
                  label: "Frontend Development",
                },

                {
                  icon: <Wand2 size={16} />,
                  label: "Modern UI/UX",
                },

                {
                  icon: <Shield size={16} />,
                  label: "Responsive Design",
                },

                {
                  icon: <Globe size={16} />,
                  label: "Real-World Projects",
                },
              ].map((x) => (
                <span
                  key={x.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-white/80 backdrop-blur transition hover:bg-white/[0.10]"
                >

                  <span className="text-white/70">
                    {x.icon}
                  </span>

                  {x.label}

                </span>
              ))}

            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">

              {[
                {
                  k: "Projects",
                  v: "Real-world",
                },

                {
                  k: "Focus",
                  v: "Frontend UI",
                },

                {
                  k: "Mindset",
                  v: "Creative",
                },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
                >

                  <div className="text-xs text-white/50">
                    {s.k}
                  </div>

                  <div className="mt-1 text-sm font-semibold text-white/90">
                    {s.v}
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20 blur-2xl animate-[pulseSoft_3s_ease-in-out_infinite]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur">

              <div className="relative overflow-hidden rounded-2xl">

                <img
                  src={elu}
                  alt="Eliza"
                  className="h-[360px] w-full object-cover transition duration-700 hover:scale-[1.05]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070A12]/70 via-transparent to-transparent" />

              </div>

              <div className="mt-4 flex items-center justify-between">

                <div>

                  <div className="text-sm font-semibold text-white">
                    Eliza Pant
                  </div>

                  <div className="text-xs text-white/55">
                    Frontend Web Developer • Nepal
                  </div>

                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/80">
                  “Build with creativity.”
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Animation */}
        <style>{`
          @keyframes pop {
            from {
              opacity: 0;
              transform: translateY(8px) scale(.98);
              filter: blur(6px);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(18px);
            }
          }

          @keyframes pulseSoft {
            0%, 100% {
              opacity: .6;
            }

            50% {
              opacity: 1;
            }
          }
        `}</style>

      </div>
    </section>
  );
};

export default About;