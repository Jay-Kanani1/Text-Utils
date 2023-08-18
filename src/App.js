import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("Disable dark mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      setToggleText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="TextUtils - Word-Counter, Character-Counter"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
