import face from "./face.svg";
import image1 from "./img-1.jfif";
import image2 from "./img-2.jfif";
import instagram from "./instagram.svg";
import tweet from "./tweet.svg";
import triple from "./triple.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="a">
        <div id="c">
          <div
            id="x"
            style={{ right: "20px", marginRight: "3px" }}
            className="logo"
          >
            <img src={face} alt="" />
          </div>
          <div
            id="y"
            style={{ right: "40px", marginRight: "3px" }}
            className="logo"
          >
            <img src={instagram} alt="" />
          </div>
          <div id="z" style={{ marginRight: "3px" }} className="logo">
            <img src={tweet} alt="" />
          </div>

          <img
            style={{ width: "100%", height: "150px", borderRadius: "10px" }}
            src={image1}
            alt=""
          />
        </div>
      </div>
      <div id="b">
        <div id="d"></div>
        <div style={{ paddingTop: "15px" }} id="e">
          <p style={{ marginBottom: "0" }}>Sukant Thakur</p>
          <p style={{ fontWeight: "bold", margin: "0" }}>UI developer</p>
        </div>
        <div id="f">
          <img style={{ width: "25px" }} src={triple} alt="" />
        </div>
      </div>

      <div id="g">
        <div id="i">
          <div
            id="x"
            style={{ right: "20px", marginRight: "3px" }}
            className="logo"
          >
            <img src={face} alt="" />
          </div>
          <div
            id="y"
            style={{ right: "40px", marginRight: "3px" }}
            className="logo"
          >
            <img src={instagram} alt="" />
          </div>
          <div id="z" style={{ marginRight: "3px" }} className="logo">
            <img src={tweet} alt="" />
          </div>

          <img
            style={{ width: "100%", height: "150px", borderRadius: "10px" }}
            src={image2}
            alt=""
          />
        </div>
      </div>
      <div id="h">
        <div id="j"></div>
        <div id="k">
          <p style={{ marginBottom: "0px" }}>Sukant Thakur</p>
          <p style={{ fontWeight: "bold", margin: "0" }}>Manager</p>
        </div>
        <div id="l">
          <img style={{ width: "25px" }} src={triple} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
