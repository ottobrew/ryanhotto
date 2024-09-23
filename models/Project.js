// Project Class

class Project {
    constructor(name, content, link, ariaLabel, image, languagesFirst, languagesSecond, languagesThird, languagesFourth, languagesFifth
     ) {
        this.name = name;
        this.content = content;
        this.link = link;
        this.ariaLabel = ariaLabel;
        this.image = image;
        this.languages = {
            first: languagesFirst,
            second: languagesSecond,
            third: languagesThird,
            fourth: languagesFourth,
            fifth: languagesFifth,
        }

    }

    parseLanguages() {
        let languagesHTML = '';
        for (const key in this.languages) {
            if (this.languages[key]) {
                languagesHTML += `<span class="badge bg-info-subtle border border-primary-subtle text-primary-emphasis rounded-pill">${this.languages[key]}</span>`;
            }
        }
        return languagesHTML;
    }

    toHTML() {
        return `       
                <a href="${this.link}" target="_blank" aria-label="${this.ariaLabel}">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: ${this.image}; background-position: left center;">
                        <div class="project-overlay">
                            <div class="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 lh-1 fw-bold proj-name">${this.name}</h2>
                                <div class="d-flex gap-2 flex-wrap justify-content-center mt-4 pt-5">
                                ${this.parseLanguages()}   
                                <p class="project-text p-3 m-2">${this.content}</p>                           
                                </div>
                            </div>
                        </div>
                    </div>
                </a>`;
    }
}

export default Project;