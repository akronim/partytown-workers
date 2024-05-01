const worker = new Worker("./worker.js");

const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", (event) => {
    worker.postMessage({ command: "calculate_sum"});
})

worker.onmessage = function (message) {
    console.log(`The final sum is ${message.data}`);
}

bgButton.addEventListener("click", (event) => {
    const currentColor = document.body.style.background;
    document.body.style.background = currentColor === "green" ? "blue" : "green";
})