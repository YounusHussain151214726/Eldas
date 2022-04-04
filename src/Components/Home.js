import React from "react";

const Home = () => {
  return (
    <div>
      <section className="Group1">
        <div className="subGroup1">
          <div className="navdiv">
            <img src="./images/header-bg.jpg" id="G1hi" />

            <span className="logosp">
              {" "}
              <img src="./images/logo.png" id="logoI" />{" "}
            </span>
            <ul id="navul">
              <a href="#" id="a">
                <li id="navli1">HOME</li>
              </a>
              <a href="#" id="a">
                <li id="navli2">ABOUT</li>
              </a>
              <a href="#" id="a">
                <li id="navli3">SERVICES</li>
              </a>
              <a href="#" id="a">
                <li id="navli4">CONTACT</li>
              </a>
            </ul>
          </div>
        </div>

        <div id="headingpera">
          <h1 id="G1h">Follow The Rules And Grow</h1>
          <p id="G1p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat vestibulum nisl eu pellentesque.
          </p>
          <button id="G1b"> JOIN NOW</button>
        </div>
      </section>

      {/* //////////////////////////////////////////////////////////////////////////// */}

      {/* Group2 Start */}

      <section className="Group2">
        <div id="subGroup2">
          <img src="./images/about.png" id="G2i" />

          <div id="contentdiv">
            <span id="G2sp">WHAT WE DO</span>
            <h1 id="G2h">Create a beautiful portfolio gallery</h1>
            <p id="G2p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque. Nullam
              tortor lectus, malesuada in lacinia sit amet, condimentum ac est.{" "}
            </p>
            <button id="G2b">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* ///////////////////////////////////////////////// */}

      {/* Group 3 Start */}
      {/* ///////////////////////////////////////////////////// */}

      <section className="Group3">
        <span id="G3sp">FEATURES AND SERVICES</span>
        <h1 id="G3h"> How we satisfy our clients</h1>
        <div id="subGroup3">
          <div id="box1">
            <img src="./images/f-icon-1.png" id="Bx1i" />
            <h id="Bx1h">Dashboard Features</h>
            <p id="Bx1p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque.
            </p>
          </div>
          <div id="box2">
            <img src="./images/f-icon-2.png" id="Bx2i" />
            <h id="Bx2h">Userfriendly Experience</h>
            <p id="Bx2p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque.
            </p>
          </div>
          <div id="box3">
            <img src="./images/f-icon-3.png" id="Bx3i" />
            <h id="Bx3h">Colour Shemes</h>
            <p id="Bx3p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque.
            </p>
          </div>

          <div id="box4">
            <img src="./images/f-icon-4.png" id="Bx4i" />
            <h id="Bx4h">Different Layouts</h>
            <p id="Bx4p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque.
            </p>
          </div>
          <div id="box5">
            <img src="./images/f-icon-5.png" id="Bx5i" />
            <h id="Bx5h">Vector Based Graphics</h>
            <p id="Bx5p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque.
            </p>
          </div>
          <div id="box6">
            <img src="./images/f-icon-6.png" id="Bx6i" />
            <h id="Bx6h">Pixel Perfect Design </h>
            <p id="Bx6p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat vestibulum nisl eu pellentesque.
            </p>
          </div>
        </div>
      </section>

      {/* //////////////////////////////////////////////////// */}
      {/* Group 4 Start */}
      {/* ////////////////////////////////////////////////////////// */}

      <section className="Group4">
        <div id="subGroup4">
          <span id="G4sp">CALL TO ACTION</span>
          <br />
          <h id="G4h">Start building your website with modern CMS</h>
          <p id="G4p">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat vestibulum nisl eu pellentesque.
          </p>

          <span id="G4sp1">
            Created By :{" "}
            <a href="https://m.facebook.com/younus.hussain.786">
              Syed Mohammad Younis
            </a>{" "}
            2022,ALL RIGHT RESERVED.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
