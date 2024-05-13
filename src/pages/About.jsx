import Faq from "../components/faq";

const About = () => {
    return (
        <div className="py-5 px-3 lg:px-5">
            <div className="hero mb-5">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src="../../public/images/first.jpg" className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-rale lg:w-5/6">Unlock Success Together: 
                            <span className="text-[#A91D3A]"> Study Circle</span>, Your Collaborative Learning Destination</h1>
                        <p className="py-6 lg:w-4/5 leading-relaxed">
                            Welcome to <span className="text-[#A91D3A] text-lg font-bold">StudyCircle</span>
                            , your online destination for collaborative learning and academic
                            growth. At StudyCircle, we believe that education is most effective when students come
                            together to share knowledge, ideas, and experiences. Through our peer evaluation system,
                            students have the opportunity to review and provide feedback on each other's work,
                            promoting a culture of collaboration and continuous improvement.
                        </p>
                    </div>
                </div>
            </div>
            <Faq></Faq>
        </div>
    );
};

export default About;