// localStorage.clear();
import topImg from "/src/assets/top.png";
import bottomImg from "/src/assets/bottom.png";
import trashImg from "/src/assets/trash-bin.png";
import homeImg from "/src/assets/home.png";
import noteImg from "/src/assets/notes.png";
import gitImg from "/src/assets/github.png";

import { useState } from "react";
import "./Maindiv.css";

function Maindiv() {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes") !== null
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );
  // alert(notes);
  // localStorage.clear();

  const addToNotes = (title, text) => {
    // title = document.querySelector(".title-inp").value;
    // text = document.querySelector(".text-inp").value;
    if (title !== "" && text !== "") {
      setNotes([...notes, { title: title, text: text }]);

      localStorage.setItem(
        "notes",
        JSON.stringify([...notes, { title: title, text: text }])
      );
      // const div = (document.createElement("div").className = "note");

      document.querySelector(".title-inp").value = "";
      document.querySelector(".title-inp").style.display = "none";
      document.querySelector(".text-inp").value = "";
    } else {
      document.getElementsByClassName("text-inp")[0].focus();
    }
  };
  const deleteNotes = (e, index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const moveUp = (e, index) => {
    if (index === 0) return;

    const newNotes = [...notes];
    const temp = newNotes[index];
    newNotes[index] = newNotes[index - 1];
    newNotes[index - 1] = temp;
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));

    // const newNotes = [...notes];
    // const temp = newNotes[index];
    // newNotes[index] = newNotes[index - 1];
    // newNotes[index - 1] = temp;
    // setNotes(newNotes);
    // localStorage.setItem("notes", JSON.stringify(newNotes));
  };
  const moveDown = (e, index) => {
    if (index === notes.length - 1) return;
    const newNotes = [...notes];
    const temp = newNotes[index];
    newNotes[index] = newNotes[index + 1];
    newNotes[index + 1] = temp;
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <>
      <button
        className="fav"
        onClick={() =>
          addToNotes(
            document.querySelector(".title-inp").value,
            document.querySelector(".text-inp").value
          )
        }
      >
        +
      </button>
      <article className="aside-and-main-art">
        <aside id="aside">
          <section
            onClick={() => window.open("https://yooopy.github.io/Notes")}
          >
            <img src={noteImg}></img>notes v1
          </section>

          <section onClick={() => window.open("https://github.com/yooopy/")}>
            <img src={gitImg}></img>Github
          </section>
          <section
            id="home"
            onClick={() => window.open("https://yooopy.github.io/")}
          >
            <img src={homeImg}></img>Home Website
          </section>
        </aside>
        <article className="main-art">
          <section className="main-section">
            {notes.map((note, index) => (
              <div key={index} className="note">
                <div className="title-div">
                  <p className="title">{note.title}</p>
                  <div className="side-note-div">
                    <img
                      className="top-bot"
                      src={topImg}
                      onClick={(e) => moveUp(e, index)}
                    ></img>
                    <img
                      className="top-bot"
                      src={bottomImg}
                      onClick={(e) => moveDown(e, index)}
                    ></img>
                    <img
                      src={trashImg}
                      className="trash"
                      onClick={(e) => deleteNotes(e, index)}
                    ></img>
                  </div>
                </div>
                <pre className="subtitle">{note.text}</pre>
              </div>
            ))}
            {/* <div className="note">
          <div className="title-div">
            <p className="title">Title</p>
            <img src="./src/assets/trash-bin.png" className="trash"></img>
          </div>
          <pre className="subtitle">Subtitle...</pre>
        </div> */}
          </section>
        </article>
      </article>
    </>
  );
}

export default Maindiv;
