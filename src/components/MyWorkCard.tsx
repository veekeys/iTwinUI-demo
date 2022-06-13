import React from 'react';
import { IssueIcon } from './icons';
import SynchroListCard from './SynchroListCard';
import SynchroListItem from './SynchroListItem';

const MyWorkCard = () => {
  return (
    <SynchroListCard title="My Work" footer='View all'>
      <SynchroListItem number='Issue #ISS-00002' name='Boulder in the way' date='Due: Jun 25, 2022' state='Due in 3 days' icon={<IssueIcon />} />
    </SynchroListCard>
  );
};

export default MyWorkCard;
