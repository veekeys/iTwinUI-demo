import { SvgAirplane, SvgImodel } from "@itwin/itwinui-icons-react";
import { Badge, Carousel, Surface, Text, Tile } from "@itwin/itwinui-react";
import React from "react";
import styles from "./iModelsCard.module.scss";

const IModelsCard = () => (
  <Surface elevation={1} className={styles["imodels-card"]}>
    <div className={styles["title"]}>
      <Text variant="subheading">iModels</Text>
    </div>
      <Carousel>
        <Carousel.Slider>
          <Carousel.Slide>
            <Tile
              name="3D Bridge"
              description="Created Jun 16, 2020, 11:41:32 AM"
              thumbnail={<img src="/3d-bridge.jpg" />}
              badge={<Badge backgroundColor="hsl(197, 71%, 83%)">Primary</Badge>}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Tile name="4D iModel" description="Created Nov 19, 2020, 6:03:56 PM" thumbnail={<SvgImodel />} />
          </Carousel.Slide>
          <Carousel.Slide>
          <Tile name="Airport" description="Created May 27, 2022, 4:30:06 PM" thumbnail={<SvgAirplane />} />

          </Carousel.Slide>
        </Carousel.Slider>
        <Carousel.Navigation />
      </Carousel>
  </Surface>
);

export default IModelsCard;
