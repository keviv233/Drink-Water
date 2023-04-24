const glass = document.querySelectorAll(".glass");
const beaker = document.querySelectorAll(".beaker")[0];
const span = document.querySelectorAll("span");
const filled = document.querySelectorAll(".filled")[0];
const unfilled = document.querySelectorAll(".unfilled")[0];

function fillGlasses(num) {
    for (let i = 0; i < glass.length; i++) {
        glass[i].classList.remove("filled-glass");
        glass[i].style = "transform: ";
    }
    for (let i = 0; i < num + 1; i++) {
        glass[i].classList.add("filled-glass");
        glass[i].style = "transform: scale(1.05)";
    }
}

for (let i = 0; i < glass.length; i++) {
    glass[i].addEventListener("click", () => {
        fillGlasses(i);
        filled.style = `height: calc(${i + 1} * 25px)`;
        unfilled.style = `border-radius: 0 0 0 0; height: calc(200px - ${i + 1
            } * 25px);`;
        span[0].innerHTML = `${2 - (i + 1) * 0.25}L`;
        span[1].innerHTML = `${(((i + 1) * 25) / 200) * 100}%`;
        span[0].style = ``;
        if (i == 0) {
            span[1].style = "font-size: 13px";
        } else {
            span[1].style = "font-size: 16px";
        }

        if (i == 6) {
            unfilled.style = `font-size: 10px; border-radius: 0 0 0 0; height: calc(200px - ${i + 1
                } * 25px);`;
            span[0].style = `font-size: 10px`;
        } else if (i == 7) {
            unfilled.style = `visibility: hidden; font-size: 10px; border-radius: 0 0 0 0; height: calc(200px - ${i + 1
                } * 25px);`;
        }
    });
}
