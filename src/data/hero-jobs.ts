export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = Readonly<{
  id: string;
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
}>;

export const HERO_JOBS = [
  {
    id: "sales-outbound",
    name: "Sales Outbound",
    icon: "outbound",
    account: "Target account",
    signal: "New security leader started",
    work:
      "I checked the public company context and the notes you approved, then drafted a short introduction around the open security priorities.",
    result: "Account brief and email drafts ready",
    user: "Add the open questions to the brief.",
    bot: "Added. The drafts are waiting for your review.",
  },
  {
    id: "account-research",
    name: "Account Research",
    icon: "research",
    account: "Priority account",
    signal: "Account added to this week's list",
    work:
      "I reviewed public sources and the notes you provided, then organized the people, current projects, and gaps that need confirmation.",
    result: "Account brief ready",
    user: "Turn the gaps into discovery questions.",
    bot: "Done. The brief has not been shared.",
  },
  {
    id: "call-follow-up",
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Customer discovery",
    signal: "Customer call ended",
    work:
      "I organized the approved notes, updated the working deck, and drafted a recap with the owners and next steps from the call.",
    result: "Recap and deck edits ready",
    user: "Keep both as drafts.",
    bot: "Done. They are ready for your review.",
  },
  {
    id: "deal-desk",
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Customer questionnaire",
    signal: "Security questions received",
    work:
      "I checked approved Fortinet product and security sources, added source links, and separated the questions that still need an owner.",
    result: "Draft response with source links ready",
    user: "Route the unanswered items for review.",
    bot: "Flagged. The supported answers stay in draft.",
  },
  {
    id: "pipeline-review",
    name: "Pipeline Review",
    icon: "pipeline",
    account: "Seller pipeline",
    signal: "Weekly review is coming up",
    work:
      "I organized the updates you provided, marked missing next steps, and prepared the questions that need the seller's judgment.",
    result: "Review brief ready",
    user: "Show me the deals with no next step.",
    bot: "Ready. The owners can review each item.",
  },
  {
    id: "renewal-prep",
    name: "Renewal Prep",
    icon: "renewal",
    account: "Renewal account",
    signal: "Renewal meeting scheduled",
    work:
      "I gathered the account notes you approved, listed the open items, and drafted a meeting plan around the customer's stated priorities.",
    result: "Renewal meeting plan ready",
    user: "Add the questions we still need to answer.",
    bot: "Added. The plan is ready for the account team.",
  },
  {
    id: "competitive-brief",
    name: "Competitive Brief",
    icon: "competitive",
    account: "Upcoming customer call",
    signal: "Competitor mentioned in the notes",
    work:
      "I found the exact question in the approved notes and drafted a response using current Fortinet sources for the seller to check.",
    result: "Talk track and source links ready",
    user: "Add it to the call brief.",
    bot: "Added. The seller can review the wording.",
  },
  {
    id: "seller-briefing",
    name: "Seller Briefing",
    icon: "chief-of-staff",
    account: "Today's customer meetings",
    signal: "Morning brief is due",
    work:
      "I pulled together the approved account notes, meeting goals, and open follow-ups so the seller can see what needs attention.",
    result: "Daily seller brief ready",
    user: "Put the urgent follow-ups first.",
    bot: "Done. The rest remain in the brief.",
  },
] as const satisfies readonly HeroJob[];
