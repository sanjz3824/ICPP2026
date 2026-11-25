/* =========================================================================
   ICPP 2026 — Program data
   Source: ICPP2026ProgramOverview.pdf + icpp2026.iitd.ac.in/program
   Reconstructed from the official program overview (Dec 6–11, 2026).
   ========================================================================= */

const TRACKS = {
  NF:   { code: 'NF',   name: 'Nuclear Fusion',                  color: '#ff6b7a', glyph: '✦' },
  FP:   { code: 'FP',   name: 'Fundamental Plasma',              color: '#a78bfa', glyph: '◈' },
  SAP:  { code: 'SAP',  name: 'Space & Astrophysical Plasmas',   color: '#fbbf24', glyph: '✧' },
  LPI:  { code: 'LPI',  name: 'Laser Plasma Interaction',        color: '#f472b6', glyph: '❖' },
  PBPA: { code: 'PBPA', name: 'Plasma Based Particle Acc.',      color: '#2dd4bf', glyph: '➤' },
  LAP:  { code: 'LAP',  name: 'Low Temp. & Applied Plasmas',     color: '#4ade80', glyph: '❋' },
  CSCP: { code: 'CSCP', name: 'Complex & Strongly Coupled',      color: '#38bdf8', glyph: '❂' },
  PDD:  { code: 'PDD',  name: 'Plasma Diagnostics & Devices',    color: '#c084fc', glyph: '◎' }
};

