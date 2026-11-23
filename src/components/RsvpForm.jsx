import { useState } from "react";

export default function RsvpForm({ w }) {
  const [f, setF] = useState({ name: "", attending: "yes", guests: "1", msg: "" });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!f.name.trim()) return;

    if (w.rsvp.mode === "whatsapp") {
      const text =
        `RSVP — ${w.couple.a} & ${w.couple.b}\n\n` +
        `Name: ${f.name}\n` +
        `Attending: ${f.attending === "yes" ? "Yes 🎉" : "Regretfully no"}\n` +
        `Guests: ${f.guests}` +
        (f.msg ? `\nMessage: ${f.msg}` : "");
      window.open(`https://wa.me/${w.rsvp.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
      setSent(true);
      return;
    }

    setBusy(true);
    try {
      await fetch(w.rsvp.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      setSent(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (sent)
    return <p className="script" style={{ fontSize: 30, textAlign: "center", padding: "24px 0" }}>
      Thank you! See you there.
    </p>;

  return (
    <form className="form" onSubmit={submit}>
      <input placeholder="Your full name" value={f.name} onChange={on("name")} required />
      <select value={f.attending} onChange={on("attending")}>
        <option value="yes">Joyfully accepts</option>
        <option value="no">Regretfully declines</option>
      </select>
      <input type="number" min="1" max="10" placeholder="Number of guests"
             value={f.guests} onChange={on("guests")} />
      <textarea rows="2" placeholder="A message for the couple (optional)"
                value={f.msg} onChange={on("msg")} />
      <button className="kicker" disabled={busy}>{busy ? "Sending…" : "Send RSVP"}</button>
    </form>
  );
}