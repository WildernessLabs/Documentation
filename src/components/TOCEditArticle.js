import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../css/components/toc-edit-article.scss";

function TOCEditArticle() {
  const { metadata } = useDoc(); //NOTE, maybe in the future we can use frontMatter prop for date retrieval
  let {siteConfig} = useDocusaurusContext();

  return (
    <div className="toc-edit-article">
      <a href={metadata.editUrl} target="_blank">
        Edit <img src={`${siteConfig.baseUrl}img/pencil.svg`} alt="Edit this page" />
      </a>
      <div className="separator"></div>
    </div>
  );
}

export default TOCEditArticle;
