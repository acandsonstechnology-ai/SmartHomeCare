import React from 'react'

function About() {
  return (
    <div>
        <section className="section" id="features">
  <div className="container">
    <div className="section__head" data-reveal="">
      <h2 className="section__title">Designed for trust, built for speed</h2>
      <p className="section__subtitle">
        A transparent home-care ecosystem with real-time discovery, accountable
        service delivery, and structured patient updates.
      </p>
    </div>
    <div className="grid grid--3">
      <article className="card" data-reveal="">
        <div className="card__icon" aria-hidden="true">
          🗺️
        </div>
        <h3 className="card__title">Nearby caregiver discovery</h3>
        <p className="card__text">
          Find professionals around you using map-based availability and smart
          matching.
        </p>
        <div className="card__meta">
          <span className="tag">Real-time</span>
          <span className="tag">Location-aware</span>
        </div>
      </article>
      <article className="card" data-reveal="">
        <div className="card__icon" aria-hidden="true">
          🔐
        </div>
        <h3 className="card__title">OTP + location verification</h3>
        <p className="card__text">
          Confirm physical presence on arrival and keep sessions verified
          through geo-fencing.
        </p>
        <div className="card__meta">
          <span className="tag">Anti-fraud</span>
          <span className="tag">Accountability</span>
        </div>
      </article>
      <article className="card" data-reveal="">
        <div className="card__icon" aria-hidden="true">
          📋
        </div>
        <h3 className="card__title">Patient care updates</h3>
        <p className="card__text">
          Vitals, medications and observations recorded with time-based
          updates—visible to clients and admins.
        </p>
        <div className="card__meta">
          <span className="tag">Continuity</span>
          <span className="tag">Auditable</span>
        </div>
      </article>
      <article className="card" data-reveal="">
        <div className="card__icon" aria-hidden="true">
          📄
        </div>
        <h3 className="card__title">Certificate verification</h3>
        <p className="card__text">
          ID and certificate uploads with manual verification today—AI-assisted
          validation ready for scale.
        </p>
        <div className="card__meta">
          <span className="tag">Compliance</span>
          <span className="tag">Profile checks</span>
        </div>
      </article>
      <article className="card" data-reveal="">
        <div className="card__icon" aria-hidden="true">
          🤖
        </div>
        <h3 className="card__title">AI-ready capabilities</h3>
        <p className="card__text">
          OCR extraction, duplicate detection, smart matching, and care note
          summarization.
        </p>
        <div className="card__meta">
          <span className="tag">Automation</span>
          <span className="tag">Insights</span>
        </div>
      </article>
      <article className="card" data-reveal="">
        <div className="card__icon" aria-hidden="true">
          🛠️
        </div>
        <h3 className="card__title">Admin oversight</h3>
        <p className="card__text">
          Monitor operations, validate professionals, and ensure quality with a
          clear audit trail.
        </p>
        <div className="card__meta">
          <span className="tag">Controls</span>
          <span className="tag">Quality</span>
        </div>
      </article>
    </div>
  </div>
</section>

    </div>
  )
}

export default About