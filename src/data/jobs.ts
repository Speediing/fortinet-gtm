import type { CroJob, SlideCard } from "./types";

export const DISCOVERY_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "From the live notes",
    voice: "them",
    title: "What the customer cares about",
    body: "The priorities captured in the meeting, checked against the notes and kept in the customer's language.",
  },
  {
    n: 2,
    kicker: "Mapped for review",
    voice: "us",
    title: "How Fortinet can help",
    body: "The open deck now connects those priorities to the most relevant Fortinet story without adding a broad product tour.",
  },
  {
    n: 3,
    kicker: "Next meeting",
    voice: "us",
    title: "A clear way forward",
    body: "The agenda, people, open questions, and next action are ready for the seller to check before anything is shared.",
  },
];

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Turn live discovery into the next meeting",
    trigger: "a customer call starts",
    backgroundAction: "Opening the notes and updating the working deck",
    problem:
      "The work after a strong call often starts when the meeting ends. Notes need sorting, the deck needs changing, and the next meeting needs a clear purpose.",
    botJob:
      "Meeting Memory follows the approved notes, opens the working deck on its computer, and prepares the customer follow-up while the seller stays in the room.",
    storyboard: [
      {
        when: "Call opens",
        label: "Meeting Memory opens the notes and the working deck.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Customer discovery",
          people: [
            { initials: "YOU", name: "Seller" },
            { initials: "SE", name: "Fortinet SE" },
            { initials: "CT", name: "Customer team" },
          ],
        },
      },
      {
        when: "During discovery",
        label: "It sorts the notes into priorities, questions, and owners.",
        scene: "notes",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Meeting notes", answer: "Priorities captured" },
            { name: "Open deck", answer: "Pages located" },
            { name: "Product library", answer: "Approved story found" },
          ],
          status: "Sources checked",
        },
      },
      {
        when: "Before wrap",
        label: "It updates the last pages and leaves every change in draft.",
        scene: "deck",
        visual: {
          kind: "deck-update",
          eyebrow: "Customer priorities",
          headline: "The room becomes the next meeting",
          product: "Seller review",
          status: "Draft saved",
        },
      },
      {
        when: "Ready for review",
        label: "The finished artifact is waiting before the call ends.",
        scene: "deck",
        slides: DISCOVERY_SLIDES,
      },
    ],
    unlock:
      "The seller leaves the call with a customer-ready draft instead of a list of follow-up work.",
    outcome:
      "One call becomes a focused follow-up deck, ready for the seller to review.",
    clips: [],
    demo: {
      title: "Meeting Memory",
      subtitle: "Live notes to a finished draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "memory",
          name: "Meeting Memory",
          role: "bot",
          persona: "Turns approved meeting notes into the next customer artifact",
          color: "#DA291C",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "memory",
          kind: "routine",
          body: "The customer call started. I opened the notes and the working deck. I will keep every change in draft.",
        },
        {
          id: "m2",
          from: "memory",
          kind: "text",
          body: "I found the customer priorities, the open questions, and the people needed for the next meeting. Updating the final pages now.",
        },
        {
          id: "m3",
          from: "memory",
          kind: "draft",
          draftLabel: "Last pages of the working deck",
          artifact: {
            kind: "slides",
            title: "Customer follow-up",
            cards: DISCOVERY_SLIDES,
          },
        },
        {
          id: "m4",
          from: "memory",
          kind: "draft",
          draftLabel: "Follow-up note",
          artifact: {
            kind: "one-pager",
            title: "Next meeting brief",
            eyebrow: "Seller review",
            sections: [
              {
                heading: "What matters",
                body: "The priorities captured in the approved meeting notes.",
              },
              {
                heading: "What is still open",
                body: "Questions that need an owner or an approved source before the next meeting.",
              },
              {
                heading: "Next action",
                body: "A focused agenda with the right customer and Fortinet participants.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "memory",
          kind: "system",
          body: "Nothing shared. The deck and follow-up note are waiting for your review.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Answer customer questions without the internal chase",
    trigger: "a customer question lands",
    backgroundAction: "Checking approved product and company sources",
    problem:
      "A detailed customer question can start a long search across product notes, security material, email, and internal threads.",
    botJob:
      "Answer Finder opens those approved sources on its computer, keeps a record of where each answer came from, and drafts a reply for the seller.",
    storyboard: [
      {
        when: "Question arrives",
        label: "Answer Finder reads the customer thread and starts the search.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Customer team",
          subject: "Product and security questions",
          questions: 3,
        },
      },
      {
        when: "Sources open",
        label: "It checks each answer against approved material.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Product docs", answer: "Answer located" },
            { name: "Security material", answer: "Language checked" },
            { name: "Internal notes", answer: "Owner confirmed" },
          ],
          status: "Sources checked",
        },
      },
      {
        when: "Draft complete",
        label: "A sourced reply is ready. The seller still decides what sends.",
        scene: "send",
        artifact: {
          kind: "packet",
          title: "Customer answer pack",
          fields: [
            {
              label: "Customer questions",
              value: "Grouped by product, security, and commercial owner.",
            },
            {
              label: "Approved answers",
              value: "Each answer links back to the source the agent checked.",
            },
            {
              label: "Needs a person",
              value: "Any open item is clearly marked instead of guessed.",
            },
            {
              label: "Reply",
              value: "A plain-English draft is waiting for seller review.",
            },
          ],
        },
      },
    ],
    unlock:
      "The seller reviews one sourced answer pack instead of rebuilding the context across several teams.",
    outcome:
      "A customer question becomes a sourced draft with every open item clearly marked.",
    clips: [],
    demo: {
      title: "Answer Finder",
      subtitle: "Customer question to sourced reply",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "answers",
          name: "Answer Finder",
          role: "bot",
          persona: "Checks approved sources and drafts customer-ready answers",
          color: "#9B3B31",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "answers",
          kind: "routine",
          body: "A customer question arrived. I am checking the approved product, security, and company sources now.",
        },
        {
          id: "m2",
          from: "answers",
          kind: "text",
          body: "The supported answers are ready. I marked one item for a human owner instead of filling the gap.",
        },
        {
          id: "m3",
          from: "answers",
          kind: "draft",
          draftLabel: "Answer pack",
          artifact: {
            kind: "packet",
            title: "Customer answer pack",
            fields: [
              {
                label: "Product",
                value: "Checked against the approved product documentation.",
              },
              {
                label: "Security",
                value: "Checked against the current security material.",
              },
              {
                label: "Open item",
                value: "Assigned to a person. No answer was guessed.",
              },
            ],
          },
        },
        {
          id: "m4",
          from: "answers",
          kind: "draft",
          draftLabel: "Customer reply",
          artifact: {
            kind: "gmail",
            title: "Reply draft",
            to: "Customer contact",
            subject: "Answers and next steps",
            body: "Thanks for the questions. I checked the product and security answers against our approved sources. One item still needs the right owner, so I marked it clearly below rather than guessing. Everything else is ready for your review.",
          },
        },
        {
          id: "m5",
          from: "answers",
          kind: "system",
          body: "Nothing sent. The sourced answer pack and reply are waiting for you.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Build the first meeting before the first email",
    trigger: "a target account enters the list",
    backgroundAction: "Researching public signals and preparing outreach",
    problem:
      "A new account is easy to add to a sequence and hard to understand. The seller still needs a reason to reach out, useful evidence, and a message that fits the account.",
    botJob:
      "Account Scout opens public sources on its computer, builds a simple account hypothesis, and prepares a short brief and message. Nothing sends on its own.",
    storyboard: [
      {
        when: "Account added",
        label: "Account Scout opens public sources and starts without a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Target account",
          sources: ["Company site", "Public news", "Open roles"],
          signal: "Timely account signal",
        },
      },
      {
        when: "Evidence checked",
        label: "It turns the research into a clear reason to talk.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why talk", answer: "A relevant problem" },
            { label: "Why now", answer: "A current public signal" },
            { label: "Why this team", answer: "Clear ownership" },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "It prepares the brief and the first message for review.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Account contact",
          channels: ["Account brief", "Email", "Meeting note"],
          status: "Drafts only",
        },
      },
      {
        when: "Ready for review",
        label: "The last frame is the finished account artifact.",
        scene: "send",
        artifact: {
          kind: "one-pager",
          title: "Target account brief",
          eyebrow: "Prepared by Account Scout",
          sections: [
            {
              heading: "Public signal",
              body: "The current fact that makes this account worth a closer look.",
            },
            {
              heading: "Working hypothesis",
              body: "A short reason Fortinet may be relevant, written as a hypothesis rather than a claim.",
            },
            {
              heading: "First meeting",
              body: "The people, open questions, and a useful reason to spend time together.",
            },
          ],
        },
      },
    ],
    unlock:
      "The seller starts with evidence and a point of view, then decides whether the account is worth the outreach.",
    outcome:
      "One target account becomes a reviewable brief and a first message grounded in public evidence.",
    clips: [],
    demo: {
      title: "Account Scout",
      subtitle: "Public research to a first meeting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Account Scout",
          role: "bot",
          persona: "Builds account briefs and first-message drafts from public evidence",
          color: "#C7774B",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "Target account entered the list. I am checking the company site, public news, and open roles. Drafts only.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "I found a current public signal and built a working hypothesis. I kept facts separate from assumptions.",
        },
        {
          id: "m3",
          from: "scout",
          kind: "draft",
          draftLabel: "Research note",
          artifact: {
            kind: "packet",
            title: "Target account research",
            fields: [
              {
                label: "Public signal",
                value: "Source and date captured for seller review.",
              },
              {
                label: "Working hypothesis",
                value: "Written as a question to test, not a fact.",
              },
              {
                label: "Who may care",
                value: "Role and reason based on public information.",
              },
            ],
          },
        },
        {
          id: "m4",
          from: "scout",
          kind: "draft",
          draftLabel: "Account brief",
          artifact: {
            kind: "one-pager",
            title: "Target account brief",
            eyebrow: "Seller review",
            sections: [
              {
                heading: "Why talk",
                body: "A relevant problem tied to a current public signal.",
              },
              {
                heading: "What to learn",
                body: "The questions that would confirm or disprove the hypothesis.",
              },
              {
                heading: "First step",
                body: "A useful meeting request with no broad product pitch.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "scout",
          kind: "system",
          body: "Nothing sent. Research and drafts are waiting for your review.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
