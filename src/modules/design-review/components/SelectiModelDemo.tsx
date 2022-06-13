import { Anchor, Surface, Text, Title } from "@itwin/itwinui-react";
import { SvgImodel } from "@itwin/itwinui-icons-react";

const SelectiModelDemo = () => {
  return (
    <Surface elevation={1} className="review-card-surface">
      <SvgImodel className="review-card-icon" />
      <div className="review-card-side-text">
        <Anchor>Select an iModel.</Anchor>
        <Text variant="small">From an existing CONNECT project.</Text>
      </div>
    </Surface>
  );
};

export default SelectiModelDemo;
