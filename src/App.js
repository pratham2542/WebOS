import "./app.css";
import { useState } from "react";
import logo from "./images/apple-logo.png";
import next from "./images/next.png";
import Draggable from "react-draggable";
import profilephoto from "./images/profile photo.jpg";

function App() {
  const allinone_time = new Date();
  const [hrs, sethrs] = useState(allinone_time.getHours());
  const [minutes, setminutes] = useState(allinone_time.getMinutes());
  const [month, setmonth] = useState(allinone_time.getMonth());
  const [day, setday] = useState(allinone_time.getDay());
  const [date, setdate] = useState(allinone_time.getDate());

  let monthString, dayString;

  const switchDateandTime = () => {
    switch (month) {
      case 0:
        monthString = "January";
        break;
      case 1:
        monthString = "February";
        break;
      case 2:
        monthString = "March";
        break;
      case 3:
        monthString = "April";
        break;
      case 4:
        monthString = "May";
        break;
      case 5:
        monthString = "Jun";
        break;
      case 6:
        monthString = "July";
        break;
      case 7:
        monthString = "August";
        break;
      case 8:
        monthString = "September";
        break;
      case 9:
        monthString = "October";
        break;
      case 10:
        monthString = "November";
        break;
      case 11:
        monthString = "December";
        break;
      default:
        break;
    }
    switch (day) {
      case 1:
        dayString = "Monday";
        break;

      case 2:
        dayString = "Tuesday";
        break;

      case 3:
        dayString = "Wednesday";
        break;

      case 4:
        dayString = "Thursday";
        break;

      case 5:
        dayString = "Friday";
        break;
      case 6:
        dayString = "Saturday";
        break;

      case 0:
        dayString = "Sunday";
        break;

      default:
        break;
    }
  };
  switchDateandTime();
  const setDateandTime = () => {
    sethrs(allinone_time.getHours());
    setminutes(allinone_time.getMinutes());
    setmonth(allinone_time.getMonth());
    setday(allinone_time.getDay());
    setdate(allinone_time.getDate());
    switchDateandTime();
  };

  const [lock, setlock] = useState(true);
  const [firstlock, setfirstlock] = useState(true);
  const [about, setabout] = useState(false);
  const [fullScreen, setfullscreen] = useState({
    app1: false,
    app2: false,
    app3: false,
    app4: false,
    app5: false,
    app6: false,
    about: false,
  });
  const [app1, setapp1] = useState(false);
  const [app2, setapp2] = useState(false);
  const [app3, setapp3] = useState(false);
  const [app4, setapp4] = useState(false);
  const [app5, setapp5] = useState(false);
  const [app6, setapp6] = useState(false);

  const [zIndexes, setZIndexes] = useState({
    app1: 1,
    app2: 2,
    app3: 3,
    app4: 4,
    app5: 5,
    app6: 6,
    about: 7,
  });

  const bringToFront = (box) => {
    const newZIndexes = { ...zIndexes };
    const maxZIndex = Math.max(...Object.values(zIndexes));
    newZIndexes[box] = maxZIndex + 1;
    setZIndexes(newZIndexes);
  };

  setTimeout(() => {
    setDateandTime();
  }, 1000 * 60);
  return (
    <div className="App">
      <div className={lock === true ? (firstlock?"first-lockscreen":"lockscreen") : "lockscreen-unlock"}>
        <div className="lockscreen-clock">
          <h3 style={{ textShadow: "0px 0px 10px grey" }}>
            {dayString}, {monthString} {date}
          </h3>
          <h1 style={{ textShadow: "0px 0px 10px grey" }}>
            {hrs}:
            {minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}
          </h1>
        </div>
        <div className="lockscreen-content">
          <img className="logo" src={profilephoto} alt="" />
          <h3
            style={{ marginBottom: "10px", textShadow: "0px 0px 10px grey" }}
            className="admin"
          >
            Admin
          </h3>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "30px",
            }}
          >
            <input
              style={{
                borderRadius: "15px",
                height: "25px",
                outline: "none",
                padding: "10px",
                border: "0",
                color: "grey",
                backgroundColor: "rgba(246, 243, 233,0.8)",
              }}
              placeholder="Enter Password"
              type="password"
            ></input>
            <div
              style={{ marginInline: "10px", paddingBlock: "5px" }}
              onClick={() => {
                setfirstlock(false);
                setlock(false);
              }}
            >
              <img
                style={{
                  height: "25px",
                  marginTop: "4px",
                  filter: "grayscale(1) invert(1)",
                  opacity: "0.8",
                }}
                src={next}
                alt=""
              />
            </div>
          </div>

          <p
            style={{
              fontFamily: "sf-pro-medium",
              letterSpacing: "1.3px",
              marginTop: "10px",
              color: "white",
              textShadow: "0px 0px 10px grey",
            }}
          >
            Your default password is 1234
          </p>
        </div>
      </div>
      <div className="top-bar">
        <div
          className="left-top-bar"
          onClick={() => {
            bringToFront("about");
            setabout(true);
          }}
        >
          <img src={logo} alt="" />
        </div>
        <div className="right-top-bar">
          <div onClick={()=>{setlock(true)}}  style={{height:"15px",marginInline:"15px",filter:" grayscale(1) invert(1)",marginBlock:"auto"}}>
            <img
              src="https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png"
              alt=""
              height={"100%"}
            />
          </div>
          <div>
          {" "}{dayString} {date} {monthString} {hrs}:{minutes}{" "}

          </div>
          
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "22px",
          bottom: "81px",
          width: "100%",
          overflow: "auto",
        }}
      >
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          {about ? (
            <Draggable
              onStart={() => bringToFront("about")}
              bounds="parent"
              handle=".handle"
            >
              <div
                style={{ zIndex: zIndexes.about }}
                className={fullScreen.about ? "about-full" : "about"}
              >
                <div
                  className="handle"
                  style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "rgba(246, 243, 233,0.6)",
                    borderRadius: "15px 15px 0 0",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="menu-button button-close"
                      onClick={() => {
                        setabout(false);
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexGrow: 1,
                      marginRight: "5%",
                      justifyContent: "center",
                    }}
                  >
                    <h3 className="aboutme">Pratham Mehta</h3>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "88%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      display: "grid",
                      justifyItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "55%", borderRadius: "50%" }}
                      src={profilephoto}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      paddingLeft: "20px",
                    }}
                  >
                    <p>pratham</p>
                    <p>frontend developer</p>
                    <p>react , react-native</p>
                    <p>B.Tech CSE</p>
                  </div>
                </div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}

          {app1 ? (
            <Draggable onStart={() => bringToFront("app1")} bounds="parent">
              <div
                style={{ zIndex: zIndexes.app1 }}
                className={fullScreen.app1 ? "about-full" : "about"}
              >
                <div
                  className="handle"
                  style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "rgba(246, 243, 233,0.6)",
                    borderRadius: "15px 15px 0 0",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="menu-button button-close"
                      onClick={() => {
                        setapp1(false);
                      }}
                    ></div>
                    <div
                      className="menu-button button-full"
                      onClick={() => {
                        setfullscreen({ ...about, app1: true });
                      }}
                    ></div>
                    <div
                      className="menu-button button-mini"
                      onClick={() => {
                        setfullscreen({ ...about, app1: false });
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexGrow: 1,
                      marginRight: "5%",
                      justifyContent: "center",
                    }}
                  >
                    <h3 className="aboutme">Clock</h3>
                  </div>
                </div>

                <div style={{ height: "100%" }}></div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}
          {app2 ? (
            <Draggable onStart={() => bringToFront("app2")} bounds="parent">
              <div
                style={{ zIndex: zIndexes.app2 }}
                className={fullScreen.app2 ? "about-full" : "about"}
              >
                <div style={{ display: "flex", padding: "10px" }}>
                  <div
                    className="menu-button button-close"
                    onClick={() => {
                      setapp2(false);
                    }}
                  ></div>
                  <div
                    className="menu-button button-full"
                    onClick={() => {
                      setfullscreen({ ...about, app2: true });
                    }}
                  ></div>
                  <div
                    className="menu-button button-mini"
                    onClick={() => {
                      setfullscreen({ ...about, app2: false });
                    }}
                  ></div>
                </div>
                <div></div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}
          {app3 ? (
            <Draggable onStart={() => bringToFront("app3")} bounds="parent">
              <div
                style={{ zIndex: zIndexes.app3 }}
                className={fullScreen.app3 ? "about-full" : "about"}
              >
                <div style={{ display: "flex", padding: "10px" }}>
                  <div
                    className="menu-button button-close"
                    onClick={() => {
                      setapp3(false);
                    }}
                  ></div>
                  <div
                    className="menu-button button-full"
                    onClick={() => {
                      setfullscreen({ ...about, app3: true });
                    }}
                  ></div>
                  <div
                    className="menu-button button-mini"
                    onClick={() => {
                      setfullscreen({ ...about, app3: false });
                    }}
                  ></div>
                </div>
                <div style={{ height: "100%", flexGrow: 1 }}>
                  <div style={{ height: "100%" }}>
                    <iframe
                      src="https://blogspot-five.vercel.app/"
                      title="Embedded Browser"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}
          {app4 ? (
            <Draggable onStart={() => bringToFront("app4")} bounds="parent">
              <div
                style={{ zIndex: zIndexes.app4 }}
                className={fullScreen.app4 ? "about-full" : "about"}
              >
                <div style={{ display: "flex", padding: "10px" }}>
                  <div
                    className="menu-button button-close"
                    onClick={() => {
                      setapp4(false);
                    }}
                  ></div>
                  <div
                    className="menu-button button-full"
                    onClick={() => {
                      setfullscreen({ ...about, app4: true });
                    }}
                  ></div>
                  <div
                    className="menu-button button-mini"
                    onClick={() => {
                      setfullscreen({ ...about, app4: false });
                    }}
                  ></div>
                </div>
                <div style={{ height: "100%", flexGrow: 1 }}>
                  <div style={{ height: "100%" }}>
                    <iframe
                      src="https://weather-cast-ld2l.vercel.app/"
                      title="Embedded Browser"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}
          {app5 ? (
            <Draggable onStart={() => bringToFront("app5")} bounds="parent">
              <div
                style={{ zIndex: zIndexes.app5 }}
                className={fullScreen.app5 ? "about-full" : "about"}
              >
                <div style={{ display: "flex", padding: "10px" }}>
                  <div
                    className="menu-button button-close"
                    onClick={() => {
                      setapp5(false);
                    }}
                  ></div>
                  <div
                    className="menu-button button-full"
                    onClick={() => {
                      setfullscreen({ ...about, app5: true });
                    }}
                  ></div>
                  <div
                    className="menu-button button-mini"
                    onClick={() => {
                      setfullscreen({ ...about, app5: false });
                    }}
                  ></div>
                </div>
                <div></div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}
          {app6 ? (
            <Draggable onStart={() => bringToFront("app6")} bounds="parent">
              <div
                style={{ zIndex: zIndexes.app6 }}
                className={fullScreen.app6 ? "about-full" : "about"}
              >
                <div style={{ display: "flex", padding: "10px" }}>
                  <div
                    className="menu-button button-close"
                    onClick={() => {
                      setapp6(false);
                    }}
                  ></div>
                  <div
                    className="menu-button button-full"
                    onClick={() => {
                      setfullscreen({ ...about, app6: true });
                    }}
                  ></div>
                  <div
                    className="menu-button button-mini"
                    onClick={() => {
                      setfullscreen({ ...about, app6: false });
                    }}
                  ></div>
                </div>
                <div></div>
              </div>
            </Draggable>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="dock-container">
        <div className="dock">  
          <div
            className="icon-wrapper"
            onClick={() => {
              bringToFront("app1");
              setapp1(true);
            }}
          >
            <div className="icon dock-icon-1"> </div>
            
            
          </div>
          <div
            className="icon-wrapper"
            onClick={() => {
              bringToFront("app2");
              setapp2(true);
            }}
          >
            <div className="icon dock-icon-2"> </div>
          </div>
          <div
            className="icon-wrapper"
            onClick={() => {
              bringToFront("app3");
              setapp3(true);
            }}
          >
            <div className="icon dock-icon-3"></div>
          </div>
          <div
            className="icon-wrapper"
            onClick={() => {
              bringToFront("app4");
              setapp4(true);
            }}
          >
            <div className="icon dock-icon-4"></div>
          </div>
          <div
            className="icon-wrapper"
            onClick={() => {
              bringToFront("app5");
              setapp5(true);
            }}
          >
            <div className="icon dock-icon-5"> </div>
          </div>
          <div
            className="icon-wrapper"
            onClick={() => {
              bringToFront("app6");
              setapp6(true);
            }}
          >
            <div className="icon dock-icon-6"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
