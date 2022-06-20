import { SvgUpload } from "@itwin/itwinui-icons-react";
import NewSessionCard from "./NewSessionCard";

const FileUploadDemo = () => {
  return (
    <NewSessionCard
      title="Upload a file"
      subtitle="Drag your file here to upload it."
      icon={<SvgUpload />}
    />
  );
};

export default FileUploadDemo;
