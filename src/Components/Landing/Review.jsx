import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Review() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <div className="section__head" data-reveal="">
          <h2 className="section__title">Patient & family reviews</h2>
          <p className="section__subtitle">
            A few words from people who needed reliable care—right at home.
          </p>
        </div>

        <div className="reviews" data-reveal="">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: "#nextReview",
              prevEl: "#prevReview",
            }}
            pagination={{
              el: ".reviews__pagination",
              clickable: true,
            }}
            className="reviewsSwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <article className="review">
                <div className="review__stars">★★★★★</div>
                <p className="review__text">
                  “The OTP arrival check made us feel safe instantly. We could
                  see when the nurse arrived, and the care notes were clear
                  every day.”
                </p>
                <div className="review__who">
                  <div className="avatar">AS</div>
                  <div>
                    <div className="review__name">Ayesha S.</div>
                    <div className="review__meta">
                      Post-surgery care • 2 weeks
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <article className="review">
                <div className="review__stars">★★★★★</div>
                <p className="review__text">
                  “The live location and time tracking removed confusion. We
                  knew exactly how long the session was.”
                </p>
                <div className="review__who">
                  <div className="avatar">MK</div>
                  <div>
                    <div className="review__name">Mohamed K.</div>
                    <div className="review__meta">Elderly care • Ongoing</div>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <article className="review">
                <div className="review__stars">★★★★★</div>
                <p className="review__text">
                  “As a caregiver, I love that everything is structured:
                  arrival verification, session flow, and care notes.”
                </p>
                <div className="review__who">
                  <div className="avatar">NR</div>
                  <div>
                    <div className="review__name">Noura R.</div>
                    <div className="review__meta">Care Professional</div>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <article className="review">
                <div className="review__stars">★★★★★</div>
                <p className="review__text">
                  “Admin monitoring helped us quickly resolve an issue. The
                  platform’s transparency makes a huge difference.”
                </p>
                <div className="review__who">
                  <div className="avatar">LH</div>
                  <div>
                    <div className="review__name">Layla H.</div>
                    <div className="review__meta">Family caregiver</div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>

          {/* Controls */}
          <div className="reviews__controls">
            <button
              className="iconBtn"
              id="prevReview"
              aria-label="Previous review"
            >
              ←
            </button>

            <div className="reviews__pagination"></div>

            <button
              className="iconBtn"
              id="nextReview"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>

        {/* Logos */}
        <div className="logos" data-reveal="">
          <div className="logos__item">Quality monitoring</div>
          <div className="logos__item">Verified profiles</div>
          <div className="logos__item">Digital care records</div>
          <div className="logos__item">Secure access</div>
        </div>
      </div>
    </section>
  );
}

export default Review;
