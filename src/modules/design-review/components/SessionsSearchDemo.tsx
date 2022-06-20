import { SvgSearch } from "@itwin/itwinui-icons-react";
import { Checkbox, LabeledInput } from "@itwin/itwinui-react";
import styles from "./SessionsSearchDemo.module.scss";

const SessionsSearchDemo = () => {
  return (
    <div className={styles["search-container"]}>
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
