// export const wedding = {
//   couple: { a: "Ram", b: "Sita", initials: "R&S", hashtag: "#RamAndSitaForever" },
//   date:   { iso: "2026-12-01T14:00:00+08:00", display: "DEC 01 2026" },
//   verse:  "“When the time is right, I, the Lord, will make it happen.” — Isaiah 60:22",

//   images: {
//     hero:    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
//     story:   "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
//     details: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
//     rsvp:    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
//       "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
//       "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
//       "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
//       "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
//       "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80",
//     ],
//   },

//   program: [
//     { time: "2:00 PM", event: "Ceremony"  },
//     { time: "4:00 PM", event: "Reception" },
//     { time: "5:00 PM", event: "Dinner"    },
//     { time: "6:00 PM", event: "Photos"    },
//   ],

//   story: {
//     title: "Our love story",
//     body: "In a quiet coastal town, Olivia, a marine biologist, and Ralph, a fisherman, met when he rescued her boat after it broke down. Their shared love for the ocean sparked a deep connection — exploring coves, studying marine life, watching the tide come in. One sunset, Ralph confessed his feelings and Olivia joyfully reciprocated.",
//   },

//   entourage: {
//     parents: [
//       { title: "Bride", names: ["Mr. Lucas Harrington", "Mrs. Megan Harrington"] },
//       { title: "Groom", names: ["Mr. Nathaniel Barlow", "Mrs. Olivia Barlow"] },
//     ],
//     groups: [
//       { title: "Principal Sponsors", cols: 2, names: [
//         "Amanda Grayson","Benjamin Caldwell","Charlotte Whitaker","David Langston",
//         "Emily Cartwright","Frederick Thompson","Grace Hamilton","Henry Fitzgerald",
//         "Isabella Norton","James Ellington","Katherine Bradford","Lucas Harrington"] },
//       { title: "Best Man & Maid of Honor", cols: 1, names: [
//         "Mr. David Langston","Ms. Katherine Ellington"] },
//       { title: "Secondary Sponsors", cols: 2, names: [
//         "Veil · Ms. Katherine Ellington","Veil · Mr. Patrick Donnelly",
//         "Cord · Ms. Grace Hamilton","Cord · Mr. Quinn Matthews",
//         "Candle · Ms. Isabella Norton","Candle · Mr. James Ellington"] },
//       { title: "Groomsmen & Bridesmaids", cols: 2, names: [
//         "Amanda Grayson","Benjamin Caldwell","Charlotte Whitaker","David Langston"] },
//     ],
//   },

//   details: {
//     dressCode: "Formal Attire",
//     palette: ["#16336B", "#27509E", "#4A74C9", "#9DBAE3", "#DCE8F7"],
//     paletteNote: "Shades of Blue",
//     gifts: "With all that we have, we have been truly blessed. Your presence and prayers are all that we request. But if you desire to give nonetheless, a monetary gift is one we humbly request.",
//     socials: [{ label: "Instagram", url: "#" }, { label: "Facebook", url: "#" }],
//   },

//   venues: [
//     { kind: "Ceremony", name: "Our Lady of Lourdes Parish Church", time: "2:00 PM",
//       address: "Carpenter Hill, Koronadal City",
//       img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1000&q=80",
//       map: "https://maps.google.com/?q=Our+Lady+of+Lourdes+Parish+Church+Koronadal" },
//     { kind: "Reception", name: "The Farm @ Carpenter Hill", time: "4:00 PM",
//       address: "Carpenter Hill, Marbel",
//       img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80",
//       map: "https://maps.google.com/?q=The+Farm+Carpenter+Hill+Marbel" },
//   ],

//   // "whatsapp" = zero backend, opens prefilled chat. Perfect for MVP.
//   // "endpoint" = POSTs JSON to a Google Apps Script / Formspree URL.
//   rsvp: {
//     mode: "whatsapp",
//     whatsapp: "919999999999",
//     endpoint: "",
//     note: "Kindly reserve by May 1, 2025 to secure your seat on our special day.",
//   },

//   reminder: "Please observe proper decorum during the ceremony. Kindly refrain from taking photos — we have hired professionals to capture every moment. Be our guest, not our guest photographer.",
//   footerNote: "Hope you can make it. God bless you!",

//   theme: {
//     "--b900": "#16336B", "--b700": "#27509E", "--b500": "#4A74C9",
//     "--b300": "#9DBAE3", "--b100": "#DCE8F7",
//     "--paper": "#F6F8FC", "--ink": "#1B2A49",
//   },

//   credit: { show: true, label: "Invite by @yourhandle", url: "https://instagram.com/yourhandle" },
// };


