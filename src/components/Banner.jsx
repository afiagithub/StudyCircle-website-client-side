import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper/modules';
import "../custom.css"
import { Link } from "react-router-dom";

const Banner = () => {
    const bannerBtn = <>
        <Link to="/assignment" className="mt-8 btn bg-[#A91D3A] text-white text-lg border-2 border-[#A91D3A] 
        hover:border-[#A91D3A] hover:bg-transparent hover:text-[#A91D3A]">
            Take a Challenge</Link>
    </>
    return (
        <div className="px-5 lg:px-12 py-4">
            <Swiper navigation={true} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} className="mySwiper rounded-2xl">
                <SwiperSlide>
                    <div className="slider slider1 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary">Unlock
                            <span className="text-[#A91D3A] text-4xl md:text-5xl lg:text-7xl font-bold font-rale"> Success </span>
                            Together Through Collaborative Learning
                        </h1>
                        {bannerBtn}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider2 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary">
                            <span className="text-[#A91D3A] text-4xl md:text-5xl lg:text-6xl font-bold font-rale"> 50+ </span>
                            Assignments , On
                            <span className="text-[#A91D3A] text-4xl md:text-5xl lg:text-6xl font-bold font-rale"> 6+ </span>
                            different Subjects
                        </h1>
                        {bannerBtn}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider3 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary">
                            <span className="text-[#A91D3A] text-4xl md:text-5xl lg:text-6xl font-bold font-rale"> Elevate </span>
                            Your Grades , Join the
                            <span className="text-[#A91D3A] text-4xl md:text-5xl lg:text-6xl font-bold font-rale"> Circle</span>
                        </h1>
                        {bannerBtn}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;