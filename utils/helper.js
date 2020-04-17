function replaceLabel(lableName, text) {
    document.getElementById(lableName).innerHTML = text
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function replaceLoop(labelName, delay, array) {

    while (true) {
        for (i = 0; i < array.length; i++) {
            replaceLabel(labelName, "<h1>" + array[i] + "</h1>");
            await sleep(delay);
        }
    }
}