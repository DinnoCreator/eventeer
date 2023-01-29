import SignUpView from "../../components/signup/SignUpView";
import { useEffect } from "react";

const SignUp = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return(
        <SignUpView/>
    );
}

export default SignUp;