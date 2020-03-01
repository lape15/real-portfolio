import React, { useContext } from "react";
// import { ReactComponent as Logo } from "../assets/human.svg";
import { Spring } from "react-spring/renderprops";
import { ThemeContext } from "../context/themContext";
// import lady from "../assets/walking.gif";
import ReactTypingEffect from "react-typing-effect";
import { ReactComponent as Logo } from "../assets/human.svg";

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="App-header"
      style={{ background: theme.bg, color: theme.ui }}
      id="home"
    >
      <div className="typing">
        <ReactTypingEffect
          text={[
            "Hello,",
            "My name is Lape",
            "I am a front-end Engineer",
            "I love to build stuff"
          ]}
          style={{ color: theme.ui }}
          className="letters"
        />
      </div>

      <div className="svg-container">
        <p style={{ color: theme.ui }}>Find out more about me</p>
      </div>
    </div>
  );
};
export default Home;

// class Home extends React.Component {
//   // static contextType = ThemeContext;

//   render() {
//     // const { isLight, light, dark } = this.context;
//     // const theme = isLight ? light : dark;
//     return (
//       <ThemeContext.Consumer>
//         {context => {
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;

//           return (
//             <div
//               className="App-header"
//               style={{ background: theme.bg, color: theme.ui }}
//             >
//               <ThemeToggle />
//               <Spring
//                 from={{ opacity: 0 }}
//                 to={{ opacity: 1 }}
//                 config={{ delay: 1000, duration: 1000 }}
//               >
//                 {props => <div style={props}>hello,My name is Lape</div>}
//               </Spring>
//               <img src={stamp} className="App-logo" alt="logo" />
//               <p style={{ color: theme.ui }}>Holaeeea</p>
//               <p style={{ color: theme.ui }}>Need food</p>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }
