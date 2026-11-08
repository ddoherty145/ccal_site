import './columbus.css'

function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d={diagonal ? 'M5 15 15 5M7 5h8v8' : 'M4 10h12m-4-4 4 4-4 4'} />
    </svg>
  )
}

function Brand({ className = 'brand', href = '#top', label = 'Columbus Advisors home' }) {
  return (
    <a className={className} href={href} aria-label={label}>
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-copy">
        <b>Columbus</b>
        <span>Advisors</span>
      </span>
    </a>
  )
}

export default function Home() {
  return (
    <main className="columbus">
      <header className="site-header">
        <Brand />
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#sectors">Sectors</a>
          <a href="#approach">How we work</a>
        </nav>
        <a className="header-cta" href="#contact">
          Start a conversation <Arrow diagonal />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow light">Cross-border capital · Africa market entry</p>
          <h1>
            Capital meets
            <span>opportunity.</span>
          </h1>
          <p className="hero-deck">
            We help investors, enterprises, and project sponsors turn complex
            African market opportunities into financeable, executable transactions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#capabilities">
              Explore our capabilities <Arrow />
            </a>
            <a className="text-link" href="#contact">
              Discuss an opportunity <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="globe-core">
            <span className="africa-shape">CA</span>
          </div>
          <div className="location-tag lagos"><i />Lagos</div>
          <div className="location-tag seoul"><i />Seoul</div>
          <div className="location-tag london"><i />London</div>
          <div className="location-tag california"><i />California</div>
        </div>

        <div className="hero-proof">
          <div>
            <span>01</span>
            <p>Capital strategy<br />&amp; fundraising</p>
          </div>
          <div>
            <span>02</span>
            <p>Market entry<br />&amp; origination</p>
          </div>
          <div>
            <span>03</span>
            <p>Partnerships<br />&amp; execution</p>
          </div>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>From market potential<br />to investable reality.</h2>
          </div>
          <p>
            Columbus Advisors works across the transaction lifecycle—bringing
            the local intelligence, financial discipline, and cross-border
            relationships needed to move an opportunity forward.
          </p>
        </div>

        <div className="capability-grid">
          <article className="capability-card feature-card">
            <div className="card-index">01</div>
            <div className="card-symbol capital-symbol" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div>
              <p className="card-kicker">Finance the opportunity</p>
              <h3>Capital Raising &amp;<br />Transaction Advisory</h3>
              <p>
                We shape capital strategies, develop investor-ready narratives,
                and coordinate targeted fundraising processes across debt,
                equity, blended finance, and strategic capital.
              </p>
            </div>
            <ul>
              <li>Capital stack design</li>
              <li>Investor materials &amp; diligence</li>
              <li>Investor targeting &amp; introductions</li>
            </ul>
          </article>

          <article className="capability-card">
            <div className="card-index">02</div>
            <div className="mini-icon compass" aria-hidden="true"><i /></div>
            <div>
              <p className="card-kicker">Enter with clarity</p>
              <h3>Market Entry<br />&amp; Growth Strategy</h3>
              <p>
                We translate market ambition into a practical entry plan—grounded
                in commercial realities, stakeholder dynamics, and the right
                local operating model.
              </p>
            </div>
            <ul>
              <li>Market intelligence &amp; validation</li>
              <li>Partner and channel strategy</li>
              <li>Regulatory &amp; stakeholder mapping</li>
            </ul>
          </article>

          <article className="capability-card">
            <div className="card-index">03</div>
            <div className="mini-icon links" aria-hidden="true"><i /><i /></div>
            <div>
              <p className="card-kicker">Align the right parties</p>
              <h3>Strategic Partnerships<br />&amp; Deal Origination</h3>
              <p>
                We originate and qualify opportunities, connect complementary
                partners, and define commercial frameworks built for long-term
                value creation.
              </p>
            </div>
            <ul>
              <li>Opportunity sourcing</li>
              <li>Partner identification &amp; alignment</li>
              <li>Commercial model development</li>
            </ul>
          </article>

          <article className="capability-card dark-card">
            <div className="card-index">04</div>
            <div className="mini-icon structure" aria-hidden="true"><i /><i /><i /></div>
            <div>
              <p className="card-kicker">Build for execution</p>
              <h3>Project Structuring<br />&amp; Execution Support</h3>
              <p>
                We help convert early-stage concepts into credible transactions
                with clear roles, commercial logic, milestones, and routes to
                financing.
              </p>
            </div>
            <ul>
              <li>Export finance &amp; offtake strategy</li>
              <li>PPP and joint-venture frameworks</li>
              <li>Transaction PMO &amp; coordination</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="platform-section" id="sectors">
        <div className="sector-panel">
          <div className="sector-intro">
            <p className="eyebrow light">Where we focus</p>
            <h2>Selected sectors.<br /><em>Connected opportunity.</em></h2>
            <p>
              We concentrate on areas where cross-border capital, technology,
              and operating partnerships can unlock measurable growth in Africa.
            </p>
          </div>
          <div className="sector-list">
            <div><span>01</span><h3>Digital Infrastructure<br />&amp; Cybersecurity</h3><p>Enterprise technology · Data infrastructure · Digital trust</p></div>
            <div><span>02</span><h3>Industrials, Mining<br />&amp; Manufacturing</h3><p>Value addition · Processing · Export industries</p></div>
            <div><span>03</span><h3>Agriculture<br />&amp; Equipment</h3><p>Mechanization · Food systems · Export finance</p></div>
            <div><span>04</span><h3>Infrastructure<br />&amp; Real Assets</h3><p>Real estate · Utilities · Public-private projects</p></div>
            <div><span>05</span><h3>Financial Services<br />&amp; Diaspora Capital</h3><p>Investment products · Wealth solutions · Market access</p></div>
          </div>
        </div>

        <div className="approach-panel" id="approach">
          <div className="approach-heading">
            <p className="eyebrow">How we work</p>
            <h2>A practical path from<br />idea to execution.</h2>
          </div>
          <div className="approach-steps">
            <article><span>01</span><h3>Define &amp; validate</h3><p>Clarify the thesis, assess the market, and establish what must be true for the opportunity to succeed.</p></article>
            <article><span>02</span><h3>Structure &amp; align</h3><p>Shape the commercial model, partner roles, transaction roadmap, and financing requirements.</p></article>
            <article><span>03</span><h3>Capitalize &amp; execute</h3><p>Prepare the opportunity for capital, engage relevant parties, and coordinate momentum through closing.</p></article>
          </div>
        </div>

        <div className="contact-panel" id="contact">
          <div className="contact-lead">
            <p className="eyebrow light">Start a conversation</p>
            <h2>Let&apos;s build the bridge<br />to what&apos;s next.</h2>
          </div>
          <div className="contact-pathways">
            <a href="mailto:info@columbusadvisorsltd.com?subject=Investor%20inquiry">
              <span>For investors</span>
              <h3>Explore curated cross-border opportunities and strategic co-investment pathways.</h3>
              <b>Connect with our team <Arrow diagonal /></b>
            </a>
            <a href="mailto:info@columbusadvisorsltd.com?subject=Strategic%20partnership%20inquiry">
              <span>For companies &amp; project sponsors</span>
              <h3>Discuss market entry, capital strategy, or a transaction requiring the right partners.</h3>
              <b>Share an opportunity <Arrow diagonal /></b>
            </a>
          </div>
          <p className="contact-note">Draft contact: info@columbusadvisorsltd.com · Confirm before public launch</p>
        </div>

        <footer>
          <Brand className="brand footer-brand" label="Back to top" />
          <p>Cross-border capital. Market insight. Africa opportunity.</p>
          <div><span>© 2026 Columbus Advisors Ltd.</span><a href="#top">Back to top ↑</a></div>
        </footer>
      </section>
    </main>
  )
}
