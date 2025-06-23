import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import profileImages from "../assets/images/Profiles";
// Scroll-triggered animation logic
function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          const animation = el.dataset.animation || "fadeInUp";
          el.classList.add('opacity-100', 'translate-y-0', `animate-${animation}`);
        }
      });
    };

    handleScroll(); // trigger on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default function ProfileCard({ image, name, title, bio, fullBio, className = "", ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  useScrollAnimation();

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className={`animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 ease-out max-w-sm w-full bg-white rounded-2xl shadow-md hover:shadow-xl hover:border-primary hover:border-3 hover:scale-105 transform cursor-pointer px-6 py-10 text-center border border-transparent ${className}`}
        data-animation="fadeInUp"
        {...rest}
      >
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary shadow-sm"
        />
        <h2 className="mt-6 text-2xl font-semibold text-text leading-tight">
          {name}
        </h2>
        <p className="mt-1 text-base text-gray-600 font-medium">{title}</p>
        <p className="mt-5 text-gray-800 text-base leading-relaxed">{bio}</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 p-4">
          <div
            ref={modalRef}
            className="relative max-w-4xl max-h-[80vh] w-full bg-white rounded-xl shadow-lg p-8 overflow-y-auto transform scale-100 opacity-100 transition-transform duration-300"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#3b82f6 #e5e7eb" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-blue-700 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-6 mb-6">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-sm"
              />
              <div>
                <h2 className="text-2xl font-semibold text-text">{name}</h2>
                <p className="text-md text-gray-600">{title}</p>
              </div>
            </div>
            <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base">
              {fullBio}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
