import About from '../components/About';
import Services from '../components/Services';
import Opportunities from '../components/Opportunities';
import SuccessStories from '../components/SuccessStories';
import Contact from '../components/Contact';

function Main() {
  return (
    <>
      <main>
        <Services />
        <Opportunities />
        <SuccessStories />
        <About />
        <Contact />
      </main>
    </>
  );
}
export default Main;
