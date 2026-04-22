export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "the-power-of-small-daily-progress",
    title: "The Power of Small Daily Progress",
    excerpt: "Why .0027 compounded across 365 days is not arithmetic — it is transformation.",
    date: "March 11, 2026",
    author: "Kameron Katsch",
    readTime: "6 min read",
    content: [
      "We are taught to chase the leap. The breakthrough. The overnight change. But history rarely rewards the sprint — it rewards the walk. THE WHOLE THING is built on a single, radical premise: if every human being on earth committed to improving their lives by just 0.27% each day, in 365 days the world would be unrecognizable.",
      "0.27% is almost nothing. It is a glass of water. A kind sentence. Ten minutes of stillness. One unread book finally opened. It is small enough to be invisible on any given Tuesday — and large enough, when multiplied across eight billion lives and 365 sunrises, to bend the arc of the species.",
      "This is the mathematics of unity. Not heroic effort. Not martyrdom. Just the quiet, patient, daily decision to be 0.27% more alive than you were yesterday. We call it .0027 × 365, and we believe it is the only equation that has ever truly changed the world.",
      "The movement does not ask for your life. It asks for your day. Every day.",
    ],
  },
  {
    slug: "understanding-total-addressable-lives",
    title: "Understanding Total Addressable Lives (TAL)",
    excerpt: "TAM measures markets. TAL measures meaning. Every human is a stakeholder.",
    date: "February 22, 2026",
    author: "Kameron Katsch",
    readTime: "5 min read",
    content: [
      "In business, we track TAM — Total Addressable Market. It is a cold, useful number. But it assumes humans are customers first. We reject that premise.",
      "Total Addressable Lives (TAL) is the inverse. It asks a different question: how many human beings could this touch, honor, elevate, or free? The answer — always — is every single one.",
      "When we frame decisions through TAL, leadership stops being about capture and starts being about contribution. Every policy, product, and promise is weighed against a single measure: does it expand the addressable dignity of the human family?",
      "TAL is the quiet revolution inside the louder one. It is how we intend to run this movement, and how we hope, eventually, the world will run itself.",
    ],
  },
  {
    slug: "why-global-unity-starts-with-individuals",
    title: "Why Global Unity Starts With Individuals",
    excerpt: "You cannot scale what you have not embodied. The whole thing starts in one chest.",
    date: "January 30, 2026",
    author: "Kameron Katsch",
    readTime: "7 min read",
    content: [
      "There is a temptation, when the problems are planetary, to believe the solutions must be planetary too. Summits. Treaties. Institutions. These matter. But they are downstream.",
      "Upstream — at the source of every river of change — is a single person choosing coherence over noise. Choosing to be whole. The word itself is the promise: THE WHOLE THING. Not the half, not the convenient, not the version that polls well.",
      "Unity is not something that is negotiated between nations. It is something that is remembered inside individuals, and then made contagious. One coherent life invites another. Two become a household. A household becomes a block. A block becomes a city. This is how movements that outlast their founders are actually built.",
      "So we start where every honest revolution begins: with you, alone, at 11:11, deciding that today you will be 0.27% more of what the world needs.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
