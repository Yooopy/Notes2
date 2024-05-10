import "./Header.css";
function Header() {
  let asideState = false;
  const changeAside = () => {
    if (window.innerWidth < 768) {
      asideState
        ? ((asideState = false),
          (document.getElementById("aside").style.maxWidth = "0%"))
        : ((asideState = true),
          (document.getElementById("aside").style.maxWidth = "100%"));
    }
  };
  return (
    <header>
      <img
        onClick={() => changeAside()}
        className="menu-img"
        src="./src/assets/menu.png"
      ></img>

      <div className="header">
        <h1 hidden>To Do</h1>
        <div
          className="header-text"
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <input placeholder="Title" className="title-inp" type="text"></input>
          <textarea
            className="text-inp"
            placeholder="Whats about your day?"
            onFocus={() => {
              document.getElementsByClassName("title-inp")[0].style.display =
                "block";
              document.getElementsByClassName("title-inp")[0].style.maxHeight =
                "100px";
            }}
          ></textarea>
        </div>
      </div>
    </header>
  );
}

export default Header;
