import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/components/home-page.scss";

export default function Getting_Started(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <main><br></br>
      <section className="meadow-features wl-container">
                <h2>Getting Started</h2>
                <hr></hr>
                <div>
                    All the other content...
                </div>
              </section>
      </main>
    </Layout>
  );
}
