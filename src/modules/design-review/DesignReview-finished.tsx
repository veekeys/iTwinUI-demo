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
      <Grid.Item
        columnSpan={{
          monitor: 3,
          smallMonitor: 3,
          tablet: 12,
          landscapeMobile: 12,
          mobile: 12,
        }}
      >
        <Text
          style={{ alignSelf: "start", display: "flex", paddingBottom: "11px" }}
          variant="subheading"
        >
          New session
        </Text>
        <Grid>
          <Grid.Item
            columnSpan={{
              monitor: 12,
              smallMonitor: 12,
              tablet: 6,
              landscapeMobile: 6,
              mobile: 6,
            }}
          >
            <FileUploadDemo />
          </Grid.Item>
          <Grid.Item
            columnSpan={{
              monitor: 12,
              smallMonitor: 12,
              tablet: 6,
              landscapeMobile: 6,
              mobile: 6,
            }}
          >
            <SelectiModelDemo />
          </Grid.Item>
        </Grid>
      </Grid.Item>
      <Grid.Item
        columnSpan={{
          monitor: 9,
          smallMonitor: 9,
          tablet: 12,
          landscapeMobile: 12,
          mobile: 12,
        }}
      >
        <Text
          style={{ alignSelf: "start", display: "flex", paddingBottom: "11px" }}
          variant="subheading"
        >
          Previous session
        </Text>
        <PreviousSessionsDemo />
      </Grid.Item>
      <Grid.Item
        columnSpan={{
          monitor: 3,
          smallMonitor: 3,
          tablet: 3,
          landscapeMobile: 3,
          mobile: 3,
        }}
      >
        <Text
          style={{ alignSelf: "start", display: "flex" }}
          variant="subheading"
        >
          Sessions
        </Text>
      </Grid.Item>
      <Grid.Item
        columnSpan={{
          monitor: 4,
          smallMonitor: 4,
          tablet: 4,
          landscapeMobile: 4,
          mobile: 4,
        }}
        columnStart={9}
      >
        <SessionsSearchDemo />
      </Grid.Item>
      <Grid.Item columnSpan={12}>
        <SessionsTableDemo />
      </Grid.Item>
    </Grid>
  );
};

export default DesignReviewFinished;
