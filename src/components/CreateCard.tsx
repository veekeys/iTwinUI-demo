import { Anchor, Text } from "@itwin/itwinui-react";
import React from "react";
import SynchroListCard from "./SynchroListCard";
import SynchroListItem from "./SynchroListItem";

export type CreateCardProps = {};

const CreateCard = (props: CreateCardProps) => {
  return (
    <SynchroListCard title="My Work">
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">Change Order</Text>
        </Anchor>
      </SynchroListItem>
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">Daily Log</Text>
        </Anchor>
      </SynchroListItem>
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">Issue</Text>
        </Anchor>
      </SynchroListItem>
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">Observation</Text>
        </Anchor>
      </SynchroListItem>
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">Payment Application</Text>
        </Anchor>
      </SynchroListItem>
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">Potential Change Order</Text>
        </Anchor>
      </SynchroListItem>
      <SynchroListItem>
        <Anchor>
          <Text variant="subheading">RFI</Text>
        </Anchor>
      </SynchroListItem>
    </SynchroListCard>
  );
};

export default CreateCard;
