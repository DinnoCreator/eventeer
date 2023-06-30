import classes from "../moreevents/moreEvents.module.css"
import { useState, useCallback, useEffect, useRef } from "react";
import moment from 'moment';
import { api } from "../../link/API";
import clsx from "clsx";
import useLazyLoader from "../../useLazyLoading";
import MoreSkeleton from "./moreSkeleton";
import { eventAddressTrimmer, neat } from "../../utilities/textUtil";



const MoreEvents = () => {
    const [events, setEvents] = useState("");
    const [fetching, setFetching] = useState(true);
    const [divVis, setDivVis] = useState(true);
    const [firstLoad, onFirstLoad] = useState(true);
    const triggerRef = useRef(null);

    const fetcher = useCallback(async () => {
        try {
            await fetch(`${api}/user/regimesoffline`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(async (res) => {
                const datai = await res.json();
                if (res.status === 200) {
                    console.log(datai);
                    setEvents(datai)
                    return setFetching(false);
                } else {
                    return console.error(datai);
                }
            })
        } catch (error) {
            return console.error(error);
        }
    }, []);

    useEffect(() => {
        fetcher()
    }, [fetcher]);

    const num_per_page = 3;
    // const total_pages = 3;
    const actual_pages = Number(events.length) / num_per_page;
    const modulo_pages = Number(events.length) % num_per_page;
    const total_pages = () => {
        if (modulo_pages === 0) {
            return actual_pages
        } else {
            return actual_pages + 1
        }
    }
    const onGrabData = (currentPage) => {
        return new Promise((resolve, reject) => {
            onFirstLoad(false);
            // if (currentPage > total_pages()) {
            //     setDivVis(false)
            //     reject('End of events');
            // }

            const dataSliced = events.slice(
                ((currentPage - 1) % total_pages()) * num_per_page,
                num_per_page * (currentPage % total_pages())
                // ((currentPage - 1) % total_pages) * num_per_page,
                // num_per_page * (currentPage % total_pages)
            );
            resolve(dataSliced);
        })
    }

    const { data } = useLazyLoader({ triggerRef, onGrabData });


    if (fetching) {
        return (
            <>
                <h1 className={`${classes.h1} container`} style={{ fontWeight: "bold" }}>All events</h1>
                <div className='moreGrid'>
                    <MoreSkeleton />
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1 className={`${classes.h1} container`} style={{ fontWeight: "bold" }}>All events</h1>
                <div className="moreGrid" style={!firstLoad ? { display: 'grid' } : { display: 'none' }}>
                    {
                        data.map((event) => {
                            return (
                                <div className="moreGridChild shadowB stuff" key={event.regime_id}>
                                    <div className="" div>
                                        <img
                                            className="moreImage"
                                            src={event.regime_media}
                                            alt={event.regime_name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="eventDetails container">
                                        <div className="titleOfEvent">{neat(event.regime_name)}</div>
                                        <div className="dateOfEvent">
                                            <i
                                                style={{ color: "#7165E3" }}
                                                className="fa-regular fa-clock"
                                            ></i> &nbsp;
                                            {
                                                `
                                            ${moment(event.regime_start_date).format('ddd, MMM DD')}, 
                                            ${moment(event.regime_start_time, 'HH:mm:ss').format('h:mm A')}
                                            `
                                            }
                                        </div>
                                        <div className="addOfEvent">
                                            <i
                                                style={{ color: "#7165E3" }}
                                                className="fa-solid fa-location-dot"
                                            ></i> &nbsp;
                                            {eventAddressTrimmer(`${event.regime_address} • ${event.regime_city}, ${event.regime_state}`)}
                                        </div>
                                        <div className="priceOfEvent">
                                            <i
                                                style={{ color: "#7165E3" }}
                                                className="fa-solid fa-money-bill-1-wave"
                                            ></i> &nbsp;
                                            {Number(event.min_ticket_price) === 0 ? `Free` : `Starts at N${Number(event.min_ticket_price).toLocaleString()}`}
                                        </div>
                                        <div className="creatorOfEvent">{neat(event.client_name)}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {
                    events.length === data.length ? ("") : (
                        <div ref={triggerRef} className='moreGrid'>
                        {/* <div ref={triggerRef} className='moreGrid' style={divVis ? { display: 'grid' } : { display: 'none' }}> */}
                            <MoreSkeleton />
                        </div>
                    )
                }
            </>
        )
    }
};

export default MoreEvents;