const THEMES = [
  { code: 'NF',   title: 'Nuclear Fusion', sub: 'Magnetic & inertial confinement, alternative concepts', color: '#ff6b7a', icon: 'M12 2c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10Z' },
  { code: 'FP',   title: 'Fundamental Plasma', sub: 'Waves, instabilities, turbulence, transport, kinetic theory', color: '#a78bfa', icon: 'M2 12c3-6 5 6 8 0s5 6 8 0' },
  { code: 'SAP',  title: 'Space & Astrophysical', sub: 'Solar, heliosphere, magnetosphere & astrophysical systems', color: '#fbbf24', icon: 'M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z' },
  { code: 'LPI',  title: 'Laser Plasma Interaction', sub: 'Ultra-intense lasers, HEDP, laboratory astrophysics', color: '#f472b6', icon: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z' },
  { code: 'PBPA', title: 'Plasma Based Acceleration', sub: 'Wakefield & beam-driven acceleration, radiation sources', color: '#2dd4bf', icon: 'M3 12h13m-5-5 5 5-5 5M17 5v14' },
  { code: 'LAP',  title: 'Low Temp. & Applied', sub: 'Industrial, atmospheric, medical & environmental plasmas', color: '#4ade80', icon: 'M12 3v6m0 6v6M3 12h6m6 0h6M5.6 5.6l4.2 4.2m4.4 4.4 4.2 4.2m0-12.8-4.2 4.2m-4.4 4.4-4.2 4.2' },
  { code: 'CSCP', title: 'Complex & Strongly Coupled', sub: 'Dusty plasmas, Coulomb systems, quantum & QCD plasmas', color: '#38bdf8', icon: 'M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5' },
  { code: 'PDD',  title: 'Plasma Diagnostics & Devices', sub: 'Diagnostics, space propulsion, MHD, photonics', color: '#c084fc', icon: 'M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 11l5-5' }
];

const PLENARY = [
  ['Paul M Bellan', 'Caltech', 'Fundamental Plasma', 'img/speakers/paul-bellan.jpg'],
  ['Gianluca Gregori', 'University of Oxford', 'Laser Plasma Interaction', 'img/speakers/gianluca-gregori.jpg'],
  ['Anil Bhardwaj', 'Physical Research Laboratory', 'Space & Astrophysical Plasmas', 'img/speakers/anil-bhardwaj.jpg'],
  ['Chandrashekhar Joshi', 'University of California', 'Plasma Based Particle Accelerators', 'img/speakers/chandrashekhar-joshi.jpg'],
  ['Mahendra Verma', 'IIT Kanpur', 'Complex & Strongly Coupled Plasmas', 'img/speakers/mahendra-verma.jpg'],
  ['Abhijit Sen', 'Institute for Plasma Research', 'Fundamental Plasma', 'img/speakers/abhijit-sen.jpg'],
  ['Victor Malka', 'ELI-NP', 'Plasma Based Particle Acceleration', 'img/speakers/victor-malka.jpg'],
  ['Dimitri Batani', 'University of Bordeaux', 'Laser Plasma Interaction', 'img/speakers/dimitri-batani.jpg'],
  ['Edward Thomas Jr.', 'COSAM', 'Complex & Strongly Coupled Plasmas', 'img/speakers/edward-thomas.jpg'],
  ['Takeshi Matsumoto', 'Kyoto University', 'Fundamental Plasma', 'img/speakers/takeshi-matsumoto.jpg'],
  ['Tomo-Hiko Watanabe', 'Nagoya University', 'Nuclear Fusion', 'img/speakers/tomo-hiko-watanabe.jpg'],
  ['Carolyn Kuranz', 'University of Michigan', 'Fundamental Plasma', 'img/speakers/carolyn-kuranz.jpg'],
  ['Nam Chang Hee', 'GIST, Gwangju', 'Laser Plasma Interaction', 'img/speakers/nam-chang-hee.jpg'],
  ['Carter Troy A', 'Oak Ridge National Laboratory', 'Nuclear Fusion', 'img/speakers/troy-carter.jpg'],
  ['Dominique Escande', 'Aix-Marseille Université', 'Fundamental Plasma', 'img/speakers/dominique-escande.jpg'],
  ['Cary Forest', 'University of Wisconsin', 'Nuclear Fusion', 'img/speakers/cary-forest.jpg'],
  ['Amitava Bhattacharjee', 'Princeton University', 'Fundamental Plasma', 'img/speakers/amitava-bhattacharjee.jpg'],
  ['Kohnosuke Sato', 'Kyushu University', 'Nuclear Fusion', 'img/speakers/kohnosuke-sato.jpg'],
  ['Swadesh Mahajan', 'University of Texas', 'Nuclear Fusion', 'img/speakers/swadesh-mahajan.jpg'],
];

const SOCIAL = [
  { date: 'Sun, 06 Dec', time: '18:00 – 21:00', title: 'Welcome Reception', desc: 'Kick off the congress with old friends and new collaborators over food and drinks.', icon: 'toast', accent: '#f472b6' },
  { date: 'Wed, 09 Dec', time: '18:30 – 20:00', title: 'Cultural Evening', desc: 'Kuchipudi presentation by Padma Shri awardee Dr. Deepika Reddy and disciples.', icon: 'dance', accent: '#fbbf24' },
  { date: 'Wed, 09 Dec', time: '19:00 – 22:00', title: 'Conference Banquet', desc: 'The congress banquet — a celebration of plasma physics and community.', icon: 'banquet', accent: '#a78bfa' },
  { date: 'Wed, 09 Dec', time: '13:30 – 19:00', title: 'Excursion', desc: 'An afternoon away from the lecture halls exploring Hyderabad.', icon: 'compass', accent: '#2dd4bf' }
];

/* Helper builders ------------------------------------------------------- */
const br = (time, title, note = '', kind = 'break') => ({ type: 'single', time, title, note, kind });
const pl = (time, title, people) => ({ type: 'plenary', time, title, people });
const ss = (time, title, tracks) => ({ type: 'sessions', time, title, tracks });

/* Each entry in `tracks` is [trackCode, [speaker, speaker, ...]] */
const DAYS = [
  {
    id: 'dec6', dow: 'SUN', num: '06', date: 'Sunday, December 6, 2026',
    label: 'Arrival Day', title: 'Registration & Welcome',
    blurb: 'Check in, collect your badge and ease into the congress with our welcome reception.',
    items: [
      br('14:00 – 19:00', 'Check-In & Registration', 'Registration desk · Leonia Holistic Destination', 'info'),
      br('19:00 – 21:00', 'Welcome Reception', 'Join us for an evening of food, drinks and conversation', 'social')
    ]
  },
  {
    id: 'dec7', dow: 'MON', num: '07', date: 'Monday, December 7, 2026',
    label: 'Day 01', title: 'Opening & First Sessions',
    blurb: 'Opening ceremony, inaugural plenaries and the first parallel scientific sessions.',
    items: [
      br('08:15 – 09:30', 'Registration', 'Badge collection and on-site registration', 'info'),
      br('09:30 – 10:30', 'Opening Ceremony', 'Followed by tea / coffee', 'highlight'),
      pl('10:30 – 12:30', 'Plenary Session I', [
        ['10:30 – 11:10', 'Chan Joshi', 'University of California · Plasma Based Particle Accelerators'],
        ['11:10 – 11:50', 'Cary Forest', 'University of Wisconsin · Nuclear Fusion'],
        ['11:50 – 12:30', 'Takeshi Matsumoto', 'Kyoto University · Fundamental Plasma']
      ]),
      br('12:30 – 14:00', 'Lunch', '', 'meal'),
      ss('14:00 – 15:30', 'Parallel Sessions · A', [
        ['NF',  ['Jonathan Graves', 'Hiroshi Tanabe', 'Paul Gibbon']],
        ['LPI', ['Petru Ghenuche', 'MinSup Hur', 'Gabriele Cristoforetti']],
        ['FP',  ['Richard Sydora', 'Rahul Pandit', 'Vladimir Lipp']],
        ['SAP', ['Arnab Choudhuri', 'Allard Jan van Marle', 'Olga Tsareva (Oral)', 'David Shklyar (Oral)']],
        ['LAP', ['Jean-Paul Booth', 'Tony Murphy', 'Eric Robert']]
      ]),
      br('15:30 – 16:00', 'Tea / Coffee Break', '', 'break'),
      pl('16:00 – 17:20', 'Plenary Session II', [
        ['16:00 – 16:40', 'Tomo-Hiko Watanabe', 'Nagoya University · Nuclear Fusion'],
        ['16:40 – 17:20', 'Troy Carter', 'Oak Ridge National Laboratory · Nuclear Fusion']
      ]),
      br('17:20 – 17:30', 'Short Break', '', 'break'),
      ss('17:30 – 19:00', 'Parallel Sessions · B', [
        ['NF',   ['Geert Verdoolaege', 'Tomohiro Morisaki', 'Kieran Joseph McCarthy']],
        ['PBPA', ['Ishay Pomerantz', 'Kai Huang', 'Rakesh Kumar Yembadi (Oral)']],
        ['CSCP', ['Avinash Khare', 'John Goree', 'Saikat Chakraborty Thakur']],
        ['SAP',  ['Mark Eric Dieckmann', 'Rodion Stepanov', 'Chuang Ren', 'Pallavi Priyadarshini (Oral)']]
      ]),
      br('19:00 – 20:30', 'High Tea with Poster Session', '', 'social')
    ]
  },
  {
    id: 'dec8', dow: 'TUE', num: '08', date: 'Tuesday, December 8, 2026',
    label: 'Day 02', title: 'Kaw Session & Industry',
    blurb: 'A session honouring Prof. S. M. Kaw, industrial talks and an afternoon of parallel sessions.',
    items: [
      br('08:30 – 10:00', 'Kaw Session', 'Abhijit Sen · Bob Bingham · Chan Joshi · Amita Das · G. R. K. · Amitava Bhattacharjee · Avinash Khare · Sudip Sengupta', 'highlight'),
      br('10:00 – 10:40', 'Industrial Talks', 'Anubal Fusion (10 min) · Atos, Nu RF Systems, Muegge Group, D&S Electric Works (5 min each)', 'info'),
      br('10:40 – 11:00', 'Tea / Coffee Break', '', 'break'),
      ss('11:00 – 12:30', 'Parallel Sessions · C', [
        ['FP',   ['Hogun Jhang', 'Sebastien Le Pape', 'Sudip Sengupta']],
        ['PDD',  ['Elizabeth Kautz', 'Nicolas Claire (TBC)', 'Alika Khare']],
        ['NF',   ['Ken McClements', 'Fulvio Militello', "Emmanuel D'Humières"]],
        ['LPI',  ['Dimitri Batani', 'Hideaki Habara', 'Hyyong Suk (TBC)']],
        ['CSCP', ['Evan Aguirre', 'Sanat Tiwari']]
      ]),
      br('12:30 – 14:00', 'Lunch', '', 'meal'),
      pl('14:00 – 15:20', 'Plenary Session III', [
        ['14:00 – 14:40', 'Swadesh Mahajan', 'University of Texas · Nuclear Fusion'],
        ['14:40 – 15:20', 'Edward Thomas Jr.', 'COSAM · Complex & Strongly Coupled Plasmas']
      ]),
      br('15:20 – 15:30', 'Short Break', '', 'break'),
      ss('15:30 – 17:00', 'Parallel Sessions · D', [
        ['NF',  ['Sadayoshi Murakami', 'Santanu Banerjee', 'Maya Padivattathumana']],
        ['LPI', ['Youichi Sakawa', 'Tito Mendonca', 'Shakti Kushwaha (Oral)']],
        ['FP',  ['Paul Terry (TBC)', 'V. Ravishankar', 'Abhishek Jha (Oral)']],
        ['LAP', ['Sarveshwar Sharma', 'Bhooshan Paradkar', 'Ashim Jyoti Bharati (Oral)', 'Niladri Dan (Oral)', 'Uddipan (Oral)', 'Rishabh Singh (Oral)']]
      ]),
      br('17:00 – 18:30', 'High Tea with Poster Session', '', 'social'),
      br('18:30 – 20:00', 'Cultural Program', 'Kuchipudi presentation by Padma Shri awardee Dr. Deepika Reddy and disciples', 'social')
    ]
  },
  {
    id: 'dec9', dow: 'WED', num: '09', date: 'Wednesday, December 9, 2026',
    label: 'Day 03', title: 'Excursion & Banquet',
    blurb: 'Morning plenaries, parallel sessions, an afternoon excursion and the congress banquet.',
    items: [
      pl('08:30 – 10:30', 'Plenary Session IV', [
        ['08:30 – 09:10', 'Paul M Bellan', 'Caltech · Fundamental Plasma'],
        ['09:10 – 09:50', 'Abhijit Sen', 'Institute for Plasma Research · Fundamental Plasma'],
        ['09:50 – 10:30', 'Amitava Bhattacharjee', 'Princeton University · Fundamental Plasma']
      ]),
      br('10:30 – 11:00', 'Tea / Coffee Break', '', 'break'),
      ss('11:00 – 12:30', 'Parallel Sessions · E', [
        ['LAP',  ['Pankaj Attri', 'Nishant Sirse', 'Kalyani Barman (Oral)', 'Anshu Verma (Oral)']],
        ['LPI',  ['Raoul Trines', 'Vladimir Kocharovsky', 'Naveen Kumar', 'Ardhendu Sekhar Mishra (Oral)']],
        ['PBPA', ['Daniele Margarone', 'Dimiter Balabanski', 'VishwaBandhu Pathak']],
        ['FP',   ['Matthew Hole', 'Julio J. Martinell', 'Subhasish Bag (Oral)']]
      ]),
      br('12:30 – 13:30', 'Lunch', '', 'meal'),
      br('13:30 – 19:00', 'Excursion', '', 'social'),
      br('19:00 – 22:00', 'Conference Banquet', '', 'social')
    ]
  },
  {
    id: 'dec10', dow: 'THU', num: '10', date: 'Thursday, December 10, 2026',
    label: 'Day 04', title: 'Research Highlights',
    blurb: 'A full day of plenary lectures and parallel sessions across all major plasma themes.',
    items: [
      pl('08:30 – 10:30', 'Plenary Session V', [
        ['08:30 – 09:10', 'Victor Malka', 'ELI-NP · Plasma Based Particle Acceleration'],
        ['09:10 – 09:50', 'Jochen Schein', 'Plenary lecture'],
        ['09:50 – 10:30', 'Dominique Franck Escande', 'Aix-Marseille Université · Fundamental Plasma']
      ]),
      br('10:30 – 11:00', 'Tea / Coffee Break', '', 'break'),
      ss('11:00 – 12:30', 'Parallel Sessions · F', [
        ['NF',   ['Christian Hopf', 'Animesh Kuley', 'Sayak Bose', 'Raj Laxmi Singh (Oral)']],
        ['LAP',  ['Shantanu Karkari', 'Biswajit Bora', 'Srikumar Ghorui']],
        ['SAP',  ['Murthy Gudipati', 'Kirit Makwana', 'Sharad Yadav']],
        ['LPI',  ['Hiroshi Sawada', 'Nilakshi Das', 'SV Rahul (Oral)']],
        ['CSCP', ['Heremba Bailung', 'Sudeep Bhattacharjee', 'Akanksha Gupta']]
      ]),
      br('12:30 – 14:00', 'Lunch', '', 'meal'),
      pl('14:00 – 15:20', 'Plenary Session VI', [
        ['14:00 – 14:40', 'Chang Hee Nam', 'GIST, Gwangju · Laser Plasma Interaction'],
        ['14:40 – 15:20', 'Mahendra Verma', 'IIT Kanpur · Complex & Strongly Coupled Plasmas']
      ]),
      br('15:20 – 15:30', 'Short Break', '', 'break'),
      ss('15:30 – 17:00', 'Parallel Sessions · G', [
        ['LPI', ['HyungTaek KIM', 'Tsuneyuki Ozaki', 'Hyungyu Yu (Oral)', 'Updesh Verma (Oral)']],
        ['PDD', ['Sushil Kumar Singh', 'Alexander Yashin (TBC)', 'Chun Sung Jao (Oral)', 'Chanho Moon (Oral)']],
        ['SAP', ['Prakriti Pal Choudhury', 'Subir Sarkar', 'Harihar Pradhan (Oral)', 'Swarniv Chandra (Oral)']],
        ['NF',  ['Subrata Pradhan', 'Sambaran Pahari', 'Shrut Silakari (Oral)', '(TBC)']],
        ['FP',  ['Noah Hurst', 'Vikrant Saxena', 'Kunal Singha (Oral)', 'Subramanya Bhat K N (Oral)']]
      ]),
      br('17:00 – 18:30', 'High Tea with Poster Session', '', 'social')
    ]
  },
  {
    id: 'dec11', dow: 'FRI', num: '11', date: 'Friday, December 11, 2026',
    label: 'Day 05', title: 'Final Sessions & Closing',
    blurb: 'The final plenaries and parallel sessions, followed by awards and the closing ceremony.',
    items: [
      pl('08:30 – 10:30', 'Plenary Session VII', [
        ['08:30 – 09:10', 'Gianluca Gregori', 'University of Oxford · Laser Plasma Interaction'],
        ['09:10 – 09:50', 'Tomo-Hiko Watanabe', 'Nagoya University · Nuclear Fusion'],
        ['09:50 – 10:30', 'Kohnosuke Sato', 'Kyushu University · Nuclear Fusion']
      ]),
      br('10:30 – 11:00', 'Tea / Coffee Break', '', 'break'),
      ss('11:00 – 12:30', 'Parallel Sessions · H', [
        ['FP',  ['Julio Javier Martinell Benito', 'Suraj Kumar Sinha', 'Jyotsna Sharma (Oral)', 'Swati Swagatika Mishra (Oral)']],
        ['LAP', ['Takayuki Ohta', 'TBC', 'Bahram Mahdavipour (Oral)', 'Ameya Parab (Oral)']],
        ['SAP', ['Neeraj Jain', 'Supratik Banerjee', 'TBC', 'Egor Gospodchikov (Oral)']],
        ['NF',  ['Rameswar Singh', 'TBC', 'Srishti Agarwal (Oral)', 'Manaswini Sharma (Oral)']],
        ['LPI', ['Tarun Kumar (Oral)', 'TBC']]
      ]),
      br('12:30 – 14:00', 'Lunch', '', 'meal'),
      br('14:00 – 15:00', 'Awards & Closing Ceremony', 'Thank you for joining us at ICPP 2026', 'highlight')
    ]
  }
];
