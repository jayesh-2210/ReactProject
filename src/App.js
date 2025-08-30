import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title = "TextUtils" aboutText = "About us"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to Analyse Below"/>

      </div>

    </>
  );
}

export default App;
