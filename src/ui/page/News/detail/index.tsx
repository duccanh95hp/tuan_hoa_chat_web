import { DATA_DETAIL } from "../../../../core/data/home";

export const NewsDetail = () => {
  return (
    <div style={{ height: "600vh", width: "100vw", overflowX: "hidden" }}>
      <iframe
        srcDoc={DATA_DETAIL}
        title="Sodium Hexametaphosphate Information"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block", overflowX: 'hidden' }}
      />
    </div>
  );
};
