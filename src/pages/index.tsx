import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "../css/components/home-page.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const isBrowser = useIsBrowser();
  if(isBrowser) insertTagManager();  //isBrowser helps us bypass a build error, where we don't have access to windo.location - https://docusaurus.io/docs/advanced/ssg#useisbrowser
  
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <main>
        <section id="homepage">
          <div className="home-container">
            <header className="lozad hero mb-50" data-background-image="/img/homepage/homepage-banner-image.png">
              <div className="wl-container hero-content">
                <div className="">
                  <h1>Welcome.</h1>
                  <p>
                    Get up and running with the Meadow Getting Started Guides.
                    Setup your development environment, configure your Meadow
                    dev kit, and deploy your first application.
                  </p>
                  <a className="button-blue" href="/Getting_Started">
                    Get Started
                  </a>
                </div>
              </div>
            </header>

            {/* Meadow.OS */}
            <section className="meadow-features wl-container">
              <h2>Meadow App Basics, Meadow.OS Fundamentals and Meadow.Foundation</h2>
              <hr></hr>
              <div className="wl-grid mb-50">
                {/* Meadow App Basics */}
                <div className="wl-card border thick-1 orange radius-8">
                  <img
                    className="border only bottom thick-1 orange"
                    src={`${siteConfig.baseUrl}img/homepage/card-meadow-apps.png`}
                  />
                  <div className="card-content">
                    <h3><a href="/Meadow/Meadow_Basics">Meadow Application Basics</a></h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Meadow_Basics/Apps">Meadow Apps</a></li>
                      <li><a href="/Meadow/Meadow_Basics/IO">Input/Output (IO)</a></li>
                      <li><a href="/Meadow/Meadow_Basics/IO/Digital/Protocols">Digital Protocols</a></li>
                      <li><a href="/Meadow/Meadow_Basics/Units">Units</a></li>
                      <li><a href="/Meadow/Meadow_Basics/Events_and_IObservable">Eventing</a></li>
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
                    <h3><a href="/Meadow/Meadow.OS">Meadow.OS Fundamentals</a></h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Meadow.OS/Networking">Networking</a></li>
                      <li><a href="/Meadow/Meadow.OS/Bluetooth">Bluetooth</a></li>
                      <li><a href="/Meadow/Meadow.OS/File_System">File System</a></li>
                      <li><a href="/Meadow/Meadow.OS/Configuration">Configuration</a></li>
                      <li><a href="/Meadow/Meadow.OS/Threading">Threading</a></li>
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
                    <h3><a href="/Meadow/Meadow.Foundation">Meadow.Foundation</a></h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Meadow.Foundation">Getting Started</a></li>
                      <li><a href="/Meadow/Meadow.Foundation/Peripherals">Peripheral Driver List</a></li>
                      <li><a href="/Meadow/Meadow.Foundation/Libraries_and_Frameworks">Libraries + Frameworks</a></li>
                      <li><a href="/Meadow/Meadow.Foundation/Working_with_Sensors">Working w/Sensors</a></li>
                      <li><a href="/Meadow/Meadow.Foundation/Unified_GPIO_Arch">Unified IO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ROW 2 */}
            <section className="meadow-features wl-container">
              <h2>Meadow.Cloud, Hardware, & Other</h2>
              <hr></hr>
              <div className="wl-grid mb-50">
                {/* Meadow.Cloud */}
                <div className="wl-card border thick-3 blue radius-8 corner">
                  <div className="card-content">
                    <h3><a href="/Meadow/Meadow.Cloud/">Meadow.Cloud</a></h3>
                    <p>
                      Deploy, maintain, and scale devices in the field with
                      Meadow.Cloud.
                    </p>
                    <div className="wl-grid space">
                      <a href="/Meadow/Meadow.Cloud/OtA_Updates/">OtA Updates</a>
                      <a href="/Meadow/Meadow.Cloud/Command_Control/">Command + Control</a>
                      <a href="/Meadow/Meadow.Cloud/Health_Monitoring/">Health Monitoring</a>
                      <a href="/Meadow/Meadow.Cloud/Logs_Events/">Logs + Events</a>
                    </div>
                  </div>
                </div>

                {/* Hardware */}
                <div className="wl-card border thick-3 blue radius-8 corner">
                  <div className="card-content">
                    <h3><a href="/Hardware/Reference/">Hardware Tutorials + Ref.</a></h3>
                    <p>
                      These tutorials and reference guides cover key electronics
                      concepts.
                    </p>
                    <div className="wl-grid space">
                      <a href="/Hardware/Tutorials/Electronics/">Electronics Tutorial</a>
                      <a href="/Hardware/Tutorials/PCB_Tutorial/">PCB Design Tutorial</a>
                    </div>
                  </div>
                </div>

                {/* API Docs */}
                <div className="wl-card border thick-3 blue radius-8 corner">
                  <div className="card-content">
                    <h3><a href="/docs/api/">API Documentation</a></h3>
                    <p>Reference documentation for the Meadow.IoT stack.</p>
                    <div className="wl-grid space">
                      <a href="docs/api/Meadow/">Meadow.Core</a>
                      <a href="docs/api/Meadow.Foundation/">Meadow.Foundation</a>
                      <a href="docs/api/Meadow/Meadow.Cloud/">Meadow.Cloud</a>
                      <a href="docs/api/Meadow/Meadow.Hardware/">Meadow.Hardware</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/*

              <section className="meadow-docs wl-container">
                <div className="wl-grid mb-50">
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
              <section className="events  mb-50">
                <div className="centered-callout">
                  <h2>Join us at these upcoming virtual events</h2>
                  <h3> Bryan, is this the place to post virtual events? Maybe our marketing site instead?
                  </h3>
                </div>
              </section>
 */}
            <section className="rel-section" style={{ minHeight: "310px" }}>
              <div className="sample-projects">
                <div className="project-card border radius-8">
                  <h2 className="project-hackster-title">Project samples at Hackster.io</h2>
                  <a
                    href="https://www.hackster.io/WildernessLabs"
                    className="button-orange-clear"
                  >
                    See our projects
                  </a>
                </div>
              </div>
            </section>
            <section className="meadow-extra wl-container">
              <hr></hr>
              <p>Don't see what you're looking for?</p>
              <p>
                Ask a <a href="https://slack.wildernesslabs.co/">question</a>, or make a <a href="https://github.com/WildernessLabs/Meadow_Issues/issues/new/choose">request</a>
              </p>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function insertTagManager()
{
  // Create noscript element
  var noScript = document.createElement('noscript');

  // Create iframe element
  var iframe = document.createElement('iframe');
  iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-M7WHZPTR";
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";

  // Append iframe to noscript
  noScript.appendChild(iframe);

  // Insert noscript at the beginning of the body
  document.body.insertBefore(noScript, document.body.firstChild);
}