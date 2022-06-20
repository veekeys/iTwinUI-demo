import { Anchor, Surface, Text } from "@itwin/itwinui-react";
import styles from "./NewSessionCard.module.scss";
import { ReactNode } from "react";

export type NewSessionCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const NewSessionCard = ({ icon, title, subtitle }: NewSessionCardProps) => {
  return (
    <Surface elevation={1} className={styles["session-card-surface"]}>
      {icon}
      <div>
        <Anchor>{title}</Anchor>
        <Text variant="small">{subtitle}</Text>
      </div>
    </Surface>
  );
};

export default NewSessionCard;
