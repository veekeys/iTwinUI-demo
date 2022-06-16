import { Anchor, Text } from "@itwin/itwinui-react";
import React from "react";
import ListCard from "./ListCard";
import ListItem from "./ListItem";

const CreateCard = () => {
  return (
    <ListCard title="Create">
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
