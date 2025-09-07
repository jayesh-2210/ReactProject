import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title = "TextUtils" aboutText = "About us"/>
      <div className="container my-3">
      {/* <TextForm heading="Enter the text to Analyse Below"/> */}
      <About/>
      </div>

    </>
  );
}

export default App;
