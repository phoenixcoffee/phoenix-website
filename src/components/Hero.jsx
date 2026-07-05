import logo from "../assets/logo.png";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="logo-wrap">
        <img src={logo} alt="Phoenix Coffee logo" className="logo" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Premium ready-to-drink iced coffee</p>
        <h1>
          Rise.
          <br />
          Sip.
          <br />
          Repeat.
        </h1>
        <p className="intro">
          Phoenix Coffee crafts made-to-order iced coffee with fresh espresso,
          smooth flavors, and pickup-ready convenience.
        </p>
        <div className="cta-row">
          <a className="button" href="#order">Order Now</a>
          <a className="button ghost" href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
