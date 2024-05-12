import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const { googleLogin, githubLogin, facebookLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    toast.success("Successfully Logged In")
                    navigate(`${from}`)
                }
            });
    }

    return (
        <div>
            <div className="mt-5 flex flex-row items-center gap-4">
                <hr className="flex-grow" />
                <p className="text-primary">Or Sign In Using</p>
                <hr className="flex-grow" />
            </div>
            <div className="mt-5 flex flex-row items-center justify-center gap-5 ">
                <button onClick={() => handleSocialLogin(googleLogin)} className="py-3">
                    <FcGoogle className="text-2xl" />
                </button>
                <button onClick={() => handleSocialLogin(githubLogin)} className="py-3">
                    <FaGithub className="text-2xl" />
                </button>
                <button onClick={() => handleSocialLogin(facebookLogin)} className="py-3">
                    <LiaFacebookF className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;