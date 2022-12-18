import classes from "../ticket_view/Ticketinterest.module.css";

const TicketInterest = () => {
    return(
            <div className={classes.imgInfo}>
              <div className="container">
                <div className={`container hstack ${classes.pad}`}>
                  <div className={`${classes.button} shadowB center mt-4 mb-4 roborobo`}>
                    I am interested
                  </div>
                  <div className={`${classes.button} ${classes.buy} ms-auto shadowB center mt-4 mb-4 roborobo`}>
                  <i class="fa-regular fa-square-check"></i> Buy - N2,000.00
                  </div>
                </div>
              </div>
            </div>
    );
}

export default TicketInterest;