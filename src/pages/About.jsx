import  { useEffect } from "react"
import { Target, BookOpen, Award, Check } from "lucide-react"
import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import profileImages from "../assets/images/Profiles"
const styleSheet = document.createElement("style")
styleSheet.textContent = `
  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideUpOut {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100%); opacity: 0; }
  }
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
  .animate-on-scroll { opacity: 0; }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
  .animate-fadeInLeft { animation: fadeInLeft 0.8s ease forwards; }
  .animate-fadeInRight { animation: fadeInRight 0.8s ease forwards; }

  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translateY(-200vh) scale(1.5);
      opacity: 0;
    }
  }
  .bubble {
    position: absolute;
    bottom: -50px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    opacity: 0.6;
    animation: floatUp linear infinite;
    pointer-events: none;
  }
  .bubble-1 { left: 10%; width: 20px; height: 20px; animation-duration: 15s; }
  .bubble-2 { left: 25%; width: 35px; height: 35px; animation-duration: 18s; }
  .bubble-3 { left: 40%; width: 15px; height: 15px; animation-duration: 12s; }
  .bubble-4 { left: 55%; width: 30px; height: 30px; animation-duration: 20s; }
  .bubble-5 { left: 70%; width: 25px; height: 25px; animation-duration: 16s; }
  .bubble-6 { left: 85%; width: 40px; height: 40px; animation-duration: 22s; }
`
document.head.appendChild(styleSheet)


function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animationType = entry.target.dataset.animation || "fadeInUp"
          const className = `animate-${animationType}`

          if (entry.isIntersecting) {
            entry.target.classList.add(className)
          } else {
            entry.target.classList.remove(className)
          }
        })
      },
      { threshold: 0.15 }
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return null
}


