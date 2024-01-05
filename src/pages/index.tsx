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
              <div className="wl-container hero-content">
                <div className="">
                  <h1>Welcome.</h1>
                  <p>
                    Get up and running with the Meadow Getting Started Guides.
                    Setup your development environment, configure your Meadow
                    dev kit, and deploy your first application.
                  </p>
                  <a className="button-blue" href="/meadow/Getting_Started">
                    Get Started
                  </a>
                </div>
              </div>
            </header>

            {/* Meadow.OS */}
            <section className="meadow-features wl-container">
                <h2>Meadow.OS</h2>
                <hr></hr>
                <div className="wl-grid mb-80">
                  {/* Meadow App Basics */}
                  <div className="wl-card border thick-1 orange radius-8">
                    <img
                      className="border only bottom thick-1 orange"
                      src={`${siteConfig.baseUrl}img/homepage/card-meadow-apps.png`}
                    />
                    <div className="card-content">
                      <h3>Meadow Application Basics</h3>
                      <ul className="flat">
                        <li><a href="/Meadow/Meadow_Basics/Apps">Meadow Apps</a></li>
                        <li><a href="/Meadow/Meadow_Basics/IO">Input/Output (IO)</a></li>
                        <li><a href="/Meadow/Meadow_Basics/IO/Digital/Protocols">Digital Protocols</a></li>
                        <li><a href="/Meadow/Meadow_Basics/Units">Units</a></li>
                        <li><a href="/Meadow/Meadow_Basics/Events_and_IObservable">Eventing</a></li>
                        <li><a href="/Meadow/Meadow_Basics">more...</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Meadow.OS Fundamentals */}
                  <div className="wl-card border thick-1 orange radius-8">
                    <img
                      className="border only bottom thick-1 orange"
                      src={`${siteConfig.baseUrl}img/homepage/card-input-output.png`}
                    />
                    <div className="card-content">
                      <h3>Meadow.OS Fundamentals</h3>
                      <ul className="flat">
                        <li><a href="/Meadow/Meadow.OS/Networking">Networking</a></li>
                        <li><a href="/Meadow/Meadow.OS/Bluetooth">Bluetooth</a></li>
                        <li><a href="/Meadow/Meadow.OS/File_System">File System</a></li>
                        <li><a href="/Meadow/Meadow.OS/Configuration">Configuration</a></li>
                        <li><a href="/Meadow/Meadow.OS/Threading">Threading</a></li>
                        <li><a href="/Meadow/Meadow.OS">more...</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Meadow.Foundation */}
                  <div className="wl-card border thick-1 orange radius-8">
                    <img
                      className="border only bottom thick-1 orange"
                      src={`${siteConfig.baseUrl}img/homepage/card-network.png`}
                    />
                    <div className="card-content">
                      <h3>Meadow.Foundation</h3>
                      <ul className="flat">
                        <li><a href="/Meadow/Meadow.Foundation">Getting Started</a></li>
                        <li><a href="/Meadow/Meadow.Foundation/Peripherals">Peripheral Driver List</a></li>
                        <li><a href="/Meadow/Meadow.Foundation/Libraries_and_Frameworks">Libraries + Frameworks</a></li>
                        <li><a href="/Meadow/Meadow.Foundation/Working_with_Sensors">Working w/Sensors</a></li>
                        <li><a href="/Meadow/Meadow.Foundation/Unified_GPIO_Arch">Unified IO</a></li>
                        <li><a href="/Meadow/Meadow.Foundation">more...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* ROW 2 */}
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
