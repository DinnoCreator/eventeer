import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import classes from "../cathegories/Category.module.css"

const Categories = () => {
    const state= {
        responsive:{
            0: {
                items: 2,
            },
            380: {
                items: 2.5,
            },
            600: {
                items: 3.5,
            },
            800: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    }
      return (
        <>
         <div className='container roborobo'>
          <h1 style={{fontWeight: "bold", marginBottom: "0", fontSize: "24px"}}>Categories</h1>
         <OwlCarousel 
         className='owl-theme' 
         loop 
         margin={10} 
         item="6"
         responsive={state.responsive}
         dots={false}>
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <span className={`${classes.icon}`}>
          <i class="fa-solid fa-music"></i>
          &nbsp;&nbsp;Concert
          </span>
          
         
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
        <span className={`${classes.icon}`}>
          <i class="fa-solid fa-vest-patches"></i>
          &nbsp;&nbsp;Pagent
          </span>
        
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
        <span className={`${classes.icon}`}>
          <i class="fa-solid fa-handshake"></i>
          &nbsp;&nbsp;Conference
          </span>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
        <span className={`${classes.icon}`}>
          <i class="fa-solid fa-book"></i>
          &nbsp;&nbsp;Education
          </span>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
        <span className={`${classes.icon}`}>
          <i class="fa-solid fa-clapperboard"></i>
          &nbsp;&nbsp;Theatre
          </span>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
        <span className={`${classes.icon}`}>
          <i class="fa-solid fa-masks-theater"></i>
          &nbsp;&nbsp;Comedy
          </span>
        </div>

        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
        <span className={`${classes.icon}`}>
          <i class="fa-solid fa-briefcase"></i>
          &nbsp;&nbsp;Services
          </span>
        </div>
        </OwlCarousel>
         </div>
        </>
      );
}

export default Categories;