import GeneralSettings from "../../components/profile/GeneralSettings";
import { useEffect } from "react";

const Settings = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return (
        <>
          <GeneralSettings/>
        </>
    );
}

export default Settings;