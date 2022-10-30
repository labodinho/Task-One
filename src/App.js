import "./App.css";

function App() {
  return (
    <div>
      <div className="share-img">
      <img
        id="share-button"
        src="/image/_Avatar share button.png"
        alt="share-button"
      />
      </div>
      <div className="header-img">
        <p>Annette Black</p>
      <img
        id="profile__img"
        src="/image\Device=Web, State=Default.png"
        alt="profile-avi"
      />
      </div>
      

      <div className="App-link">
        <a href="https://www.google.com">
          {" "}
          <button>Twitter Link</button>
        </a>
        <a href="https://www.google.com">
          {" "}
          <button>Zuri Team</button>
        </a>
        <a href="https://www.google.com">
          {" "}
          <button>Zuri Books</button>
        </a>
        <a href="https://www.google.com">
          {" "}
          <button>Python Books</button>
        </a>
        <a href="https://www.google.com">
          {" "}
          <button>Background Check for Coders</button>
        </a>
        <a href="https://www.google.com">
          {" "}
          <button>Design Books</button>
        </a>
      </div>
    </div>
  );
}

export default App;
