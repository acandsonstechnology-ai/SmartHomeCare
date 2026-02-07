import React from 'react'

function Service() {
  return (
    <div>
        <section className="section" id="services">
  <div className="container">
    <div className="section__head" data-reveal="">
      <h2 className="section__title">Services offered</h2>
      <p className="section__subtitle">
        From daily support to specialized care—delivered by verified
        professionals.
      </p>
    </div>
    <div className="grid grid--2">
      <article className="service" data-reveal="">
        <div className="service__icon" aria-hidden="true">
          👴
        </div>
        <div>
          <h3 className="service__title">Elderly &amp; long-term care</h3>
          <p className="service__text">
            Daily routines, mobility support, companionship, and monitoring with
            care logs.
          </p>
          <ul className="service__bullets">
            <li>Scheduled visits</li>
            <li>Medication reminders</li>
            <li>Vitals tracking</li>
          </ul>
        </div>
      </article>
      <article className="service" data-reveal="">
        <div className="service__icon" aria-hidden="true">
          🏥
        </div>
        <div>
          <h3 className="service__title">Home nursing &amp; physiotherapy</h3>
          <p className="service__text">
            Qualified clinicians deliver procedures and rehab plans with session
            verification.
          </p>
          <ul className="service__bullets">
            <li>Wound care</li>
            <li>Physio exercises</li>
            <li>Care note summaries</li>
          </ul>
        </div>
      </article>
      <article className="service" data-reveal="">
        <div className="service__icon" aria-hidden="true">
          🩺
        </div>
        <div>
          <h3 className="service__title">Post-surgery &amp; palliative care</h3>
          <p className="service__text">
            Comfort-focused support with transparent updates for family and care
            teams.
          </p>
          <ul className="service__bullets">
            <li>Pain management logs</li>
            <li>Recovery check-ins</li>
            <li>Care continuity</li>
          </ul>
        </div>
      </article>
      <article className="service" data-reveal="">
        <div className="service__icon" aria-hidden="true">
          ⚡
        </div>
        <div>
          <h3 className="service__title">Emergency &amp; on-demand support</h3>
          <p className="service__text">
            Fast discovery of nearby help—arrivals verified with OTP and live
            tracking.
          </p>
          <ul className="service__bullets">
            <li>Rapid dispatch</li>
            <li>Real-time arrival ETAs</li>
            <li>Admin escalation</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>

    </div>
  )
}

export default Service