import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/components/home-page.scss";

export default function GettingStarted(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
      <main><br></br>

        <section id="homepage">
          <div className="home-container">

            {/* Meadow.OS */}
            <section className="meadow-features wl-container">
              <h2>Getting Started w/Meadow IoT Devices</h2>
              <hr></hr>
              <p>
                Meadow is a cross-platform solution for building IoT applications, enabling 
                the same application code to run across a variety of compute contexts from 
                Microcontrollers (MCUs) like the F7 Feather, Single-Board-Computers (SBCs) 
                like the Raspberry Pi, and even on the desktop, either with or without external
                hardware peripherals.
              </p>
              <p>
                To get started, choose your compute class and device below:
              </p>
              <div className="wl-grid mb-50">
                {/* Meadow F7 */}
                <div className="wl-card border thick-1 orange radius-8">
                  <img
                    className="border only bottom thick-1 orange"
                    src={`${siteConfig.baseUrl}img/homepage/card-meadow-apps.png`}
                  />
                  <div className="card-content">
                    <h3>Meadow F7 Microcontrollers</h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Getting_Started/MCUs/F7_Feather/">F7 Feather</a></li>
                      <li><a href="/Meadow/Getting_Started/MCUs/Project_Lab/">Project Lab</a></li>
                      <li><a href="/Meadow/Getting_Started/MCUs/Core_Compute_Module_DevKit/">Core-Compute Module DevKit</a></li>
                    </ul>
                  </div>
                </div>
                {/* Raspberry Pi */}
                <div className="wl-card border thick-1 orange radius-8">
                  <img
                    className="border only bottom thick-1 orange"
                    src={`${siteConfig.baseUrl}img/homepage/card-input-output.png`}
                  />
                  <div className="card-content">
                    <h3>Raspberry Pi and other single-board-computers</h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Getting_Started/SBCs/RaspberryPi/">Raspberry Pi</a></li>
                      <li><a href="/Meadow/Getting_Started/SBCs/SeeedStudio_ReTerminal/">Seeed Studio ReTerminal</a></li>
                      <li><a href="/Meadow/Getting_Started/SBCs/Jetson_Nano/">Nvidia Jetson Nano</a></li>
                    </ul>
                  </div>
                </div>

                {/* Meadow.Desktop/Simulator */}
                <div className="wl-card border thick-1 orange radius-8">
                  <img
                    className="border only bottom thick-1 orange"
                    src={`${siteConfig.baseUrl}img/homepage/card-network.png`}
                  />
                  <div className="card-content">
                    <h3>Meadow.Desktop + Simulator</h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Windows/">Meadow.Windows</a></li>
                      <li><a href="/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Linux/">Meadow.Linux</a></li>
                      <li><a href="/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Mac/">Meadow.Mac</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ROW 2 */}
            <section className="meadow-features wl-container">
              <h2>Meadow.Cloud and IoT Accelerators</h2>
              <hr></hr>
              <div className="wl-grid mb-50">
                {/* Meadow.Cloud */}
                <div className="wl-card border thick-3 blue radius-8 corner">
                  <div className="card-content">
                    <h3>Meadow.Cloud</h3>
                    <ul className="flat">
                      <li><a href="/Meadow/Getting_Started/Meadow.Cloud/">Hello, Meadow.Cloud</a></li>
                      <li><a href="/Meadow/Meadow.Cloud/Device_Provisioning/">Provision a Device</a></li>
                      <li><a href="/Meadow/Meadow.Cloud/OtA_Updates/">Over-the-Air (OtA) Updates</a></li>
                      <li><a href="/Meadow/Meadow.Cloud/Health_Monitoring/">Health Monitoring</a></li>
                      <li><a href="/Meadow/Meadow.Cloud/Logs_Events/">Logs + Events</a></li>
                      <li><a href="/Meadow/Meadow.Cloud/Command_Control/">Command + Control</a></li>
                      <li><a href="/Meadow/Meadow.Cloud/Integrations/">Integrations</a></li>
                    </ul>
                  </div>
                </div>

                {/* IoT Accelerators */}
                <div className="wl-card border thick-3 blue radius-8 corner">
                  <div className="card-content">
                    <h3>IoT Accelerators</h3>
                    <ul className="flat">
                      <li><a href="https://github.com/WildernessLabs/Meadow.ProjectLab?tab=readme-ov-file#getting-started">Project Lab</a></li>
                      <li><a href="https://github.com/WildernessLabs/Clima?tab=readme-ov-file#getting-started">Clima</a></li>
                      <li><a href="https://github.com/WildernessLabs/GNSS_Sensor_Tracker?tab=readme-ov-file#getting-started">GNSS/GPS Sensor Tracker</a></li>
                      <li><a href="https://github.com/WildernessLabs/Juego?tab=readme-ov-file#getting-started">Juego</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </section>           
      </main>
  );
}
