import { SvgSearch } from "@itwin/itwinui-icons-react";
import { Checkbox, LabeledInput } from "@itwin/itwinui-react";

const SessionsSearchDemo = () => {
  return (
    <div
      style={{
        justifyContent: "end",
        display: "flex",
        gap: "11px",
      }}
    >
      <Checkbox label="Show closed sessions" />
      <LabeledInput
        placeholder="Search..."
        svgIcon={<SvgSearch />}
        iconDisplayStyle="inline"
      />
    </div>
  );
};

export default SessionsSearchDemo;
