import { useCurrentDate } from "./useCurrentDate";
import { ClockText } from "./styled";

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
    <ClockText>
      {" "}
      Jest {formattedCurrentDate} roku, godzina: {formattedCurrentTime}
    </ClockText>
  );
};

export default Clock;
