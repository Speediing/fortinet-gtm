import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Fortinet seller",
    blurb: "The seller sets the direction and approves anything that leaves the workspace.",
    color: "#F1E9DD",
    mark: "YOU",
    seat: true,
  },
  {
    id: "room",
    name: "Meeting Memory",
    blurb: "Opens the call notes and deck, then turns the room into the next artifact.",
    jobId: "standardize-room",
    color: "#DA291C",
  },
  {
    id: "answers",
    name: "Answer Finder",
    blurb: "Checks approved product and company sources before it drafts a customer reply.",
    jobId: "legal-redlines",
    color: "#9B3B31",
  },
  {
    id: "research",
    name: "Account Scout",
    blurb: "Reads public account signals and builds a short, reviewable outreach pack.",
    jobId: "attach-engine",
    color: "#C7774B",
  },
];
