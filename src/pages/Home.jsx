import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './columbus.css'

function TopicButton({ id, open, onToggle, kicker, title, popup = true }) {
  return (
    <h3>
      <button
        type="button"
        className="topic-toggle"
        aria-haspopup={popup ? 'dialog' : undefined}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
      >
        {kicker ? <span className="card-kicker">{kicker}</span> : null}
        <span className="topic-name">{title}</span>
        <span className="topic-mark" aria-hidden="true">{popup || !open ? '+' : '−'}</span>
      </button>
    </h3>
  )
}

function TopicDialog({ id, open, onClose, kicker, title, children }) {
  const dialogRef = useRef(null)
  const closingFromCode = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    const closeFromCode = () => {
      if (!dialog.open) return
      closingFromCode.current = true
      dialog.close()
    }

    if (open && !dialog.open) dialog.showModal()
    if (!open) closeFromCode()

    return closeFromCode
  }, [open])

  return createPortal(
    <div className="columbus">
      <dialog
        ref={dialogRef}
        id={`${id}-panel`}
        className="topic-dialog"
        aria-labelledby={`${id}-title`}
        onClose={() => {
          if (closingFromCode.current) {
            closingFromCode.current = false
            return
          }
          onClose()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <form method="dialog" className="topic-dialog-sheet">
          <button type="submit" className="topic-close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <header className="topic-dialog-head">
            {kicker ? <p className="card-kicker">{kicker}</p> : null}
            <h3 id={`${id}-title`}>{title}</h3>
          </header>
          <div className="topic-dialog-body">{children}</div>
        </form>
      </dialog>
    </div>,
    document.body
  )
}

function Capability({ id, className = '', index, icon, kicker, title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`capability-card ${className}`}>
      <div className="card-index">{index}</div>
      {icon}
      <TopicButton
        id={id}
        open={open}
        onToggle={() => setOpen(true)}
        kicker={kicker}
        title={title}
      />
      <TopicDialog
        id={id}
        open={open}
        onClose={() => setOpen(false)}
        kicker={kicker}
        title={title}
      >
        {children}
      </TopicDialog>
    </article>
  )
}

function ApproachStep({ id, index, title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={open ? 'is-open' : undefined}>
      <span>{index}</span>
      <TopicButton
        id={id}
        open={open}
        popup={false}
        onToggle={() => setOpen((value) => !value)}
        title={title}
      />
      <div id={`${id}-panel`} className="approach-detail" hidden={!open}>
        {children}
      </div>
    </article>
  )
}

