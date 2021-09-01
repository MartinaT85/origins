import * as React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Kontakujte nas">
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="Sprava"
                className="form-control"
                rows="5"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                Odoslat
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default Contact;
