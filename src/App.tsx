import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          How <em>good</em> is react!?
        </Alert>
      )}
      <Button color="success" onClick={() => setAlertVisible(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
