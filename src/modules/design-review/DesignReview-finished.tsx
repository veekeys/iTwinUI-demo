import { Subheading, Text } from "@itwin/itwinui-react";
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
          smallMonitor: 12,
          tablet: 12,
          landscapeMobile: 12,
          mobile: 12,
        }}
      >
        <Subheading>New session</Subheading>
        <Grid>
          <Grid.Item
            columnSpan={{
              monitor: 12,
              smallMonitor: 6,
              tablet: 6,
              landscapeMobile: 12,
              mobile: 12,
            }}
          >
            <FileUploadDemo />
          </Grid.Item>
          <Grid.Item
            columnSpan={{
              monitor: 12,
              smallMonitor: 6,
              tablet: 6,
              landscapeMobile: 12,
              mobile: 12,
            }}
          >
            <SelectiModelDemo />
          </Grid.Item>
        </Grid>
      </Grid.Item>
      <Grid.Item
        columnSpan={{
          monitor: 9,
          smallMonitor: 12,
          tablet: 12,
          landscapeMobile: 12,
          mobile: 12,
        }}
      >
        <Subheading>Previous session</Subheading>
        <PreviousSessionsDemo />
      </Grid.Item>
      <Grid.Item columnSpan={3}>
        <Text variant="subheading">Sessions</Text>
      </Grid.Item>
      <Grid.Item
        columnSpan={{
          monitor: 4,
          smallMonitor: 7,
          tablet: 8,
          landscapeMobile: 9,
          mobile: 9,
        }}
        columnStart={{
          monitor: 9,
          smallMonitor: 6,
          tablet: 5,
          landscapeMobile: 4,
          mobile: 4,
        }}
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
