import TicketImageView from "../../components/ticket_view/ticket_image/TicketImageView";
import TicketInterest from "../../components/ticket_view/ticket_interest/TicketInterest";
import TicketDescription from "../../components/ticket_view/ticket_description/TicketDescription";
import TicketImageViewSkeleton from "../../components/ticket_view/ticket_image/TicketImageViewSkeleton";
import TicketInterestSkeleton from "../../components/ticket_view/ticket_interest/TicketInterestSkeleton";
import moment from "moment";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../link/API";

const TicketDisplay = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [found, setFound] = useState(false);
  const [eventDetails, setEventDetails] = useState();
  const [pricingDetails, setPricingDetails] = useState();
  let { id } = useParams();
  const { affiliateID } = useParams();
  const getEventDetails = useCallback(async () => {
    try {
      id = id.toLowerCase();
      await fetch(`${api}/user/event/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const jsonData = await res.json();
        if (res.status !== 200) {
          return setIsFetching(false);
        } else {
          setEventDetails(jsonData.event);
          setPricingDetails(jsonData.eventPricings);
          setFound(true);
          return setIsFetching(false);
        }
      });
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getEventDetails();
  }, [getEventDetails]);

  const affiliateId = () => {
    if (affiliateID === undefined) {
      return "none";
    } else {
      return affiliateID;
    }
  };
  if (isFetching && !found) {
    return (
      <>
        <div className="smartContainer better">
          <TicketImageViewSkeleton />
          <TicketInterestSkeleton />
        </div>
      </>
    );
  } else if (!isFetching && !found) {
    return (
      <>
        <h1 className="center mt-5">No event found</h1>
      </>
    );
  } else if (!isFetching && found) {
    return (
      <>
        {/* <div class="mapouter">
            <div class="gmap_canvas">
                <iframe title="Campus Tour" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=marian ,calabar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <a href="https://formatjson.org/">format json</a>
            </div>
        </div> */}
        <div className="smartContainer better">
          <TicketImageView
            regimeImg={eventDetails[0].regime_media}
            clientImg={eventDetails[0].client_photo}
            regimeName={eventDetails[0].regime_name}
            creatorName={eventDetails[0].client_name}
          />
          <TicketInterest
            regimeImg={eventDetails[0].regime_media}
            regimeName={eventDetails[0].regime_name}
            affiliate={affiliateId()}
            regimeId={id.toLowerCase()}
            regimeStartDate={moment(eventDetails[0].regime_start_date).format(
              "MMMM DD, YYYY"
            )}
            regimeStartTime={moment(
              eventDetails[0].regime_start_time,
              "HH:mm:ss"
            ).format("h:mm A")}
            regimeEndTime={moment(
              eventDetails[0].regime_end_time,
              "HH:mm:ss"
            ).format("h:mm A")}
            regimeAddress={eventDetails[0].regime_address}
            regimeCity={eventDetails[0].regime_city}
            regimeState={eventDetails[0].regime_state}
            regimePricings={pricingDetails}
          />
          <TicketDescription
            regimeDescription={eventDetails[0].regime_description}
          />
          <div style={{ height: "200px" }}></div>
        </div>
      </>
    );
  }
};

export default TicketDisplay;
