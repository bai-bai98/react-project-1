import Modal from "./modal";

function Notes() {
  function addNote() {
    const noteContent = document.getElementById("noteArea").value;
    const titleContent = document.getElementById("title").value;
    const dateContent = new Date();
    const dateFormat = dateContent.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    });
    const newDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const button = document.createElement("button");
    const buttonModal = document.createElement("button");
    const dateDiv = document.createElement("div");
    const newContent = document.createTextNode(noteContent);
    const newTitle = document.createTextNode(titleContent);
    const timeContent = document.createTextNode(dateFormat);
    const cancel = document.createTextNode(`X`);
    if (
      document.getElementById("noteArea").value === "" &&
      document.getElementById("title").value === ""
    ) {
      return;
    } else {
      titleDiv.appendChild(newTitle);
      newDiv.appendChild(titleDiv);
      newDiv.appendChild(contentDiv);
      contentDiv.appendChild(newContent);
      contentDiv.appendChild(newContent);
      newDiv.appendChild(contentDiv);
      newDiv.appendChild(dateDiv);
      dateDiv.appendChild(timeContent);
      newDiv.appendChild(buttonModal);
      newDiv.appendChild(button);

      button.appendChild(cancel);
      button.classList.add("btnOldNote");
      dateDiv.classList.add("date");
      titleDiv.classList.add("titleNotes");
      newDiv.id = "oldNotes";
      contentDiv.classList.add("content");
      button.id = "btn";
      buttonModal.id = "btnModal";
      buttonModal.classList.add("btnModal");

      const currentDiv = document.getElementById("div1");
      document.body.insertBefore(newDiv, currentDiv);
      newDiv.classList.add("noteCard");
      document.getElementById("noteArea").value = "";
      document.getElementById("title").value = "";

      let amountOfNotes = document.querySelectorAll("#btn").length;
      const getRidOf = () => {
        const answer = window.confirm(
          `Are you sure you want to delete your note?`
        );
        if (answer) {
          document.body.removeChild(newDiv);
        } else {
          return;
        }
      };
      for (let i = 0; i < amountOfNotes; i++) {
        document
          .querySelectorAll("#btn")
          [i].addEventListener("click", getRidOf);
      }
      for (let i = 0; i < amountOfNotes; i++) {
        const modal = () => {
          document.getElementById("modalContent").innerHTML =
            document.getElementById("oldNotes").innerHTML;
          document.getElementById("myModal").classList.add("show");

          //document.getElementById("oldNotes").innerHTML;
        };
        document
          .querySelectorAll("#btnModal")
          [i].addEventListener("click", modal);
      }
    }
  }

  return (
    <div>
      <div>
        <input id="title" className="title" placeholder="Title"></input>
        <textarea
          className="new_notes"
          id="noteArea"
          placeholder="Your Note..."
        ></textarea>

        <button onClick={addNote} className="btn">
          add note
        </button>
      </div>
      <Modal />
    </div>
  );
}

export default Notes;
