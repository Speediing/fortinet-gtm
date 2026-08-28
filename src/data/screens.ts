import type { JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gmail"
  | "gdoc"
  | "research"
  | "page";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const notes = { id: "notes", host: "notes.app", label: "Notes" };
const deck = { id: "deck", host: "slides.app", label: "Deck" };
const docs = { id: "docs", host: "docs.app", label: "Docs" };
const mail = { id: "mail", host: "mail.app", label: "Mail" };
const web = { id: "web", host: "public-web.com", label: "Web" };
const page = { id: "page", host: "brief.app", label: "Brief" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening the meeting notes",
      host: notes.host,
      path: "/live/customer-discovery",
      title: "Customer discovery",
      site: "granola",
      tabs: [notes, deck, mail],
    },
    m2: {
      pill: "Sorting priorities and open questions",
      host: notes.host,
      path: "/live/customer-discovery",
      title: "Customer discovery",
      site: "granola",
      tabs: [notes, deck, mail],
    },
    m3: {
      pill: "Updating the working deck",
      host: deck.host,
      path: "/customer-follow-up",
      title: "Customer follow-up",
      site: "figma",
      tabs: [notes, deck, mail],
    },
    m4: {
      pill: "Building the next meeting brief",
      host: docs.host,
      path: "/next-meeting-brief",
      title: "Next meeting brief",
      site: "gdoc",
      tabs: [notes, deck, docs, mail],
    },
    m5: {
      pill: "Drafts parked for seller review",
      host: deck.host,
      path: "/customer-follow-up",
      title: "Customer follow-up",
      site: "figma",
      tabs: [notes, deck, docs, mail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening the customer thread",
      host: mail.host,
      path: "/inbox/customer-questions",
      title: "Customer questions",
      site: "gmail",
      tabs: [mail, docs],
    },
    m2: {
      pill: "Checking approved sources",
      host: docs.host,
      path: "/approved-sources",
      title: "Approved sources",
      site: "research",
      tabs: [mail, docs],
    },
    m3: {
      pill: "Building the sourced answer pack",
      host: docs.host,
      path: "/customer-answer-pack",
      title: "Customer answer pack",
      site: "gdoc",
      tabs: [mail, docs],
    },
    m4: {
      pill: "Drafting the reply",
      host: mail.host,
      path: "/drafts/customer-reply",
      title: "Customer reply",
      site: "gmail",
      tabs: [mail, docs],
    },
    m5: {
      pill: "Nothing sent",
      host: mail.host,
      path: "/drafts/customer-reply",
      title: "Customer reply",
      site: "gmail",
      tabs: [mail, docs],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Researching the target account",
      host: web.host,
      path: "/target-account",
      title: "Public account sources",
      site: "research",
      tabs: [web, docs, page, mail],
    },
    m2: {
      pill: "Separating facts from assumptions",
      host: web.host,
      path: "/target-account",
      title: "Public account sources",
      site: "research",
      tabs: [web, docs, page, mail],
    },
    m3: {
      pill: "Writing the account hypothesis",
      host: docs.host,
      path: "/target-account-research",
      title: "Target account research",
      site: "gdoc",
      tabs: [web, docs, page, mail],
    },
    m4: {
      pill: "Building the account brief",
      host: page.host,
      path: "/target-account",
      title: "Target account brief",
      site: "page",
      tabs: [web, docs, page, mail],
    },
    m5: {
      pill: "Drafts parked for review",
      host: page.host,
      path: "/target-account",
      title: "Target account brief",
      site: "page",
      tabs: [web, docs, page, mail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
