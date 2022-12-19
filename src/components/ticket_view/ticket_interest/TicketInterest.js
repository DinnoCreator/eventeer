import classes from "../ticket_interest/Ticketinterest.module.css";

const TicketInterest = () => {
  return (
    <div className={classes.imgInfo}>
      <div className="container">
        <div className={`container ${classes.mag}`}>
          {/* <div className={`${classes.button} shadowB center mt-4 mb-4 roborobo`}>
                    I am interested
                  </div>
                  <div className={`${classes.button} ${classes.buy} ms-auto shadowB center mt-4 mb-4 roborobo`}>
                  <i className="fa-regular fa-square-check"></i> Buy - N2,000
                  </div> */}
          <div className={`d-grid ${classes.but}`}>
            <button className={`btn btn-lg  shadowB ${classes.buy} roborobo`} type="button">
            <i className="fa-regular fa-square-check"></i> Buy - N2,000.00
            </button>
          </div>
        </div>
        <div className={`container`}>
          <h3>
            24 <span className={`${classes.go}`}>people are going</span>
          </h3>
        </div>
        <div className={`container ${classes.pad}`}>
        <div className={`${classes.icon}`}>
        <i className="fa-regular fa-clock"></i>
        <span className={`${classes.date}`}>
        <p className={`${classes.go}`}>December 24, 2022</p>
        <p className={`${classes.p2}`}>8:00 - 10:00 PM</p>
        </span>
        </div>
        </div>
        <div className={`container ${classes.pad}`}>
        <div className={`${classes.icon}`}>
        <i className="fa-solid fa-location-dot"></i>
        <span className={`${classes.date}`}>
        <p className={`${classes.go}`}>Eleven Eleven, Calabar</p>
        <p className={`${classes.p2}`}>Marina Resort</p>
        </span> 
        </div>
        </div>
        <div className="container" style={{paddingTop: "2rem", textAlign: "center"}}>
          <h1 style={{textAlign: "left"}}>Place</h1>
          <div className="mapouter">
            <div className="gmap_canvas">
                <iframe title="Campus Tour" className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=calabar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                {/* <a href="https://formatjson.org/">format json</a> */}
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInterest;
