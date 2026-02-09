import React, { useState, useEffect, useRef } from "react";
import { PROJECTS, EXPERIENCES, SKILLS } from "./constants";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
// import AIChat from "./components/AIChat";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("hiii");

    emailjs
      .sendForm(
        "service_3bgywt3",
        "template_wm7kezl",
        formRef.current!,
        "Xy3VWJV-2W4Xb08S4",
      )
      .then(() => {
        console.log("ergwerg");
        toast.success("Message sent successfully ✈️", {
          position: "top-right",
          autoClose: 3000,
        });

        setFormState({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Try again!", {
          position: "top-right",
          autoClose: 3000,
        });

        setIsSubmitting(false);
      });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDark ? "dark bg-slate-950 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="fixed inset-0 pattern-grid opacity-30 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-center">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 shadow-sm border border-white/20 dark:border-slate-800/50 text-sm md:text-base overflow-x-auto max-w-[95vw]">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-500 transition-colors font-medium whitespace-nowrap"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-500 transition-colors font-medium whitespace-nowrap"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-blue-500 transition-colors font-medium whitespace-nowrap"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-blue-500 transition-colors font-medium whitespace-nowrap"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-500 transition-colors font-medium whitespace-nowrap"
          >
            Contact
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-all flex-shrink-0"
          >
            {isDark ? "🌞" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="mb-6 inline-block glass px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium text-blue-600 dark:text-blue-400">
          Available for new projects
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Naseef P.
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-8 text-slate-600 dark:text-slate-300 max-w-2xl">
          Flutter Developer specialized in high-performance apps with elegant,
          iOS-inspired UI.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl"
          >
            Let's Talk
          </button>
          <a
            href="https://github.com/naseefpnp"
            target="_blank"
            className="glass px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all border border-white/20"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-slate-500 dark:text-slate-400 text-sm">
          <span className="flex items-center gap-2">📍 Malappuram, Kerala</span>
          <span className="flex items-center gap-2">📱 +91 6238788735</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-600">🚀</span> About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Flutter Developer with 2+ years of experience building
              production-ready mobile and desktop applications. Currently
              working at <strong>Polosys Technologies LLP</strong>, specializing
              in scalable architectures (Clean, DDD, MVVM, MVC) and modern state
              management.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Passionate about writing clean code, building intuitive UI, and
              delivering high-quality user experiences inspired by Apple’s
              design philosophy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((group, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-3xl border border-white/20"
              >
                <h3 className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-sm bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-slate-500">
              A showcase of production apps and experimental builds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="glass group hover:-translate-y-2 transition-all duration-300 rounded-[2rem] p-8 border border-white/20 flex flex-col h-full shadow-lg"
              >
                <div className="text-5xl mb-6">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-100 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="text-sm bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-slate-500 space-y-2">
                  {project.features.map((f, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <span className="text-blue-500">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-blue-600/30"
            >
              <div className="absolute top-0 -left-[9px] w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-950"></div>
              <div className="mb-1 text-sm font-bold text-blue-600 uppercase tracking-tighter">
                {exp.period}
              </div>
              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
              <div className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-4">
                {exp.company}
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                {exp.highlights.map((h, hidx) => (
                  <li key={hidx} className="flex gap-3">
                    <span className="text-blue-500">→</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-500">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="glass p-8 rounded-[2rem] border border-white/20">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:naseefpnp098@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Me</p>
                    <p className="font-semibold">naseefpnp098@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/10 text-purple-600 rounded-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Me</p>
                    <p className="font-semibold">+91 6238788735</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600/10 text-orange-600 rounded-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-semibold">Malappuram, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/naseef-p-47494427b"
                target="_blank"
                className="flex-1 glass p-4 rounded-2xl border border-white/20 text-center font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/naseefpnp"
                target="_blank"
                className="flex-1 glass p-4 rounded-2xl border border-white/20 text-center font-semibold hover:bg-slate-900 hover:text-white transition-all"
              >
                GitHub
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleEmailSubmit}
            className="glass p-8 md:p-10 rounded-[2rem] border border-white/20 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                required
                name="name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                placeholder="Your Name"
                className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                required
                name="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                placeholder="Your Gmail"
                className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Tell me more about you..."
                className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send via Email
            </button>
          </form>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-24 px-6 text-center bg-slate-100 dark:bg-slate-900/30">
        <div className="glass max-w-3xl mx-auto p-12 rounded-[3rem] border border-white/20">
          <h2 className="text-3xl font-bold mb-6">Curriculum Vitae</h2>
          <p className="text-slate-500 mb-8">
            Download my full professional resume for detailed technical
            qualifications and academic background.
          </p>

          <a
            href="/Resume.pdf"
            download="Naseef_P_Resume.pdf"
            className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-2xl w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/naseefpnp"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/naseef-p-47494427b"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:naseefpnp098@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            Email
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Naseef P. Designed with clean code &
          passion.
        </p>
      </footer>

      {/* Floating Elements */}
      {/* <AIChat /> */}
      <ToastContainer aria-label="Notifications" />
    </div>
  );
};

export default App;
