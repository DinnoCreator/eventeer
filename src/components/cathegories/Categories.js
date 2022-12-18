import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">
          <i class="fa-solid fa-music"></i>
          &nbsp;&nbsp;Concert
          </NavLink>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <NavLink to="/category/pagent">
          <i class="fa-solid fa-vest-patches"></i>
          &nbsp;&nbsp;Pagent
          </NavLink>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <NavLink to="/category/conference">
          <i class="fa-solid fa-handshake"></i>
          &nbsp;&nbsp;Conference
          </NavLink>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <NavLink to="/category/education">
          <i class="fa-solid fa-book"></i>
          &nbsp;&nbsp;Education
          </NavLink>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <NavLink to="/category/theatre">
          <i class="fa-solid fa-clapperboard"></i>
          &nbsp;&nbsp;Theatre
          </NavLink>
        </div>
        
        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <NavLink to="/category/comedy">
          <i class="fa-solid fa-masks-theater"></i>
          &nbsp;&nbsp;Comedy
          </NavLink>
        </div>

        <div class={`item ${classes.cat} ca shadowB center card mt-4 mb-4 roborobo`}>
          <NavLink to="/category/services">
          <i class="fa-solid fa-briefcase"></i>
          &nbsp;&nbsp;Services
          </NavLink>
        </div>
        </OwlCarousel>
         </div>
        </>
      );
}

export default Categories;