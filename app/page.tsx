import { Masthead } from "@/components/Masthead";

export default function Page() {
  return (
    <>
      <a className="skip" href="#thesis">
        Skip to the article
      </a>
      <Masthead />
      <main className="sheet">
        <header className="opener" id="thesis">
          <p className="eyebrow">Open to Founder&apos;s Office, Chief of Staff, and strategy consulting</p>
          <h1>I turn a founder&apos;s intent into work the company can run.</h1>
          <p className="deck">
            Product scope, investor materials, hiring, vendors, and launch. Written down, assigned, and finished.
          </p>
          <p className="byline">
            <span>Hardik Pandey</span>
            <span>Bangalore</span>
            <span>2025 – 2026</span>
          </p>
        </header>

        <figure className="lead">
          <img
            src="/lead.png"
            alt="A hand-drawn note that reads Get this running, beside a brief with a red file tab. The brief reads Hire, Scope it, Pitch, Ship. A pencil lies across the page."
            width={842}
            height={659}
          />
          <figcaption>From a note to a brief.</figcaption>
        </figure>

        <div className="prose">
          <p className="standfirst">
            Most recently, <mark>Founder&apos;s Office</mark> at a <mark>stealth startup</mark>, April 2025 to October 2026. Before that, cybersecurity at <mark>Accenture</mark>. Special projects and business operations are the same profile.
          </p>

          <section className="section" id="work">
            <header className="section-head">
              <p className="section-num">01</p>
              <div>
                <h2>Selected work</h2>
                <p className="deck">Stealth startup, April 2025 to October 2026.</p>
              </div>
            </header>

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
              <p>
                Trained in application security: dynamic and static testing, the OWASP Top 10, Burp Suite, and OWASP ZAP.
              </p>
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

          <section className="section" id="contact">
            <header className="section-head">
              <p className="section-num">03</p>
              <div>
                <h2>Write to me</h2>
                <p className="deck">Founder&apos;s Office, Chief of Staff, strategy consulting, or special projects.</p>
              </div>
            </header>
            <p className="email-wrap">
              <a className="email" href="mailto:hardikp1351@gmail.com">
                hardikp1351@gmail.com
              </a>
            </p>
            <ul className="contact-links">
              <li>
                <a href="https://www.linkedin.com/in/hardik-pandey-622621213" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="tel:+919028408407">+91 90284 08407</a>
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
