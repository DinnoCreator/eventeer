import classes from "../ticket_interest/Ticketinterest.module.css";

const TicketInterestSkeleton = () => {
    const location = "eleven eleven calabar";
    return (
        <div className={classes.imgInfo}>
            <div className="container">
                <div className={`container ${classes.mag}`}>
                    <div className={`${classes.skeleton} ${classes.LTextA}`}></div>
                </div>
                <div className={`${classes.pad} ${classes.flexTDP} container`}>
                    <div className={`${classes.flexTDCL}`}>
                        <div className={`${classes.skeleton} ${classes.iconI} `}></div></div>
                    <div className={`${classes.flexTDCC}`}>
                        <div>
                            <div className={`${classes.skeleton} ${classes.LTextA}`}></div>
                            <div className={`${classes.skeleton} ${classes.STextA}`}></div>
                        </div>
                    </div>
                    <div className={` ${classes.flexTDCR}`}>
                        <div className={`${classes.directionA}`}>
                        </div>
                    </div>
                </div>
                <div className={`${classes.pad} ${classes.flexTDP} container`}>
                    <div className={`${classes.flexTDCL}`}>
                        <div className={`${classes.skeleton} ${classes.iconI} `}></div></div>
                    <div className={`${classes.flexTDCC}`}>
                        <div>
                            <div className={`${classes.skeleton} ${classes.LTextA}`}></div>
                            <div className={`${classes.skeleton} ${classes.STextA}`}></div>
                        </div>
                    </div>
                    <div className={` ${classes.flexTDCR}`}>
                        <div className={`${classes.skeleton} ${classes.directionA}`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketInterestSkeleton;