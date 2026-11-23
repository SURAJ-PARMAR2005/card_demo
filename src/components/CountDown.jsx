import { useEffect, useState } from "react";

export default function Countdown({ iso }) {
  const [left, setLeft] = useState(() => new Date(iso) - Date.now());

  useEffect(() => {
    const id = setInterval(() => setLeft(new Date(iso) - Date.now()), 1000);
    return () => clearInterval(id);
  }, [iso]);

  if (left <= 0) return <p className="script" style={{ fontSize: 32, textAlign: "center" }}>Today is the day</p>;

  const s = Math.floor(left / 1000);
  const units = [
    ["Days",  Math.floor(s / 86400)],
    ["Hours", Math.floor(s / 3600) % 24],
    ["Mins",  Math.floor(s / 60) % 60],
    ["Secs",  s % 60],
  ];

  return (
    <div className="cd">
      {units.map(([label, n]) => (
        <div key={label}>
          <div className="cdNum">{String(n).padStart(2, "0")}</div>
          <div className="cdLbl">{label}</div>
        </div>
      ))}
    </div>
  );
}