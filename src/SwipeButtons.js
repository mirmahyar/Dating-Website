import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const clicked = () => {
  alert("You liked this person, now Swipe right! ");
};
const clickedCross = () => {
  alert("Don't like this person? That is alright ! Just swipe left ! ");
};
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontsize="small" />
      </IconButton>
      <IconButton className="swipeButtons__left" onClick={() => clickedCross()}>
        <CloseIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star" onClick={() => clicked()}>
        <StarRateIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={() => clicked()}>
        <FavoriteIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontsize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
