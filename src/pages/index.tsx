import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/components/home-page.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <main>
        <section id="homepage">
          <div className="home-container">
            <header className="hero mb-80">
              <div className="hero-content">
                <div className="">
                  <h1>Welcome.</h1>
                  <p>
                    Get up and running with the Meadow Getting Started Guides.
                    Setup your development environment, configure your Meadow
                    dev kit, and deploy your first application.
                  </p>
                  <a className="button-blue" href="#">
                    Get Started
                  </a>
                </div>
              </div>
            </header>
            
              <section className="meadow-general wl-container">
                <h2>Meadow</h2>
                <hr></hr>
                <p className="content-primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  metus dui adipiscing nunc commodo at et in. Aliquam, ultrices
                  arcu nulla at eget ultrices ultricies rhoncus, vitae.
                </p>
                <div className="wl-grid mb-80">
                  <div className="wl-card border thick-1 orange radius-8">
                    <img
                      className="border only bottom thick-1 orange"
                      src={`${siteConfig.baseUrl}/img/homepage/card-meadow-apps.png`}
                    />
                    <div className="card-content">
                      <h3>Meadow apps</h3>
                      <ul className="flat">
                        <li>
                          <a href="#">Downloads</a>
                        </li>
                        <li>
                          <a href="#">Events & iObservable</a>
                        </li>
                        <li>
                          <a href="#">Release notes</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="wl-card border thick-1 orange radius-8">
                    <img
                      className="border only bottom thick-1 orange"
                      src={`${siteConfig.baseUrl}/img/homepage/card-network.png`}
                    />
                    <div className="card-content">
                      <h3>Network</h3>
                      <ul className="flat">
                        <li>
                          <a href="#">File System</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="wl-card border thick-1 orange radius-8">
                    <img
                      className="border only bottom thick-1 orange"
                      src={`${siteConfig.baseUrl}/img/homepage/card-input-output.png`}
                    />
                    <div className="card-content">
                      <h3>Input/Output (I/O)</h3>
                      <ul className="flat">
                        <li>
                          <a href="#">Analog.Digital.PWM</a>
                        </li>
                        <li>
                          <a href="#">Protocols: 12C,SPI,Serial Power</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="meadow-features wl-container">
                <h2>Meadow</h2>
                <hr></hr>
                <p className="content-primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  metus dui adipiscing nunc commodo at et in. Aliquam, ultrices
                  arcu nulla at eget ultrices ultricies rhoncus, vitae.
                </p>
                <div className="wl-grid mb-80">
                  <div className="wl-card border thick-3 blue radius-8 corner">
                    <div className="card-content">
                      <h3>
                        <a href="#">Getting Started</a>
                      </h3>
                      <p>Short sentence about getting started</p>
                      <div className="wl-grid space">
                        <a>Link #1</a>
                        <a>Link #2</a>
                      </div>
                    </div>
                  </div>

                  <div className="wl-card border thick-3 blue radius-8 corner">
                    <div className="card-content">
                      <h3>Peripheral driver library</h3>
                      <p>Short sentence about getting started</p>
                      <div className="wl-grid space">
                        <a>Link #1</a>
                        <a>Link #2</a>
                      </div>
                    </div>
                  </div>

                  <div className="wl-card border thick-3 blue radius-8 corner">
                    <div className="card-content">
                      <h3>Library + Frameworks</h3>
                      <p>Short sentence about getting started</p>
                      <div className="wl-grid space">
                        <a>Link #1</a>
                        <a>Link #2</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="meadow-docs wl-container">
                <div className="wl-grid mb-80">
                  <div className="wl-card full bg-light-1 pb-50">
                    <div className="card-content">
                      <h2>Electronics Tutorial</h2>
                      <p>
                        New to electronics? Wanna learn the difference between
                        voltage and current? Take a dive into electronics the
                        easy way with our electronics tutorial.
                      </p>
                      <div className="wl-grid space">
                        <a>Start tutorial</a>
                      </div>
                    </div>
                  </div>
                  <div className="wl-card full bg-light-2">
                    <div className="card-content">
                      <h2>Netduino 3</h2>
                      <p>
                        New to electronics? Wanna learn the difference between
                        voltage and current? Take a dive into electronics the
                        easy way with our electronics tutorial.
                      </p>
                      <div className="wl-grid">
                        <a>Getting started</a>
                        <a>About</a>
                        <a>Netduino.Foundation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="rel-section" >
                <div className="dev-camp"></div>
              </section>
              <section className="events  mb-80">
                <div className="centered-callout">
                  <h2>Join us at these upcoming virtual events</h2>
                  <h3> Bryan, is this the place to post virtual events? Maybe our marketing site instead?
                  </h3>
                </div>
              </section>
              <section className="rel-section" style={{minHeight:'310px'}}>
                <div className="sample-projects">
                  <div className="project-card border radius-8">
                    <h2>Use our sample projects at Hackster.io to start building your projects today.</h2>
                    <a href="" className="button-orange-clear">See our projects</a>
                  </div>
                </div>
              </section>
              <section className="meadow-extra wl-container">
                <hr></hr>
                <p>Don't see what you're looking for?</p>
                <p>Ask a <a href="">question</a>, or make a <a href="">request</a></p>
              </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}