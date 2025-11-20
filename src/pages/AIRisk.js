import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function AIRisk() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />

      {/* Hero section */}
      <section className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            AIRisk – AI-Assisted Risk Insight, On Your Terms
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
            AIRisk is an AI-assisted risk model developed by Pexcel to help
            organisations strengthen project and portfolio risk management.
            It doesn&apos;t replace your project managers or governance
            processes – it supports them with smarter, pattern-based
            suggestions.
          </p>
        </div>
      </section>

      {/* What AIRisk does */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            What AIRisk Does
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">
                Suggests risks – doesn&apos;t decide for you
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                AIRisk analyses patterns across projects – including scope,
                delivery teams, user groups, and historic issues – and suggests
                potential risks. Project managers, risk owners, and governance
                forums still make all the decisions.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">
                Works with your existing workflows
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                AIRisk is designed to sit alongside your current risk process,
                not replace it. You can keep your existing registers, forums,
                and approval steps, and simply use AI suggestions as an
                additional input.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">
                Keeps data inside your organisation
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                AIRisk can be deployed within your own environment or trusted
                cloud tenancy. Your data remains under your control, and
                models are trained on your organisation&apos;s delivery
                history – not on a shared external dataset.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">
                Supports reporting and trend analysis
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Risk and issue data can be surfaced through tools like Power BI
                to provide portfolio-level views, recurring themes, and trend
                analysis. AIRisk&apos;s suggestions can then be reviewed and
                verified against these reports.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">
                Learns from your context over time
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                AIRisk&apos;s model is organisation-specific. As more projects
                run and more decisions are made, the model refines its
                understanding of which risks matter most in your environment
                and where patterns are emerging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we introduce AIRisk */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6">
            How We Introduce AIRisk
          </h2>
          <p className="text-sm text-gray-800 leading-relaxed mb-4 max-w-3xl">
            We treat AIRisk as part of a broader uplift in risk practice,
            not a standalone product. Any introduction is done carefully,
            within your governance, security, and data settings.
          </p>

          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-800">
            <li>
              <span className="font-semibold">Understand your context.</span>{" "}
              Review your current project and portfolio risk processes,
              governance forums, and reporting needs.
            </li>
            <li>
              <span className="font-semibold">Identify where AI helps.</span>{" "}
              Determine where AI-assisted suggestions could add value without
              disrupting existing workflows.
            </li>
            <li>
              <span className="font-semibold">Design data and reporting flows.</span>{" "}
              Define how risk and issue data moves, how it is secured, and how
              it will be surfaced for executives and delivery teams.
            </li>
            <li>
              <span className="font-semibold">Pilot in a safe, controlled way.</span>{" "}
              Start with a small set of projects, validate suggestions against
              real decisions, and refine the model and process.
            </li>
            <li>
              <span className="font-semibold">Scale with confidence.</span>{" "}
              Once value and fit are proven, extend AIRisk support more widely
              across your portfolio, with clear governance around usage and
              oversight.
            </li>
          </ol>

          <p className="text-sm text-gray-800 leading-relaxed mt-6 max-w-3xl">
            If you&apos;re interested in exploring AI-assisted risk management
            in a safe, governed way, we can work with you to design a
            pilot that fits your organisation&apos;s maturity, risk appetite,
            and budget.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
