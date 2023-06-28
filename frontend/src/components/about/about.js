import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <>
      <div id="about">
        <div className="abt-wrap">
        <div className="hero">
          <h1>WHY ATTEND BITOTSAV.</h1>
        </div>
        <div className="scroll-about">
          <div className="text-1">
            <p>
              With the zeal to provide people an opportunity to participate in
              cultural celebrations through music, dance, and art. One of the
              largest socio-cultural extravaganzas in east India, <i><b>BITOTSAV</b></i> is
              being held by BIT Mesra.<p> Whether you're a student or a guest,             &nbsp;<i><b>BITOTSAV</b></i> offers a distinctive and engaging experience that allows
              you to expand your cognizance and experience for many cultures.&nbsp;
              <i><b>BITOTSAV</b></i> offers a stage for a wide range of performances, from
              dance and music to fashion and fine arts, with the performances of
              luminaries from all over the country envisioned in a colossal
              showcase of brilliance. With the theme of "Concord of
              Reminiscences," <i><b>BITOTSAV</b></i> seeks to accolade the past and look
              toward the future with a sense of optimism.</p> One of the major
              highlights of <i><b>BITOTSAV'23</b></i> is the convivial cause it fortifies -
              Unnat Bharat Abhiyan. This initiative aims to potentiate rural
              communities by promoting sustainable development and innovation
              through higher educational institutions. The fact that this year's &nbsp;
              <i><b>BITOTSAV</b></i> is taking place after a three-year hiatus owing to the
              perpetual epidemic, makes it extra special. Despite the challenges
              posed by the pandemic, the organizers have worked hard to
              ascertain that the fest is conducted in a safe and secure manner,
              while still providing a platform for students to showcase their
              aptitudes and engage in cultural activities. <i><b>BITOTSAV'23</b></i> promises
              to be the most memorable and captivating event, alacritously
              awaited by students and alumni kindred.
            </p>
          </div>
        </div>

        </div>
      </div>

      <Outlet />
    </>
  );
}
