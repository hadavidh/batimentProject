export default function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Send Us a Message</h2>
      <form>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
