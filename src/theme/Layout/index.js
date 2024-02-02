import React, { useEffect } from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import lozad from "lozad";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  //loop through the configured tab groups, and make sure they are in the local storage.
  const isBrowser = useIsBrowser();
  if (isBrowser) {
    //isBrowser helps us bypass a build error, where we don't have access to windo.location - https://docusaurus.io/docs/advanced/ssg#useisbrowser
    const { siteConfig } = useDocusaurusContext();
    const tabGroups = siteConfig.customFields.tabGroups;
    for (let group of tabGroups) {
      const item = localStorage.getItem(`docusaurus.tab.${group.id}`);
      if (!item) {
        localStorage.setItem(`docusaurus.tab.${group.id}`, group.defaultTab);
      }
    }
  }

  useKeyboardNavigation();
  useEffect(() => {
    // Initialize lozad
    const observer = lozad();
    observer.observe();
  }, []);
  return (
    <LayoutProvider>
      {/* Google Tag Manager (noscript) */}
      <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7WHZPTR"
                  height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />
      <Navbar />

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
