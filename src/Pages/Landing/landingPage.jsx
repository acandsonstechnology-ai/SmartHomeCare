import React from 'react'
import Header from '../../Components/Landing/Header'
import './landing.css'
import Hero from '../../Components/Landing/Hero'
import { useEffect } from "react";
import About from '../../Components/Landing/About';
import Working from '../../Components/Landing/Working';
import Service from '../../Components/Landing/Service';
import Review from '../../Components/Landing/Review';
import { Navigation, Pagination, Autoplay } from "swiper/modules";


function LandingPage() {  useEffect(() => {

    const qs = (s, r = document) => r.querySelector(s);
    const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

    /* =========================
       YEAR AUTO UPDATE
    ========================== */
    const year = qs("#year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }

    /* =========================
       MOBILE NAV
    ========================== */
    const toggle = qs(".nav__toggle");
    const menu = qs("#navMenu");

    if (toggle && menu) {

      const close = () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      };

      const handleToggle = () => {
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      };

      toggle.addEventListener("click", handleToggle);

      qsa(".nav__link, .nav__actions a", menu)
        .forEach(a => a.addEventListener("click", close));

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
      });
    }

    /* =========================
       SCROLL REVEAL
    ========================== */
    const revealEls = qsa("[data-reveal]");

    if (revealEls.length) {

      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(el => io.observe(el));
    }

    /* =========================
       SMOOTH SCROLL
    ========================== */
    qsa('a[href^="#"]').forEach(a => {

      const handler = (e) => {

        const id = a.getAttribute("href");
        if (!id || id === "#") return;

        const el = qs(id);
        if (!el) return;

        e.preventDefault();

        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // ESLint-safe history usage
        window.history.pushState(null, "", id);
      };

      a.addEventListener("click", handler);
    });

    /* =========================
       TOAST HELPER
    ========================== */
    window.SHCToast = function (title, msg) {

      const toast = qs("#toast");
      const t = qs("#toastT");
      const p = qs("#toastP");

      if (!toast || !t || !p) return;

      t.textContent = title;
      p.textContent = msg;

      toast.classList.add("show");

      clearTimeout(window.__shc_toast);

      window.__shc_toast = setTimeout(() => {
        toast.classList.remove("show");
      }, 3200);
    };

    /* =========================
       REDUCED MOTION
    ========================== */
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {

      qsa(
        ".dot--pulse,.meter__ring,.orbit__ring,.floating,.map__pulse"
      ).forEach(el => {
        el.style.animation = "none";
      });

      qsa(".marquee__track").forEach(el => {
        el.style.animation = "none";
      });
    }

  }, []); 



  return (
    <div>
      
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Working></Working>
      <Service></Service>
      <Review></Review>
      
    </div>
  )
}

export default LandingPage