export const Menu = () => {
  return (
    <>
      <div className={`menu`}>
        <div>
          <img src="/logo.png" alt="Game Logo" style={{ width: "800px" }} draggable="false" />
        </div>
        <div className="button-start">
          <button>Start</button>
          <img src="/sword-icon.png" alt="Start" style={{ height: "140px", marginRight: "20px" }} draggable="false" />
        </div>
        <div>
          <p>
            Made with 💙 by{" "}
            <a href="https://youtube.com/Vorshim92" target="_blank">
              Vorshim
            </a>
            , Story Telling from{" "}
            <a href="https://instagram.com/" target="_blank">
              Pier
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
