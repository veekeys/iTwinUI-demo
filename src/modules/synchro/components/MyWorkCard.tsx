import React from 'react';
import { IssueIcon } from './icons';
import ListCard from './ListCard';
import ListItem from './ListItem';

const MyWorkCard = () => {
  return (
    <ListCard title="My Work" footer='View all'>
      <ListItem number='Issue #ISS-00002' name='Boulder in the way' date='Due: Jun 25, 2022' state='Due in 3 days' icon={<IssueIcon />} />
    </ListCard>
  );
};

export default MyWorkCard;
