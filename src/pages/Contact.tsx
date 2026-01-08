import type { FC } from 'react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import './Contact.css';

const Contact: FC = () => {
    return (
        <div className="contact-page">
            <SEO
                title="Contact Us"
                description="Get in touch with Futora Group. We are always looking for partners, investors, and visionaries to build the future with us."
                url="https://futora.com/contact"
            />
            <ContactSection />
        </div>
    );
};

export default Contact;
