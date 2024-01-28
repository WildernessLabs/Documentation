import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";
import TOCEditArticle from "@site/src/components/TOCEditArticle";
import useIsBrowser from "@docusaurus/useIsBrowser";

const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
let tocHashMap = {};

function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
}

export default function TOC({ className, ...props }) {
  const isBrowser = useIsBrowser();
  if(!isBrowser) return (<div></div>);

  const forceUpdate = useForceUpdate();
  let activeTab, setActiveTab;
  function setupUseTabState() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (/^docusaurus\.tab\..+/.test(key)) {
        [activeTab, setActiveTab] = [activeTab, setActiveTab] && useState(localStorage.getItem(key))
      }
    }
  }
  setupUseTabState();

  function constructTOCHashmap() {
    const hashmap = {};
    const containers = document.querySelectorAll(".tabs-container");

    // Process headings inside tab containers
    containers.forEach((container) => {
      const panels = container.querySelectorAll('[role="tabpanel"]');
      const tabLabels = container.querySelectorAll('.tabs li[role="tab"]');

      panels.forEach((panel, index) => {
        const panelLabel = tabLabels[index]
          ? tabLabels[index].innerText.trim().toLowerCase().replace(/\s+/g, "")
          : "unknown";
        const items = Array.from(panel.querySelectorAll("h1, h2, h3")).map(
          (heading) => heading.id
        );
        hashmap[panelLabel] = items;
      });
    });

    // Process headings outside of tab containers
    const nonTabHeadings = Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter((heading) => !heading.closest(".tabs-container"))
      .map((heading) => heading.id);

    if (nonTabHeadings.length) {
      hashmap["all"] = nonTabHeadings;
    }
    return hashmap;
  }

  useEffect(() => {
    tocHashMap = {};
    tocHashMap = !tocHashMap["all"] ? constructTOCHashmap() : tocHashMap;
    forceUpdate();

    const handleStorageChange = (event) => {
      if (event.key.includes("docusaurus.tab")) {
        const newActiveTab = localStorage.getItem(event.key);
        if(setActiveTab) setActiveTab(newActiveTab);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [location, forceUpdate]);

  // Prepare new props for TOCItems based on activeTab
  const tocIds = [tocHashMap["all"], tocHashMap[activeTab]].flat();
  props.toc = props.toc.filter((item) => tocIds.includes(item.id));
  const tocItemsProps = {
    ...props,
  };

  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <TOCEditArticle />
      <TOCItems
        {...tocItemsProps}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
