import { SvgImodel } from "@itwin/itwinui-icons-react";
import NewSessionCard from "./NewSessionCard";

const SelectiModelDemo = () => {
  return (
    <NewSessionCard
      title="Select an iModel"
      subtitle="From an existing CONNECT project."
      icon={<SvgImodel />}
    />
  );
};

export default SelectiModelDemo;