export const wedding = {
  couple: {
    a: "Ram",
    b: "Sita",
    initials: "R&S",
    hashtag: "#RamSitaKiShaadi",
  },

  date: { iso: "2026-12-01T19:30:00+05:30", display: "01 DECEMBER 2026" },

  // Mangalashtaka — traditional Hindu wedding blessing
  verse:
    "“Om Mangalam Bhagwan Vishnu, Mangalam Garudadhwajah — May all that is auspicious bless this union.”",

  images: {
    hero:    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    story:   "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1200&q=80",
    details: "https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?w=1200&q=80",
    rsvp:    "https://images.unsplash.com/photo-1609151354448-c4a53450870a?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80",
      "https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?w=600&q=80",
      "https://images.unsplash.com/photo-1609151354448-c4a53450870a?w=600&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
      "https://images.unsplash.com/photo-1595407753234-0882f1e77954?w=600&q=80",
      "https://images.unsplash.com/photo-1610901157620-340856d0a50f?w=600&q=80",
    ],
  },

  // The wedding-day timeline (shown inside the oval)
  program: [
    { time: "7:30 PM",  event: "Baraat"   },
    { time: "8:30 PM",  event: "Varmala"  },
    { time: "9:00 PM",  event: "Dinner"   },
    { time: "11:45 PM", event: "Phere"    },
    { time: "4:00 AM",  event: "Vidai"    },
  ],

  story: {
    title: "Our story",
    body: "Two families, one thread. What began as a quiet introduction over chai in Lucknow turned into late-night phone calls, shared playlists, and an easy certainty neither of them expected. Ram still insists he knew within the first ten minutes. Sita maintains it took her exactly three. Between them, they have decided to stop arguing about it and simply get married — and they would be incomplete without you there.",
  },

  // "Entourage" repurposed as the Hindu family-blessing structure
  entourage: {
    parents: [
      { title: "Vadhu", names: ["Shri Janak Kishor", "Smt. Sunaina Devi", "Lucknow"] },
      { title: "Var",   names: ["Shri Dashrath Singh", "Smt. Kaushalya Devi", "Ayodhya"] },
    ],
    groups: [
      {
        title: "With the blessings of",
        cols: 2,
        names: [
          "Late Shri Aja Raghuvanshi", "Smt. Indumati Devi",
          "Shri Hirnyadhanu Mishra",   "Smt. Kalyani Devi",
          "Shri Bharat & Smt. Mandavi","Shri Lakshman & Smt. Urmila",
        ],
      },
      {
        title: "Brothers & Sisters",
        cols: 2,
        names: [
          "Shatrughan Singh", "Shrutakirti Kishor",
          "Meera Raghuvanshi","Aarav Kishor",
          "Nandini Singh",    "Kabir Mishra",
        ],
      },
      {
        title: "Invited by",
        cols: 1,
        names: [
          "The Raghuvanshi & Kishor Parivar",
          "— along with all our cousins, aunts, uncles and well-wishers —",
        ],
      },
    ],
  },

  details: {
    dressCode: "Indian Traditional",
    palette: ["#4A0D1C", "#8A1538", "#C9A227", "#E8C87D", "#F6E6C8"],
    paletteNote: "Maroon · Gold · Ivory",
    gifts:
      "Your presence and aashirwad are the only gifts we seek. We humbly request no boxed gifts — if you wish to bless us, shagun is gracefully accepted.",
    socials: [
      { label: "Instagram", url: "#" },
      { label: "WhatsApp",  url: "#" },
    ],
  },

  // Each Indian function as its own "venue" card — date goes in the time field
  venues: [
    {
      kind: "Haldi",
      name: "Kishor Niwas",
      time: "29 Nov · 10:00 AM",
      address: "12 Gomti Nagar, Lucknow",
      img: "https://images.unsplash.com/photo-1595407753234-0882f1e77954?w=1000&q=80",
      map: "https://maps.google.com/?q=Gomti+Nagar+Lucknow",
    },
    {
      kind: "Mehndi & Sangeet",
      name: "The Grand Lawns",
      time: "30 Nov · 6:00 PM",
      address: "Vipul Khand, Gomti Nagar, Lucknow",
      img: "https://images.unsplash.com/photo-1610901157620-340856d0a50f?w=1000&q=80",
      map: "https://maps.google.com/?q=The+Grand+Lucknow",
    },
    {
      kind: "Vivah",
      name: "Mandap at Hotel Taj Mahal",
      time: "01 Dec · 7:30 PM",
      address: "Vipin Khand, Gomti Nagar, Lucknow",
      img: "https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?w=1000&q=80",
      map: "https://maps.google.com/?q=Hotel+Taj+Mahal+Lucknow",
    },
    {
      kind: "Reception",
      name: "Crystal Banquet Hall",
      time: "02 Dec · 7:00 PM",
      address: "Hazratganj, Lucknow",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80",
      map: "https://maps.google.com/?q=Hazratganj+Lucknow",
    },
  ],

  rsvp: {
    mode: "whatsapp",
    whatsapp: "919999999999",
    endpoint: "",
    note:
      "Kindly confirm your presence by 15 November 2026 so we can arrange seating and stay for you and your family.",
  },

  reminder:
    "Phere will begin at the shubh muhurat of 11:45 PM — we request everyone to be seated by 11:30 PM. Valet parking is available at the main gate. Outstation guests, please share your arrival details with us so we can arrange pickup.",

  footerNote: "Aapke aagman ki prateeksha mein",

  theme: {
    "--b900":  "#4A0D1C",   // deep maroon  — RSVP / footer section
    "--b700":  "#8A1538",   // maroon       — headings, blue sections
    "--b500":  "#C9A227",   // gold         — borders, accents
    "--b300":  "#E8C87D",   // light gold   — rules
    "--b100":  "#F6E6C8",   // cream        — gallery band
    "--paper": "#FFFBF4",   // ivory        — page background
    "--ink":   "#3A1A20",   // brown-black  — body text
  },

  credit: {
    show: true,
    label: "Invite by @yourhandle",
    url: "https://instagram.com/yourhandle",
  },
};