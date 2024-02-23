import Card from "./Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjectsItem from "../components/ProjectList";

import 'swiper/swiper-bundle.css';
//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Projects()
{
    const projects = ProjectsItem;

    return (
    <div className="services">
        <p className="text-muted text-sub-title text-center">These are some of the Projects that I've developed</p>
        <h2 className="sub-title text-muted">PROJECTS</h2>
        <br></br>
        <div className="row">
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         pagination={{"clickable": true}}
         slidesPerView={2}  
         navigation 
         spaceBetween={20}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}>
                  {projects.map((project) => (
                           <SwiperSlide className="mySwiper"> <Card 
       
                            key={project.id}
                            text={project.text}
                            img={project.img}
                            description={project.description}
                            githubLink={project.githubLink}
                            /></SwiperSlide>
               )
            )}
    </Swiper>

            
        </div>
     </div>
    )
}
export default Projects