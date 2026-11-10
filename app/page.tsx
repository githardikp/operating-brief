import { Masthead } from "@/components/Masthead";
import { site } from "@/content/site";
import { formatPostDate, postsByDate } from "@/content/writing";
import { headshotSrc } from "@/lib/headshot";

export default function Page() {
  const portrait = headshotSrc();
  const writing = postsByDate();
  const contactNum = writing.length > 0 ? "04" : "03";

  return (
    <>
      <a className="skip" href="#thesis">
        Skip to the article
      </a>
      <Masthead />
      <main className="sheet">
        <header className="opener" id="thesis">
          <div className={portrait ? "opener-top has-portrait" : "opener-top"}>
            <div>
              <p className="eyebrow">Founder&apos;s Office, GTM at Finifi</p>
              <h1>I sell to the people who run the company.</h1>
              <p className="deck">
                Cold calls, demos, and the close, with CXOs and business leaders across functions (delivery, IT, sales and more).
              </p>
            </div>
            {portrait ? (
              <figure className="portrait">
                <img src={portrait} alt={site.headshotAlt} width={240} height={300} />
              </figure>
            ) : null}
          </div>
          <p className="byline">
            <span>Hardik Pandey</span>
            <span>Bangalore</span>
            <span>2026</span>
          </p>
        </header>

        <figure className="lead">
          <img
            src="/lead.png"
            alt="A hand-drawn note that reads Get the meeting, beside a brief with a red file tab. The brief reads Call, Scope it, Demo, Close. A pencil lies across the page."
            width={842}
            height={646}
          />
          <figcaption>From the first call to the close.</figcaption>
        </figure>

        <div className="prose">
          <p className="standfirst">
            Most recently, <mark>Founder&apos;s Office, GTM</mark> at <mark>Finifi</mark>, November 2026 to present. Before that, the same office at a <mark>stealth startup</mark>, April 2025 to October 2026, and cybersecurity at <mark>Accenture</mark>.
          </p>

          <section className="section" id="work">
            <header className="section-head">
              <p className="section-num">01</p>
              <div>
                <h2>Selected work</h2>
                <p className="deck">Finifi, November 2026 to present. A stealth startup before that.</p>
              </div>
            </header>

            <article className="entry">
              <p className="meta">Finifi · Nov 2026 – present</p>
              <h3>Selling to CXOs and business leaders across functions.</h3>
              <p>
                In the Founder&apos;s Office, on GTM. The pipeline runs from cold outreach to the demo to the close.{" "}
                <a href={site.finifi} rel="noopener noreferrer">
                  Finifi
                </a>{" "}
                is an operations-AI platform for enterprise finance teams: order-to-cash, procure-to-pay, and reconciliation.
              </p>
            </article>

            <p className="era">Stealth startup · Apr 2025 – Oct 2026</p>

            <article className="entry">
              <p className="meta">People</p>
              <h3>Built consultant onboarding from a blank page.</h3>
              <p>
                Designed the flow end to end, including training with internal trainers. Onboarded 40+ consultants, and sourced 20+ of them through cold outreach, referrals, and direct messages.
              </p>
              <ul className="proof">
                <li>40+ consultants onboarded</li>
                <li>20+ sourced into the process</li>
              </ul>
            </article>

            <article className="entry">
              <p className="meta">Product</p>
              <h3>Wrote the product down, then cut the MVP.</h3>
              <p>
                Authored three PRDs and the implementation plans for the core flows. After reading four competitors, defined an MVP of 20+ features and the platform&apos;s USP.
              </p>
              <ul className="proof">
                <li>3 PRDs</li>
                <li>20+ core features</li>
                <li>4 competitors read</li>
              </ul>
            </article>

            <article className="entry">
              <p className="meta">Capital</p>
              <h3>Kept the investor story steady through a close.</h3>
              <p>
                Created and revised three pitch decks. Pitched two investors directly, kept the progress updates consistent, and contributed to the close of the round.
              </p>
              <ul className="proof">
                <li>3 decks</li>
                <li>2 investors pitched directly</li>
                <li>Contributed to the close</li>
              </ul>
            </article>

            <article className="entry">
              <p className="meta">Launch</p>
              <h3>Launched on both app stores and ran what came next.</h3>
              <p>
                Managed release on Google Play and the App Store, including compliance and financial setup. Resolved 50+ complaints, took feedback from 10+ users, and kept contractors and vendors on schedule. Set up AI workflows with design and development partners, and wrote social scripts with marketing and UGC creators.
              </p>
              <ul className="proof">
                <li>Both app stores</li>
                <li>50+ complaints resolved</li>
                <li>10+ users heard</li>
              </ul>
            </article>
          </section>

          <section className="section" id="record">
            <header className="section-head">
              <p className="section-num">02</p>
              <div>
                <h2>Earlier record</h2>
                <p className="deck">Accenture, then the degree and the paper.</p>
              </div>
            </header>

            <article className="entry">
              <p className="meta when">Aug 2024 – Mar 2025</p>
              <h3>Cybersecurity Associate, Accenture</h3>
              <p>
                Security analysis on production code for a <mark>Global 100</mark> client. Reverse engineered applications to flag malware, on a program meant to protect a user base in the millions.
              </p>
            </article>

            <article className="entry">
              <p className="meta when">Mar 2024 – Jun 2024</p>
              <h3>Associate Trainee, Accenture</h3>
              <p>Trained in application security: dynamic and static testing, the OWASP Top 10, Burp Suite, and OWASP ZAP.</p>
            </article>

            <article className="entry">
              <p className="meta">2020 – 2024</p>
              <h3>B.Tech, Information Technology</h3>
              <p>Shri Ramdeobaba College of Engineering &amp; Management, Nagpur.</p>
            </article>

            <article className="entry">
              <p className="meta">2024</p>
              <h3>Resume Parser and Job Recommendation System using Machine Learning</h3>
              <p>Co-author, with Ashish Virendra Chandak, Gourav Rushiya, and Harsh Sharma. ESIC, IEEE.</p>
              <p>
                <a href="https://ieeexplore.ieee.org/document/10481635" rel="noopener noreferrer">
                  IEEE Xplore
                </a>
              </p>
            </article>
          </section>

          {writing.length > 0 ? (
            <section className="section" id="writing">
              <header className="section-head">
                <p className="section-num">03</p>
                <div>
                  <h2>Writing</h2>
                  <p className="deck">Notes on business, enterprise GTM, and how companies buy.</p>
                </div>
              </header>
              <ul className="writing">
                {writing.map((post) => (
                  <li key={post.url}>
                    <a href={post.url} rel="noopener noreferrer">
                      {post.title}
                    </a>
                    <p className="meta">
                      {post.platform} · {formatPostDate(post.date)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <p className="quiet">
              The writing is on{" "}
              <a href={site.x} rel="noopener noreferrer">
                X
              </a>{" "}
              and{" "}
              <a href={site.linkedin} rel="noopener noreferrer">
                LinkedIn
              </a>
              .
            </p>
          )}

          <section className="section" id="contact">
            <header className="section-head">
              <p className="section-num">{contactNum}</p>
              <div>
                <h2>Write to me</h2>
                <p className="deck">
                  On selling to CXOs and business leaders across functions, operating at an early company, or a note worth a reply.
                </p>
              </div>
            </header>
            <p className="email-wrap">
              <a className="email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <ul className="contact-links">
              <li>
                <a href={site.linkedin} rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.x} rel="noopener noreferrer">
                  X
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href="/Hardik-Pandey-Resume.pdf" download>
                  Resume PDF
                </a>
              </li>
            </ul>
            <p className="place">Bangalore, Karnataka, India</p>
          </section>

          <footer className="colophon">
            <p>End of brief</p>
            <p>Hardik Pandey · Bangalore · 2026</p>
          </footer>
        </div>
      </main>
    </>
  );
}
