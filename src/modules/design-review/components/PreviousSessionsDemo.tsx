import {
  Anchor,
  Button,
  Small,
  Surface,
  Text,
  Title,
} from "@itwin/itwinui-react";
import "./ReviewCard.css";

const PreviousSessionsDemo = () => {
  return (
    <Surface
      elevation={1}
      style={{
        display: "grid",
        gridTemplateColumns: "337px 1fr",
      }}
    >
      <div
        style={{
          borderRight: "1px solid #dce0e3",
          height: "100%",
          display: "grid",
          padding: "16px",
          gridTemplateRows: "minmax(0,1fr) minmax(0,40px)",
          overflow: "hidden",
          gridRowGap: "8px",
          alignItems: "center",
          justifyItems: "center",
          maxHeight: "278px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              height: "100%",
              width: "100%",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
              }}
              data-testid="img"
              src="https://pwreviewprodeusbsa01.blob.core.windows.net/pwrthumbnails/0f3228ac-00c7-4a88-961c-3f671a8a396e.png?st=2022-06-14T07%3A55%3A15Z&amp;se=2022-06-14T08%3A55%3A15Z&amp;sp=racwdl&amp;spr=https%2Chttp&amp;sv=2018-03-28&amp;sr=b&amp;sig=VrqTVEvkpnaPyhDAcrHh%2FuXkcanKxVPJFklbgIRgDa4%3D"
              alt="iModel Preview"
            />
          </div>
        </div>
        <Button styleType="high-visibility">Open last session</Button>
      </div>
      <div
        style={{
          padding: "12px 16px 16px",
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr)",
          gridTemplateRows: "32px 1fr",
          gridRowGap: "12px",
          overflow: "hidden",
          alignItems: "center",
          minWidth: "250px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr" }}>
          <Small>Comments</Small>
          <div></div>
        </div>
        <div
          style={{
            height: "100%",
            minHeight: "216px",
            gridColumn: "1/-1",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              gridRow: "1",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <div></div>
          </div>
        </div>
      </div>
    </Surface>
  );
};

export default PreviousSessionsDemo;
