// Degree class

class Degree {
    constructor(title, detail, icon) {
        this.title = title;
        this.detail = detail;
        this.icon = icon;
    }

    toHTML() {
        return `
                <i class="${this.icon}"></i>
                <div>
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">${this.title}</h3>
                    <p>${this.detail}</p>
                </div>
        `;
    };
}
export default Degree;