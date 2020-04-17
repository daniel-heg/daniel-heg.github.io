function replaceLabel(lableName, text) {
    document.getElementById(lableName).innerHTML = text
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeString(labelName, delay, text) {

    out = ""

    for (i = 0; i < text.length; i++) {
        out += text[i]
        replaceLabel(labelName, out);
        await sleep(delay);
    }
}

async function replaceLoop(labelName, delay, array) {

    while (true) {
        for (i = 0; i < array.length; i++) {
            replaceLabel(labelName, array[i]);
            await sleep(delay);
        }
    }
}