import { SvgClock } from "@itwin/itwinui-icons-react";
import { Anchor, HorizontalTabs, Surface, Tab, Text } from "@itwin/itwinui-react";
import React from "react";
import styles from "./SummaryCard.module.scss";

export type SummaryCardProps = {};

const SummaryCard = (props: SummaryCardProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Surface elevation={1} className={styles["summary-card"]}>
      <Text variant="subheading">Summary</Text>
      <HorizontalTabs
        labels={[<Tab label="My work" />, <Tab label="Project" />]}
        type="borderless"
        activeIndex={activeIndex}
        onTabSelected={setActiveIndex}
      >
        <div className={styles["left"]}>
          <Text variant="headline">1</Text>
          <Text isMuted>All open items</Text>
          <div className={styles["item-times"]}>
            <div style={{ color: 'var(--iui-color-foreground-positive)' }}>
              <SvgClock />
              New: 1
            </div>
            <div style={{ color: 'var(--iui-color-foreground-negative)' }}>
              <SvgClock />
              Overdue: 0
            </div>
            <div style={{ color: 'var(--iui-color-foreground-warning)' }}>
              <SvgClock />
              Close deadline: 1
            </div>
            <div style={{ color: 'var(--iui-text-color-muted)' }}>
              <SvgClock />
              Upcoming: 1
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <div>
            <Anchor><Text variant="headline">1</Text></Anchor>
            <Text isMuted>Open Issue</Text>
          </div>
          <div>
            <Anchor><Text variant="headline">1</Text></Anchor>
            <Text isMuted>Open Observation</Text>
          </div>
          <div>
            <Anchor><Text variant="headline">0</Text></Anchor>
            <Text isMuted>Open Daily Log</Text>
          </div>
          <div>
            <Anchor><Text variant="headline">0</Text></Anchor>
            <Text isMuted>Open RFI</Text>
          </div>
          <div>
            <Anchor><Text variant="headline">0</Text></Anchor>
            <Text isMuted>Open Potential Change Order</Text>
          </div>
          <div>
            <Anchor><Text variant="headline">0</Text></Anchor>
            <Text isMuted>Open Change Order</Text>
          </div>
          <div>
            <Anchor><Text variant="headline">0</Text></Anchor>
            <Text isMuted>Open Payment Application</Text>
          </div>
        </div>
      </HorizontalTabs>
    </Surface>
  );
};

export default SummaryCard;
