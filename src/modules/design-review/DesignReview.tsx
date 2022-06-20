import { Text } from "@itwin/itwinui-react";
import FileUploadDemo from "./components/FileUploadDemo";
import SelectiModelDemo from "./components/SelectiModelDemo";
import PreviousSessionsDemo from "./components/PreviousSessionsDemo";
import SessionsTableDemo from "./components/SessionsTableDemo";
import SessionsSearchDemo from "./components/SessionsSearchDemo";

const DesignReview = () => {
  return (
    <>
      <Text variant="title">iTwin Design Review - Ad Hoc Reviews</Text>
      <Text variant="subheading">New session</Text>
      <FileUploadDemo />
      <SelectiModelDemo />
      <Text variant="subheading">Previous session</Text>
      <PreviousSessionsDemo />
      <Text variant="subheading">Sessions</Text>
      <SessionsSearchDemo />
      <SessionsTableDemo />
    </>
  );
};

export default DesignReview;
