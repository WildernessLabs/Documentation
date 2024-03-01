import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const FoundationLinksUpdater = () => {
  const location = useLocation();
  useEffect(() => {

    if(!location.pathname.includes("/docs/api/Meadow.Foundation"))
    {
      return null;
    }

    let count = 0;
    function updateLinks() {
      const links = document.querySelectorAll(".menu__link, .toc-item a");
      if(!links?.length && count<30)
      {
        count++;
        setTimeout(() => updateLinks(), 100);
      }
      links.forEach((link) => {
        if (link.href.includes("/docs/api/Meadow.Foundation.mikroBUS/")) {
          link.innerText = link.innerText.replace(
            "Meadow.Foundation.mikroBUS.",
            ""
          );
        } else if (
          link.href.includes("/docs/api/Meadow.Foundation.FeatherWings/")
        ) {
          link.innerText = link.innerText.replace(
            "Meadow.Foundation.FeatherWings.",
            ""
          );
        } else if (link.href.includes("/docs/api/Meadow.Foundation.Grove/")) {
          link.innerText = link.innerText.replace(
            "Meadow.Foundation.Grove.",
            ""
          );
        } else if (link.href.includes("/docs/api/Meadow.Foundation/")) {
          link.innerText = link.innerText.replace(
            "Meadow.Foundation.",
            ""
          );
        }
      });
    }

    updateLinks();
  }, [location.pathname]); // This effect runs when the pathname changes

  return null; // This component does not render anything
};

export default FoundationLinksUpdater;
