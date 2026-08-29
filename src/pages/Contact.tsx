import { useMemo } from 'react';
import type { FC } from 'react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import './Contact.css';

const Contact: FC = () => {
    const contactSchema = useMemo(() => ({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact Futora Group',
        'description': 'Official contact channel for corporate inquiries, product partnerships, and growth services with Futora Group.',
        'url': 'https://futoragroup.in/contact',
        'mainEntity': {
            '@type': 'Organization',
            'name': 'Futora Group of Companies',
            'email': 'futoragroup@gmail.com',
            'founder': 'Madhur Dhadve',
            'url': 'https://futoragroup.in/'
        }
    }), []);

    return (
        <div className="contact-page">
            <SEO
                title="Contact Us — Partner with Futora Group"
                description="Get in touch with Futora Group. Partner with our AI product ecosystem or consult with our growth and technology services."
                url="https://futoragroup.in/contact"
                schema={contactSchema}
            />
            <ContactSection />
        </div>
    );
};

export default Contact;
