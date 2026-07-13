// Import Dependencies
import { useTimer } from "react-timer-hook";

// Local Imports
import { Digit } from "./Digit";

// ----------------------------------------------------------------------

export function Deadline({ expirySeconds }: { expirySeconds: number }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + expirySeconds);

  const { seconds, minutes, hours } = useTimer({ expiryTimestamp: time });

  return (
    <div className="mt-6">
      <p className="font-medium">پایان مزایده در</p>
      <div className="text-primary-600 dark:text-primary-400 mt-3 grid grid-cols-3 gap-3 text-center text-4xl font-semibold">
        <Digit value={seconds} />
        <Digit value={minutes} />
        <Digit value={hours} />
      </div>
      <div className="text-xs-plus mt-2 grid grid-cols-3 gap-3 text-center">
        <p>ثانیه</p>
        <p>دقیقه</p>
        <p>ساعت</p>
      </div>
    </div>
  );
}
