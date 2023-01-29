import ProfileView from "../../components/profile/ProfileView";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return (
        <>
          <ProfileView/>
        </>
    );
}

export default Profile;