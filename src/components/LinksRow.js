// src/components/LinksRow.js
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "../css/components/link-row.scss";

function useNavbarItems(siteConfig) {
  let items;
  items = siteConfig.customFields.topNav;

  return items;
}

// function getHrefMatch(href, siteConfig) {
//   const isBrowser = useIsBrowser();
//   if(!isBrowser) return false;  //isBrowser helps us bypass a build error, where we don't have access to windo.location - https://docusaurus.io/docs/advanced/ssg#useisbrowser
//   if(!href) return false;
//   var pathname = window.location.pathname.replace(siteConfig.baseUrl, "");
//   console.log(href,"\n", pathname)
//   return pathname.toLowerCase().startsWith(href.toLowerCase());
// }

function getHrefMatch(items, siteConfig) {
  const isBrowser = useIsBrowser();
  if(!isBrowser) return false;  //isBrowser helps us bypass a build error, where we don't have access to windo.location - https://docusaurus.io/docs/advanced/ssg#useisbrowser

  var pathname = window.location.pathname.replace(siteConfig.baseUrl, "");

  var longestMatch = "";
  for(let item of items)
  {
    if(item.href && pathname.toLowerCase().startsWith(item.href.toLowerCase()))
    {
      longestMatch = item.href.length > longestMatch.length ? item.href.toLowerCase() : longestMatch;
    }
  }

  return longestMatch;
}

function LinksRow() {
  let {siteConfig} = useDocusaurusContext();
  const items = useNavbarItems(siteConfig);
  var match = getHrefMatch(items, siteConfig);
  console.log(match);
  return (
    <div className="links-row">
      {items.map((item, i) => (
        <a
          key={i}
          href={`${siteConfig.baseUrl}${item.href}`}
          className={item.href && item.href.toLowerCase() === match ? "active" : ""}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default LinksRow;
