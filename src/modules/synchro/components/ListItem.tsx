import { Text } from "@itwin/itwinui-react";
import React from "react";
import styles from "./ListItem.module.scss";

export type ListItemProps = {
  number?: string;
  name?: string;
  date?: string;
  state?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export const ListItem = (props: ListItemProps) => {
  const { number, name, date, state, icon, children } = props;
  return (
    <div className={styles["activity-list-item"]}>
      {children && children}
      {!children && (
        <>
          {icon}
          <div className={styles["info"]}>
            <Text isMuted variant="small">
              {number}
            </Text>
            <div className={styles["name"]}>{name}</div>
            <div className={styles["date-and-time"]}>
              <Text isMuted variant="small">
                {date}
              </Text>
              <Text isMuted variant="small">
                {state}
              </Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
