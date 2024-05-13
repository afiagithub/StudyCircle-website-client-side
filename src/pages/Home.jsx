import AssignmentSection from "../components/AssignmentSection";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Faq from "../components/faq";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AssignmentSection></AssignmentSection>
            <Feature></Feature>
            <Faq></Faq>
        </div>
    );
};

export default Home;