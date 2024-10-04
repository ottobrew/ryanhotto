// Language class

class Language {
    constructor(lang, icon) {
        this.lang = lang;
        this.icon = icon;
    }

    toHTML() {

        return `
                <i class="${this.icon}"></i>
                <div>
                    <h3 class="mt-2 fs-4">${this.lang}</h3>
                </div>
        `;
    };
}

export default Language;