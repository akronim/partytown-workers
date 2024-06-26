const worker = new SharedWorker("./worker.js");
worker.port.start();

worker.port.postMessage({
    scriptNo: 2,
    command: "store_port"
})

worker.port.postMessage({
    command: "get_data",
    scriptNo: 2
});

worker.port.addEventListener("message", (msg) => {
    console.log(msg.data);
})

function send() {
    worker.port.postMessage({
        command: "send_data",
        text: "Message from scrpt 2",
        scriptNo: 2
    })
}