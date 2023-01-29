import LoginView from "../../components/login/LoginView";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return(
        <LoginView/>
    );
}

export default Login;