function ContactSection() {
  return (
    <section id="contact" className="contact-panel">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Questions or bulk orders?</h2>
        <p>Reach out anytime for pickup questions, catering, or larger coffee orders.</p>
      </div>
      <div className="contact-grid">
        <a href="mailto:orders@phoenixroast.com">
          <strong>Email</strong>
          <span>orders@phoenixroast.com</span>
        </a>
        <a href="https://phoenixroast.com">
          <strong>Website</strong>
          <span>phoenixroast.com</span>
        </a>
        <a href="https://www.instagram.com/phoenix.iced.coffees" target="_blank" rel="noopener noreferrer">
          <strong>Instagram</strong>
          <span>@phoenix.iced.coffees</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