export default function About() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
       <ScrollToTop /> 
      {/* 3.1. Insert ScrollAnimation at top */}
      <ScrollAnimation />

      {/* 3.2. Navbar (unchanged) */}
      <Navbar logo="/PexcelLogo.png" companyName="Pexcel Solutions Limited" />

      {/* 3.3. Hero Section WITH BUBBLES (copy from Home.jsx) */}
    {/* 4. Contact Banner WITH BUBBLES */}
      <div className="bg-primary text-white relative overflow-hidden">
        {/* Floating bubbles */}
        <div className="absolute inset-0 z-0">
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="bubble bubble-4"></span>
          <span className="bubble bubble-5"></span>
          <span className="bubble bubble-6"></span>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 animate-on-scroll"
              data-animation="fadeInLeft"
            >
            About Pexcel Solutions
            </h1>
            <div
              className="w-24 h-1 bg-white mx-auto mb-8 rounded-full animate-on-scroll"
              data-animation="fadeInUp"
            ></div>
            <p
              className="text-lg md:text-xl mb-8 animate-on-scroll"
              data-animation="fadeInUp"
            >
            We help enterprises deliver with clarity, confidence, and measurable impact through tailored solutions and strategic thinking.</p>
          </div>
        </div>
      </div>


      <section
        id="about-us"
        className="py-8 bg-white container mx-auto px-4 animate-on-scroll"
        data-animation="fadeInUp"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-200 to-white p-10 rounded-2xl shadow-lg mb-12 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              At <span className="font-semibold text-text">Pexcel Solutions Limited</span>, we help
              enterprises deliver with clarity, confidence, and measurable impact.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              We specialise in
              <span className="font-medium text-black"> project management, solution architecture, IT project risk management, </span>and
              <span className="font-medium text-black"> bespoke development services</span> 
              — all tailored to meet the demands of complex business and technology initiatives.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Our approach is grounded in
              <span className="font-medium text-gray-900"> continuous learning, simplicity</span>, and
              <span className="font-medium text-gray-900"> strategic thinking</span>. We don't just deliver
              projects — we solve real business problems through practical, value-driven solutions.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              With a deep understanding of enterprise environments, we focus on
              <span className="font-medium text-black"> long-term partnerships, trusted advice</span>, and
              <span className="font-medium text-black"> delivery excellence</span> that challenges the status quo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Vision Section */}
            <div
              className="bg-gradient-to-br from-purple-200 to-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition duration-300 animate-on-scroll"
              data-animation="fadeInLeft"
            >
              <div className="flex items-start">
                <div className="bg-primary p-4 rounded-xl mr-5 flex-shrink-0 shadow-md">
                  <Target className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To be a trusted partner in transforming how businesses deliver
                    outcomes—through innovative thinking, meaningful collaboration,
                    and a relentless focus on simplicity, value, and long-term impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div
              className="bg-gradient-to-br from-purple-200 to-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition duration-300 animate-on-scroll"
              data-animation="fadeInRight"
            >
              <div className="flex items-start">
                <div className="bg-primary p-4 rounded-xl mr-5 flex-shrink-0 shadow-md">
                  <BookOpen className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our mission is to empower organisations to solve complex
                    challenges through smart, practical, and tailored solutions. We
                    combine continuous learning, strategic insight, and co-elevating
                    teamwork to deliver measurable business value at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div
            className="bg-gradient-to-br from-purple-200 to-white p-10 rounded-xl shadow-lg animate-on-scroll"
            data-animation="fadeInUp"
          >
            <div className="flex items-center mb-8 border-b border-blue-200 pb-4">
              <div className="bg-primary p-4 rounded-xl mr-5 flex-shrink-0 shadow-md">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-text">Our Values</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 hover:bg-secondary rounded-lg transition duration-300">
                <div className="bg-primary p-2 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <Check className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold text-text">Continuous Learning</span> – We embrace
                    growth, curiosity, and knowledge to stay ahead in a changing world.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 hover:bg-secondary rounded-lg transition duration-300">
                <div className="bg-primary p-2 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <Check className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold text-text">Simplicity & Innovation</span> – We find
                    elegant solutions to complex problems by challenging conventional
                    thinking.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 hover:bg-secondary rounded-lg transition duration-300">
                <div className="bg-primary p-2 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <Check className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold text-text">Business Value First</span> – Every action we
                    take is guided by the impact it brings to our clients' success.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 hover:bg-secondary rounded-lg transition duration-300">
                <div className="bg-primary p-2 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <Check className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold text-text">Collaboration & Co-Elevation</span> – We rise by
                    lifting each other, working as one team to achieve more together.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 hover:bg-secondary rounded-lg transition duration-300">
                <div className="bg-primary p-2 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <Check className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold text-text">Relationship-Driven</span> – We build trust and
                    partnerships that stand the test of time.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 hover:bg-white rounded-lg transition duration-300">
                <div className="bg-primary p-2 rounded-lg mr-4 flex-shrink-0 shadow-sm">
                  <Check className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold text-text">Challenging the Status Quo</span> – We are not
                    afraid to ask "why not" and lead the way to better, smarter outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————————————
          Team Section (with scroll animations)
      ————————————————————————————————————————————————————————————————————— */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl text-center font-bold text-text mb-20 animate-on-scroll"
            data-animation="fadeInUp"
          >
            Our Professionals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
            <ProfileCard
              image = {profileImages.Sajeev}
              name="Sajeev Madathiveetil"
              title="Director, Delivery & Partnership Lead"
              bio="AI-driven project leader passionate about transforming IT risk management with explainable, context-aware solutions."
              fullBio={`Sajeev Madathiveetil is a highly experienced Senior IT Project Manager and founder of Pexcel Solutions, with over 15 years of leadership in digital transformation, SaaS implementation, data migration, and AI-powered risk management across the New Zealand public sector. As the Delivery & Partnership Lead for AIRisk, he spearheads the design and rollout of a next-generation AI-assisted risk platform that transforms how IT projects predict and manage delivery risks.\n
                        Sajeev brings deep expertise in enterprise architecture, project governance, and benefit realisation, having successfully led multimillion-dollar initiatives at the Ministry for Primary Industries, Wellington City Council, and Ministry of Social Development. He is known for delivering value through structured delivery methods (PMP, PRINCE2, AgilePM), business-case leadership, and stakeholder alignment at the executive and ministerial level.\n
                        His current focus is on building partnerships across academia and industry to deliver explainable, context-aware AI solutions tailored to organisational risk environments — combining predictive machine learning, scope/context linking, and transparent governance.
                        `}
            />
            <ProfileCard
              image={profileImages.Sushil}
              name="Sushil Kamanahalli"
              title="Solution Design Partner - AIRisk"
              bio="Solution architect blending AI, cloud, and integration to deliver scalable, trusted systems for the public sector."
              fullBio={`Cloud | Integration | Data | AI | Public Sector\n
                        Sushil Kamanahalli is a versatile Solutions Architect with over 20 years of experience delivering high-impact solutions across AI, cloud platforms, data integration, and enterprise architecture. Based in Wellington, he has led complex digital initiatives for organisations including MSD, MBIE, NEC Australia, and DXC Technology.\n
                        Sushil brings deep knowledge of AI-enabled systems, particularly in designing scalable, explainable solutions that bridge data, decision logic, and business outcomes. With a background in AWS architecture, MuleSoft integration, and public-sector transformation, he’s ideally positioned to guide the technical evolution of AIRisk into enterprise settings.\n
                        He has a track record of translating business complexity into actionable technical blueprints, and is passionate about embedding AI responsibly within governance frameworks.
                        `}
            />
            <ProfileCard
              image={profileImages.Frank}
              name="Frank van der Zwaag"
              title="Risk Practice Partner - AIRisk"
              bio="Risk and audit expert with 20+ years securing governance and compliance across Asia-Pacific, shaping trusted risk solutions."
              fullBio={`Frank van der Zwaag is a senior risk and audit professional with over 20 years of experience in governance, information security, compliance, and risk system design across the Asia-Pacific region. Formerly the NZ Risk Manager and Regional Information Security Officer for VTNZ (a DEKRA company), Frank brings deep expertise in enterprise risk frameworks, regulatory environments, and internal audit assurance.\n
                        He has worked across both operational and strategic domains — from implementing ISO-aligned quality systems to designing investigation case management tools at MBIE, and lecturing on governance, complexity, and risk at Victoria University of Wellington.\n
                        At AIRisk, Frank advises on risk logic, industry alignment, and assurance strategy — helping ensure the platform's recommendations are context-aware, auditable, and align with evolving governance standards.`}
            />
          </div>
        </div>
      </section>

      {/* Include Footer if desired */}
      <Footer />
    </div>
  )
}
