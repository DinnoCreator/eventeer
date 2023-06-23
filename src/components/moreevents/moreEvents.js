import classes from "../moreevents/moreEvents.module.css"
import { useState, useCallback, useEffect } from "react";

const MoreEvents = () => {
  return (
    <>
    <h1 className={`${classes.h1} container`} style={{fontWeight: "bold"}}>All events</h1>
      <div className="moreGrid">
        <div className="moreGridChild shadowB stuff">
          <div className="">
            <img
              className="moreImage"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F506388499%2F1206077796573%2F1%2Foriginal.20230502-081816?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=0%2C504%2C6016%2C3008&amp;s=e6016d6be9fee31955165b1b5dec81f0"
              alt="Africa Real Estate Certificate Masterclass"
              loading="lazy"
              height="250px"
            // width="350px"
            />
          </div>
          <div className="eventDetails container">
            <div className="titleOfEvent">Africa Real Estate Certificate Masterclass</div>
            <div className="dateOfEvent">Fri, Jul 6, 2:00 PM</div>
            <div className="addOfEvent">Federal palace hotel and casino •</div>
            <div className="priceOfEvent">Starts at N4,000</div>
            <div className="creatorOfEvent">Premium entertainment</div>
          </div>
        </div>
        <div className="moreGridChild shadowB stuff">
          <div className="">
            <img
              className="moreImage"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F476228579%2F167679916212%2F1%2Foriginal.20230323-165852?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C106%2C1620%2C810&s=92a0801ec66976bd022f5c13fabf8ccb"
              alt="Africa Real Estate Certificate Masterclass"
              loading="lazy"
              height="250px"
            // width="350px"
            />
          </div>
          <div className="eventDetails container">
            <div className="titleOfEvent">2023 African Missions Conference: "Show Me Your Glory" | Lagos, Nigeria</div>
            <div className="dateOfEvent">Fri, Jul 6, 2:00 PM</div>
            <div className="addOfEvent">Federal palace hotel and casino •</div>
            <div className="priceOfEvent">Free</div>
            <div className="creatorOfEvent">Jagabon</div>
          </div>
        </div>
        <div className="moreGridChild shadowB stuff">
          <div className="">
            <img
              className="moreImage"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F425365629%2F29860910359%2F1%2Foriginal.20230116-105436?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=537529bf703963e6910910b2384f7f50"
              alt="Africa Real Estate Certificate Masterclass"
              loading="lazy"
              height="250px"
            // width="350px"
            />
          </div>
          <div className="eventDetails container">
            <div className="titleOfEvent">Women Who Launch</div>
            <div className="dateOfEvent">Fri, Jul 6, 2:00 PM</div>
            <div className="addOfEvent">Federal palace hotel and casino •</div>
            <div className="priceOfEvent">Starts at N2,000</div>
            <div className="creatorOfEvent">Spice city</div>
          </div>
        </div>
        <div className="moreGridChild shadowB stuff">
          <div className="">
            <div
              className="skeleton moreImage"
            ></div>
          </div>
          <div className="eventDetails container">
            <div className="text skeleton titleOfEvent"></div>
            <div className="text skeleton titleOfEvent sub"></div>
            <div className="text skeleton dateOfEvent"></div>
            <div className="text skeleton addOfEvent"></div>
            <div className="text skeleton priceOfEvent"></div>
            <div className="text end skeleton creatorOfEvent"></div>
          </div>
        </div>
      </div>
    </>
  )
};

export default MoreEvents;
