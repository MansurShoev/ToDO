import "./App.css";
import "./pre.css";
import "./w3.css";
import La from "./images/la.jpg";
import Bandmember from "./images/bandmember.jpg";
import Chicago from "./images/chicago.jpg";
import Map from "./images/map.jpg";
import Newyork from "./images/newyork.jpg";
import Ny from "./images/ny.jpg";
import Paris from "./images/paris.jpg";
import Sanfran from "./images/sanfran.jpg";
import Navbar from "./components/navbar";
import Page from "./components/pageContent";
function App() {
   
  return (
    <>
    <Navbar></Navbar>

      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <a
            className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            href="/#"
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </a>
          <a
            href="index.html"
            className="w3-bar-item w3-button w3-padding-large"
          >
            BAND
         
          </a>
          <a
            href="index.html#band"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
               HOME
          </a>
          <a
            href="index.html#tour"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            GGGG
          </a>
          <a
            href="index.html#contact"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
           TOUR
          </a>
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">
              MORE <i className="fa fa-caret-down"></i>
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="index.html#" className="w3-bar-item w3-button">
                Merchandise
              </a>
              <a href="index.html#" className="w3-bar-item w3-button">
                Extras
              </a>
              <a href="index.html#" className="w3-bar-item w3-button">
                Media
              </a>
            </div>
          </div>
          <a
            href="/#"
            className="w3-padding-large w3-hover-red w3-hide-small w3-right"
          >
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>

      {/* Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links)  */}
      <div
        id="navDemo"
        className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
        style={{ marginTop: 46 }}
      >
        <a
          href="index.html#band"
          className="w3-bar-item w3-button w3-padding-large"
        >
          BAND
        </a>
        <a
          href="index.html#tour"
          className="w3-bar-item w3-button w3-padding-large"
        >
          TOUR
        </a>
        <a
          href="index.html#contact"
          className="w3-bar-item w3-button w3-padding-large"
        >
          CONTACT
        </a>
        <a
          href="index.html#"
          className="w3-bar-item w3-button w3-padding-large"
        >
          MERCH
        </a>
      </div>

      {/* Page content  */}
      <div className="w3-content" style={{ maxWidth: 2000, marginTop: 46 }}>
        {/* Automatic Slideshow Images  */}
        <div
          className="mySlides w3-display-container w3-center"
          style={{ display: "none" }}
        >
          <img src={La} alt="la" style={{ width: "100%" }} />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Los Angeles</h3>
            <p>
              <b>We had the best time playing at Venice Beach!</b>
            </p>
          </div>
        </div>
        <div
          className="mySlides w3-display-container w3-center"
          style={{ display: "block" }}
        >
          <img src={Ny} alt="ny" style={{ width: "100%" }} />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>New York</h3>
            <p>
              <b>The atmosphere in New York is lorem ipsum.</b>
            </p>
          </div>
        </div>
        <div
          className="mySlides w3-display-container w3-center"
          style={{ display: "none" }}
        >
          <img src={Chicago} alt="chicago" style={{ width: "100%" }} />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Chicago</h3>
            <p>
              <b>Thank you, Chicago - A night we won't forget.</b>
            </p>
          </div>
        </div>

        {/* The Band Section  */}
        <div
          className="w3-container w3-content w3-center w3-padding-64"
          style={{ maxWidth: 800 }}
          id="band"
        >
          <h2 className="w3-wide">THE BAND</h2>
          <p className="w3-opacity">
            <i>We love music</i>
          </p>
          <p className="w3-justify">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="w3-row w3-padding-32">
            <Page nom = "mansur" img = {Bandmember} />
            <Page nom = "yosin"  img = {Bandmember}/>
           <Page nom = "kurbon"  img = {Bandmember}/>
          </div>
        </div>

        {/* The Tour Section  */}
        <div className="w3-black" id="tour">
          <div
            className="w3-container w3-content w3-padding-64"
            style={{ maxWidth: 800 }}
          >
            <h2 className="w3-wide w3-center">TOUR DATES</h2>
            <p className="w3-opacity w3-center">
              <i>Remember to book your tickets!</i>
            </p>
            <br />

            <ul className="w3-ul w3-border w3-white w3-text-grey">
              <li className="w3-padding">
                September{" "}
                <span className="w3-tag w3-red w3-margin-left">Sold out</span>
              </li>
              <li className="w3-padding">
                October{" "}
                <span className="w3-tag w3-red w3-margin-left">Sold out</span>
              </li>
              <li className="w3-padding">
                November{" "}
                <span className="w3-badge w3-right w3-margin-right">3</span>
              </li>
            </ul>

            <div
              className="w3-row-padding w3-padding-32"
              style={{ margin: "0 -16px" }}
            >
              <div className="w3-third w3-margin-bottom">
                <img
                  src={Newyork}
                  alt="New York"
                  style={{ width: "100%" }}
                  className="w3-hover-opacity"
                />
                <div className="w3-container w3-white">
                  <p>
                    <b>New York</b>
                  </p>
                  <p className="w3-opacity">Fri 27 Nov 2016</p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button className="w3-button w3-black w3-margin-bottom">
                    Buy Tickets
                  </button>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom">
                <img
                  src={Paris}
                  alt="Paris"
                  style={{ width: "100%" }}
                  className="w3-hover-opacity"
                />
                <div className="w3-container w3-white">
                  <p>
                    <b>Paris</b>
                  </p>
                  <p className="w3-opacity">Sat 28 Nov 2016</p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button className="w3-button w3-black w3-margin-bottom">
                    Buy Tickets
                  </button>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom">
                <img
                  src={Sanfran}
                  alt="San Francisco"
                  style={{ width: "100%" }}
                  className="w3-hover-opacity"
                />
                <div className="w3-container w3-white">
                  <p>
                    <b>San Francisco</b>
                  </p>
                  <p className="w3-opacity">Sun 29 Nov 2016</p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button className="w3-button w3-black w3-margin-bottom">
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Modal  */}
        <div id="ticketModal" className="w3-modal">
          <div className="w3-modal-content w3-animate-top w3-card-4">
            <header className="w3-container w3-teal w3-center w3-padding-32">
              <span className="w3-button w3-teal w3-xlarge w3-display-topright">
                ×
              </span>
              <h2 className="w3-wide">
                <i className="fa fa-suitcase w3-margin-right"></i>Tickets
              </h2>
            </header>
            <div className="w3-container">
              <p>
                <label>
                  <i className="fa fa-shopping-cart"></i> Tickets, $15 per
                  person
                </label>
              </p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="How many?"
              />
              <p>
                <label>
                  <i className="fa fa-user"></i> Send To
                </label>
              </p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter email"
              />
              <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
                PAY <i className="fa fa-check"></i>
              </button>
              <button className="w3-button w3-red w3-section">
                Close <i className="fa fa-remove"></i>
              </button>
              <p className="w3-right">
                Need{" "}
                <a
                  href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm#"
                  className="w3-text-blue"
                >
                  help?
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* The Contact Section  */}
        <div
          className="w3-container w3-content w3-padding-64"
          style={{ maxWidth: 800 }}
          id="contact"
        >
          <h2 className="w3-wide w3-center">CONTACT</h2>
          <p className="w3-opacity w3-center">
            <i>Fan? Drop a note!</i>
          </p>
          <div className="w3-row w3-padding-32">
            <div className="w3-col m6 w3-large w3-margin-bottom">
              <i className="fa fa-map-marker" style={{ width: 30 }}></i>{" "}
              Chicago, US
              <br />
              <i className="fa fa-phone" style={{ width: 30 }}></i> Phone: +00
              151515
              <br />
              <i className="fa fa-envelope" style={{ width: 30 }}>
                {" "}
              </i>{" "}
              Email: mail@mail.com
              <br />
            </div>
            <div className="w3-col m6">
              <form
                action="https://www.w3schools.com/action_page.php"
                target="_blank"
              >
                <div
                  className="w3-row-padding"
                  style={{ margin: "0 -16px 8px -16px" }}
                >
                  <div className="w3-half">
                    <input
                      className="w3-input w3-border"
                      type="text"
                      placeholder="Name"
                      required=""
                      name="Name"
                    />
                  </div>
                  <div className="w3-half">
                    <input
                      className="w3-input w3-border"
                      type="text"
                      placeholder="Email"
                      required=""
                      name="Email"
                    />
                  </div>
                </div>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Message"
                  required=""
                  name="Message"
                />
                <button
                  className="w3-button w3-black w3-section w3-right"
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* End Page Content  */}
      </div>

      {/* Image of location/map  */}
      <img
        src={Map}
        className="w3-image w3-greyscale-min"
        alt="map"
        style={{ width: "100%" }}
      />

      {/* Footer  */}
      <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
        <p className="w3-medium">
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3.css
          </a>{" "}
          and <a href="https://nift.cc">Nift</a>
        </p>
      </footer>
    </>
  );
}

export default App;
