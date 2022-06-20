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
    </div>
  );
};

export default SynchroView;
