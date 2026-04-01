import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Menu from "../components/Menu";
import Highlights from "../components/Highlights";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Menu/>
      <Highlights/>
      <Reservation/>
      <Footer/>
    </>
  );
}

export default Home;