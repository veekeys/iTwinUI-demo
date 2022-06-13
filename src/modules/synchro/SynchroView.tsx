import React from "react";
import CreateCard from "./components/CreateCard";
import MyWorkCard from "./components/MyWorkCard";
import RecentActivityCard from "./components/RecentActivityCard";
import HeadCard from "./components/HeadCard";
import IModelsCard from "./components/iModelsCard";
import SummaryCard from "./components/SummaryCard";

const SynchroView = () => {
  return (
    <>
      <HeadCard />
      <RecentActivityCard />
      <MyWorkCard />
      <CreateCard />
      <IModelsCard />
      <SummaryCard />
    </>
  );
};

export default SynchroView;
