import Project from "./models/Project.js";
import Job from "./models/Job.js";
import Language from "./models/Language.js";
import Degree from "./models/Degree.js";

async function loadProjects() {
    try {

        const response = await fetch("/data/projects.json");
        const projectData = await response.json();

        // Map the project data to an array of Project objects
        const projects = projectData.map(project => {
            return new Project(project["proj-name"], project["proj-content"], project["proj-link"], project["aria-label"], project.image, project.languages.first, project.languages.second, project.languages.third, project.languages.fourth, project.languages.fifth);
        });

        const projectList = projects.map(project => {
            const projectContainer = document.createElement("article");
            projectContainer.classList.add("col");
            projectContainer.setAttribute("id", "project-container");

            projectContainer.innerHTML = project.toHTML();

            return projectContainer;
        });

        const projectSection = document.querySelector(".project-section");

        projectList.forEach(project => {
            projectSection.append(project);
        })

    } catch (error) {
        console.error("Error fetching the projects:", error);
    }
};

async function loadLanguages() {
    try {
        const response = await fetch("/data/lang.json");
        const langData = await response.json();

        // Map the language data to an array of Language objects
        const langArray = langData.map(lang => {
            return new Language(lang["language"], lang["icon-class"]);
        });

        // Create a div for each language and map the lang data to the HTML
        const langList = langArray.map(lang => {
            const langContainer = document.createElement("div");
            langContainer.classList.add("col", "d-flex", "align-items-start");

            langContainer.innerHTML = lang.toHTML();

            return langContainer;
        })

        const langSection = document.querySelector(".lang-section");

        // Append each language section to the lang-section container
        langList.forEach(lang => {
            langSection.append(lang);
        });

    } catch (error) {
        console.error("Error fetching the Languages:", error);
    }
};


async function loadJobs() {
    try {
        const response = await fetch("/data/jobs.json");
        const jobData = await response.json();

        // Map the job data to an array of Job objects
        const jobsArray = jobData.map(job => {
            return new Job(job["job-id"], job["job-title"], job["job-team"], job["job-location"], job["job-dates"], job["job-tasks"]["one"], job["job-tasks"]["two"], job["job-tasks"]["three"], job["job-tasks"]["four"]);
        });

        // Create a section for each job and map the job data to the HTML
        const jobList = jobsArray.map(job => {
            const jobContainer = document.createElement("section");
            jobContainer.classList.add("job");
            jobContainer.setAttribute("id", job.jobId);
            
            jobContainer.innerHTML = job.toHTML();
            
            jobContainer.addEventListener("click", () => {
                jobContainer.classList.toggle("opened");
            });

            return jobContainer;
        });

        const jobSection = document.querySelector(".job-section");

        // Append each job section to the job-section container
        jobList.forEach(job => {
            jobSection.append(job);
        });

    } catch (error) {
        console.error("Error fetching the jobs:", error);
    }
}

async function loadDegrees() {
    try {
        const response = await fetch("/data/degrees.json");
        const degreeData = await response.json();

        // Map degree data to an array of Degree objects
        const degreeArray = degreeData.map(degree => {
            return new Degree(degree.title, degree.detail, degree["icon-class"]);
        });

        // Create a div for each Degree and map the degree data to the HTML

        const degreeList = degreeArray.map(degree => {
            const degreeContainer = document.createElement("div");
            degreeContainer.classList.add("col", "d-flex", "align-items-start");
            degreeContainer.innerHTML = degree.toHTML();

            return degreeContainer;
        });

        // Append each degree div to the degree-section container
        const degreeSection = document.querySelector(".degree-section");
        degreeList.forEach(degree => {
            degreeSection.append(degree);
        });

    } catch (error) {
        console.log("Error fetching the Degrees:", error)
    };
};


window.onload = function() {
    loadProjects();
    loadLanguages();
    loadJobs();
    loadDegrees();
};