function FeaturedPlatform() {
  const [open, setOpen] = useState(false)

  return (
    <section className="featured-platform" id="platform">
      <h2>
        <button
          type="button"
          className="topic-toggle"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="platform-article-panel"
          onClick={() => setOpen(true)}
        >
          <span className="card-kicker">Featured platform</span>
          <span className="topic-name">China–Africa Agricultural &amp; Industrial Finance Platform</span>
          <span className="platform-deck">Bridging the financing gap. Unlocking opportunities between China and Africa.</span>
          <span className="topic-mark" aria-hidden="true">+</span>
        </button>
      </h2>
      <TopicDialog
        id="platform-article"
        open={open}
        onClose={() => setOpen(false)}
        kicker="Featured platform"
        title="China–Africa Agricultural & Industrial Finance Platform"
      >
        <p className="platform-deck">Bridging the financing gap. Unlocking opportunities between China and Africa.</p>
        <figure className="platform-figure">
          <img src="/images/Picture1.jpg" alt="Harvester and tractor working a green field, with the TracTrac mark" />
        </figure>
        <a className="platform-link" href="https://tractrac.co" target="_blank" rel="noopener noreferrer">tractrac.co</a>
        <article className="platform-article">
          <h3>Connecting capital, equipment, and opportunity</h3>
          <p>
            Columbus Capital Advisors Limited, in collaboration with its China-based strategic partner, QF Intelligent Machine Co., Ltd., is developing the China–Africa Agricultural &amp; Industrial Finance Platform to facilitate access to modern agricultural and industrial equipment across Sub-Saharan Africa.
          </p>
          <p>
            The initiative seeks to bridge Africa&apos;s equipment financing gap by connecting Chinese manufacturers and financing institutions with qualified African enterprises through structured financing, institutional partnerships, and credit-risk mitigation solutions.
          </p>
          <p>
            Our objective is to establish a commercially sustainable financing framework that supports agricultural mechanization, agro-processing, industrial productivity, and long-term economic development.
          </p>

          <h3>The opportunity</h3>
          <p>
            Across Africa, limited access to affordable medium-term financing continues to constrain investment in productive equipment, particularly in agriculture and manufacturing.
          </p>
          <p>
            China offers extensive manufacturing capabilities, competitive equipment solutions, and established export financing institutions. Columbus Advisors seeks to connect these resources with Africa&apos;s growing demand through a coordinated cross-border financing platform.
          </p>
          <p>
            By combining international capital, Chinese manufacturing expertise, and local African market intelligence, the platform aims to unlock investment opportunities and strengthen economic cooperation between China and Africa.
          </p>

          <h3>Our financing platform</h3>
          <div className="platform-stats">
            <div>
              <b>$10M</b>
              <span>Target pilot program</span>
              <p>Initial financing objective in Nigeria</p>
            </div>
            <div>
              <b>3–5 years</b>
              <span>Proposed financing tenor</span>
              <p>Medium-term equipment financing</p>
            </div>
          </div>
          <p>
            Columbus Advisors and QF Intelligent are developing an initial US$10 million pilot financing program in Nigeria, with a proposed financing tenor of three to five years.
          </p>
          <p>
            The platform is designed to bring together Chinese equipment suppliers, export financing institutions, African commercial banks, and qualified borrowers within a structured transaction framework.
          </p>
          <p>
            Following successful implementation, the objective is to establish a repeatable financing model capable of supporting expansion into other West African markets.
          </p>
          <p className="platform-note">
            The pilot amount and financing terms are development objectives, subject to institutional credit approval, documentation, and final agreements.
          </p>

          <h3>Institutional engagement &amp; strategic partnerships</h3>
          <p>
            Columbus Advisors and QF Intelligent are pursuing institutional engagement with leading Chinese financial and export credit institutions, including:
          </p>
          <ul className="platform-partners">
            <li>
              <h4>Export-Import Bank of China (China Eximbank)</h4>
              <p>Exploring medium-term export financing structures to support the supply of Chinese agricultural and industrial equipment to qualified African buyers.</p>
            </li>
            <li>
              <h4>Industrial and Commercial Bank of China (ICBC)</h4>
              <p>Pursuing discussions on potential trade finance, local banking coordination, credit assessment, and transaction support.</p>
            </li>
            <li>
              <h4>China Export &amp; Credit Insurance Corporation (Sinosure)</h4>
              <p>Exploring export credit insurance and risk mitigation solutions that could support cross-border equipment financing.</p>
            </li>
            <li>
              <h4>QF Intelligent Machine Co., Ltd. — China strategic partner</h4>
              <p>Coordinating Chinese equipment manufacturers, technical specifications, procurement, export execution, and after-sales support.</p>
            </li>
          </ul>
          <p className="platform-note">
            These engagements form part of the platform&apos;s development strategy. Financing participation, insurance coverage, and banking arrangements remain subject to the respective institutions&apos; review and approval.
          </p>

          <h3>Priority equipment &amp; industries</h3>
          <ul className="platform-equipment">
            <li>
              <img src="/images/Picture2.jpg" alt="Combine harvester and tractor working a grain field" />
              <h4>Agricultural mechanization</h4>
              <p>Tractors, harvesters, planting and farming equipment.</p>
            </li>
            <li>
              <img src="/images/Picture3.jpg" alt="Center-pivot irrigation system watering a green crop" />
              <h4>Irrigation systems</h4>
              <p>Water management and agricultural irrigation equipment.</p>
            </li>
            <li>
              <img src="/images/Picture4.jpg" alt="Workers operating an agro-processing line inside a factory" />
              <h4>Agro-processing</h4>
              <p>Cashew, palm oil, and agricultural value-addition machinery.</p>
            </li>
            <li>
              <img src="/images/Picture5.jpg" alt="Precision industrial machinery on a production line" />
              <h4>Industrial equipment</h4>
              <p>Manufacturing machinery and productive industrial technologies.</p>
            </li>
          </ul>

          <h3>The role of Columbus Advisors</h3>
          <p>
            Columbus Capital Advisors serves as the African-side investment advisory and transaction structuring partner, coordinating the commercial and financial elements required to advance the platform.
          </p>
          <p>
            Our responsibilities include identifying qualified equipment buyers, assessing financing requirements, structuring transactions, engaging African financial institutions, and facilitating cross-border partnerships.
          </p>
          <p>
            Working alongside QF Intelligent, our objective is to develop a scalable financing corridor that aligns Chinese manufacturing and financing capabilities with African enterprise needs.
          </p>

          <h3>Building a sustainable China–Africa financing corridor</h3>
          <p>
            The platform represents Columbus Advisors&apos; broader commitment to facilitating productive capital flows, technology transfer, and industrial development across Africa.
          </p>
          <p>
            Beginning with Nigeria, our long-term vision is to develop a scalable financing framework that enables African businesses to modernize operations, increase productivity, strengthen value chains, and participate more competitively in regional and global markets.
          </p>
        </article>
      </TopicDialog>
    </section>
  )
}

