var list_1 = [
    "Kris",
    "Kajetan"
]
var list_2 = [
    "Maja",
    "Olek"
]




document.querySelector("#btn").addEventListener("click", async () => {
    console.log("fefe")
    await sendNamesToWheel()
})


async function sendNamesToWheel() {
    const names = ["Alice", "Bob", "Charlie"]; // Your data
    
    // 1. Get the current active tab
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

    // 2. Send the message
    // Firefox's 'browser' API returns a promise here
    try {
        const response = await browser.tabs.sendMessage(tab.id, {
            type: "SET_NAMES",
            data: names
        });
        console.log("Content script acknowledged:", response.status);
    } catch (error) {
        console.error("Could not send message. Is the page loaded?", error);
    }
}
var winner_name;
var header = document.getElementById("cos")
var cosiek = browser.storage.local.get("a")

cosiek.then(x => {
    winner_name = x.a
}).then(() =>
    {
        header.innerText = winner_name
    }
)
