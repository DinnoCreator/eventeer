import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../popular/PopularEvents.module.css";
import { api } from "../../link/API";
import moment from 'moment';
import { neat } from "../../utilities/textUtil";
import PopularEventsSkeleton from "./PopularEventsSkeleton";

const PopularEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const getEvents = useCallback(async () => {
    try {
      await fetch(`${api}/user/mostpopularevent`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(async (res) => {
          const jsonData = await res.json();
          if (res.status !== 200 && res.status !== 201 && res.status !== 202) {
            return setIsAuthenticating(false);
          } else {
            setIsAuthenticating(false);
            return setEvents(jsonData);
          }
        })
      // .then((data) => {
      //   console.log(data);
      //   setName(data.userName);
      //   setPhoto(data.userPhoto)
      //   return setIsAuthenticating(false);
      // });
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      360: {
        items: 1.5,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2.5,
      },
      1000: {
        items: 3,
      },
    },
  };
  if (isAuthenticating) {
    return (
      <div className="container mt-5">
        <PopularEventsSkeleton />
      </div>
    )
  } else if (!isAuthenticating) {
    return (
      <>
        <div className="container mt-5">
          <h1 className={`${classes.h1}`} style={{ fontWeight: "bold" }}>
            Popular events
          </h1>
          <OwlCarousel
            className="owl-theme"
            // loop
            margin={10}
            autoplay
            responsive={state.responsive}
            dots={false}
          >
            {
              events.map((event) => {
                return (
                  <div
                    className="item shadowC card roborobo mb-3"
                    onClick={() => {
                      return navigate("/display", {
                        state: {
                          img: event.media,
                          icon: "fa-solid fa-music",
                          color: "#0ead69",
                        },
                      });
                    }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${event.media})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100%",
                      }}
                      className={`${classes.img} card-image-top roboroboT regimeHeight`}
                    >
                      <div className="row">
                        <div className="col-6 mt-3 mb-3 al">
                          <span className="green rad">
                            <i
                              style={{ color: "white" }}
                              className="fa-solid fa-music"
                            ></i>
                          </span>
                        </div>
                        <div className="col-6 mt-3 mb-3 ar">
                          <span className="white rad">
                            <i style={{color: '#828282'}} className="fa-regular fa-bookmark"></i>
                          </span>
                        </div>
                        <div className="col-6 mt-3  al">
                          <span
                            className="whiteBigi radi row"
                            style={{ display: "block" }}
                          >
                            <span className="first">{moment(event.start_date).format('DD')}</span>
                            <span className="second">{moment(event.start_date).format('MMM')}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body myContainer title1">
                      <h6>{neat(event.namer)}</h6>
                      <h6>
                        <i
                          style={{ color: "#7165E3" }}
                          className="fa-solid fa-location-dot"
                        ></i>
                        <span className="locationCol">&nbsp;{event.city}</span>
                      </h6>
                    </div>
                  </div>
                );
              })
            }
            {/* <div
              className="item shadowC card roborobo mb-3"
              onClick={() => {
                return navigate("/display", {
                  state: {
                    img: img2,
                    icon: "fa-solid fa-champagne-glasses",
                    color: "#55CCF8",
                  },
                });
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${img2})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                className={`${classes.img} card-image-top roboroboT regimeHeight`}
              >
                <div className="row">
                  <div className="col-6 mt-3 mb-3 al">
                    <span className="green blue rad">
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-champagne-glasses"
                      ></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 mb-3 ar">
                    <span className="white rad">
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 al">
                    <span
                      className="whiteBigi radi row"
                      style={{ display: "block" }}
                    >
                      <span className="first">24</span>
                      <span className="second">Mar</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body myContainer title1">
                <h6>Calabar Pool Party</h6>
                <h6>
                  <i
                    style={{ color: "#7165E3" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="locationCol">&nbsp;Marina Resort</span>
                </h6>
              </div>
            </div>
            <div
              className="item shadowC card roborobo mb-3"
              onClick={() => {
                return navigate("/display", {
                  state: {
                    img: img3,
                    icon: "fa-solid fa-music",
                    color: "#0ead69",
                  },
                });
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${img3})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                className={`${classes.img} card-image-top roboroboT regimeHeight`}
              >
                <div className="row">
                  <div className="col-6 mt-3 mb-3 al">
                    <span className="green rad">
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-music"
                      ></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 mb-3 ar">
                    <span className="white rad">
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 al">
                    <span
                      className="whiteBigi radi row"
                      style={{ display: "block" }}
                    >
                      <span className="first">24</span>
                      <span className="second">Mar</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body myContainer title1">
                <h6>Calabar Pool Party</h6>
                <h6>
                  <i
                    style={{ color: "#7165E3" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="locationCol">&nbsp;Marina Resort</span>
                </h6>
              </div>
            </div>
            <div
              className="item shadowC card roborobo mb-3"
              onClick={() => {
                return navigate("/display", {
                  state: {
                    img: img4,
                    icon: "fa-solid fa-music",
                    color: "#55CCF8",
                  },
                });
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${img4})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                className={`${classes.img} card-image-top roboroboT regimeHeight`}
              >
                <div className="row">
                  <div className="col-6 mt-3 mb-3 al">
                    <span className="green blue rad">
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-music"
                      ></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 mb-3 ar">
                    <span className="white rad">
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 al">
                    <span
                      className="whiteBigi radi row"
                      style={{ display: "block" }}
                    >
                      <span className="first">24</span>
                      <span className="second">Mar</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body myContainer title1">
                <h6>Calabar Pool Party</h6>
                <h6>
                  <i
                    style={{ color: "#7165E3" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="locationCol">&nbsp;Marina Resort</span>
                </h6>
              </div>
            </div>
            <div
              className="item shadowC card roborobo mb-3"
              onClick={() => {
                return navigate("/display", {
                  state: {
                    img: img5,
                    icon: "fa-solid fa-music",
                    color: "#0ead69",
                  },
                });
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${img5})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                className={`${classes.img} card-image-top roboroboT regimeHeight`}
              >
                <div className="row">
                  <div className="col-6 mt-3 mb-3 al">
                    <span className="green rad">
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-music"
                      ></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 mb-3 ar">
                    <span className="white rad">
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 al">
                    <span
                      className="whiteBigi radi row"
                      style={{ display: "block" }}
                    >
                      <span className="first">24</span>
                      <span className="second">Mar</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body myContainer title1">
                <h6>Calabar Pool Party</h6>
                <h6>
                  <i
                    style={{ color: "#7165E3" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="locationCol">&nbsp;Marina Resort</span>
                </h6>
              </div>
            </div>
            <div
              className="item shadowC card roborobo mb-3"
              onClick={() => {
                return navigate("/display", {
                  state: {
                    img: img6,
                    icon: "fa-solid fa-music",
                    color: "#0ead69",
                  },
                });
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${img6})`,
                  // backgroundImage: `url(${externalImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                className={`${classes.img} card-image-top roboroboT regimeHeight`}
              >
                <div className="row">
                  <div className="col-6 mt-3 mb-3 al">
                    <span className="green rad">
                      <i
                        style={{ color: "white" }}
                        className="fa-solid fa-music"
                      ></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 mb-3 ar">
                    <span className="white rad">
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <div className="col-6 mt-3 al">
                    <span
                      className="whiteBigi radi row"
                      style={{ display: "block" }}
                    >
                      <span className="first">24</span>
                      <span className="second">Mar</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body myContainer title1">
                <h6>Calabar Pool Party</h6>
                <h6>
                  <i
                    style={{ color: "#7165E3" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                  <span className="locationCol">&nbsp;Marina Resort</span>
                </h6>
              </div>
            </div> */}
          </OwlCarousel>
        </div>
      </>
    );
  }
};

export default PopularEvents;
