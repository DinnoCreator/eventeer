import ProfileView from "../../components/profile/ProfileView";
import { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../link/API";

const Profile = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState("");
  const [profile, setProfile] = useState("");
  const [fetching, setFetching] = useState(true);

  const { pathname } = useLocation();

  const getProfileDetails = useCallback(async () => {
    try {
      await fetch(`${api}/user/regimeroles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: sessionStorage.getItem("token"),
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setProfile(data.profile);
          setRoles(data.roles);
          return setFetching(false);
        } else {
          setFetching(false);
          return navigate("/login", {
            state: {
              prevPath: pathname,
            },
          });
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }, [navigate, pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getProfileDetails();
  }, [getProfileDetails]);

  if (fetching) {
    return (
      <>
        <div className={`center`}>
          <div className={`cool compName`}>
            <h1>R</h1>
          </div>
          <div className={`second cool compName`}>
            <h1>e</h1>
          </div>
          <div className={`third cool compName`}>
            <h1>v</h1>
          </div>
          <div className={`fourth cool compName`}>
            <h1>e</h1>
          </div>
          <div className={`fifth cool compName`}>
            <h1>n</h1>
          </div>
          <div className={`sixth cool compName`}>
            <h1>t</h1>
          </div>
          <div className={`seventh cool compName`}>
            <h1>l</h1>
          </div>
          <div className={`eight cool compName`}>
            <h1>i</h1>
          </div>
          <div className={`ninth cool compName`}>
            <h1>f</h1>
          </div>
          <div className={`tenth cool compName`}>
            <h1>y</h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ProfileView profile={profile} roles={roles} />
        <div style={{ height: "200px" }}></div>
      </>
    );
  }
};

export default Profile;
