class Job {
    constructor(jobId, jobTitle, jobTeam, jobLocation, jobDates, taskOne, taskTwo, taskThree, taskFour) {
        this.jobId = jobId,
        this.jobTitle = jobTitle,
        this.jobTeam = jobTeam,
        this.jobLocation = jobLocation,
        this.jobDates = jobDates,
        this.jobTasks = {
            one: taskOne,
            two: taskTwo,
            three: taskThree,
            four: taskFour
        }
    }

    mapTasks() {
        let taskHTML = '';
        for (const key in this.jobTasks) {
            if (this.jobTasks[key]) {
                taskHTML += `<li>${this.jobTasks[key]}</li>`;
            }
        }
        return taskHTML;
    }

    toHTML() {
        return `
            <div class="row">
                <div class="col-1 status"></div>
                <div class="col-11">
                    <h3 class="mb-4 role">${this.jobTitle}<small> with ${this.jobTeam} at ${this.jobLocation} (${this.jobDates})</small></h3>
                    <div class="line"></div>
                    <div class="info mb-4">
                            <ul class="job-tasks">
                                ${this.mapTasks()}
                            </ul>
                    </div>
                </div>
            </div>`;
    }

}

export default Job;