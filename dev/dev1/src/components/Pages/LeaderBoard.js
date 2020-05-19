import React, { useState, useEffect } from "react";

import firebase from "../../auth/firebase"
import Title from "../UI/Title"
import Footer from '../UI/footer'

const LeaderBoard = () => {
  const [lb, setLB] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    let lbArr = [];
    const fetchLBData = async () => {
      const players = await db.collection("players").get();
      for (const doc of players.docs) {
        let total = 0;
        let wins = 0;
        let loss = 0;
        let tie = 0;
        let lbObj = {};
        lbObj.name = doc.data().playerInfo.playerame;
        const games = await db
          .collection("players")
          .doc(doc.id)
          .collection("games")
          .get();
        for (const doc of games.docs) {
          total += 1;
          if (doc.data().result === "Win") {
            wins += 1;
          } else if (doc.data().result === "Loss") {
            loss += 1;
          } else if (doc.data().result === "Tie") {
            tie += 1;
          }
        }
        lbObj.wins = wins;
        lbObj.lose = loss;
        lbObj.tie = tie;
        lbObj.total = total;
        lbArr.push(lbObj);
      }
      lbArr.sort((a, b) => parseFloat(b.wins) - parseFloat(a.wins));
      setLB(lbArr);
    };
    fetchLBData();
  }, []);

  let lbOutput = null;
  if (lb.length === 0) {
    lbOutput = <h1>Loading....</h1>;
  } else {
    lbOutput = lb.map((leader, index) => (
      <div key={index}>
        <span className="rock">Player --- </span> {leader.name} ---{" "}
        <span className="scissors">Wins:</span> {leader.wins}
      </div>
    ));
  }
  return (
    <>
      <Title />
      <h1>
        <span className="rock">Leader</span>
        <span className="scissors">Board</span>
      </h1>
      {lbOutput}
     <Footer />
    </>
  );
};

export default LeaderBoard
