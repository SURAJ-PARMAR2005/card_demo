const rnd = (s) => { const x = Math.sin(s) * 10000; return x - Math.floor(x); };

function path(seed, segs = 42, w = 1200, h = 30) {
  let d = `M0,${h} L0,${(h * 0.55).toFixed(1)}`;
  for (let i = 0; i <= segs; i++) {
    const x = (w / segs) * i;
    const y = h * 0.18 + rnd(seed + i * 1.7) * h * 0.6;
    d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return d + ` L${w},${h} Z`;
}

export default function Torn({ fill, seed = 7, flip = false }) {
  return (
    <svg className="torn" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden
         style={{ transform: flip ? "rotate(180deg)" : "none",
                  marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}>
      <path d={path(seed)} fill={fill} />
    </svg>
  );
}