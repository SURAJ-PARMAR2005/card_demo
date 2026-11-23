export default function ActionBar({ w }) {
  const gcal = () => {
    const start = new Date(w.date.iso);
    const end = new Date(start.getTime() + 6 * 3600 * 1000);
    const fmt = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const p = new URLSearchParams({
      action: "TEMPLATE",
      text: `Wedding of ${w.couple.a} & ${w.couple.b}`,
      dates: `${fmt(start)}/${fmt(end)}`,
      location: w.venues[0]?.address || "",
      details: w.venues.map((v) => `${v.kind}: ${v.name} at ${v.time}`).join("\n"),
    });
    return `https://calendar.google.com/calendar/render?${p}`;
  };

  const share = async () => {
    const data = {
      title: `${w.couple.a} & ${w.couple.b}`,
      text: `You're invited to our wedding — ${w.date.display}`,
      url: window.location.href,
    };
    if (navigator.share) { try { await navigator.share(data); } catch {} }
    else { await navigator.clipboard.writeText(data.url); alert("Link copied!"); }
  };

  return (
    <div className="bar">
      <a className="kicker" href={gcal()} target="_blank" rel="noreferrer">Calendar</a>
      <a className="kicker" href="#rsvp">RSVP</a>
      <button className="kicker" onClick={share}>Share</button>
    </div>
  );
}