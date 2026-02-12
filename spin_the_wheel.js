document.body.style.border = "5px solid red";

const names = ["Kris", "Kajetan", "Olddek"];

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SET_NAMES") {
        console.log("Received names from popup:", message.data);
    

        // Optional: Send a 'success' back to the popup
        sendResponse({ status: "Success!" });
    }
});

setTimeout(function(){
    const textbox = document.querySelector('.basic-editor');
    var namesString = names.join('\n');
    textbox.innerText = namesString;


    const inputEvent = new Event('input', { bubbles: true });
    textbox.dispatchEvent(inputEvent);
    const blurEvent = new Event('blur', { bubbles: true });
    textbox.dispatchEvent(blurEvent);
}, 500);

function check() {
    let text = document.querySelector(".winner-text")
    if(text != null) {
        console.log(text.innerText)
        browser.storage.local.set({a: text.innerText})
        var cosiek = browser.storage.local.get("a")
        cosiek.then(x => console.log(x.a))

    }
    setTimeout(check, 200)
}
check();

