const monitor = document.querySelector(".window").querySelector("span");
const panel = document.querySelector(".panel");

function increase(a, b) {
    const res = a + b;
    monitor.textContent = res;
}
function decrease(a, b) {
    const res = a - b;
    monitor.textContent = res;
}
function multiply(a, b) {
    let res = 0;
    for (let i = 0; i < b; i++) {
        res = res+a;
    }
    monitor.textContent = res;
}

function devide(a, b) {
    const res = a / b;
    monitor.textContent = res;
}

function procent(a, b) {
    const res = a / 100 * b;
    monitor.textContent = res;
}

function degree(a, b) {
    const res = a ** b;
    monitor.textContent = res;
}

function root(a) {
    const res = Math.sqrt(a);
    monitor.textContent = res;
}
