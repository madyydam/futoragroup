import type { FC } from 'react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import './Contact.css';

const Contact: FC = () => {
    return (
        <div className="contact-page">
            <SEO
                title="Contact Us — Partner with Futora Group"
                description="Get in touch with Futora Group. Partner with our AI product ecosystem or consult with our growth and technology services."
                url="https://futoragroup.in/contact"
            />
            <ContactSection />
        </div>
    );
};

export default Contact;
