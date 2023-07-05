import OwlCarousel from 'react-owl-carousel';
import { useState, useCallback, useEffect } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import classes from "../cathegories/Category.module.css"

const Categories = ({ cathegories, cathegoriesHandler }) => {
  const [cather, setCather] = useState('concert');
 
  const activeButton = {
    backgroundColor: '#7165E3',
    color: 'white'
  }
  const activeIcon = {
    color: 'white'
  }

  const cathegoryButtonCT = () => {
    cathegoriesHandler('concert');
  };
  const cathegoryButtonPT = () => {
    cathegoriesHandler('party');
  };
  const cathegoryButtonPG = () => {
    cathegoriesHandler('pageantry');
  };
  const cathegoryButtonCF = () => {
    cathegoriesHandler('conference');
  };
  const cathegoryButtonED = () => {
    cathegoriesHandler('education');
  };
  const cathegoryButtonTH = () => {
    cathegoriesHandler('theatre');
  };
  const cathegoryButtonSC = () => {
    cathegoriesHandler('services');
  };
  const cathegoryButtonCV = () => {
    cathegoriesHandler('carnival');
  };
  const cathegoryButtonFV = () => {
    cathegoriesHandler('festival');
  };
  const cathegoryButtonSP = () => {
    cathegoriesHandler('sport');
  };
  const cathegoryButtonTS = () => {
    cathegoriesHandler('talentshow');
  }

  console.log(cathegories);
  const state = {
    responsive: {
      0: {
        items: 2,
      },
      380: {
        items: 2.5,
      },
      600: {
        items: 3.5,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  }
  return (
    <>
      <div className='container roborobo'>
        <h1 className={`${classes.h1}`} style={{ fontWeight: "bold" }}>Categories</h1>
        <OwlCarousel
          className={`owl-theme ${classes.owl}`}
          loop
          margin={10}
          item="11"
          responsive={state.responsive}
          dots={false}>
          <div onClick={cathegoryButtonCT} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-music"></i>
              &nbsp;&nbsp;Concert
            </span>
          </div>
          <div onClick={cathegoryButtonPT} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-champagne-glasses"></i>
              &nbsp;&nbsp;Party
            </span>
          </div>
          <div onClick={cathegoryButtonPG} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-vest-patches"></i>
              &nbsp;&nbsp;Pageant
            </span>
          </div>
          <div onClick={cathegoryButtonCF} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-handshake"></i>
              &nbsp;&nbsp;Conference
            </span>
          </div>
          <div onClick={cathegoryButtonED} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-book" ></i>
              &nbsp;&nbsp;Education
            </span>
          </div>
          <div onClick={cathegoryButtonTH} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-clapperboard" ></i>
              &nbsp;&nbsp;Theatre
            </span>
          </div>
          <div onClick={cathegoryButtonSC} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-briefcase" ></i>
              &nbsp;&nbsp;Services
            </span>
          </div>
          <div onClick={cathegoryButtonCV} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-masks-theater" ></i>
              &nbsp;&nbsp;Carnival
            </span>
          </div>
          <div onClick={cathegoryButtonFV} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-gift" ></i>
              &nbsp;&nbsp;Festival
            </span>
          </div>
          <div onClick={cathegoryButtonSP} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-volleyball"></i>
              &nbsp;&nbsp;Sport
            </span>
          </div>
          <div onClick={cathegoryButtonTS} className={`item ${classes.cat} shadowC center card mt-4 mb-3 roborobo`}>
            <span className={`${classes.icon}`}>
              <i className="fa-solid fa-heart"></i>
              &nbsp;&nbsp;Talentshow
            </span>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default Categories;