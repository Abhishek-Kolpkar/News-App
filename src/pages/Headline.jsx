import React, { useEffect, useState } from "react";
import "../pages/headline.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Headline() {
  const [myData, setMyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const Headlines = async () => {
    const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a678c91dfe4e48dcb6aa50005c20f263"
      );
      setMyData(res.data.articles);
      setIsLoaded(false);
  };
  useEffect(() => {
    Headlines();
  }, []);

  return (
    <>
      <div id="gridHead" className="container">
        <div className="load">{isLoaded ? "Loading..." : null}</div>
        {myData.map((post) => {
          const { title, url } = post;
          return (
            <div className="cardHead">
              <div className="main-title">
                <FontAwesomeIcon
                  icon={faFile}
                  color="red"
                  className="icon"
                ></FontAwesomeIcon>{" "}
                <h2 id="titleH">{title}</h2>
              </div>
              <a href={url} id="url">
                Read More..
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Headline;
