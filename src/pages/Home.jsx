import "../pages/home.css";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import LikeFeature from "../components/LikeFeature";
import Comment from "../components/Comment"

function Home() {
  const [myData, setMyData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);


  const NewsDetails = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a678c91dfe4e48dcb6aa50005c20f263"
    );
    setFilteredData(res.data.articles);
    setMyData(res.data.articles);
    setIsLoaded(false);
  };
  useEffect(() => {
    NewsDetails();
  }, []);

  // remove article============>
  const removeArticle = (id) => {
    let filterData = myData.filter((item) => item.url !== id);
    setFilteredData(filterData);
  };

  // filtering data============>
  useEffect(() => {
    const afterFilterData = myData.filter((post) => {
      if (post.title) {
        post = post.title.toLowerCase();
        return post.includes(search.toLowerCase());
      }
    });
    setFilteredData(afterFilterData);
  }, [search]);

  return (
    <>
      <main>
        <div className="SearchBar">
          <input
            id="NewsSearch"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
          />
          <button className="search">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>
        <div className="load">{isLoaded ? "Loading..." : null}</div>
        <section className="container news">
        {filteredData.map((currData) => {
          return (
            <>
                <div id="cardMain">
                  <h2 className="titleMain">{currData.title}</h2>
                  <img
                    className="imgMain"
                    src={currData.urlToImage}
                    alt="image not available"
                  />
                  <p className="author">
                    <span className="by">By</span> {currData.author} |{" "}
                    <span>{currData.publishedAt}</span>
                  </p>
                  <div className="news-details">
                    <p className="content"> {currData.content}</p>
                    <p className="desc">{currData.description}</p>
                    <p className="source">Source: {currData.source.name}</p>
                  </div>
                  <div className="likeDislike"><LikeFeature/></div>
                  <div className="Comment flex"><Comment/></div>
                  <div className="Readremove flex">
                    <a className="ReadMore" href={currData.url}>
                      Read more...
                    </a>
                    <a
                      className="remove"
                      onClick={() => removeArticle(currData.url)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
            </>
          );
        })}
        </section>
      </main>
    </>
  );
}

export default Home;
