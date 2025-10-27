import ContactSection from '../components/sections/ContactSection.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const Contact = () => {
  useRevealOnScroll();

  return (
    <div>
      <header className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-cyan-50 sm:text-5xl">Let’s Build the Experience Together</h1>
        <p className="mt-4 text-base text-cyan-200/80 sm:text-lg">
          Share your goals and we will map out the technology to match. Our specialists respond quickly with next steps
          tailored to your environment.
        </p>
      </header>
      <ContactSection />
    </div>
  );
};

export default Contact;
