import Notes from "./notes";
import OldNotes from "./oldnotes";

function Modal() {
  const modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
      console.log("hello");
    }
  };

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <p id="modalContent"></p>
        </div>
      </div>
    </div>
  );
}
export default Modal;
