import { Anchor, Surface, Text, Title } from "@itwin/itwinui-react";
import { SvgImodel, SvgUpload } from "@itwin/itwinui-icons-react";
import FileUploadDemo from "./components/FileUploadDemo";
import SelectiModelDemo from "./components/SelectiModelDemo";
import PreviousSessionsDemo from "./components/PreviousSessionsDemo";
import SessionsTableDemo from "./components/SessionsTableDemo";
import SessionsSearchDemo from "./components/SessionsSearchDemo";

const DesignReview = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Text variant="title">iTwin Design Review - Ad Hoc Reviews</Text>
      <Text variant="subheading">New session</Text>
      <FileUploadDemo />
      <SelectiModelDemo />
      <Text variant="subheading">Previous session</Text>
      <PreviousSessionsDemo />
      <Text variant="subheading">Sessions</Text>
      <SessionsSearchDemo />
      <SessionsTableDemo />
    </div>
  );
};

export default DesignReview;
