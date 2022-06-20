import { Text } from "@itwin/itwinui-react";
import FileUploadDemo from "./components/FileUploadDemo";
import SelectiModelDemo from "./components/SelectiModelDemo";
import PreviousSessionsDemo from "./components/PreviousSessionsDemo";
import { Grid } from "@itwin/itwinui-layouts-react";
import "@itwin/itwinui-layouts-css/styles.css";
import SessionsTableDemo from "./components/SessionsTableDemo";
import SessionsSearchDemo from "./components/SessionsSearchDemo";

const DesignReviewFinished = () => {
  return (
    <Grid>
      <Grid.Item columnSpan={12}>
        <Text style={{ alignSelf: "start", display: "flex" }} variant="title">
          iTwin Design Review - Ad Hoc Reviews
        </Text>
      </Grid.Item>
      <Grid.Item columnSpan={3}>
        <Text
          style={{ alignSelf: "start", display: "flex", paddingBottom: "11px" }}
          variant="subheading"
        >
          New session
        </Text>
        <Grid>
          <Grid.Item columnSpan={12}>
            <FileUploadDemo />
          </Grid.Item>
          <Grid.Item columnSpan={12}>
            <SelectiModelDemo />
          </Grid.Item>
        </Grid>
      </Grid.Item>
      <Grid.Item columnSpan={9}>
        <Text
          style={{ alignSelf: "start", display: "flex", paddingBottom: "11px" }}
          variant="subheading"
        >
          Previous session
        </Text>
        <PreviousSessionsDemo />
      </Grid.Item>
      <Grid.Item columnSpan={3}>
        <Text
          style={{ alignSelf: "start", display: "flex" }}
          variant="subheading"
        >
          Sessions
        </Text>
      </Grid.Item>
      <Grid.Item columnSpan={3} columnStart={10}>
        <SessionsSearchDemo />
      </Grid.Item>
      <Grid.Item columnSpan={12}>
        <SessionsTableDemo />
      </Grid.Item>
    </Grid>
  );
};

export default DesignReviewFinished;
