const features = [
  {
    icon: "☕",
    title: "Fresh Espresso",
    text: "Made with fresh espresso and balanced flavors for a smooth ready-to-drink coffee.",
  },
  {
    icon: "🧊",
    title: "Chilled & Canned",
    text: "Prepared cold, sealed in cans, and ready for pickup when your order is ready.",
  },
  {
    icon: "✨",
    title: "Made Your Way",
    text: "Choose your flavor, milk option, cold foam, quantity, and pickup time.",
  },
];

function Features() {
  return (
    <section id="coffee" className="features" aria-label="Coffee highlights">
      {features.map((feature) => (
        <article key={feature.title}>
          <span className="icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  );
}

export default Features;
