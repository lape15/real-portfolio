import React from "react";
import stamp from "../assets/stamp.svg";
const Home = () => {
  return (
    <div className="App-header">
      <img src={stamp} className="App-logo" alt="logo" />
      <p>Holaeeea</p>

      <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
        Need food
      </div>
    </div>
  );
};

export default Home;
