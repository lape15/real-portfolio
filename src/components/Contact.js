import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Contact = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div id="contact" style={{ background: theme.bg }} className="contact">
      <form>
        <div>
          <div>
            <label style={{ color: theme.ui }}>Full Name</label>
          </div>
          <div>
            <input type="text" value="Jane Doe" style={{ color: theme.ui }} />
          </div>
        </div>
        <div>
          <div>
            <label style={{ color: theme.ui }}>Password</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="******************"
              style={{ color: theme.ui }}
            />
          </div>
        </div>
        <div>
          <div></div>
          <label>
            <input type="checkbox" style={{ color: theme.ui }} />
            <span>Send me your newsletter!</span>
          </label>
        </div>
        <div>
          <div></div>
          <div>
            <button
              type="submit"
              style={{ color: theme.ui, background: theme.bg }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
