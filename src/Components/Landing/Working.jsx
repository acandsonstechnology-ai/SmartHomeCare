import React from 'react'

function Working() {
  return (
    <div>
        <section className="section section--alt" id="how">
  <div className="container">
    <div className="section__head" data-reveal="">
      <h2 className="section__title">How booking works</h2>
      <p className="section__subtitle">
        A smooth flow that prevents fraud and increases care transparency.
      </p>
    </div>
    <div className="timeline">
      <div className="step" data-reveal="">
        <div className="step__num">01</div>
        <div className="step__body">
          <h3 className="step__title">Choose service &amp; caregiver</h3>
          <p className="step__text">
            Select a service and compare verified professionals near you.
          </p>
        </div>
      </div>
      <div className="step" data-reveal="">
        <div className="step__num">02</div>
        <div className="step__body">
          <h3 className="step__title">Confirm &amp; generate OTP</h3>
          <p className="step__text">
            Booking confirmation creates a one-time arrival OTP.
          </p>
        </div>
      </div>
      <div className="step" data-reveal="">
        <div className="step__num">03</div>
        <div className="step__body">
          <h3 className="step__title">Share OTP after arrival</h3>
          <p className="step__text">
            OTP is shared only when the caregiver arrives—ensuring presence.
          </p>
        </div>
      </div>
      <div className="step" data-reveal="">
        <div className="step__num">04</div>
        <div className="step__body">
          <h3 className="step__title">Track session &amp; care updates</h3>
          <p className="step__text">
            Geo-fenced tracking + time-stamped care notes keep everyone
            informed.
          </p>
        </div>
      </div>
    </div>
    <div className="roles">
      <div className="roles__card" data-reveal="">
        <h3 className="roles__title">User roles</h3>
        <ul className="roles__list">
          <li>
            <span className="roles__badge">Client</span> Book services, track
            care, view updates
          </li>
          <li>
            <span className="roles__badge">Professional</span> Accept jobs,
            verify presence, submit notes
          </li>
          <li>
            <span className="roles__badge">Admin</span> Verify profiles, monitor
            quality &amp; operations
          </li>
        </ul>
      </div>
      <div className="roles__card roles__card--metric" data-reveal="">
        <div className="meter" role="img" aria-label="Quality signals meter">
          <div className="meter__ring" />
          <div className="meter__center">
            <div className="meter__value" id="meterValue">
              92
            </div>
            <div className="meter__label">Trust Score</div>
          </div>
        </div>
        <div className="roles__metrics">
          <div className="mini">
            <div className="mini__k">Arrival</div>
            <div className="mini__v">OTP verified</div>
          </div>
          <div className="mini">
            <div className="mini__k">Session</div>
            <div className="mini__v">Geo-fenced</div>
          </div>
          <div className="mini">
            <div className="mini__k">Updates</div>
            <div className="mini__v">Time-stamped</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Working