import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import JobCarouselCard from "../GeneralComponents/JobCarouselCard";

const JobsCarousel = () => {
  return (
    <div className="translate-y-10">
      <OwlCarousel
        className="owl-theme"
        loop
        center
        autoWidth
        margin={40}
        dotsContainer="true"
      >
        <div class="item">
          <JobCarouselCard />
        </div>
        <div class="item">
          <JobCarouselCard />
        </div>
        <div class="item">
          <JobCarouselCard />
        </div>
        <div class="item">
          <JobCarouselCard />
        </div>
        <div class="item">
          <JobCarouselCard />
        </div>
        <div class="item">
          <JobCarouselCard />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default JobsCarousel;
