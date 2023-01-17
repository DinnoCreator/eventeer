import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";

const PopularEvents = () => {
  const navigate = useNavigate();

  // const handledisplay = () => {
  //     return navigate("/display", state={img: ""});
  // }

  const img1 =
    "https://media.istockphoto.com/id/1436949458/photo/multiracial-group-of-happy-friends-using-sparklers-and-having-fun-on-new-years-day-at-home.jpg?s=612x612&w=is&k=20&c=WVvnKvsC5BCUITjUxLJTqySECSDNFExgFLgyRlRrNJM=";
  const img2 =
    "https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=";
  const img3 =
    "https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.jpg?s=612x612&w=is&k=20&c=FVP_WApXKx0EBQMjvl30L94tSufh0fHyZ9bRc4Tw9DY=";
  const img4 =
    "https://media.istockphoto.com/id/1436949458/photo/multiracial-group-of-happy-friends-using-sparklers-and-having-fun-on-new-years-day-at-home.jpg?s=612x612&w=is&k=20&c=WVvnKvsC5BCUITjUxLJTqySECSDNFExgFLgyRlRrNJM=";
  const img5 =
    "https://media.istockphoto.com/id/1389845778/photo/bright-burning-sparklers-against-american-flag-closeup.jpg?s=612x612&w=is&k=20&c=_xz-QjdWP-LzGznvQLFBEtGF4kiym8ABq_Msy7ctjI0=";
  const img6 =
    "https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

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
  return (
    <>
      <div className="container">
        <h1 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "20px" }}>
          Popular events
        </h1>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay
          responsive={state.responsive}
          dots={false}
        >
          <div
            className="item shadowC card roborobo mb-3"
            onClick={() => {
              return navigate("/display", {
                state: {
                  img: img1,
                  icon: "fa-solid fa-music",
                  color: "#0ead69",
                },
              });
            }}
          >
            <div
              style={{
                backgroundImage: `url(${img1})`,
                // backgroundImage: `url(${externalImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "140px",
                width: "100%",
              }}
              className="card-image-top roboroboT"
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
                <div className="col-6 mt-3  al">
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
              <h6 className="resultMarquee">Calabar Pool Party</h6>
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
                height: "140px",
                width: "100%",
              }}
              className="card-image-top roboroboT"
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
                height: "140px",
                width: "100%",
              }}
              className="card-image-top roboroboT"
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
                height: "140px",
                width: "100%",
              }}
              className="card-image-top roboroboT"
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
                height: "140px",
                width: "100%",
              }}
              className="card-image-top roboroboT"
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
                height: "140px",
                width: "100%",
              }}
              className="card-image-top roboroboT"
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
        </OwlCarousel>
      </div>
    </>
  );
};

export default PopularEvents;
