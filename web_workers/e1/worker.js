self.onmessage = function (message) {
    console.log(message.data)
    if (message.data.command === "calculate_sum") {

        let sum = 0;
        for (let i = 0; i < 10000000000; i++) {
            sum += i;
        }

        self.postMessage(sum);
    }
}