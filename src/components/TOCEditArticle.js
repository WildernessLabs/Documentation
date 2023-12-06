import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";
import "../css/components/toc-edit-article.scss";

function TOCEditArticle() {
  const { metadata } = useDoc(); //NOTE, maybe in the future we can use frontMatter prop for date retrieval

  return (
    <div className="toc-edit-article">
      <a href={metadata.editUrl} target="_blank">
        Edit <img src="/DocsDocusaurus/img/pencil.svg" alt="Edit this page" />
      </a>
      <div className="separator"></div>
    </div>
  );
}

export default TOCEditArticle;
