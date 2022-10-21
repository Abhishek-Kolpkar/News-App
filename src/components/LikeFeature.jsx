import React, { useState } from "react";
import "../components/likeFeature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function LikeFeature() {
  const [LikeFeature, setLikeFeature] = useState(0);
  const [DeslikeFeature, setDeslikeFeature] = useState(0);

  const [likeState, setLikeState] = useState(false);
  const [deslikeState, setDeslikeState] = useState(false);

  const Like = () => {
    if (likeState) {
      setLikeState(false);
      setLikeFeature(LikeFeature + 1);
    } else {
      setLikeState(true);
      setLikeFeature(LikeFeature + 1);
      if (deslikeState) {
        setDeslikeState(false);
        setLikeFeature(LikeFeature + 1);
        setDeslikeFeature(LikeFeature - 1);
      }
    }
  };

  const Deslike = () => {
    if (deslikeState) {
      setDeslikeState(false);
      setDeslikeFeature(DeslikeFeature - 1);
    } else {
      setDeslikeState(true);
      setDeslikeFeature(LikeFeature + 1);
      if (likeState) {
        setDeslikeState(false);
        setDeslikeFeature(LikeFeature + 1);
        setLikeFeature(LikeFeature - 1);
      }
    }
  };

  return (
    <>
      <div className="likeDeslike">
        <div id="Ld" onClick={Like}>
          <FontAwesomeIcon icon={faThumbsUp} color="red" className="icons"></FontAwesomeIcon>
          {LikeFeature}{" "}
        </div>
        <div id="Ld" onClick={Deslike}>
          <FontAwesomeIcon icon={faThumbsDown} color="blue" className="icons"></FontAwesomeIcon>
          {DeslikeFeature}{" "}
        </div>
      </div>
    </>
  );
}

export default LikeFeature;
