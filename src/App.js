import "./resourses/reset.css";
import "./resourses/main.css";
import "./resourses/responsive.css";
import Header from "./view/layout/Header";
import Footer from "./view/layout/Footer";
import Nav from "./view/layout/Nav";
import Main from "./view/layout/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
