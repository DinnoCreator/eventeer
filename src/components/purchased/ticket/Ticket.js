import classes from "../ticket/Ticket.module.css";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/tickets");
  };
  const location = "eleven eleven calabar";

  return (
    <div className="container">
      <div className={`container hstack grid-container ${classes.options}`}>
        <div className={`${classes.optionsIcon}`} onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className={`grid-item ${classes.ID}`}>
          <h3>#04512365741</h3>
        </div>
        <div className={`${classes.optionsIcon} ms-auto`} onClick={handleBack}>
          <i className="fa-solid fa-share-nodes"></i>
        </div>
      </div>
      <div className="container">
        <div
          className={`container ${classes.img}`}
          style={{
            backgroundImage: `url(https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY=)`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
        ></div>
      </div>
      <div className="container">
        <div className={`container ${classes.info}`}>
          <div className={`container`}>
            {/* <div className={`${classes.header}`}> */}
            <h3>Calabar Pool Party</h3>
            {/* </div> */}
            <div className={`row ${classes.content}`}>
              <div className={`col-6 ${classes.date}`}>
                <p className={`${classes.go}`}>Date</p>
                <p className={`${classes.p2}`}>December 24, 2022</p>
              </div>
              <div className={`col-6 ${classes.date} ${classes.left}`}>
                <p className={`${classes.go}`}>Time</p>
                <p className={`${classes.p2}`}>8:00 PM</p>
              </div>
            </div>
            <div className={`row ${classes.content}`}>
              <div className={`col-6 ${classes.date}`}>
                <p className={`${classes.go}`}>Place</p>
                <p className={`${classes.p2}`}>
                  Marina Resort Calabar, CRS NIG
                </p>
              </div>
              <div className={`col-6 ${classes.date} ${classes.left}`}>
                <p className={`${classes.imgInfoIcon}`}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={`https://www.google.com/maps/search/${location}`}
                  >
                    <i className="fa-solid fa-diamond-turn-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="center mt-3">
          <img className={classes.qr}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKsSURBVO3BQW7kQAwEwSxC//9yro88NSBIM2sTjIg/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEkfJNKl4QTlS4JncpJEr5J5YlijVKsUYo1ysXLVN6UhDtUuiS8SeVNSXhTsUYp1ijFGuXiw5Jwh8oTSehUuiS8KQl3qHxSsUYp1ijFGuXij1M5ScJJEjqVv6xYoxRrlGKNcvHHJeFE5SQJkxRrlGKNUqxRLj5M5ZNU7kjCm1R+k2KNUqxRijXKxcuS8E1J6FS6JHQqXRLuSMJvVqxRijVKsUaJPxgkCZ1Kl4QTlb+sWKMUa5RijXLxUBI6lZMk/E8qXRK6JHQqJ0noVLok3KHyRLFGKdYoxRrl4j9TeSIJncoTKl0STlTuUPmkYo1SrFGKNcrFQypdEt6UhCeS0Kl0KneonCThjiR0Kk8Ua5RijVKsUeIPXpSEE5WTJHQqJ0l4QqVLQqdykoROpUvCicqbijVKsUYp1igXH6bSJeFEpUtCp9KpdEk4UXkiCSdJ6FS6JHxSsUYp1ijFGiX+4A9LQqdyRxI6lTuS0Kl0SbhD5YlijVKsUYo1ysVDSfgmlZMknKjckYQ7knCi8knFGqVYoxRrlIuXqbwpCU+odEk4ScI3JaFTeaJYoxRrlGKNcvFhSbhD5X9SOUlCp9IloVPpktCpvKlYoxRrlGKNcjGMSpeEE5UuCScqJyonKp9UrFGKNUqxRrn441S6JNyRhBOVkyR0Kl0S7lB5olijFGuUYo1y8WEq36TSJeEOlS4JnUqn8psUa5RijVKsUS5eloRvSkKn0qm8KQknKp3KNxVrlGKNUqxR4g/WGMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRvkHv7QE9MppxbsAAAAASUVORK5CYII="
            alt="ticket qrcode"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
