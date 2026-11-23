import Torn from "./Torn";
import Countdown from "./CountDown.jsx";
import RsvpForm from "./RsvpForm";

export function Hero({ w }) {
  return (
    <>
      <div className="hero">
        <p className="kicker" style={{ opacity: .9 }}>The Wedding Of</p>
        <h1 className="names">
          {w.couple.a}<span className="and">and</span>{w.couple.b}
        </h1>
        <div className="heroPhoto">
          <img src={w.images.hero} alt="" />
          <div className="fade" />
          <span className="mono">{w.couple.initials}</span>
        </div>
      </div>
      <Torn fill="var(--paper)" seed={3} />

      <section style={{ paddingTop: 28, textAlign: "center" }}>
        <p className="serif" style={{ fontSize: 24, letterSpacing: ".3em", fontWeight: 300 }}>
          {w.date.display}
        </p>
        <div className="rule" />
        {w.verse && (
          <p className="serif" style={{ fontStyle: "italic", fontSize: 15, opacity: .8, maxWidth: 290, margin: "0 auto" }}>
            {w.verse}
          </p>
        )}
        <div style={{ marginTop: 30 }}><Countdown iso={w.date.iso} /></div>
      </section>
    </>
  );
}

export function Program({ w }) {
  return (
    <section style={{ paddingTop: 0 }}>
      <h2 className="secTitle">The Wedding Program</h2>
      <div className="oval">
        <span className="mono">{w.couple.initials}</span>
        <div className="rule" style={{ color: "var(--b500)" }} />
        {w.program.map((p) => (
          <div className="progRow" key={p.event}>
            <span>{p.time}</span><span>{p.event}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Story({ w }) {
  return (
    <>
      <Torn fill="var(--b700)" seed={11} />
      <div className="blue">
        <div className="banner" style={{ aspectRatio: "4/3" }}>
          <img src={w.images.story} alt="" />
          <div className="scrim" />
          <h2>{w.story.title}</h2>
        </div>
        <section style={{ padding: "36px 28px" }}>
          <p className="body">{w.story.body}</p>
        </section>
      </div>
      <Torn fill="var(--paper)" seed={19} />
    </>
  );
}

export function Entourage({ w }) {
  return (
    <section>
      <h2 className="secTitle">The Entourage</h2>
      <p className="kicker" style={{ textAlign: "center", opacity: .6, marginTop: 10 }}>
        With the blessing of our parents
      </p>

      <div className="parents">
        {w.entourage.parents.map((p) => (
          <div key={p.title}>
            <div className="script">{p.title}</div>
            {p.names.map((n) => <p key={n}>{n}</p>)}
          </div>
        ))}
      </div>

      {w.entourage.groups.map((g) => (
        <div className="group" key={g.title}>
          <div className="script">{g.title}</div>
          <div className="rule" style={{ color: "var(--b300)" }} />
          <div className={`gridNames ${g.cols === 2 ? "c2" : ""}`}>
            {g.names.map((n) => <p key={n}>{n}</p>)}
          </div>
        </div>
      ))}
    </section>
  );
}

export function Details({ w }) {
  const d = w.details;
  return (
    <>
      <Torn fill="var(--b700)" seed={23} />
      <div className="blue">
        <div className="banner" style={{ aspectRatio: "16/10" }}>
          <img src={w.images.details} alt="" />
          <div className="scrim" />
          <h2>The Details</h2>
        </div>

        <section style={{ padding: "44px 28px" }}>
          <div className="block">
            <div className="label">Dress code</div>
            <div className="icons">👗🤵</div>
            <p className="serif" style={{ fontSize: 15, letterSpacing: ".06em" }}>{d.dressCode}</p>
          </div>

          <div className="block">
            <div className="label">Colour guide</div>
            <div className="swatches">
              {d.palette.map((c) => <span key={c} style={{ background: c }} />)}
            </div>
            <p className="kicker" style={{ opacity: .8 }}>{d.paletteNote}</p>
          </div>

          <div className="block">
            <div className="label">Gift guide</div>
            <p className="body">{d.gifts}</p>
          </div>

          {w.couple.hashtag && (
            <div className="block">
              <div className="label">Snap &amp; share</div>
              <p className="body">Help us capture the love! Share your photos using</p>
              <p className="serif" style={{ fontSize: 20, letterSpacing: ".05em", marginTop: 6 }}>
                {w.couple.hashtag}
              </p>
              {d.socials && (
                <div className="socials">
                  {d.socials.map((s) => <a key={s.label} href={s.url}>{s.label}</a>)}
                </div>
              )}
            </div>
          )}
        </section>
      </div>
      <Torn fill="var(--paper)" seed={31} />
    </>
  );
}

export function Venues({ w }) {
  return (
    <section>
      <h2 className="secTitle">The Venues</h2>
      <div className="rule" style={{ color: "var(--b300)" }} />
      {w.venues.map((v) => (
        <div className="venue" key={v.kind}>
          <div className="pic">
            <img src={v.img} alt={v.name} />
            <div className="tag kicker">{v.kind}</div>
          </div>
          <div className="meta">
            <h3>{v.name}</h3>
            <p className="addr">{v.address}</p>
            <p className="time">{v.time}</p>
            <a className="btnOutline kicker" href={v.map} target="_blank" rel="noreferrer">View map</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export function Gallery({ w }) {
  return (
    <>
      <Torn fill="var(--b100)" seed={37} />
      <div style={{ background: "var(--b100)" }}>
        <section style={{ padding: "44px 28px" }}>
          <h2 className="secTitle">The Gallery</h2>
          <div className="rule" style={{ color: "var(--b500)" }} />
          <div className="gal">
            {w.images.gallery.map((src, i) => (
              <div key={i}><img src={src} alt="" loading="lazy" /></div>
            ))}
          </div>
        </section>
      </div>
      <Torn fill="var(--b900)" seed={41} />
    </>
  );
}

export function Rsvp({ w }) {
  return (
    <div className="deep" id="rsvp">
      <div className="banner" style={{ aspectRatio: "16/10" }}>
        <img src={w.images.rsvp} alt="" />
        <div className="scrim" style={{ background: "rgba(22,51,107,.45)" }} />
        <h2 className="serif" style={{
          position: "absolute", inset: 0, display: "grid", placeItems: "center",
          fontSize: 44, letterSpacing: ".2em", fontWeight: 300, color: "#fff" }}>
          R.S.V.P
        </h2>
      </div>

      <section style={{ padding: "44px 28px" }}>
        {w.rsvp.note && (
          <p className="body" style={{ textAlign: "center", maxWidth: 300, margin: "0 auto 28px" }}>
            {w.rsvp.note}
          </p>
        )}

        {w.rsvp.mode !== "none" && <RsvpForm w={w} />}

        {w.reminder && (
          <div className="block" style={{ marginTop: 52 }}>
            <div className="label">Gentle reminder</div>
            <p className="body" style={{ fontSize: 14 }}>{w.reminder}</p>
          </div>
        )}

        <div className="sign">
          <div className="mono">{w.couple.initials}</div>
          <p className="serif" style={{ fontSize: 15, marginTop: 8 }}>
            {w.couple.a} &amp; {w.couple.b}
          </p>
          <p className="kicker" style={{ opacity: .7, marginTop: 4 }}>{w.date.display}</p>
          {w.footerNote && (
            <p className="script" style={{ fontSize: 26, marginTop: 22, opacity: .9 }}>{w.footerNote}</p>
          )}
          {w.credit?.show && (
            <a className="credit" href={w.credit.url} target="_blank" rel="noreferrer">
              {w.credit.label}
            </a>
          )}
        </div>
      </section>
    </div>
  );
}