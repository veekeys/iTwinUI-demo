import React from "react";
import CreateCard from "./components/CreateCard";
import MyWorkCard from "./components/MyWorkCard";
import RecentActivityCard from "./components/RecentActivityCard";
import HeadCard from "./components/HeadCard";
import IModelsCard from "./components/iModelsCard";
import SummaryCard from "./components/SummaryCard";
import { Grid } from "@itwin/itwinui-layouts-react";

const SynchroView = () => {
  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      <HeadCard />
      <RecentActivityCard />
      <MyWorkCard />
      <CreateCard />
      <IModelsCard />
      <SummaryCard />
      {/* <Grid>
        <Grid.Item columnSpan={12}>
          <HeadCard />
        </Grid.Item>
        <Grid.Item
          columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 6,
            landscapeMobile: 6,
            mobile: 12,
          }}
        >
          <RecentActivityCard />
        </Grid.Item>
        <Grid.Item
          columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 6,
            landscapeMobile: 6,
            mobile: 12,
          }}
        >
          <MyWorkCard />
        </Grid.Item>
        <Grid.Item
          columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 6,
            landscapeMobile: 6,
            mobile: 12,
          }}
        >
          <CreateCard />
        </Grid.Item>
        <Grid.Item
          columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 6,
            landscapeMobile: 6,
            mobile: 12,
          }}
        >
          <IModelsCard />
        </Grid.Item>
        <Grid.Item
          columnSpan={{
            monitor: 8,
            smallMonitor: 8,
            tablet: 12,
            landscapeMobile: 12,
            mobile: 12,
          }}
        >
          <SummaryCard />
        </Grid.Item>
      </Grid> */}
    </div>
  );
};

export default SynchroView;
