import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  //mongo:H7DIDsacWOAJ5qh9
  return (
    <div className="app">
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: 0 }}>
        Swipe right if you like'em !{" "}
      </h1>
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
