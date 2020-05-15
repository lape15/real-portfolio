import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import landing from "../assets/landing.png";
import todoApp from "../assets/todoApp.png";
import insure from "../assets/insure.png";
import covid from "../assets/Covid.png";
import mobile from "../assets/Mobile.png";
import crown from "../assets/crown.png";
import taxmingo from "../assets/taxmingo.png";
const Project = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{ background: theme.bg, color: theme.ui }}
      className="projects"
      id="projects"
    >
      <div className="project-one">
        <h3>Insure </h3>
        <p>A homepage for an insurance company</p>
        <img src={landing} alt="hi" />
        <div className="project-details">
          {" "}
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>javaScript</li>
          </ul>
          <div className="demo">
            <button style={{ background: theme.bg }}>
              <a
                href="https://github.com/lape15/landing-page"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                Github
              </a>
            </button>
            <button style={{ background: theme.bg }}>
              <a
                href="https://insure-landing.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                LiveApp
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-two">
        <h3> Todo App</h3>
        <p>An app that tracks your Todo list</p>
        <img src={todoApp} alt="A basic todo" />
        <div className="project-details">
          <ul>
            <li>React</li>
            <li>CSS</li>
          </ul>
          <div className="demo">
            <button style={{ background: theme.bg }}>
              <a
                href="https://github.com/lape15/react-todo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                Github
              </a>
            </button>
            <button style={{ background: theme.bg }}>
              <a
                href="https://lape-todo-app.netlify.app/?_ga=2.214513175.1255142733.1582624368-1331366421.1565187498"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                LiveApp
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-three">
        <h3>Manage </h3>
        <p>Homepage for a task anager App</p>
        <img src={insure} alt="A basic todo" />
        <div className="project-details">
          <ul>
            <li>HTML</li>
            <li>SCSS/CSS</li>
            <li>javaScript</li>
          </ul>
          <div className="demo">
            <button style={{ background: theme.bg }}>
              <a
                href="https://github.com/lape15/responsive-landing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                Github
              </a>
            </button>
            <button style={{ background: theme.bg }}>
              <a
                href="https://landinng.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                LiveApp
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-four">
        <h3> Corona App</h3>
        <p>Get daily coronavirus updates for countries in the world</p>
        <img src={covid} alt="A basic todo" />
        <div className="project-details">
          <ul>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>javaScript</li>
          </ul>
          <div className="demo">
            <button style={{ background: theme.bg }}>
              <a
                href="https://github.com/lape15/SCAMP-Assesment"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                Github
              </a>
            </button>
            <button style={{ background: theme.bg }}>
              <a
                href="https://covids19-updates.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                LiveApp
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-five">
        <h3>Gh mobile</h3>
        <p>A mobile telecomms company</p>
        <img src={mobile} alt="A basic todo" />
        <div className="project-details">
          <ul>
            <li>HTML</li>
            <li> CSS</li>
            <li>javaScript</li>
          </ul>
          <div className="demo">
            <button style={{ background: theme.bg }}>
              <a
                href="https://github.com/lape15/gh-mobile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                Github
              </a>
            </button>
            <button style={{ background: theme.bg }}>
              <a
                href="https://gh-mobilee.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                LiveApp
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-six">
        <h3>Crown clothings</h3>
        <p>A shopping App</p>
        <img src={crown} alt="A basic todo" />
        <div className="project-details">
          <ul>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>javaScript</li>
            <li>Redux</li>
          </ul>
          <div className="demo">
            <button style={{ background: theme.bg }}>
              <a
                href="https://github.com/lape15/emperor-chopsticks"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                Github
              </a>
            </button>
            <button style={{ background: theme.bg }}>
              <a
                href="https://shopwithlape.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.ui }}
              >
                LiveApp
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="project-seven">
        <h3>Taxming0</h3>
        <p>A tax filing and management app</p>
        <img src={taxmingo} alt="A basic todo" />
        <div className="project-details">
          <ul>
            <li>React</li>
            <li>CSS</li>
            <li>javaScript</li>
            <li>GraphQl</li>
          </ul>
          <div className="demo">COMING SOON!!</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
