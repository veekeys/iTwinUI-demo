import { Anchor, Text } from "@itwin/itwinui-react";
import React from "react";
import ListCard from "./ListCard";
import ListItem from "./ListItem";

export type CreateCardProps = {};

const CreateCard = (props: CreateCardProps) => {
  return (
    <ListCard title="My Work">
      <ListItem>
        <Anchor>
          <Text variant="subheading">Change Order</Text>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor>
          <Text variant="subheading">Daily Log</Text>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor>
          <Text variant="subheading">Issue</Text>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor>
          <Text variant="subheading">Observation</Text>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor>
          <Text variant="subheading">Payment Application</Text>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor>
          <Text variant="subheading">Potential Change Order</Text>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor>
          <Text variant="subheading">RFI</Text>
        </Anchor>
      </ListItem>
    </ListCard>
  );
};

export default CreateCard;
