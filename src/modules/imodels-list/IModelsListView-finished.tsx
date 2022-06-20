import { FluidGrid } from "@itwin/itwinui-layouts-react";
import image from "./assets/image.png";
import image1 from "./assets/image-1.png";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";
import { Tile } from "@itwin/itwinui-react";

const data = [
  {
    name: "OpenGround demo",
    description: "Shared for review and comment of the technidal design stage",
    thumbnail: image,
  },
  {
    name: "HS2 Approved Design",
    description: "Digital Twin of all approved models for project",
    thumbnail: image1,
  },
  {
    name: "Desin Insights for #11332",
    description:
      "iTwin containing deign ONLY. It is used for data extraction and reporting",
    thumbnail: image2,
  },
  {
    name: "Conemaugh River Bridge",
    description: "New bridge project to help people connect",
    thumbnail: image3,
  },
  {
    name: "Area West iModel",
    description: "New bridge project to help people connect",
    thumbnail: image4,
  },
];

const IModelsListViewFinished = () => {
  return (
    <FluidGrid>
      {new Array(30).fill(null).map((_, index) => {
        const el = data[index % data.length];
        return (
          <Tile
            isActionable
            key={index}
            name={el.name}
            thumbnail={el.thumbnail}
            description={el.description}
          />
        );
      })}
    </FluidGrid>
  );
};

export default IModelsListViewFinished;
