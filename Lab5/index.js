function validate() {
    document.querySelectorAll("input").forEach(x => x.classList.remove("error"));

    let errors = [];

    const rePIB = /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const rePhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const reID = /^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/;
    const reFaculty = /^[A-ZА-ЯІЇЄҐ]{4}$/;
    const reBirth = /^\d{2}\.\d{2}\.\d{4}$/;

    const fields = [
        { id: "pib", re: rePIB },
        { id: "phone", re: rePhone },
        { id: "idcard", re: reID },
        { id: "faculty", re: reFaculty },
        { id: "birth", re: reBirth }
    ];

    fields.forEach(f => {
        let el = document.getElementById(f.id);
        if (!f.re.test(el.value.trim())) {
            el.classList.add("error");
            errors.push(f.id);
        }
    });

    if (errors.length === 0) {
        let result =
`ПІБ: ${pib.value}
Телефон: ${phone.value}
ID-card: ${idcard.value}
Факультет: ${faculty.value}
Дата народження: ${birth.value}`;

        let win = window.open("", "Result", "width=400,height=300");
        win.document.write("<pre>" + result + "</pre>");
    } else {
        alert("Помилка! Перевірте виділені поля.");
    }
}

const VARIANT_CELL = 30;
const size = 6;
const table = document.getElementById("gridTable");

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

let num = 1;

for (let r = 0; r < size; r++) {
    const row = document.createElement("tr");

    for (let c = 0; c < size; c++) {
        const cell = document.createElement("td");
        cell.textContent = num;

        cell.setAttribute("data-num", num);

        if (num === VARIANT_CELL) {

            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = randomColor();
            });

            cell.addEventListener("click", () => {
                const picked = document.getElementById("pickColor").value;
                cell.style.backgroundColor = picked;
            });

            cell.addEventListener("dblclick", () => {
                const start = VARIANT_CELL;

                for (let i = start; i <= 36; i += 2) {
                    let target = document.querySelector(`[data-num='${i}']`);
                    if (target) target.style.backgroundColor = randomColor();
                }

                for (let i = start - 2; i >= 1; i -= 2) {
                    let target = document.querySelector(`[data-num='${i}']`);
                    if (target) target.style.backgroundColor = randomColor();
                }
            });

        }

        row.appendChild(cell);
        num++;
    }
    table.appendChild(row);
}
