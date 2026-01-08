import "./ContactPage.css";
import ContactForm from "./Form.tsx";

export default function ContactPage() {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero">
                <h1>Contact Us</h1>
                <p>We’re here to help you find your dream home!</p>
            </section>

            {/* Main Content */}
            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>We would love to hear from you. Reach out through any of the following:</p>
                    <ul>
                        <li>
                            <span className="icon">📍</span>
                            123 Main Street, Brussels, Belgium
                        </li>
                        <li>
                            <span className="icon">📞</span>
                            +32 123 456 789
                        </li>
                        <li>
                            <span className="icon">✉️</span>
                            info@realestate.com
                        </li>
                        <li>
                            <span className="icon">🏢</span>
                            Office Hours: Mon-Fri 9am-6pm
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <ContactForm/>
            </div>
        </div>
    );
}
