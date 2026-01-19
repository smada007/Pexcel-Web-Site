import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// Add keyframes + animation classes (same pattern as your other pages)
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeInUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes fadeInLeft {
    from { transform: translateX(-30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes fadeInRight {
    from { transform: translateX(30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .animate-on-scroll {
    opacity: 0;
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease forwards;
  }

  .animate-fadeInLeft {
    animation: fadeInLeft 0.8s ease forwards;
  }

  .animate-fadeInRight {
    animation: fadeInRight 0.8s ease forwards;
  }
`;
document.head.appendChild(styleSheet);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3 animate-on-scroll"
            data-animation="fadeInLeft"
          >
            About Pexcel Solutions
          </h1>
          <p
            className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl animate-on-scroll"
            data-animation="fadeInLeft"
          >
            Pexcel Solutions is a specialist consulting and solutions firm
            focused on delivery, risk, and governance in complex operational and
            technology environments.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-text mb-6 animate-on-scroll"
            data-animation="fadeInUp"
          >
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 animate-on-scroll" data-animation="fadeInLeft">
              <h3 className="text-lg font-semibold mb-2">Risk-informed delivery</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                We support technology and operational change with a pragmatic,
                risk-informed approach, improving clarity, governance, and
                predictability across delivery.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6 animate-on-scroll" data-animation="fadeInRight">
              <h3 className="text-lg font-semibold mb-2">Operational risk capability</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                We help organisations strengthen operational and technology risk
                practices through lightweight frameworks, reporting, and
                decision support aligned to maturity and assurance needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6 animate-on-scroll" data-animation="fadeInLeft">
              <h3 className="text-lg font-semibold mb-2">Architecture and design</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                We design scalable, secure solution architectures and data
                patterns that support integration, reporting, and operational
                resilience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6 animate-on-scroll" data-animation="fadeInRight">
              <h3 className="text-lg font-semibold mb-2">Practical solutions</h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                We develop and introduce lightweight tools that fit existing
                workflows, including OpsRisk (operational risk) and AIRisk
                (AI-assisted insight) where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-text mb-6 animate-on-scroll"
            data-animation="fadeInUp"
          >
            How We Work
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl animate-on-scroll" data-animation="fadeInUp">
            <ul className="text-sm text-gray-800 space-y-3">
              <li>
                <span className="font-semibold">Practical and outcome-focused:</span>{" "}
                we aim for measurable improvements, not process overhead.
              </li>
              <li>
                <span className="font-semibold">Aligned to governance:</span>{" "}
                delivery and risk practices designed to work with assurance and
                decision forums.
              </li>
              <li>
                <span className="font-semibold">Scaled to maturity:</span>{" "}
                we meet organisations where they are and uplift capability over time.
              </li>
              <li>
                <span className="font-semibold">Low change footprint:</span>{" "}
                solutions designed for adoption, using familiar patterns and tools.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience & domains */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-text mb-6 animate-on-scroll"
            data-animation="fadeInUp"
          >
            Experience and Domains
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 animate-on-scroll" data-animation="fadeInLeft">
              <h3 className="text-lg font-semibold mb-2">Typical environments</h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• Public sector and regulated environments</li>
                <li>• Operationally sensitive services</li>
                <li>• Multi-vendor delivery settings</li>
                <li>• Technology and data modernisation</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6 animate-on-scroll" data-animation="fadeInRight">
              <h3 className="text-lg font-semibold mb-2">Focus areas</h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• Operational and technology risk management</li>
                <li>• Governance, reporting, and decision support</li>
                <li>• Delivery assurance and controls</li>
                <li>• Reporting and insights (e.g., dashboards)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl sm:text-3xl font-bold text-text mb-6 animate-on-scroll"
            data-animation="fadeInUp"
          >
            Delivery Model
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl animate-on-scroll" data-animation="fadeInUp">
            <p className="text-sm text-gray-800 leading-relaxed">
              We operate with a small network of senior practitioners and
              specialist partners, scaling capability to fit client needs. This
              keeps engagements lean, practical, and focused on outcomes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animationType = entry.target.dataset.animation || "fadeInUp";
          const className = `animate-${animationType}`;

          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else {
            entry.target.classList.remove(className);
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
