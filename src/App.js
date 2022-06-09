import AboutMe from "./components/Home/AboutMe";
import Banner from "./components/Home/Banner";
import ContactMe from "./components/Home/ContactMe";
import Navbar from "./components/Home/Navbar";
import Projects from "./components/Home/Projects";
import Services from "./components/Home/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
