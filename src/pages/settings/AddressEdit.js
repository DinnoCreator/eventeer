import AddressSettings from "../../components/profile/general/AddressSettings";
import { useEffect } from "react";

const AddressEdit = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return (
        <>
          <AddressSettings/>
        </>
    )
}

export default AddressEdit;