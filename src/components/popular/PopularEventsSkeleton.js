import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "../popular/PopularEvents.module.css"

const PopularEventsSkeleton = () => {
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
        <div className="container">
            <h1 className={`${classes.h1}`} style={{ fontWeight: "bold" }}>
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
                    className="item shadowC card roborobo mb-3">
                    <div
                        className={`${classes.img} ${classes.skeleton} card-image-top roboroboT regimeHeight`}
                    >
                        {/* <div
                  className={``}
                ></div> */}
                    </div>
                    <div className="card-body myContainer title1">
                        <div className={`${classes.skeleton} ${classes.title}`}></div>
                        <div className={`${classes.skeleton} ${classes.location}`}></div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default PopularEventsSkeleton;