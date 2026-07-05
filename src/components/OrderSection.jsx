const ORDER_FORM_URL = "https://docs.google.com/forms/d/1FbyqnHTnyYMYOb-hnQi0SrDacfC0GPus2RTkemWOs-E/viewform";

function OrderSection() {
  return (
    <section id="order" className="order-panel">
      <div>
        <p className="eyebrow">Order pickup</p>
        <h2>Ready to order?</h2>
        <p>
          Use our order form to choose your drinks, pickup time, and payment method.
          We'll send your order confirmation and invoice by email.
        </p>
      </div>
      <div className="order-card">
        <h3>Start your Phoenix Coffee order</h3>
        <p>
          Flavors include Caramel, Vanilla, French Vanilla, Toasted Marshmallow,
          Shaken Brown Sugar, Americano, and Sugar-Free Vanilla.
        </p>
        <a className="button full" href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer">
          Open Order Form
        </a>
      </div>
    </section>
  );
}

export default OrderSection;
