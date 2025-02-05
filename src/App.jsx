import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

import fantasy from "../src/data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList category={{ fantasy }} />
      <MyFooter />
    </>
  );
}

export default App;
