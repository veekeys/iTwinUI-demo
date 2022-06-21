import { Subheading, Text } from "@itwin/itwinui-react";
import FileUploadDemo from "./components/FileUploadDemo";
import SelectiModelDemo from "./components/SelectiModelDemo";
import PreviousSessionsDemo from "./components/PreviousSessionsDemo";
import SessionsTableDemo from "./components/SessionsTableDemo";
import SessionsSearchDemo from "./components/SessionsSearchDemo";
import { Grid } from "@itwin/itwinui-layouts-react";

const DesignReview = () => {
  return (
    <>
      <Text variant="title">iTwin Design Review - Ad Hoc Reviews</Text>
      <Subheading>New session</Subheading>
      <FileUploadDemo />
      <SelectiModelDemo />
      <Subheading>Previous session</Subheading>
      <PreviousSessionsDemo />
      <Text variant="subheading">Sessions</Text>
      <SessionsSearchDemo />
      <SessionsTableDemo />
    </>
  );
};

export default DesignReview;
