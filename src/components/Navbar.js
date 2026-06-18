import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../img/logo22.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
    if (window.innerWidth <= 576) {
      openBar();
    }
  }

  const languageButtons = (
    <>
      <button
        type="button"
        className={`lang-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        {t('nav.english')}
      </button>
      <button
        type="button"
        className={`lang-button ${i18n.language === 'si' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('si')}
      >
        {t('nav.sinhala')}
      </button>
      <button
        type="button"
        className={`lang-button ${i18n.language === 'ta' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('ta')}
      >
        {t('nav.tamil')}
      </button>
    </>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <Link
            spy={true}
            smooth={true}
            duration={1000}
            to="headerbg"
            style={{ cursor: "pointer" }}
            className="navbar-logo-link"
          >
            <img src={logo} alt="Dhanodya Logo" className="navbar-logo-img" />
          </Link>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="opportunities"
                spy={true}
                smooth={true}
                duration={1000}
              >
                {t('nav.opportunities')}
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="success-stories"
                spy={true}
                smooth={true}
                duration={1000}
              >
                {t('nav.success')}
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
          <div className="lang-switch desktop-lang">
            {languageButtons}
          </div>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
