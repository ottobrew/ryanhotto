import Project from "./models/Project.js";
import Job from "./models/Job.js";

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

async function loadJobs() {
    try {
        const response = await fetch("/data/jobs.json");
        const jobData = await response.json();

        // Map the job data to an array of Job objects
        const jobsArray = jobData.map(job => {
            return new Job(job["job-id"], job["job-title"], job["job-team"], job["job-location"], job["job-dates"], job["job-tasks"]["one"], job["job-tasks"]["two"], job["job-tasks"]["three"], job["job-tasks"]["four"]);
        });

        console.log(jobsArray);

        // Create a section for each job and map the job data to the HTML
        const jobList = jobsArray.map(job => {
            const jobContainer = document.createElement("section");
            jobContainer.classList.add("job");
            jobContainer.setAttribute("id", job.jobId);
            
            jobContainer.innerHTML = job.toHTML();
            
            jobContainer.addEventListener("click", () => {
                jobContainer.classList.toggle("opened");
            });

            console.log(jobContainer.classList);
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


window.onload = function() {
    loadProjects();
    loadJobs();
};



