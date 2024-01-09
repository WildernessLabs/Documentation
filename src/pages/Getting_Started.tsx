import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/components/home-page.scss";

export default function Getting_Started(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <main><br></br>

      <section id="homepage">
          <div className="home-container">

          {/* Meadow.OS */}
          <section className="meadow-features wl-container">
              <h2>Getting Started</h2>
              <hr></hr>
              Choose your compute platform.
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
                      <li><a href="/Meadow/Meadow_Basics/Apps">Meadow F7 Feather</a></li>
                      <li><a href="/Meadow/Meadow_Basics/Apps">Meadow Project Lab</a></li>
                      <li><a href="/Meadow/Meadow_Basics/Apps">Meadow Core-Compute Module</a></li>
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
                    <h3>Raspberry Pi & Meadow.Linux</h3>
                    <ul className="flat">
                      <li><a href="#">Raspberry Pi x</a></li>
                      <li><a href="#">Nvidia Jetson x</a></li>
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
                      <li><a href="#">Meadow.Desktop Simulator</a></li>
                      <li><a href="#">Meadow.Desktop w/FT232</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>           
      </main>
    </Layout>
  );
}
