import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function ContactSection({ contact }) {
  return (
    <section id="contact" className="reveal">
      <div className="contact-card">
        <div className="contact-card__header">
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Plan your upgrade with a calm, proven team.</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300/90">
            Tell us about your traffic patterns, loyalty goals, and aesthetic vision. We will co-create a roadmap that balances speed, sustainability, and guest delight.
          </p>
        </div>
        <div className="contact-card__body">
          <div className="space-y-4 text-sm text-slate-300/90">
            <div className="contact-row">
              <span className="icon-frame icon-frame--sm">
                <MapPin size={16} />
              </span>
              {contact.location}
            </div>
            <div className="contact-row">
              <span className="icon-frame icon-frame--sm">
                <Phone size={16} />
              </span>
              {contact.phone}
            </div>
            <div className="contact-row">
              <span className="icon-frame icon-frame--sm">
                <Clock size={16} />
              </span>
              Consultations within 2 business days
            </div>
            <div className="contact-row">
              <span className="icon-frame icon-frame--sm">
                <Mail size={16} />
              </span>
              {contact.email}
            </div>
          </div>
          <div className="space-y-4">
            <a href={`mailto:${contact.email}`} className="cta-button inline-flex w-full items-center justify-center gap-2 text-sm">
              <Mail size={18} />
              Send Project Overview
            </a>
            <a href="#services" className="ghost-button inline-flex w-full items-center justify-center gap-2 text-sm">
              <Clock size={18} />
              Review Consultation Agenda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
