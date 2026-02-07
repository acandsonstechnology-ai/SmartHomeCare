import React from 'react' 

function Hero() {
  return (
    <div>
         <section className="hero">
  <div className="container hero__grid">
    <div className="hero__copy">
      <div className="hero__kicker" data-reveal>
        <span className="dot dot--pulse" aria-hidden="true"></span>
        Verified care • real-time visibility • transparent updates
      </div>

      <h1 className="hero__title" data-reveal>
        Trusted home care,
        <span className="gradient">verified in real time.</span>
      </h1>

      <p className="hero__subtitle" data-reveal>
        Book nearby caregivers with map-based discovery, confirm arrival with OTP,
        and track service hours with live location — all while care updates stay
        organized in digital records.
      </p>

      <div className="hero__cta" data-reveal>
        <a className="btn btn--primary btn--lg" href="#cta">
          Get started
          <span className="btn__icon" aria-hidden="true">→</span>
        </a>
        <a className="btn btn--glass btn--lg" href="#how">
          See how it works
          <span className="btn__icon" aria-hidden="true">▶</span>
        </a>
      </div>

      <div className="hero__trust" data-reveal>
        <div className="trust__item">
          <div className="trust__metric">OTP + GPS</div>
          <div className="trust__label">Arrival & session verification</div>
        </div>
        <div className="trust__item">
          <div className="trust__metric">Care logs</div>
          <div className="trust__label">Vitals, meds, observations</div>
        </div>
        <div className="trust__item">
          <div className="trust__metric">Role-based</div>
          <div className="trust__label">Client • Professional • Admin</div>
        </div>
      </div>
    </div>

    <div className="hero__visual" aria-label="Platform preview" data-reveal>
      <div className="glassCard preview">
        <div className="preview__top">
          <div className="traffic" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>

          <div className="preview__search">
            <span className="preview__searchIcon" aria-hidden="true">⌕</span>
            Nearby caregivers · 2.4 km
          </div>

          <div className="preview__badge">Live</div>
        </div>

        <div className="preview__body">
          <div className="map">
            <div className="map__pulse map__pulse--a" aria-hidden="true"></div>
            <div className="map__pulse map__pulse--b" aria-hidden="true"></div>
            <div className="map__pulse map__pulse--c" aria-hidden="true"></div>

            <div
              className="pin pin--me"
              style={{ "--x": "58%", "--y": "50%" }}
            >
              <span className="pin__label">Client</span>
            </div>

            <div
              className="pin"
              style={{ "--x": "28%", "--y": "38%" }}
            >
              <span className="pin__label">Nurse</span>
            </div>

            <div
              className="pin"
              style={{ "--x": "74%", "--y": "30%" }}
            >
              <span className="pin__label">Physio</span>
            </div>

            <div
              className="pin"
              style={{ "--x": "42%", "--y": "68%" }}
            >
              <span className="pin__label">Caregiver</span>
            </div>
          </div>

          <div className="preview__panel">
            <div className="panel__title">
              <span className="pill">Booking</span>
              <span className="muted">Step 3/4</span>
            </div>

            <div className="panel__row">
              <div className="panel__icon" aria-hidden="true">🔑</div>
              <div>
                <div className="panel__label">Arrival OTP</div>
                <div className="panel__value">
                  <span className="otp" aria-label="One time password code">
                    <span>4</span><span>2</span><span>9</span><span>1</span>
                  </span>
                  <span className="muted">Share after arrival</span>
                </div>
              </div>
            </div>

            <div className="panel__row">
              <div className="panel__icon" aria-hidden="true">📍</div>
              <div>
                <div className="panel__label">Geo-fence</div>
                <div className="panel__value">
                  Active within 120m radius
                </div>
              </div>
            </div>

            <div className="panel__row">
              <div className="panel__icon" aria-hidden="true">⏱</div>
              <div>
                <div className="panel__label">Session</div>
                <div className="panel__value">
                  Time tracking enabled
                </div>
              </div>
            </div>

            <a className="btn btn--primary btn--wide" href="#demo">
              Open live demo
            </a>
          </div>
        </div>
      </div>

      <div className="floating floating--a" aria-hidden="true">
        <div className="chip">
          <span className="chip__icon">✅</span>
          <span>Verified professional</span>
        </div>
      </div>

      <div className="floating floating--b" aria-hidden="true">
        <div className="chip">
          <span className="chip__icon">📝</span>
          <span>Care update posted</span>
        </div>
      </div>

      <div className="floating floating--c" aria-hidden="true">
        <div className="chip">
          <span className="chip__icon">🔔</span>
          <span>Arrival in 4 min</span>
        </div>
      </div>
    </div>
  </div>

  <div className="marquee" aria-label="Key capabilities">
    <div className="marquee__track">
      <span>Live location verification</span>
      <span>OTP arrival confirmation</span>
      <span>Digital care records</span>
      <span>Geo-fencing session tracking</span>
      <span>Certificate verification</span>
      <span>Smart matching</span>
      <span>Admin quality monitoring</span>
      <span>Emergency on-demand support</span>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Hero