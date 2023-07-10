// import {Html5QrcodeScanner} from "html5-qrcode";
import { useState } from "react";
import Html5QrcodePlugin from "../../components/Html5QrcodePlugin/Html5QrcodePlugin";

const ScanAll = () => {
  const [text, setText] = useState("Please scan a qrcode");
  const onNewScanResult = (decodedText, decodedResult) => {
    return setText(decodedText);
  };

  return (
    <>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <h1 className="container mt-3">{text}</h1>
    </>
  );
};

export default ScanAll;
