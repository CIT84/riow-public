import React from "react";
import Title from "../UI/Title";
import Footer from "../UI/footer"

const Home = () => {
  return (
    <>
      <Title />
      <h1>WELCOME</h1>
      <div className="content">
        <p>World Rock Paper Scissors Society</p>
        <p>
          Starting in 2002, the World Rock Paper Scissors Society standardized a
          set of rules for international play and has overseen annual
          International World Championships. These open, competitive
          championships have been widely attended by players from around the
          world and have attracted widespread international media attention!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
