import { useState } from "react";
import Timer from "../components/Timer";

export default function SyncExternalStoreExample() {
  const [hide, setHide] = useState(true);
  return (
    <div>
      <button onClick={() => setHide((show) => !show)}>
        Show / Hide ({!hide ? "Hidden" : "Shown"})
      </button>
      <Timer />
      <Timer />
      {hide && <Timer />}
    </div>
  );
}
