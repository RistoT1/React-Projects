import { useEffect } from "react";

export const useAnimations = () => {
  useEffect(() => {
    // Fade-in observer
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("animate-fadeInUp");
        entry.target.classList.remove("opacity-0");

        // Staggered skills
        if (entry.target.classList.contains("skill")) {
          const skills = entry.target.parentElement.querySelectorAll(".skill");
          skills.forEach((skill, idx) => {
            skill.style.transitionDelay = `${idx * 50}ms`;
            skill.classList.add("animate-fadeInUp");
            skill.classList.remove("opacity-0");
          });
        }

        observer.unobserve(entry.target);
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".about-text h2, .about-text p, .about-stats, .skill"
    );
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    // Counter animation
    const animateCounter = (el, target) => {
      let current = 0;
      const increment = target / 100;
      const step = () => {
        current += increment;
        if (current >= target) current = target;
        el.textContent = `${Math.floor(current)}+`;
        if (current < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.querySelectorAll(".stat-number").forEach((stat) => {
          const target = parseInt(stat.textContent, 10);
          if (!isNaN(target)) animateCounter(stat, target);
        });

        statsObserver.unobserve(entry.target);
      });
    });

    const aboutStats = document.querySelector(".about-stats");
    if (aboutStats) statsObserver.observe(aboutStats);
  }, []);
};
