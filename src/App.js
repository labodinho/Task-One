import "./App.css";
import contact from "./contact";

function App() {
  return (
    <div>

      {/********* header-section **********/}
     <div className="share-img">
      <img
        id="share-button"
        src="/image/_Avatar share button.png"
        alt="share-button"
      />
      </div>

      <div className="share-img2">
      <img
        id="share-button-two"
        src="image\Type=Share, State=Default.png"
        alt="share-button"
      />
      </div>
      <div className="header-img">
      <img
        id="profile__img"
        src="/image\Device=Web, State=Default.png"
        alt="profile-avi"
      />
      </div>
      <p id="twitter">Labodinhoo</p>

      {/* <p id="slack">Dinho</p> */}
      
    {/********* header-section **********/}




    {/********* main-section **********/}

      <div className="App-link">
        <a href="https://twitter.com/labodinhoo">
          {" "}
          <button>Twitter Link</button>
        </a>
        <a id="btn__zuri" href="https://training.zuri.team/">
          {" "}
          <button>Zuri Team</button>
        </a>
        <a id="books" href="http://books.zuri.team ">
          {" "}
          <button>Zuri Books</button>
        </a>
        <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=Dinho">
          {" "}
          <button>Python Books</button>
        </a>
        <a id="pitch" href="https://background.zuri.team">
          {" "}
          <button>Background Check for Coders</button>
        </a>
        <a id="book__design" href="https://books.zuri.team/design-rules">
          {" "}
          <button>Design Books</button>
        </a>
      </div>

      <div className="social-icons">
        <img src="/image/slack.png" alt="slack logo"/>
        <img src="/image/Icon.png" alt="github logo"/>
      </div>

      <hr />
      
      {/********* main-section **********/}
      <contact />
      
      {/********* footer-section **********/}

      <div className="footer-section">
      <img src="/image/Zuri.Internship_Logo.png" alt="github logo"/>
      <p className="HNG">HNG Internship 9 Frontend Task</p>
      <img src="image/I4G.png" alt="github logo"/>
      </div>

      {/********* footer-section **********/}
    </div>
  );
}

export default App;
