import classes from "../moreevents/moreEvents.module.css"
import { useState, useCallback, useEffect, useRef } from "react";
import moment from 'moment';
import { api } from "../../link/API";
import useLazyLoader from "../../useLazyLoading";
import MoreSkeleton from "./moreSkeleton";
import { eventAddressTrimmer, neat } from "../../utilities/textUtil";

const testData = [
    {
        "client_name": "dinno",
        "regime_id": "cf6721476481",
        "regime_name": "women who launch",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1688043370/regime_media/smvfj4sknajac4knnftp.jpg",
        "regime_type": "conference",
        "regime_address": "etta agbor",
        "regime_city": "calabar",
        "regime_state": "",
        "regime_start_date": "2023-08-31T23:00:00.000Z",
        "regime_start_time": "16:00:00",
        "c_date": "2023-06-28T23:00:00.000Z",
        "c_time": "13:56:09",
        "min_ticket_price": "2000.00"
    },
    {
        "client_name": "dinno",
        "regime_id": "cf8467051744",
        "regime_name": "2023 african missions conference: \"show me your glory\" | lagos, nigeria",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1688043188/regime_media/krhkai6r1cawgfah1qac.jpg",
        "regime_type": "conference",
        "regime_address": "22 road b close festac town",
        "regime_city": "amuwo odofin",
        "regime_state": "",
        "regime_start_date": "2023-07-31T23:00:00.000Z",
        "regime_start_time": "14:00:00",
        "c_date": "2023-06-28T23:00:00.000Z",
        "c_time": "13:53:08",
        "min_ticket_price": "0.00"
    },
    {
        "client_name": "dinno",
        "regime_id": "ed9212301143",
        "regime_name": "africa real estate certificate masterclass",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1687983970/regime_media/iihinurfh7wqkaguyxmt.jpg",
        "regime_type": "education",
        "regime_address": "etta agbor",
        "regime_city": "calabar",
        "regime_state": "cross-river",
        "regime_start_date": "2023-07-21T23:00:00.000Z",
        "regime_start_time": "15:00:00",
        "c_date": "2023-06-27T23:00:00.000Z",
        "c_time": "21:26:10",
        "min_ticket_price": "4000.00"
    },
    {
        "client_name": "dinno",
        "regime_id": "ct4480361719",
        "regime_name": "code fest",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1687436731/regime_media/ai4hfjrc0meyqavjahes.jpg",
        "regime_type": "concert",
        "regime_address": "22 road b close block 5 flat 5 festac town",
        "regime_city": "festac town",
        "regime_state": "lagos",
        "regime_start_date": "2023-11-14T23:00:00.000Z",
        "regime_start_time": "14:00:00",
        "c_date": "2023-06-21T23:00:00.000Z",
        "c_time": "13:25:31",
        "min_ticket_price": "2000.00"
    },
    {
        "client_name": "escanor",
        "regime_id": "TH5760409570",
        "regime_name": "lily",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1685881154/regime_media/gtcfgu8qga4rttazodom.png",
        "regime_type": "theatre",
        "regime_address": "ekpo okon",
        "regime_city": "calabar",
        "regime_state": "cross river",
        "regime_start_date": "2023-11-24T23:00:00.000Z",
        "regime_start_time": "12:30:00",
        "c_date": "2023-06-03T23:00:00.000Z",
        "c_time": "13:19:13",
        "min_ticket_price": "40000.00"
    },
    {
        "client_name": "escanor",
        "regime_id": "CF2411413028",
        "regime_name": "what is a woman conference",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1685880764/regime_media/x2lx9uchq860xc7roj7v.jpg",
        "regime_type": "conference",
        "regime_address": "satelite town",
        "regime_city": "calabar",
        "regime_state": "cross river",
        "regime_start_date": "2023-11-24T23:00:00.000Z",
        "regime_start_time": "12:30:00",
        "c_date": "2023-06-03T23:00:00.000Z",
        "c_time": "13:12:43",
        "min_ticket_price": "40000.00"
    },
    {
        "client_name": "escanor",
        "regime_id": "CT0460321177",
        "regime_name": "wizkid concert",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1685880443/regime_media/zgg38a09otaidngemdxl.jpg",
        "regime_type": "concert",
        "regime_address": "atimbo",
        "regime_city": "calabar",
        "regime_state": "cross river",
        "regime_start_date": "2023-11-24T23:00:00.000Z",
        "regime_start_time": "12:30:00",
        "c_date": "2023-06-03T23:00:00.000Z",
        "c_time": "13:07:23",
        "min_ticket_price": "40000.00"
    },
    {
        "client_name": "gojo",
        "regime_id": "ED9464770891",
        "regime_name": "edify it web development bootcamp",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1685674854/regime_media/knewesvzpcbfmajvdwxu.png",
        "regime_type": "education",
        "regime_address": "calabar municipality",
        "regime_city": "calabar",
        "regime_state": "cross river",
        "regime_start_date": "2023-11-24T23:00:00.000Z",
        "regime_start_time": "12:30:00",
        "c_date": "2023-06-01T23:00:00.000Z",
        "c_time": "04:00:54",
        "min_ticket_price": "40000.00"
    },
    {
        "client_name": "gojo",
        "regime_id": "ED94gr64770891",
        "regime_name": "who dey",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1685674854/regime_media/knewesvzpcbfmajvdwxu.png",
        "regime_type": "education",
        "regime_address": "calabar municipality",
        "regime_city": "calabar",
        "regime_state": "cross river",
        "regime_start_date": "2023-11-24T23:00:00.000Z",
        "regime_start_time": "12:30:00",
        "c_date": "2023-06-01T23:00:00.000Z",
        "c_time": "04:00:54",
        "min_ticket_price": "40000.00"
    },
    {
        "client_name": "gojo",
        "regime_id": "ED94gr64770891",
        "regime_name": "wey dem dey",
        "regime_media": "https://res.cloudinary.com/dke5khtt3/image/upload/v1685674854/regime_media/knewesvzpcbfmajvdwxu.png",
        "regime_type": "education",
        "regime_address": "calabar municipality",
        "regime_city": "calabar",
        "regime_state": "cross river",
        "regime_start_date": "2023-11-24T23:00:00.000Z",
        "regime_start_time": "12:30:00",
        "c_date": "2023-06-01T23:00:00.000Z",
        "c_time": "04:00:54",
        "min_ticket_price": "40000.00"
    }
];

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
    // const flooredPages = Math.floor(actual_pages) + 1;
    const modulo_pages = Number(events.length) % num_per_page;
    const total_pages = () => {
            return actual_pages + 1;
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