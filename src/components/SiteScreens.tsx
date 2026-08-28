import type { Artifact, DemoMessage, SlideCard } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { DISCOVERY_SLIDES } from "@/data/jobs";
import { HeardSlide } from "./HeardSlide";

function asSlides(artifact?: Artifact) {
  return artifact?.kind === "slides" ? artifact : null;
}

function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}

function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}

function asPacket(artifact?: Artifact) {
  return artifact?.kind === "packet" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  switch (beat.site) {
    case "granola":
      return <NotesScreen account={account} />;
    case "figma":
      return <DeckScreen account={account} artifact={artifact} />;
    case "gmail":
      return (
        <MailScreen
          account={account}
          artifact={asGmail(artifact)}
          sent={sent}
        />
      );
    case "gdoc":
      return (
        <DocsScreen
          account={account}
          onePager={asOnePager(artifact)}
          packet={asPacket(artifact)}
        />
      );
    case "research":
      return <ResearchScreen account={account} />;
    case "page":
      return <PageScreen account={account} onePager={asOnePager(artifact)} />;
    default: {
      const exhaustiveSite: never = beat.site;
      return exhaustiveSite;
    }
  }
}

function NotesScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Meeting notes</strong>
        <span>Live</span>
      </header>
      <p className="site-time">{account} discovery</p>
      <ul>
        <li>
          <span>Now</span> Capture the customer priorities in their language.
        </li>
        <li>
          <span>Now</span> Separate confirmed facts from open questions.
        </li>
        <li>
          <span>Next</span> Match each follow-up item to an owner.
        </li>
        <li>
          <span>Next</span> Update only the pages this room needs.
        </li>
      </ul>
    </div>
  );
}

function DeckScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  const slides = asSlides(artifact);
  const cards: SlideCard[] = slides?.cards ?? DISCOVERY_SLIDES;

  return (
    <div className="site site-figma">
      <header>
        <span className="figma-logo">F</span>
        <strong>{slides?.title || `${account} follow-up`}</strong>
        <em>Draft</em>
      </header>
      <div className="figma-board">
        <HeardSlide slides={cards} size="sm" />
      </div>
    </div>
  );
}

function MailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Mail</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} contact`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || "Product and security questions"}
      </p>
      <div>
        {artifact?.body ||
          "The customer thread is open. Answers will be checked against approved sources before a reply is drafted."}
      </div>
    </div>
  );
}

function DocsScreen({
  account,
  onePager,
  packet,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
  packet: ReturnType<typeof asPacket>;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>{packet?.title || onePager?.title || `${account} brief`}</span>
      </header>
      <article>
        {packet
          ? packet.fields.map((field) => (
              <p key={field.label}>
                <b>{field.label}.</b> {field.value}
              </p>
            ))
          : onePager
            ? onePager.sections.map((section) => (
                <p key={section.heading}>
                  <b>{section.heading}.</b> {section.body}
                </p>
              ))
            : (
              <p>Building a reviewable brief for {account}.</p>
            )}
      </article>
    </div>
  );
}

function ResearchScreen({ account }: { account: string }) {
  return (
    <div className="site site-research">
      <header>
        <strong>{account}</strong>
        <span>Public sources only</span>
      </header>
      <p className="site-time">Facts stay separate from the working hypothesis.</p>
      <ul>
        <li>
          <span>Company</span> Official site and public product pages.
        </li>
        <li>
          <span>News</span> Current announcements with source and date.
        </li>
        <li>
          <span>Roles</span> Open positions that may show a current priority.
        </li>
        <li>
          <span>People</span> Public role information, with no guessed details.
        </li>
      </ul>
    </div>
  );
}

function PageScreen({
  account,
  onePager,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
}) {
  return (
    <div className="site site-page">
      <header>
        <strong>Account brief</strong>
        <em>Not live</em>
      </header>
      <h4>{onePager?.title || `${account} brief`}</h4>
      {onePager ? (
        onePager.sections.map((section) => (
          <p key={section.heading}>
            <b>{section.heading}.</b> {section.body}
          </p>
        ))
      ) : (
        <p>
          Public signal, working hypothesis, open questions, and a useful first
          meeting.
        </p>
      )}
    </div>
  );
}
