import classes from "../ticket_view/TicketImageView.module.css";

const TicketImageView = () => {
    return(
        <div className={classes.img} 
        style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1436949458/photo/multiracial-group-of-happy-friends-using-sparklers-and-having-fun-on-new-years-day-at-home.jpg?s=612x612&w=is&k=20&c=WVvnKvsC5BCUITjUxLJTqySECSDNFExgFLgyRlRrNJM="})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '350px',
            width: '100%',
          }}>
            <div className={classes.imgInfo}>
              <div className="container">
                <div className={`container hstack ${classes.pad}`}>
                  <div className={`${classes.imgInfoHolder}`}>
                  <h1>Calabar Pool Party</h1>
                  <img src="https://pbs.twimg.com/media/Fc3hYzzXEAAhn6u?format=jpg&name=large" alt="profile_image"/>
                  <h3>Edidiong Obodom </h3>
                  </div>
                  <div className={`ms-auto ${classes.imgInfoIcon}`}>
                  <i class="fa-solid fa-music"></i>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default TicketImageView;