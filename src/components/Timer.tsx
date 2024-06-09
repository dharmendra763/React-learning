// useSyncExternalStore
import { useSyncExternalStore } from "react";

// export default function Timer() {
//   const [now, setNow] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const id = setInterval(() => {
//       setNow(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(id);
//   });

//   return <p>{now}</p>;
// }

let now = new Date().toLocaleTimeString();

setInterval(() => {
  now = new Date().toLocaleTimeString();
  notifiers.forEach((notify) => notify());
}, 1000);

const notifiers = new Set<() => void>();

function subscribe(notify: () => void) {
  notifiers.add(notify);

  return () => notifiers.delete(notify);
}

export default function Timer() {
  const store = useSyncExternalStore(subscribe, () => now);

  return <p>The time is: {store}</p>;
}