function Sector({ id, index, title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <article>
      <span>{index}</span>
      <div>
        <TopicButton
          id={id}
          open={open}
          onToggle={() => setOpen(true)}
          title={title}
        />
        <TopicDialog
          id={id}
          open={open}
          onClose={() => setOpen(false)}
          title={title}
        >
          {children}
        </TopicDialog>
      </div>
    </article>
  )
}

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
          <a href="#platform">Featured Platform</a>
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
          <Capability
            id="capital"
            className="feature-card"
            index="01"
            kicker="Finance the opportunity"
            title={<>Capital Raising &amp;<br />Transaction Advisory</>}
            icon={<div className="card-symbol capital-symbol" aria-hidden="true"><span /><span /><span /></div>}
          >
              <p>
                Columbus Advisors helps businesses, project sponsors, and institutional partners prepare for and navigate complex capital-raising transactions across African and international markets.
              </p>
              <p>
                We assess capital requirements, strengthen investment propositions, develop appropriate funding strategies, and coordinate engagement with banks, development finance institutions, private equity firms, family offices, strategic investors, and other capital providers.
              </p>
              <p className="list-label">Our support may include</p>
              <ul>
                <li>Capital requirements and transaction-readiness assessment</li>
                <li>Debt, equity, blended-finance, and structured-finance strategies</li>
                <li>Financial models, investment memoranda, and lender presentations</li>
                <li>Identification and engagement of suitable funding partners</li>
                <li>Transaction coordination, due diligence, and negotiation support</li>
                <li>Capital-stack design and financial-close planning</li>
              </ul>
              <p className="card-note">
                Where regulated securities, placement, or underwriting services are required, Columbus works alongside appropriately licensed financial institutions and professional advisers.
              </p>
          </Capability>

          <Capability
            id="market"
            index="02"
            kicker="Enter with clarity"
            title={<>Market Entry<br />&amp; Growth Strategy</>}
            icon={<div className="mini-icon compass" aria-hidden="true"><i /></div>}
          >
              <p>
                Columbus Advisors supports international companies seeking to enter, establish, or expand their operations in African markets.
              </p>
              <p>
                We combine local market intelligence, commercial analysis, institutional relationships, and execution support to help clients understand the operating environment, identify viable opportunities, and select an appropriate market-entry strategy.
              </p>
              <p className="list-label">Our services include</p>
              <ul>
                <li>Market assessment and opportunity identification</li>
                <li>Regulatory and competitive landscape analysis</li>
                <li>Entry-mode and localization strategy</li>
                <li>Customer, distributor, and channel development</li>
                <li>Local partner identification and assessment</li>
                <li>Government and institutional stakeholder engagement</li>
                <li>Business-development and expansion planning</li>
                <li>Market-entry risk assessment and implementation roadmaps</li>
              </ul>
              <p className="card-note">
                Our objective is to help clients move from market interest to a practical, locally informed, and commercially sustainable growth strategy.
              </p>
          </Capability>

          <Capability
            id="partnerships"
            index="03"
            kicker="Align the right parties"
            title={<>Strategic Partnerships<br />&amp; Deal Origination</>}
            icon={<div className="mini-icon links" aria-hidden="true"><i /><i /></div>}
          >
              <p>
                Columbus Advisors connects credible international partners, African enterprises, project sponsors, investors, and public-sector institutions around clearly defined commercial opportunities.
              </p>
              <p>
                We originate and evaluate opportunities, identify complementary partners, and help establish structures that align responsibilities, economics, risk, and long-term objectives.
              </p>
              <p className="list-label">Our work includes</p>
              <ul>
                <li>Proprietary opportunity and transaction origination</li>
                <li>Strategic and technical partner identification</li>
                <li>Joint venture and consortium development</li>
                <li>Manufacturer, distributor, and local operator partnerships</li>
                <li>Investor and project-sponsor introductions</li>
                <li>Preliminary commercial and counterparty assessment</li>
                <li>Partnership frameworks and term-sheet support</li>
                <li>Cross-border negotiation and stakeholder coordination</li>
              </ul>
              <p className="card-note">
                We focus on building partnerships with a credible commercial rationale—not simply making introductions.
              </p>
          </Capability>

          <Capability
            id="projects"
            className="dark-card"
            index="04"
            kicker="Build for execution"
            title={<>Project Structuring<br />&amp; Execution Support</>}
            icon={<div className="mini-icon structure" aria-hidden="true"><i /><i /><i /></div>}
          >
              <p>
                Columbus Advisors helps transform promising opportunities into structured, financeable, and executable projects.
              </p>
              <p>
                We work with sponsors and stakeholders to define the project structure, allocate responsibilities and risks, establish an implementation roadmap, and coordinate the financial, commercial, technical, and institutional workstreams required to advance a transaction.
              </p>
              <p className="list-label">Our services may include</p>
              <ul>
                <li>Project and transaction-readiness assessment</li>
                <li>Special-purpose vehicle and joint-venture structuring</li>
                <li>Public-private partnership support</li>
                <li>Sources-and-uses and capital-stack development</li>
                <li>Risk-allocation and credit-enhancement strategies</li>
                <li>Project financial modelling and scenario analysis</li>
                <li>Due-diligence coordination and data-room preparation</li>
                <li>Lender, investor, technical adviser, and government coordination</li>
                <li>Negotiation support and financial-close planning</li>
                <li>Post-closing implementation and governance frameworks</li>
              </ul>
              <p className="card-note">
                Our role is to maintain transaction discipline, align the parties, and help move projects from concept through financing and execution.
              </p>
          </Capability>
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
            <Sector id="digital" index="01" title="Digital Infrastructure & Cybersecurity">
                <p>
                  Columbus Advisors supports investments and strategic partnerships in the digital systems required for Africa’s economic growth and institutional resilience.
                </p>
                <p>
                  Our focus includes data infrastructure, cloud and high-performance computing, artificial intelligence, enterprise technology, cybersecurity, digital identity, security operations centres, and workforce development.
                </p>
                <p>
                  We help international technology companies and African partners develop market-entry strategies, identify qualified local operators, establish distribution and implementation channels, structure joint ventures, and engage enterprise and government customers.
                </p>
                <p className="list-label">Areas of focus</p>
                <ul>
                  <li>Data centres, cloud infrastructure, and advanced computing</li>
                  <li>Artificial intelligence and digital transformation</li>
                  <li>Enterprise and public-sector cybersecurity</li>
                  <li>Security operations centres and managed security services</li>
                  <li>Data sovereignty and regulatory compliance</li>
                  <li>Technology localization and skills development</li>
                  <li>Strategic partnerships, distribution, and market expansion</li>
                </ul>
            </Sector>
            <Sector id="industrial" index="02" title="Industrial, Mining & Manufacturing">
                <p>
                  Columbus Advisors supports industrial projects that convert Africa’s natural resources, agricultural production, and growing consumer markets into higher-value domestic and export-oriented products.
                </p>
                <p>
                  We work with project sponsors, equipment manufacturers, technical partners, investors, and public institutions to develop commercially viable mining, mineral-processing, manufacturing, and industrial-equipment opportunities.
                </p>
                <p className="list-label">Areas of interest</p>
                <ul>
                  <li>Mining and mineral beneficiation</li>
                  <li>Silica processing and glass manufacturing</li>
                  <li>Agricultural and food-processing equipment</li>
                  <li>Light and advanced manufacturing</li>
                  <li>Industrial machinery and production systems</li>
                  <li>Equipment sourcing and structured equipment finance</li>
                  <li>Export-oriented manufacturing</li>
                  <li>Technology transfer and local production partnerships</li>
                  <li>Industrial parks and special economic zones</li>
                </ul>
                <p className="card-note">
                  Our approach emphasizes value addition, local employment, technology transfer, export development, and responsible project execution.
                </p>
            </Sector>
            <Sector id="infrastructure" index="03" title="Infrastructure & Real Assets">
                <p>
                  Columbus Advisors advises on infrastructure and real-asset opportunities that support economic productivity, urban development, and essential services.
                </p>
                <p>
                  We help sponsors evaluate project feasibility, establish suitable ownership and financing structures, engage capital providers, and coordinate transactions involving public and private stakeholders.
                </p>
                <p className="list-label">Areas of focus</p>
                <ul>
                  <li>Commercial and mixed-use real estate</li>
                  <li>Healthcare and education infrastructure</li>
                  <li>Logistics, warehousing, and industrial facilities</li>
                  <li>Energy and utility-related assets</li>
                  <li>Hospitality and urban-development projects</li>
                  <li>Public-private partnerships</li>
                  <li>Property-owning and operating-company structures</li>
                  <li>Project finance, credit enhancement, and blended capital</li>
                </ul>
                <p className="card-note">
                  We focus on projects supported by identifiable demand, credible sponsors, appropriate risk allocation, and realistic pathways to financial close.
                </p>
            </Sector>
            <Sector id="financial" index="04" title="Financial Services & Diaspora Capital">
                <p>
                  Columbus Advisors develops partnerships and investment pathways that connect African financial opportunities with institutional, international, and diaspora capital.
                </p>
                <p>
                  We work with asset managers, banks, investment firms, fintech companies, and other regulated institutions to evaluate market opportunities, develop suitable investment structures, and establish credible local operating and distribution partnerships.
                </p>
                <p className="list-label">Areas of focus</p>
                <ul>
                  <li>Diaspora investment and savings products</li>
                  <li>Institutional and pension-market strategies</li>
                  <li>Feeder funds and locally compliant investment vehicles</li>
                  <li>Private credit and fixed-income opportunities</li>
                  <li>SME and equipment-finance platforms</li>
                  <li>Fintech and financial-market infrastructure</li>
                  <li>Cross-border investment partnerships</li>
                  <li>Local asset-management and distribution arrangements</li>
                  <li>Financial inclusion and development-oriented capital</li>
                </ul>
                <p className="card-note">
                  Our objective is to create transparent, institutionally credible channels through which capital can participate in Africa’s long-term growth. All regulated investment activities are undertaken through appropriately licensed institutions and professional partners.
                </p>
            </Sector>
          </div>
        </div>

        <FeaturedPlatform />

        <div className="approach-panel" id="approach">
          <div className="approach-heading">
            <p className="eyebrow">How we work</p>
            <h2>A practical path from<br />idea to execution.</h2>
          </div>
          <div className="approach-steps">
            <ApproachStep id="define" index="01" title="Define & Validate">
              <p>
                We begin by understanding the opportunity, the problem it addresses, and the commercial or development outcome it is expected to achieve.
              </p>
              <p>
                We evaluate the market, sponsor capability, customer demand, financial assumptions, regulatory environment, and key risks to determine whether the opportunity is viable and what must be strengthened.
              </p>
              <p className="list-label">The outcome</p>
              <p>
                A clearly defined opportunity, supported by credible assumptions and a practical path forward.
              </p>
            </ApproachStep>
            <ApproachStep id="structure" index="02" title="Structure & Align">
              <p>
                Once the opportunity is validated, we develop the appropriate commercial, financial, and partnership structure.
              </p>
              <p>
                We clarify the roles of sponsors, investors, lenders, technical partners, government institutions, and other stakeholders. We also help establish the transaction structure, risk allocation, capital requirements, implementation plan, and governance framework.
              </p>
              <p className="list-label">The outcome</p>
              <p>
                A bankable structure with aligned stakeholders, defined responsibilities, and clear transaction economics.
              </p>
            </ApproachStep>
            <ApproachStep id="capitalize" index="03" title="Capitalize & Execute">
              <p>
                We prepare the opportunity for engagement with suitable banks, investors, development finance institutions, strategic partners, and other capital providers.
              </p>
              <p>
                Columbus Advisors coordinates presentations, due diligence, negotiations, documentation, and closing activities while helping the parties maintain momentum through implementation.
              </p>
              <p className="list-label">The outcome</p>
              <p>
                Capital and partners are brought together around an executable plan—moving the opportunity from concept to financial close and implementation.
              </p>
            </ApproachStep>
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
