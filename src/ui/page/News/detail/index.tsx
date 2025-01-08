import { useEffect, useRef, useState } from "react";
import { styled } from "../../../../shared/styles";

const StyledNewsDetail = styled("div", {
  position: "relative",
  height: "100vh",
  overflow: "hidden",
  iframe: {
    html: {
      overflow: "hidden !important",
    },
  },
});

type TNewsDetail = {
  title?: string;
  data: any;
};

export const NewsDetail = ({ title, data }: TNewsDetail) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [newHeight, setNewHeight] = useState<string>("");

  useEffect(() => {
    const iframe = iframeRef.current;

    const adjustIframeSize = () => {
      if (iframe && iframe.contentDocument) {
        const iframeDocument = iframe.contentDocument;
        iframeDocument.body.style.overflow = "hidden";
        iframeDocument.body.style.lineHeight = "26px";
        iframeDocument.body.style.fontFamily = "Google Sans";

        const tableElement = iframeDocument.querySelector("table");
        if (tableElement) {
          tableElement.style.width = "100%";
          const trElements = iframeDocument.querySelectorAll("tr");
          const tdElements = iframeDocument.querySelectorAll("td");
          if (trElements) {
            tdElements.forEach((tdElement) => {
              tdElement.style.width = "max-content";
              tdElement.style.borderTop = "1px solid #ececec";
            });
          }
        }

        const imgElement = iframeDocument.querySelectorAll("img");
        if (imgElement) {
          imgElement.forEach((imgElement) => {
            imgElement.style.width = "100vw";
            imgElement.style.objectFit = "cover";
          });
        }
        iframe.style.height = iframeDocument.body.scrollHeight + 100 + "px";
        console.log(iframe.style.height);
        setNewHeight(iframe.style.height);
      }
    };

    iframe?.addEventListener("load", adjustIframeSize);

    return () => {
      iframe?.removeEventListener("load", adjustIframeSize);
    };
  }, [data]);

  return (
    <StyledNewsDetail css={{ height: newHeight }}>
      <iframe
        ref={iframeRef}
        srcDoc={data}
        title={title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden !important",
        }}
      />
    </StyledNewsDetail>
  );
};
