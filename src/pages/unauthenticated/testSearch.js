import {Html5QrcodeScanner} from "html5-qrcode";
import {useState} from "react";

const ScanAll = () => {
  const {text, setText} = useState("Nothing to show");
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    return setText(decodedText);
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
    return setText(error);
  }

  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false
  );

  html5QrcodeScanner.render(onScanSuccess, onScanFailure)

  return (
    <>
    <div id="reader" width="600px"> 1234</div>
    <div><h1 className="mt-3">{text}</h1></div>
    </>
  );
};


export default ScanAll;