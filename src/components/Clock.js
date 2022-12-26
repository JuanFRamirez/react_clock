import React, { useEffect, useState, useMemo, useCallback } from "react";

import { randomColor } from "../utils/randomColor";
import { days, months } from "../utils/calendar";

export const Clock = () => {
  const [currentHour, setCurrentHour] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [palette, setPalette] = useState(null);

  const memoisedColor = useMemo(() => {
    return randomColor();
  }, []);

  const getFormatedHours = useCallback((hour) => {
    console.log(hour);
    if (hour > 12) {
      let formatedHour = hour - 12;
      return ("0" + formatedHour).slice(-2);
    } else if (hour < 10) {
      return `0${hour}`;
    } else {
      return hour;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const [hour, minutes, day, date, month] = [
        time.getHours(),
        time.getMinutes(),
        time.getDay(),
        time.getDate(),
        time.getMonth(),
      ];
      setCurrentHour(getFormatedHours(hour));
      setCurrentMinutes(("0" + minutes).slice(-2));
      setCurrentDay(
        `${days[day].toUpperCase()} ${date} ${months[month]
          .slice(0, 3)
          .toUpperCase()}`
      );
    }, 1000);
    setPalette(memoisedColor);
    return () => {
      clearInterval(interval);
    };
  }, [getFormatedHours, memoisedColor]);
  return (
    <div className="clock">
      <div>
        <p>{currentDay}</p>
      </div>
      <div className="clock_holder">
        <div
          className="clock_hour-container"
          style={
            palette
              ? {
                  background: `linear-gradient(45deg,${Object.values(
                    palette.bg
                  ).map((v) => v.toString())})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeColor: "#fff",
                  WebkitTextStrokeWidth: ".5px",
                }
              : {}
          }
        >
          <h2>{currentHour}</h2>
          <h2>{currentMinutes}</h2>
        </div>
      </div>
    </div>
  );
};
