import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/fortinet-watercolor-header.png"
          alt=""
        />
        <SiteNav />
        <div className="hero-paper-shell">
          <section className="hero-paper">
            <HeroTelemetry />
            <div>
              <p className="eyebrow">A persistent agent fleet for Fortinet GTM</p>
              <h1>Work keeps moving after the customer call ends.</h1>
              <p className="hero-intro">
                Grok Bot watches the tools your sellers already use, gives each
                agent its own computer, and returns finished drafts for review.
                A call, email, or target account can start the work.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="report">
        <div className="report-hero">
          <section className="usecase-framing">
            <p className="eyebrow">Three working examples</p>
            <h2>
              An always-on agent fleet for the work around every Fortinet
              seller.
            </h2>
            <p>
              These are examples of what Grok Bot could do, not claims about
              current Fortinet workflows.
            </p>
          </section>

          <RosterChart />

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="report">
        <CompareTable />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Fortinet × SpaceXAI</p>
          <p>Grok Bot for Fortinet GTM</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor account executive</p>
          <strong>Mike Kelly</strong>
          <a href="mailto:michael.kelly@cursor.com">
            michael.kelly@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
