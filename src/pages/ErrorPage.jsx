import { useNavigate } from "react-router-dom";
import alertImg from "../../public/images/error.png"

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center text-center my-10 mx-3">
            <img className="w-52" src={alertImg} alt="" />
            <h1 className="text-3xl font-bold mt-8 mb-2 uppercase">Oops! Page not found</h1>
            <p className="font-semibold text-xl text-[#A91D3A]">Sorry the page you are looking for
                does not exist</p>
            <a onClick={() => navigate('/')} 
            className="relative my-10 px-5 py-3 overflow-hidden font-medium text-[#A91D3A] 
            bg-transparent border-2 border-[#A91D3A] rounded-lg shadow-inner group cursor-pointer">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#A91D3A] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#A91D3A] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#A91D3A] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#A91D3A] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#A91D3A] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Go To HomePage</span>
            </a>
        </div>
    );
};

export default ErrorPage;