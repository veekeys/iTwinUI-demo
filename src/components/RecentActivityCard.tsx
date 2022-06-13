import React from 'react';
import SynchroListItem from './SynchroListItem';
import SynchroListCard from './SynchroListCard';
import { ChangeOrderIcon, IssueIcon } from './icons';

const RecentActivityCard = () => {
  return (
    <SynchroListCard title='My recent activity'>
      <SynchroListItem number='Change Order #CO-00003' name='Some subject' date='32 minutes ago' state='Created' icon={<ChangeOrderIcon />} />
      <SynchroListItem number='Issue #ISS-00002' name='Boulder in the way' date='2 days ago' state='Viewed' icon={<IssueIcon />} />
    </SynchroListCard>
  );
};

export default RecentActivityCard;
