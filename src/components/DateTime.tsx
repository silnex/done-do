const timeFormatting = (time: Date): string => {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export default function DateTime({ time }: { time: Date }) {
  return (
    <input type="time" name="doneAt" id="doneAt" value={timeFormatting(time)} />
  );
}
