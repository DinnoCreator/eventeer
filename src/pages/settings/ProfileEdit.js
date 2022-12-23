import ProfileSettings from "../../components/profile/general/ProfileSettings";
import { useEffect } from "react";

const ProfileEdit = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return (
        <>
          <ProfileSettings/>
        </>
    )
}

export default ProfileEdit;