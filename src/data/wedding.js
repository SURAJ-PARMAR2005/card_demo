export const wedding = {
  couple: { a: "Olivia", b: "Ralph", initials: "O&R", hashtag: "#RalphAndOliviaForever" },
  date:   { iso: "2025-05-18T14:00:00+08:00", display: "MAY 18 2025" },
  verse:  "“When the time is right, I, the Lord, will make it happen.” — Isaiah 60:22",

  images: {
    hero:    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    story:   "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    details: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
    rsvp:    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80",
    ],
  },

  program: [
    { time: "2:00 PM", event: "Ceremony"  },
    { time: "4:00 PM", event: "Reception" },
    { time: "5:00 PM", event: "Dinner"    },
    { time: "6:00 PM", event: "Photos"    },
  ],

  story: {
    title: "Our love story",
    body: "In a quiet coastal town, Olivia, a marine biologist, and Ralph, a fisherman, met when he rescued her boat after it broke down. Their shared love for the ocean sparked a deep connection — exploring coves, studying marine life, watching the tide come in. One sunset, Ralph confessed his feelings and Olivia joyfully reciprocated.",
  },

  entourage: {
    parents: [
      { title: "Bride", names: ["Mr. Lucas Harrington", "Mrs. Megan Harrington"] },
      { title: "Groom", names: ["Mr. Nathaniel Barlow", "Mrs. Olivia Barlow"] },
    ],
    groups: [
      { title: "Principal Sponsors", cols: 2, names: [
        "Amanda Grayson","Benjamin Caldwell","Charlotte Whitaker","David Langston",
        "Emily Cartwright","Frederick Thompson","Grace Hamilton","Henry Fitzgerald",
        "Isabella Norton","James Ellington","Katherine Bradford","Lucas Harrington"] },
      { title: "Best Man & Maid of Honor", cols: 1, names: [
        "Mr. David Langston","Ms. Katherine Ellington"] },
      { title: "Secondary Sponsors", cols: 2, names: [
        "Veil · Ms. Katherine Ellington","Veil · Mr. Patrick Donnelly",
        "Cord · Ms. Grace Hamilton","Cord · Mr. Quinn Matthews",
        "Candle · Ms. Isabella Norton","Candle · Mr. James Ellington"] },
      { title: "Groomsmen & Bridesmaids", cols: 2, names: [
        "Amanda Grayson","Benjamin Caldwell","Charlotte Whitaker","David Langston"] },
    ],
  },

  details: {
    dressCode: "Formal Attire",
    palette: ["#16336B", "#27509E", "#4A74C9", "#9DBAE3", "#DCE8F7"],
    paletteNote: "Shades of Blue",
    gifts: "With all that we have, we have been truly blessed. Your presence and prayers are all that we request. But if you desire to give nonetheless, a monetary gift is one we humbly request.",
    socials: [{ label: "Instagram", url: "#" }, { label: "Facebook", url: "#" }],
  },

  venues: [
    { kind: "Ceremony", name: "Our Lady of Lourdes Parish Church", time: "2:00 PM",
      address: "Carpenter Hill, Koronadal City",
      img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1000&q=80",
      map: "https://maps.google.com/?q=Our+Lady+of+Lourdes+Parish+Church+Koronadal" },
    { kind: "Reception", name: "The Farm @ Carpenter Hill", time: "4:00 PM",
      address: "Carpenter Hill, Marbel",
      img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80",
      map: "https://maps.google.com/?q=The+Farm+Carpenter+Hill+Marbel" },
  ],

  // "whatsapp" = zero backend, opens prefilled chat. Perfect for MVP.
  // "endpoint" = POSTs JSON to a Google Apps Script / Formspree URL.
  rsvp: {
    mode: "whatsapp",
    whatsapp: "919999999999",
    endpoint: "",
    note: "Kindly reserve by May 1, 2025 to secure your seat on our special day.",
  },

  reminder: "Please observe proper decorum during the ceremony. Kindly refrain from taking photos — we have hired professionals to capture every moment. Be our guest, not our guest photographer.",
  footerNote: "Hope you can make it. God bless you!",

  theme: {
    "--b900": "#16336B", "--b700": "#27509E", "--b500": "#4A74C9",
    "--b300": "#9DBAE3", "--b100": "#DCE8F7",
    "--paper": "#F6F8FC", "--ink": "#1B2A49",
  },

  credit: { show: true, label: "Invite by @yourhandle", url: "https://instagram.com/yourhandle" },
};