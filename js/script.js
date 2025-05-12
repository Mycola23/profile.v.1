"use strict";

//import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

/* const swiper = new Swiper(".gallery-tabs.swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    centerInsufficientSlides: true,
    navigation: {
        nextEl: ".btn__right",
        prevEl: ".btn__left",
    },
}); */

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function (event) {
    burgerMenu.classList.toggle("burger-active");
    menu.classList.toggle("menu-active");
    document.body.classList.toggle("__active");
});

document.addEventListener("DOMContentLoaded", () => {
    const arrTechLines = document.querySelectorAll(".tech-lines");

    let linesBlock = document.createElement("div");
    // Create horizontal lines
    for (let i = 0; i < 10; i++) {
        const hLine = document.createElement("div");
        hLine.className = "h-line";

        // Random position and width
        const top = Math.random() * 100;
        const width = Math.random() * 50 + 50;
        const delay = i * 0.2;

        hLine.style.top = `${top}%`;
        hLine.style.left = "0";
        hLine.style.width = `${width}%`;
        hLine.style.animationDelay = `${delay}s`;
        linesBlock.appendChild(hLine);
    }
    // Create vertical lines
    for (let i = 0; i < 10; i++) {
        const vLine = document.createElement("div");
        vLine.className = "v-line";

        // Random position and height
        const left = Math.random() * 100;
        const height = Math.random() * 50 + 50;
        const delay = i * 0.2;

        vLine.style.left = `${left}%`;
        vLine.style.top = "0";
        vLine.style.height = `${height}%`;
        vLine.style.animationDelay = `${delay}s`;

        linesBlock.appendChild(vLine);
    }
    arrTechLines.forEach((el, id) => {
        if (id === 0) {
            el.appendChild(linesBlock);
        } else {
            el.appendChild(linesBlock.cloneNode(true));
        }
    });

    const cards = document.querySelectorAll(".skill-card");
    console.log(cards);
    cards.forEach((card) => {
        const percentCounter = card.querySelector(".percent-counter");

        const progressFill = card.querySelector(".progress-fill");
        const progressGlow = card.querySelector(".progress-glow");
        const targetPercent = parseInt(percentCounter.dataset.progress, 10);
        let currentPercent = 0;
        const duration = 2000; // 2 seconds
        const interval = 20; // Update every 20ms
        const steps = duration / interval;
        const increment = targetPercent / steps;

        const counter = setInterval(() => {
            currentPercent += increment;

            if (currentPercent >= targetPercent) {
                currentPercent = targetPercent;
                clearInterval(counter);
            }

            // Update counter and progress bar
            percentCounter.textContent = Math.floor(currentPercent);
            progressFill.style.width = `${currentPercent}%`;
            progressGlow.style.left = `${currentPercent - 5}%`;
        }, interval);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        },
        {
            threshold: 0.1, // when 10% of the element is visible
        }
    );

    document.querySelectorAll(".blur-fade").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll(".autoDisplay").forEach((el) => {
        observer.observe(el);
    });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

/*
const sellBlock = document.querySelector(".sell-block");
const tabNavElements = document.querySelectorAll(".tabs-sell-block__btn");
const tabItames = document.querySelectorAll(".gallery-tabs__items");
//const getlleterBody = document.querySelector(".form-content-getletter__body");

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;

    if (targetElement.closest(".tabs-sell-block__btn")) {
        tabNavElements.forEach((tabNavElement, index) => {
            if (tabNavElement.classList.contains("__active")) {
                currentActiveIndex = index;
                tabNavElement.classList.remove("__active");
            }
            if (tabNavElement === targetElement) {
                newActiveIndex = index;
                console.log(tabNavElement === targetElement);
            }
        });
        targetElement.classList.add("__active");
        tabItames[currentActiveIndex].classList.remove("__active");
        tabItames[newActiveIndex].classList.add("__active");
    }
});

const target = document.querySelector(".why__title");
const header = document.querySelector(".header__row");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                header.classList.add("scrolled");
            } else {
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the block is visible
    }
);

observer.observe(target);
 */
