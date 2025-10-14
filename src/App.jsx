import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@components/NavBar";
import Home from "@components/Home";
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
