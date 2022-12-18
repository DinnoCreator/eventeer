import TicketImageView from "../components/ticket_view/TicketImageView";
import TicketInterest from "../components/ticket_view/TicketInterest";

const TicketDisplay = () => {
    return (
        <>
        {/* <div class="mapouter">
            <div class="gmap_canvas">
                <iframe title="Campus Tour" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=marian ,calabar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <a href="https://formatjson.org/">format json</a>
            </div>
        </div> */}
        <TicketImageView/>
        <TicketInterest/>
        </>
    );
}

export default TicketDisplay;