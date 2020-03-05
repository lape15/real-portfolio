import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Contact = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div id="contact" style={{ background: theme.bg }} className="contact">
      <form data-netlify="true">
        <fieldset>
          <legend>Say hi!</legend>
          <div>
            <label style={{ color: theme.ui }}>Name</label>

            <input
              type="text"
              placeholder="Jane Doe"
              style={{ color: theme.ui }}
            />
          </div>
          <div>
            <label style={{ color: theme.ui }}>Email</label>
            <input
              type="email"
              placeholder="email@email.com"
              style={{ color: theme.ui }}
            />
          </div>
          <div>
            <label style={{ color: theme.ui }} className="label">
              Hit me up
            </label>
            <textarea placeholder="Drop your messages here"></textarea>
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
