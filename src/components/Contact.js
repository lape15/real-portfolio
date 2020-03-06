import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const handleChange = e => {
    setForm({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { "form-name": "contact", ...this.state }
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };
  console.log(form);
  return (
    <div id="contact" style={{ background: theme.bg }} className="contact">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Say hi!</legend>
          <div>
            <label style={{ color: theme.ui }}>Name</label>

            <input
              type="text"
              placeholder="Jane Doe"
              style={{ color: theme.ui }}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={{ color: theme.ui }}>Email</label>
            <input
              type="email"
              placeholder="email@email.com"
              style={{ color: theme.ui }}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={{ color: theme.ui }} className="label">
              Hit me up
            </label>
            <textarea
              placeholder="Drop your messages here"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="btn">
            <button type="submit" style={{ color: theme.ui }}>
              Send!
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
