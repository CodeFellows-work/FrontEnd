import "./process.scss";
import { useSelector } from "react-redux";
function Process() {
  // returns new state from the reducers
  const state = useSelector((state) => state.ProcessReducer);

  return (
    <div className="process">
      {/* this is secret key will be used in aes.js for encryption and decryption. */}
      <h5>
        AES-256 Secret Key : <span>"uI2ooxtwHeI6q69PS98fx9SWVGbpQohO"</span>
      </h5>
      <div className="incoming">
        <h4>Incoming Encrypted Message</h4>
        <p>{state.cypher}</p>
      </div>
      <div className="crypt">
        <h4>Decypted Message</h4>
        <p>{state.text}</p>
      </div>
    </div>
  );
}
export default Process;