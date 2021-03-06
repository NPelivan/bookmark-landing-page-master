import React, { Component } from "react";
import HeroImage from "./images/illustration-hero.svg";
import Chrome from "./images/logo-chrome.svg";
import Firefox from "./images/logo-firefox.svg";
import Opera from "./images/logo-opera.svg";
import Dots from "./images/bg-dots.svg";
import Arrow from "./images/icon-arrow.svg";
import Tab1 from "./images/illustration-features-tab-1.svg";
import Tab2 from "./images/illustration-features-tab-2.svg";
import Tab3 from "./images/illustration-features-tab-3.svg";
import "./style.css";
import Tabs from "./Tabs";
import FAQs from "./FAQs";
export default class Main extends Component {
  render() {
    return (
      <main>
        <section className="container-intro">
          <div className="intro">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <button>Get it on Chrome</button>
            <button className="firefox-btn">Get it on Firefox</button>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="Monitor image" />
          </div>
          <div className="blue-line"></div>
        </section>

        <section className="container-features">
          <div className="features">
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <Tabs>
            <div label="Simple Bookmarking">
              <div className="tab-item">
                <img src={Tab1} alt="Tab image" />
                <div>
                  <h2>Bookmark in one click</h2>
                  <p>
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                  <button>More info</button>
                </div>
              </div>
            </div>

            <div label="Speedy Searching">
              <div className="tab-item">
                <img src={Tab2} alt="Tab image" />
                <div>
                  <h2>Intelligent search</h2>
                  <p>
                    Our powerful search feature will help you find saved sites
                    in no time at all. No need to trawl through all of your
                    bookmarks.
                  </p>
                  <button>More info</button>
                </div>
              </div>
            </div>

            <div label="Easy Sharing" className="tab-item">
              <div className="tab-item">
                <img src={Tab3} alt="Tab image" />
                <div>
                  <h2>Share your bookmarks</h2>
                  <p>
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a
                    button.
                  </p>
                  <button>More info</button>
                </div>
              </div>
            </div>
          </Tabs>
          <div className="left-blue-line"></div>
        </section>

        <section className="extensions">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>

          <div className="flex-items">
            <div className="browser">
              <img src={Chrome} alt="Chorme" />
              <h4>Add to Chrome</h4>
              <span>Minimum version 62</span>
              <img src={Dots} alt="Dots" />
              <button>Add & Install Extension</button>
            </div>

            <div className="browser">
              <img src={Firefox} alt="Firefox" />
              <h4>Add to Firefox</h4>
              <span>Minimum version 55</span>
              <img src={Dots} alt="Dots" />
              <button>Add & Install Extension</button>
            </div>

            <div className="browser">
              <img src={Opera} alt="Opera" />
              <h4>Add to Opera</h4>
              <span>Minimum version 46</span>
              <img src={Dots} alt="Dots" />
              <button>Add & Install Extension</button>
            </div>
          </div>
        </section>

        <section className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>

          <FAQs />

          <button>More info</button>
        </section>
      </main>
    );
  }
}
