import { SvgStarHollow } from "@itwin/itwinui-icons-react";
import { Anchor, Surface, Text } from "@itwin/itwinui-react";
import { useOverflow } from "@itwin/itwinui-react/esm/core/utils";
import React from "react";
import styles from "./HeadCard.module.scss";

export const HeadCard = () => {
  const [weatherRef, visibleDaysCount] = useOverflow(weatherDays);
  return (
    <Surface elevation={1} className={styles["synchro-head-card"]}>
      <img
        src="/synchro-project-image.jpg"
        className={styles["project-image"]}
      />
      <div className={styles["project-info"]}>
        <Text variant="small">Project used for the demo</Text>
        <div className={styles["project-name-container"]}>
          <Anchor href="#">iTwinUI-layouts demo</Anchor>
          <SvgStarHollow />
        </div>
      </div>
      <div className={styles["weather-container"]} ref={weatherRef}>
        {weatherDays.slice(0, visibleDaysCount)}
      </div>
    </Surface>
  );
};

const WeatherDay = (props: {
  day: string;
  icon: React.ReactNode;
  tempMax: number;
  tempMin: number;
  description: string;
}) => {
  return (
    <div className={styles["weather-day"]}>
      <Text isMuted variant="small">
        {props.day}
      </Text>
      {props.icon}
      <div className={styles["day-temp"]}>
        <Text variant="leading">{props.tempMax}°</Text>
        <Text isMuted variant="leading">
          {props.tempMin}°
        </Text>
      </div>
      <Text variant="small">{props.description}</Text>
    </div>
  );
};

const WeatherDayCurrent = (props: {
  day: string;
  icon: React.ReactNode;
  tempCurrent: number;
  tempMax: number;
  tempMin: number;
  description: string;
}) => {
  return (
    <div className={styles["weather-current-day"]}>
      <Text isMuted variant="small">
        {props.day}
      </Text>
      <div className={styles["weather-info"]}>
        <div className={styles["weather-icon"]}>{props.icon}</div>
        <Text variant="leading" className={styles["current-temp"]}>
          {props.tempCurrent}°C
        </Text>
        <div className={styles["day-temp"]}>
          <Text variant="leading">{props.tempMax}°</Text>
          <Text isMuted variant="leading">
            {props.tempMin}°
          </Text>
        </div>
      </div>
      <Text variant="small">{props.description}</Text>
    </div>
  );
};

const SunnyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="#f9d915">
      <circle cx={100} cy={100} r={46.1} />
      <path d="m49.2 18.6 15.6 38.1c4.6-3.7 9.8-6.7 15.4-8.9L55.3 15.1s0-.1-.1-.1c-1.2-1.4-3.4-1.7-4.9-.6-1.2.9-1.7 2.5-1.2 3.9 0 .1 0 .2.1.3zM100 44.1c3.1 0 6.1.3 9 .7l-5.3-40.7V4c-.3-1.9-2-3.2-4-3-1.5.2-2.7 1.3-3 2.8 0 .1-.1.2-.1.2l-5.5 40.7c3-.4 5.9-.6 8.9-.6zM44.1 100c0-3.1.3-6.1.7-9L4.1 96.3H4c-1.9.3-3.2 2-3 4 .2 1.5 1.3 2.7 2.8 3 .1 0 .2.1.2.1l40.8 5.5c-.4-3-.7-5.9-.7-8.9zm108.2-19.8L185 55.3l.1-.1c1.5-1.2 1.7-3.4.6-4.9-.9-1.2-2.5-1.7-3.9-1.2-.1 0-.2 0-.2.1l-38 15.6c3.5 4.6 6.5 9.8 8.7 15.4zm-16.9-23.5 15.8-37.9v-.1c.3-.8.3-1.8 0-2.6-.4-.9-1-1.6-1.9-1.9-1.4-.6-3-.2-4 .9l-.2.2L120 47.8c5.6 2.2 10.8 5.2 15.4 8.9zM15.3 54.9 47.8 80c2.2-5.6 5.2-10.8 8.9-15.4L18.8 48.8h-.1c-1.7-.7-3.8.2-4.5 1.9-.6 1.4-.2 3 .9 4 0 .1.1.1.2.2zm169.4 90.2L152.2 120c-2.2 5.6-5.2 10.8-8.9 15.4l37.9 15.8h.1c1.7.7 3.8-.2 4.5-1.9.6-1.4.2-3-.9-4 0-.1-.1-.1-.2-.2zM199 99.8c-.2-1.5-1.3-2.7-2.8-3-.1 0-.2-.1-.2-.1l-40.7-5.5c.5 2.9.7 5.8.7 8.8 0 3.1-.3 6.1-.7 9l40.7-5.3h.1c1.8-.3 3.1-2 2.9-3.9zm-48.2 81.6-15.6-38.1c-4.6 3.7-9.8 6.7-15.4 8.9l24.9 32.7.1.1c1.2 1.4 3.4 1.7 4.9.6 1.2-.9 1.7-2.5 1.2-3.9 0-.1 0-.2-.1-.3zm-103-61.6-32.7 24.9s-.1 0-.1.1c-.7.6-1.1 1.4-1.3 2.3-.1.9.1 1.9.7 2.6.9 1.2 2.5 1.7 3.9 1.2.1 0 .2 0 .2-.1l38.1-15.6c-3.7-4.6-6.7-9.8-8.8-15.4zm52.2 36.1c-3.1 0-6.1-.3-9-.7l5.3 40.8v.1c.3 1.7 1.8 3 3.5 3h.5c1.5-.2 2.7-1.3 3-2.8 0-.1.1-.2.1-.2l5.5-40.8c-3 .3-5.9.6-8.9.6zm-35.4-12.7-15.8 38v.1c-.3.8-.3 1.8 0 2.6.4.9 1 1.6 1.9 1.9 1.4.6 3 .2 4-.9l.2-.2L80 152.2c-5.6-2.2-10.8-5.2-15.4-9z" />
    </g>
  </svg>
);

const PartlyCloudyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M35.9 129.9c-6.5 0-12.3-4.4-14-10.7-1-3.7-.5-7.6 1.4-11 1.9-3.3 5.1-5.7 8.8-6.7.6-.2 2.4-.7 8.1-2.2-.1-2.6.3-5.1.9-7.6.5-1.8 1.2-3.5 2-5.1-4.6-23.2.8-46 15.2-60.7-5.4 1.7-10.8 3.9-15.9 6.9C6.2 53.6-6.3 100 14.7 136.3s67.4 48.8 103.7 27.8c5.1-3 9.8-6.4 13.9-10.3-22.5 5.7-48.4-3.6-67-24H36.7c-.2 0-.5.1-.8.1z"
      fill="#dedddd"
    />
    <path
      d="M194.6 91c-3.1-11.4-13.4-19.3-25.1-19.3-2.2 0-4.4.3-6.5.8h-.2c-.4.1-1.4.4-2.9.8l-2.9.8-.8-2.9c-4.7-17.4-20.5-29.6-38.6-29.6-19.6 0-36.6 14.6-39.5 34l-.5 3.4-4.4-1.2c-1.8-.5-3.6-.7-5.4-.7-9.7 0-18.3 6.6-20.8 16-.4 1.6-.6 3.2-.7 4.8 0 1.1 0 2.1.1 3.2l.3 2.6-2.5.7c-5.7 1.5-9.4 2.5-10.3 2.8l-.2.1c-2.2.6-4 2-5.1 3.9-1.1 2-1.4 4.2-.8 6.4 1 3.9 4.7 6.5 8.7 6.3h132.3c1.5-.1 5.6-.4 7.5-.9 13.8-3.8 22-18.1 18.3-32z"
      fill="#d3d3d3"
    />
  </svg>
);

const ThunderstormsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M89.5 124.7c0-.5-.5-.8-1-.8H69.2c-.5 0-.8.3-1 .5L60.6 146v.3c0 .5.5.8 1 .8h7.3l-6.8 19.4v.3c0 .8.8 1.5 2 1.5.7 0 1.4-.3 1.7-.8l22.3-29.6v-.3c0-.5-.5-.8-1-.8h-6.8l9.1-12z"
      fill="#f9d915"
    />
    <path
      d="M105.3 150.2c.4-.9-.2-1.9-1.2-2.2-.9-.3-1.9 0-2.3.7l-19.4 24.8c-.4.5-.7 1-1 1.6-1.2 3 .6 6.4 4 7.5s7-.4 8.3-3.3l11.5-28.9zm34-24c.4-.9-.2-1.9-1.2-2.2-.9-.3-1.9 0-2.3.7l-19.4 24.8c-.4.5-.7 1-1 1.6-1.2 3 .6 6.4 4 7.5s7-.4 8.3-3.3l11.5-28.9z"
      fill="#6ec4e9"
    />
    <path
      d="M186 72.2c-4.1-15.4-19.9-24.6-35.3-20.6 0 0-1.1.3-3.1.8-4.9-18.3-21.6-31.8-41.5-31.8-15.6 0-29.3 8.3-36.8 20.8 1.1 3.7 2.6 7.3 4.6 10.8 8.1 14 22.1 23 35.6 23 2.4 0 4.7-.3 7-.9.5-.1 1-.2 1.5-.2 2.2 0 4.2 1.2 5.3 3.1 1.3 2.4.8 5.4-1.2 7.3-3 2.8-6.3 5.2-9.8 7.3-8.1 4.7-17.4 7.2-26.7 7.2-19.1 0-36.9-10.3-46.4-26.8-1.1-1.9-2-3.8-2.9-5.8-1.6 2.3-2.9 4.9-3.7 7.8-.8 3.1-1 6.2-.7 9.1-6.5 1.8-10.5 2.8-10.5 2.8-6.1 1.6-9.8 7.9-8.1 14 1.4 5.4 6.5 8.8 11.8 8.5h132.1s5.5-.3 8.2-1c15.6-4 24.8-19.9 20.6-35.4z"
      fill="#d3d3d3"
    />
    <path
      d="M118 80.2c-.6.2-1.3.3-1.9.4-.2 0-.4.1-.6.1-.4.1-.9.1-1.4.2-.2 0-.4.1-.7.1-.5.1-.9.1-1.4.1h-.5c-.6 0-1.3.1-1.9.1h-.1c-.8 0-1.6 0-2.5-.1h-.4c-.8-.1-1.7-.2-2.5-.3-.2 0-.3-.1-.5-.1-.8-.1-1.7-.3-2.5-.5-.1 0-.2 0-.3-.1l-2.4-.6c-.1 0-.3-.1-.4-.1-.8-.3-1.6-.5-2.5-.8-.2-.1-.3-.1-.5-.2-.8-.3-1.6-.7-2.4-1-.1-.1-.2-.1-.3-.2-.8-.4-1.5-.7-2.3-1.2-.1-.1-.2-.1-.3-.2-.8-.4-1.6-.9-2.4-1.4-.2-.1-.3-.2-.5-.3-.8-.5-1.5-1-2.3-1.5-.1-.1-.2-.2-.4-.3-.7-.5-1.4-1.1-2.2-1.7l-.2-.2c-.7-.6-1.5-1.2-2.2-1.9l-.4-.4c-.7-.6-1.4-1.3-2-2-.1-.1-.2-.2-.3-.4-.7-.7-1.3-1.4-2-2.2l-.1-.1c-.7-.8-1.3-1.6-1.9-2.4-.1-.2-.2-.3-.4-.5-.6-.8-1.2-1.6-1.7-2.5-.1-.2-.2-.3-.3-.5-.6-.9-1.1-1.8-1.7-2.7-1.2-2-2.2-4.1-3.1-6.1-7.7-18-5.2-37.5 6-49-3.4 1-6.7 2.5-9.9 4.3-20.2 12-28.5 36.4-20.8 57.6.9 2.6 2.1 5.1 3.5 7.6.5.9 1 1.7 1.6 2.5.2.2.3.5.5.7.4.6.8 1.2 1.3 1.8.2.2.3.4.5.7.6.8 1.2 1.5 1.8 2.2l.1.1c.6.7 1.2 1.3 1.9 2l.6.6c.5.5 1 1 1.6 1.4.2.2.4.3.6.5.7.6 1.4 1.2 2.2 1.8.1 0 .1.1.2.1l2.1 1.5c.2.1.5.3.7.4.6.4 1.2.7 1.8 1.1.2.1.4.2.6.4.8.5 1.6.9 2.5 1.3.1.1.2.1.3.1.7.3 1.5.7 2.2 1 .3.1.5.2.8.3.7.3 1.3.5 2 .7.2.1.4.2.7.2.9.3 1.8.5 2.6.8.1 0 .3.1.4.1.8.2 1.5.4 2.3.5.3.1.5.1.8.2l2.1.3c.2 0 .5.1.7.1l2.7.3h.5c.7 0 1.5.1 2.3.1h.9c.7 0 1.4 0 2-.1h.7c.9-.1 1.8-.1 2.7-.3.2 0 .3-.1.5-.1.7-.1 1.5-.2 2.2-.4.3-.1.6-.1.9-.2.7-.1 1.3-.3 2-.5.3-.1.5-.1.8-.2.9-.2 1.8-.5 2.7-.8.1 0 .2-.1.3-.1.8-.3 1.6-.6 2.3-.9.3-.1.5-.2.8-.3.6-.3 1.3-.6 1.9-.9.3-.1.5-.2.8-.4.9-.4 1.7-.9 2.6-1.4 1.6-.9 3.1-1.9 4.6-3 1.2-.9 2.6-2 3.9-3.2z"
      fill="#dedddd"
    />
  </svg>
);

const weatherDays = [
  <WeatherDayCurrent
    day="Wednesday, JUN 22"
    icon={<SunnyIcon />}
    tempCurrent={24}
    tempMax={25}
    tempMin={17}
    description="Sunny"
    key="wed"
  />,
  <WeatherDay
    day="THU"
    icon={<PartlyCloudyIcon />}
    tempMax={20}
    tempMin={12}
    description="Partly cloudy"
    key="thu"
  />,
  <WeatherDay
    day="FRI"
    icon={<ThunderstormsIcon />}
    tempMax={22}
    tempMin={15}
    description="Thunderstorms Early"
    key="fri"
  />,
  <WeatherDay
    day="SAT"
    icon={<ThunderstormsIcon />}
    tempMax={25}
    tempMin={18}
    description="Thunderstorms Early"
    key="sat"
  />,
  <WeatherDay
    day="SUN"
    icon={<PartlyCloudyIcon />}
    tempMax={17}
    tempMin={15}
    description="Partly cloudy"
    key="sun"
  />,
];

export default HeadCard;
