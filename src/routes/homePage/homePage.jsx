import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import "./homePage.scss";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Discover Your Dream Home & Find Your Perfect Place
          </h1>
          <p>
            Browse through a wide selection of properties to find the perfect
            match for your lifestyle. Whether you&apos;re looking to buy or
            rent, discover your ideal home with ease and start a new chapter
            today.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experiences</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
