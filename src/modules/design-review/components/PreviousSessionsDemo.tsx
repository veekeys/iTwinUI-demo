import {
  Button,
  getUserColor,
  Surface,
  Text,
  UserIcon,
  UserIconGroup,
} from "@itwin/itwinui-react";
import styles from "./PreviousSessionsDemo.module.scss";
import SYD from "../assets/SYD.jpeg";
import NY from "../assets/NY.jpeg";
import VNO from "../assets/VNO.jpeg";
import RIO from "../assets/RIO.jpeg";
import OSL from "../assets/OSL.jpeg";
import LND from "../assets/LND.jpeg";

const PreviousSessionsDemo = () => {
  const sessionsList = [
    {
      title: "005 | Sydney",
      description1: "Sydney City",
      description2: "2 hours ago",
      image: SYD,
    },
    {
      title: "004 | Vilnius",
      description1: "Vilnius Old town",
      description2: "1 month ago",
      image: VNO,
    },
    {
      title: "003 | London",
      description1: "London Eye",
      description2: "almost 1 year ago",
      image: LND,
    },
    {
      title: "002 | Rio",
      description1: "Rio Festival",
      description2: "almost 1 year ago",
      image: RIO,
    },
    {
      title: "001 | Oslo",
      description1: "Oslo Winter",
      description2: "almost 2 years ago",
      image: OSL,
    },
  ];

  const users = [
    {
      name: "Brigita Symonds",
      abbreviation: "BS",
    },
    {
      name: "Roswitha Heinrich",
      abbreviation: "RH",
    },

    {
      name: "Teshub Hadžić",
      abbreviation: "TH",
    },
    {
      name: "Cléa Bryson",
      abbreviation: "CB",
    },
    {
      name: "Jean-Luc Trent",
      abbreviation: "JT",
    },
    {
      name: "Gavri'el Palomo",
      abbreviation: "GP",
    },
    {
      name: "Carolina Sokol",
      abbreviation: "CS",
    },
    {
      name: "Zephyros Feng",
      abbreviation: "ZF",
    },
  ];
  return (
    <Surface elevation={1} className={styles["card-surface"]}>
      <div className={styles["card-main-image"]}>
        <img className={styles["image"]} src={NY} />
        <Button styleType="high-visibility">Open last session</Button>
      </div>
      <div className={styles["card-comments-section"]}>
        <div className={styles["card-top"]}>
          <Text className={styles["card-top-left"]}>Comments</Text>
          <UserIconGroup className={styles["card-top-right"]}>
            {users.map((user) => (
              <UserIcon
                title={user.name}
                abbreviation={user.abbreviation}
                backgroundColor={getUserColor(user.name)}
              />
            ))}
          </UserIconGroup>
        </div>
        <div className={styles["card-bottom"]}>
          <div className={styles["session-grid"]}>
            {sessionsList.map((card) => (
              <div className={styles["session-card"]}>
                <div
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <img
                    className={styles["image"]}
                    src={card.image}
                    alt={card.title}
                  />
                </div>
                <div className={styles["session-card-text"]}>
                  <Text
                    variant="small"
                    className={styles["session-card-text-header"]}
                  >
                    {card.title}
                  </Text>
                  <Text variant="small" isMuted>
                    {card.description1}
                  </Text>
                  <Text variant="small" isMuted>
                    {card.description2}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  );
};

export default PreviousSessionsDemo;
