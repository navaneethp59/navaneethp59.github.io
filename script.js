/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* Close mobile menu when clicking a link */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}



/* =====================================================
   PROJECT DATA
===================================================== */

const projectData = {

    superstore: {

        category: "SQL / BUSINESS ANALYTICS",

        title: "Superstore Sales Analysis",

        icon: "fa-cart-shopping",

        description:
            "An end-to-end analysis of an e-commerce Superstore dataset using SQL and business-focused KPIs.",

        problem:
            "Understand sales, profit, order volume, regional performance, customer segments, products and shipping patterns.",

        process:
            "Loaded the dataset into PostgreSQL, checked data quality, performed SQL aggregations and comparisons, calculated KPIs and prepared the findings for dashboard-style presentation.",

        insights: [

            "Total sales analyzed: ₹22.97 lakh approximately.",

            "Total orders analyzed: 5,009 distinct orders.",

            "Total profit analyzed: approximately ₹2.86 lakh.",

            "Compared regional sales, profit and profit margins.",

            "Analyzed shipping modes, categories, sub-categories and products."

        ],

        tools: [
            "PostgreSQL",
            "SQL",
            "Excel",
            "Power BI"
        ]

    },


    stock: {

        category:
            "PYTHON / EXPLORATORY DATA ANALYSIS",

        title:
            "Apple Stock Price Analysis",

        icon:
            "fa-chart-line",

        description:
            "A Python-based exploratory analysis of Apple stock price data with trend visualization and moving averages.",

        problem:
            "Understand historical price movement and identify broader trends from daily stock-price data.",

        process:
            "Prepared the stock dataset using Python and Pandas, explored closing prices and calculated moving averages before visualizing the trends with Matplotlib.",

        insights: [

            "Explored historical Apple stock closing prices.",

            "Calculated 28-day moving averages.",

            "Calculated 50-day moving averages.",

            "Visualized price movement and trend direction.",

            "Used Python-based EDA to make the dataset easier to interpret."

        ],

        tools: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib"
        ]

    },


    bloodbank: {

        category:
            "WEB / DATABASE PROJECT",

        title:
            "Blood Bank Management System",

        icon:
            "fa-hospital",

        description:
            "A database-driven web application developed to organize blood-bank information and support record management.",

        problem:
            "Create a structured application concept for managing blood-bank records and presenting information through a web interface.",

        process:
            "Designed the front-end interface using HTML and CSS and connected application functionality to a MySQL database using PHP.",

        insights: [

            "Built a structured web interface.",

            "Worked with database-backed records.",

            "Practiced CRUD-oriented database concepts.",

            "Connected front-end functionality with backend logic.",

            "Improved understanding of database-driven applications."

        ],

        tools: [
            "HTML",
            "CSS",
            "PHP",
            "MySQL"
        ]

    }

};



/* =====================================================
   PROJECT MODAL
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalBackdrop =
    document.querySelector(".modal-backdrop");

const modalIcon =
    document.getElementById("modalIcon");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalProblem =
    document.getElementById("modalProblem");

const modalProcess =
    document.getElementById("modalProcess");

const modalInsights =
    document.getElementById("modalInsights");

const modalTags =
    document.getElementById("modalTags");



/* =====================================================
   OPEN PROJECT
===================================================== */

function openProject(projectId) {

    const project = projectData[projectId];

    if (!project) {

        console.error(
            "Project not found:",
            projectId
        );

        return;

    }


    /* Modal icon */

    if (modalIcon) {

        modalIcon.innerHTML =
            `<i class="fa-solid ${project.icon}"></i>`;

    }


    /* Category */

    if (modalCategory) {

        modalCategory.textContent =
            project.category;

    }


    /* Title */

    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }


    /* Description */

    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    /* Problem */

    if (modalProblem) {

        modalProblem.textContent =
            project.problem;

    }


    /* Process */

    if (modalProcess) {

        modalProcess.textContent =
            project.process;

    }


    /* =================================================
       INSIGHTS
    ================================================= */

    if (modalInsights) {

        modalInsights.innerHTML = "";

        project.insights.forEach(insight => {

            const listItem =
                document.createElement("li");

            listItem.textContent =
                insight;

            modalInsights.appendChild(
                listItem
            );

        });

    }


    /* =================================================
       TOOLS
    ================================================= */

    if (modalTags) {

        modalTags.innerHTML = "";

        project.tools.forEach(tool => {

            const tag =
                document.createElement("span");

            tag.textContent =
                tool;

            modalTags.appendChild(
                tag
            );

        });

    }


    /* =================================================
       SHOW MODAL
    ================================================= */

    if (projectModal) {

        projectModal.classList.add("active");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }

}



/* =====================================================
   CLOSE PROJECT
===================================================== */

function closeProject() {

    if (!projectModal) return;

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}



/* =====================================================
   PROJECT CARD CLICK
===================================================== */

projectCards.forEach(card => {

    card.addEventListener(
        "click",
        event => {

            const projectId =
                card.dataset.project;

            openProject(projectId);

        }
    );

});



/* =====================================================
   CLOSE MODAL BUTTON
===================================================== */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}



/* =====================================================
   CLOSE MODAL BACKDROP
===================================================== */

if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeProject
    );

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains("active")
        ) {

            closeProject();

        }

    }
);



/* =====================================================
   FOOTER YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   RESUME
===================================================== */

const resumeLink =
    document.querySelector(
        'a[href="resume.pdf"]'
    );


if (resumeLink) {

    resumeLink.addEventListener(
        "click",
        () => {

            console.log(
                "Opening resume..."
            );

        }
    );

}



/* =====================================================
   INITIAL NAVIGATION
===================================================== */

updateActiveNavigation();



/* =====================================================
   PAGE LOADED
===================================================== */

console.log(
    "Portfolio JavaScript loaded successfully."
);