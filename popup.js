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
