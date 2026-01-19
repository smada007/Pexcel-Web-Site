import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function OpsRisk() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            OpsRisk – Practical Operational Risk Management
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
            OpsRisk is a lightweight, standards-aligned operational risk
            management solution designed for organisations that need stronger
            control and visibility — without the overhead of full enterprise
            risk platforms.
          </p>
        </div>
      </section>

      {/* Who OpsRisk is for */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            Who OpsRisk Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800 leading-relaxed">
                Organisations without a dedicated enterprise risk system, but
                with increasing operational, technology, or information risk.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800 leading-relaxed">
                Teams relying on spreadsheets and manual registers who want
                more structure, consistency, and reporting.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800 leading-relaxed">
                Environments where change management needs to be minimal and
                adoption must be fast.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800 leading-relaxed">
                Organisations operating in regulated or operationally sensitive
                contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What OpsRisk solves */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            What OpsRisk Solves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl shadow-md p-6">
              <h3 className="font-semibold mb-2">
                Inconsistent risk registers
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Provides a consistent structure for capturing, assessing, and
                tracking operational and information risks across teams.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6">
              <h3 className="font-semibold mb-2">
                Limited visibility for management
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Risk data can be surfaced through dashboards and reports,
                supporting oversight without manual consolidation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6">
              <h3 className="font-semibold mb-2">
                Heavy enterprise risk tooling
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Avoids complex implementations and focuses on what is actually
                needed at an operational level.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-md p-6">
              <h3 className="font-semibold mb-2">
                Change fatigue
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Built on familiar tools and patterns, reducing learning curve
                and adoption risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How OpsRisk works */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            How OpsRisk Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800">
                Define operational and information risk categories aligned to
                your context and standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800">
                Capture and assess risks using consistent scoring and treatment
                structures.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800">
                Track actions, ownership, and review cycles in a controlled way.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-gray-800">
                Report and analyse risks using dashboards and management views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship to AIRisk */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            How OpsRisk and AIRisk Work Together
          </h2>

          <div className="bg-gray-50 rounded-2xl shadow-md p-6 max-w-3xl">
            <p className="text-sm text-gray-800 leading-relaxed">
              OpsRisk provides a strong operational risk foundation. Where
              appropriate, organisations may later introduce AI-assisted
              techniques (such as AIRisk) to enhance insight, consistency, and
              early identification of emerging risks.
            </p>

            <p className="text-sm text-gray-800 leading-relaxed mt-4">
              AIRisk does not require the use of OpsRisk. It is an optional
              capability introduced when maturity, data quality, and governance
              are ready.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
