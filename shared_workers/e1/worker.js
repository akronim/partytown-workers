let port1;
let port2;

addEventListener("connect", (event) => {
    const port = event.ports[0];
    port.start();

    port.addEventListener("message", (msg) => {
        switch (msg.data.command) {
            case "store_port":
                if (msg.data.scriptNo === 1) {
                    port1 = port;
                } else if (msg.data.scriptNo === 2) {
                    port2 = port;
                }
                break;
            case "get_data":
                if (msg.data.scriptNo === 1) {
                    port.postMessage("SCRIPT 1");
                } else if (msg.data.scriptNo === 2) {
                    port.postMessage("SCRIPT 2");
                }
                break;
            case "send_data":
                if (msg.data.scriptNo === 1) {
                    port2.postMessage(msg.data.text)
                } else if (msg.data.scriptNo === 2) {
                    port1.postMessage(msg.data.text)
                }
                break;
            default:
                break;
        }
    })
})