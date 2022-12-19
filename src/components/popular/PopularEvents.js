import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom';

const PopularEvents = () => {
    const navigate = useNavigate();

    const handleView = () => {
        return navigate("/view");
    }
    const state= {
        responsive:{
            0: {
                items: 1,
            },
            360: {
                items: 1.5,
            },
            600: {
                items: 2,
            },
            800: {
                items: 2.5,
            },
            1000: {
                items: 3,
            },
        },
    }
      return (
        <>
         <div className='container roborobo'>
          <h1 style={{fontWeight: "bold", marginBottom: "0", fontSize: "24px"}}>Popular events</h1>
         <OwlCarousel 
         className='owl-theme' 
         loop 
         margin={10}
         autoplay
         responsive={state.responsive}
         dots={false}>
        <div class='item shadowB card mt-4 mb-4 roborobo' onClick={handleView}>
          <div
          style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1436949458/photo/multiracial-group-of-happy-friends-using-sparklers-and-having-fun-on-new-years-day-at-home.jpg?s=612x612&w=is&k=20&c=WVvnKvsC5BCUITjUxLJTqySECSDNFExgFLgyRlRrNJM="})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '160px',
            width: '100%',
          }}
         className="card-image-top roboroboT"
        >
          <div className="row">
          <div className="col-6 mt-4 mb-4 al">
                <span className='green rad'>
                <i style={{color: "white"}} class="fa-solid fa-music"></i>
                </span>
            </div>
            <div className="col-6 mt-4 mb-4 ar">
                <span className='white rad'>
                    <i class="fa-regular fa-bookmark"></i>
                </span>
            </div>
            <div className="col-6 mt-2  al">
                <span className='whiteBigi radi row' style={{display: "block"}}>
                <span className="first">24</span>
                <span className="second">Mar</span>
                </span>
                
            </div>
          </div>
        </div>
            <div className='card-body myContainer'>
                <h4>Calabar Pool Party</h4> 
                <h5>
                    <i style={{color: "#7165E3"}} class="fa-solid fa-location-dot"></i> 
                    &nbsp;&nbsp;Marina Resort
                </h5>
            </div>
        </div>
        <div class='item shadowB card mt-4 mb-4 roborobo'>
          <div
          style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1412446063/photo/multiracial-smiling-friends-enjoying-on-the-boat.jpg?s=612x612&w=is&k=20&c=SSIv0T1DBO9z60EnM_FhVFVUvkXP4vWj54793--xGLY="})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '160px',
            width: '100%',
          }}
         className="card-image-top roboroboT"
        >
          <div className="row">
          <div className="col-6 mt-4 mb-4 al">
                <span className='green blue rad'>
                <i style={{color: "white"}} class="fa-solid fa-champagne-glasses"></i>
                </span>
            </div>
            <div className="col-6 mt-4 mb-4 ar">
                <span className='white rad'>
                    <i class="fa-regular fa-bookmark"></i>
                </span>
            </div>
            <div className="col-6 mt-2 al">
                <span className='whiteBigi radi row' style={{display: "block"}}>
                <span className="first">24</span>
                <span className="second">Mar</span>
                </span>
                
            </div>
          </div>
        </div>
            <div className='card-body myContainer'>
                <h4>Calabar Pool Party</h4> 
                <h5>
                    <i style={{color: "#7165E3"}} class="fa-solid fa-location-dot"></i> 
                    &nbsp;&nbsp;Marina Resort
                </h5>
            </div>
        </div>
        <div class='item shadowB card mt-4 mb-4 roborobo'>
          <div
          style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.jpg?s=612x612&w=is&k=20&c=FVP_WApXKx0EBQMjvl30L94tSufh0fHyZ9bRc4Tw9DY="})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '160px',
            width: '100%',
          }}
         className="card-image-top roboroboT"
        >
          <div className="row">
          <div className="col-6 mt-4 mb-4 al">
                <span className='green rad'>
                <i style={{color: "white"}} class="fa-solid fa-music"></i>
                </span>
            </div>
            <div className="col-6 mt-4 mb-4 ar">
                <span className='white rad'>
                    <i class="fa-regular fa-bookmark"></i>
                </span>
            </div>
            <div className="col-6 mt-2 al">
                <span className='whiteBigi radi row' style={{display: "block"}}>
                <span className="first">24</span>
                <span className="second">Mar</span>
                </span>
                
            </div>
          </div>
        </div>
            <div className='card-body myContainer'>
                <h4>Calabar Pool Party</h4> 
                <h5>
                    <i style={{color: "#7165E3"}} class="fa-solid fa-location-dot"></i> 
                    &nbsp;&nbsp;Marina Resort
                </h5>
            </div>
        </div>
        <div class='item shadowB card mt-4 mb-4 roborobo'>
          <div
          style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1436949458/photo/multiracial-group-of-happy-friends-using-sparklers-and-having-fun-on-new-years-day-at-home.jpg?s=612x612&w=is&k=20&c=WVvnKvsC5BCUITjUxLJTqySECSDNFExgFLgyRlRrNJM="})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '160px',
            width: '100%',
          }}
         className="card-image-top roboroboT"
        >
          <div className="row">
          <div className="col-6 mt-4 mb-4 al">
                <span className='green rad'>
                <i style={{color: "white"}} class="fa-solid fa-music"></i>
                </span>
            </div>
            <div className="col-6 mt-4 mb-4 ar">
                <span className='white rad'>
                    <i class="fa-regular fa-bookmark"></i>
                </span>
            </div>
            <div className="col-6 mt-2 al">
                <span className='whiteBigi radi row' style={{display: "block"}}>
                <span className="first">24</span>
                <span className="second">Mar</span>
                </span>
                
            </div>
          </div>
        </div>
            <div className='card-body myContainer'>
                <h4>Calabar Pool Party</h4> 
                <h5>
                    <i style={{color: "#7165E3"}} class="fa-solid fa-location-dot"></i> 
                    &nbsp;&nbsp;Marina Resort
                </h5>
            </div>
        </div>
        <div class='item shadowB card mt-4 mb-4 roborobo'>
          <div
          style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1389845778/photo/bright-burning-sparklers-against-american-flag-closeup.jpg?s=612x612&w=is&k=20&c=_xz-QjdWP-LzGznvQLFBEtGF4kiym8ABq_Msy7ctjI0="})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '160px',
            width: '100%',
          }}
         className="card-image-top roboroboT"
        >
          <div className="row">
          <div className="col-6 mt-4 mb-4 al">
                <span className='green rad'>
                <i style={{color: "white"}} class="fa-solid fa-music"></i>
                </span>
            </div>
            <div className="col-6 mt-4 mb-4 ar">
                <span className='white rad'>
                    <i class="fa-regular fa-bookmark"></i>
                </span>
            </div>
            <div className="col-6 mt-2 al">
                <span className='whiteBigi radi row' style={{display: "block"}}>
                <span className="first">24</span>
                <span className="second">Mar</span>
                </span>
                
            </div>
          </div>
        </div>
            <div className='card-body myContainer'>
                <h4>Calabar Pool Party</h4> 
                <h5>
                    <i style={{color: "#7165E3"}} class="fa-solid fa-location-dot"></i> 
                    &nbsp;&nbsp;Marina Resort
                </h5>
            </div>
        </div>
        <div className='item shadowB card mt-4 mb-4 roborobo'>
          <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '160px',
            width: '100%',
          }}
         className="card-image-top roboroboT"
        >
          <div className="row">
          <div className="col-6 mt-4 mb-4 al">
                <span className='green rad'>
                <i style={{color: "white"}} class="fa-solid fa-music"></i>
                </span>
            </div>
            <div className="col-6 mt-4 mb-4 ar">
                <span className='white rad'>
                    <i class="fa-regular fa-bookmark"></i>
                </span>
            </div>
            <div className="col-6 mt-2 al">
                <span className='whiteBigi radi row' style={{display: "block"}}>
                <span className="first">24</span>
                <span className="second">Mar</span>
                </span>
                
            </div>
          </div>
        </div>
            <div className='card-body myContainer'>
                <h4>Calabar Pool Party</h4> 
                <h5>
                    <i style={{color: "#7165E3"}} class="fa-solid fa-location-dot"></i> 
                    &nbsp;&nbsp;Marina Resort
                </h5>
            </div>
        </div>
    </OwlCarousel>
         </div>
        </>
      );
}

export default PopularEvents;