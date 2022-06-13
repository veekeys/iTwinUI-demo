import React from "react";
import CreateCard from "../components/CreateCard";
import MyWorkCard from "../components/MyWorkCard";
import RecentActivityCard from "../components/RecentActivityCard";
import SynchroHeadCard from "../components/SynchroHeadCard";
import IModelsCard from "../components/iModelsCard";
import SummaryCard from "../components/SummaryCard";

const SynchroView = () => {
  return (
    <>
      <SynchroHeadCard />
      <RecentActivityCard />
      <MyWorkCard />
      <CreateCard />
      <IModelsCard />
      <SummaryCard />
    </>
  );
};

export default SynchroView;
