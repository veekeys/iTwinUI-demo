import { Anchor, Surface, Text, Title } from "@itwin/itwinui-react";
import { SvgUpload } from "@itwin/itwinui-icons-react";
import "./ReviewCard.css";

const FileUploadDemo = () => {
  return (
    <Surface elevation={1} className="review-card-surface">
      <SvgUpload className="review-card-icon" />
      <div className="review-card-side-text">
        <Anchor>Upload a file</Anchor>
        <Text variant="small">Drag your file here to upload it.</Text>
      </div>
    </Surface>
  );
};

export default FileUploadDemo;
