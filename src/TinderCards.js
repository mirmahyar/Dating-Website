import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Al Pacino",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Al_Pacino.jpg",
    },
    {
      name: "Kevin Spacey",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kevin_Spacey_%40_San_Diego_Comic-Con_2008_-_b.jpg/170px-Kevin_Spacey_%40_San_Diego_Comic-Con_2008_-_b.jpg",
    },
    {
      name: "Scarlet Johansson",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/396px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg",
    },
  ]);

  const [youLiked, setYouLiked] = useState(false);

  /*useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);
*/
  const swiped = (direction, nameToDelete) => {
    if (direction == "right") {
      alert(`You liked ${nameToDelete}`);
    }

    //console.log("removing:" + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
