import { useCurrentDate } from "./useCurrentDate";

const formDate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formTime: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const Clock = () => {
  const { date } = useCurrentDate();

  const formattedCurrentDate = date.toLocaleDateString("pl-PL", formDate);
  const formattedCurrentTime = date.toLocaleTimeString("pl-PL", formTime);

  return (
    <p>
      {" "}
      Jest {formattedCurrentDate} roku, godzina: {formattedCurrentTime}
    </p>
  );
};

export default Clock;
