import type { FC } from 'react';
import ContactSection from '../components/ContactSection';
import './Contact.css';

const Contact: FC = () => {
    return (
        <div className="contact-page">
            <ContactSection />
        </div>
    );
};

export default Contact;
