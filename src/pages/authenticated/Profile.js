import ProfileView from "../../components/profile/ProfileView";
import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
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