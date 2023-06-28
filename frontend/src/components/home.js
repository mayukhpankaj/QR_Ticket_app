import React, { Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideNav from "./navbar/side-nav";
import About from "./about/about";
import Event from "./event/event";
import Schedule from "./schedule/schedule";
import Contact from "./contact";
export default function Home() {
  const dom_ref = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      
      const counters = document.querySelectorAll(".val");
      const speed = 300;

    counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute("value");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data  +time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value===4?value:value+"+";
        }
      };

      animate();
    });
  }, 500);
  }, []);
  return (
    <div className="wrapper">
      <div id="home" className="contain">
        <div className="home-ka-info">
          <h1>
            JOIN US FOR <br /> BITOTSAV 2023
          </h1>
          <p>Concorde of Reminiscence</p>
          <Link to="/register">
            <button className="butt">Register Now</button>
          </Link>
          <h2 className="hata">LIVE IN BIT MESRA | FEB 09-12, 2023</h2>
          <h2 className="hat">
            LIVE IN BIT MESRA | <br />
            FEB 09-12, 2023
          </h2>
          <div className="stats">
            <div >
              <span className="val" value="4">0</span>
              <div>
                <h4>DAYS</h4>
              </div>
            </div>
            <div>
              <span className="val" value="70">0</span>
              <div>
                <h4>EVENTS</h4>
              </div>
            </div>
            <div>
              <span className="val" value="50000">0</span>
              <div>
                <h4>FOOTFALL</h4>
              </div>
            </div>
            <div>
              <span className="val" value="200">0</span>
              <div>
                <h4>PARTNERS</h4>
              </div>
            </div>
            <div>
              <span className="val" value="100">0</span>
              <div>
                <h4>COLLEGE</h4>
              </div>
            </div>
          </div>
          <div className="mob-stats">
            <div className="stat-wrapper">
              <div>
                <span className="val" value="4">0</span>
                <div>
                  <h4>DAYS</h4>
                </div>
              </div>
              <div>
                <span className="val" value="70">0</span>
                <div>
                  <h4>EVENTS</h4>
                </div>
              </div>
              <div>
                <span className="val" value="50000">0</span>
                <div>
                  <h4>FOOTFALL</h4>
                </div>
              </div>
            </div>
            <div className="stat-wrapper">
              <div>
                <span className="val" value="200">0</span>
                <div>
                  <h4>PARTNERS</h4>
                </div>
              </div>
              <div>
                <span className="val" value="100">0</span>
                <div>
                  <h4>COLLEGE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero"></div>
      </div>
      <Event />
      <Schedule />
      <About />
      <Contact />
      <Outlet />
    </div>
  );
}
