import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm a VERY VERY BEST Home Component!</div>
      <button onClick={() => console.log("You actually hit me :/")}>
        Hit Me Bro!
      </button>
    </div>
  );
};

export default Home;
