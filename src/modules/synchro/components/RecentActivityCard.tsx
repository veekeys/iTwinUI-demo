import React from 'react';
import ListItem from './ListItem';
import ListCard from './ListCard';
import { ChangeOrderIcon, IssueIcon } from './icons';

const RecentActivityCard = () => {
  return (
    <ListCard title='My recent activity'>
      <ListItem number='Change Order #CO-00003' name='Some subject' date='32 minutes ago' state='Created' icon={<ChangeOrderIcon />} />
      <ListItem number='Issue #ISS-00002' name='Boulder in the way' date='2 days ago' state='Viewed' icon={<IssueIcon />} />
    </ListCard>
  );
};

export default RecentActivityCard;
