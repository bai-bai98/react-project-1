import logo from "./logo.svg";
import "./App.css";
import Notes from "./notes";
import OldNotes from "./oldnotes";
import modal from "./modal";

function App() {
  function closeModal() {
    document.getElementById("myModal").classList.remove("show");
  }
  return (
    <div onClick={closeModal}>
      <div className="card">
        <Notes />
      </div>
    </div>
  );
}

export default App;
