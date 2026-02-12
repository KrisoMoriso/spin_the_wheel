var list_1 = [
    "Kris",
    "Kajetan"
]
var list_2 = [
    "Maja",
    "Olek"
]

setTimeout(function(){
    // put names in
    const textbox = document.querySelector('.basic-editor')
    var namesString = list_1.join('\n')
    textbox.innerText = namesString


    const inputEvent = new Event('input', { bubbles: true })
    textbox.dispatchEvent(inputEvent)
    const blurEvent = new Event('blur', { bubbles: true })
    textbox.dispatchEvent(blurEvent)

    // add buttons
    var page_div = document.querySelector('.left-column')
    var button_list_1 = document.createElement("button")
    button_list_1.className = "my-button q-btn"
    button_list_1.style.position = "flex"
    button_list_1.textContent = "list_1"
    page_div.appendChild(button_list_1)

    var button_list_2 = document.createElement("button")
    button_list_2.className = "my-button q-btn"
    button_list_2.style.position = "flex"
    button_list_2.textContent = "list_2"
    page_div.appendChild(button_list_2)

    var button_list_3 = document.createElement("button")
    button_list_3.className = "my-button q-btn"
    button_list_3.style.position = "flex"
    button_list_3.textContent = "list_all"
    page_div.appendChild(button_list_3)

    
    
    var textbox_exclude = document.createElement("textarea")
    textbox_exclude.className = "my-textbox q-textbox"
    textbox_exclude.style.position = "flex"
    page_div.appendChild(textbox_exclude)
    
    var button_exclude = document.createElement("button")
    button_exclude.className = "my-button q-btn"
    button_exclude.style.position = "flex"
    button_exclude.textContent = "exclude"
    page_div.appendChild(button_exclude)
    button_exclude.addEventListener('click', ()=>
        {
            console.log(textbox_exclude.value)
        }
    )
}, 500);

function check() {
    let text = document.querySelector(".winner-text")
    if(text != null) {
        console.log(text.innerText)
        browser.storage.local.set({a: text.innerText})

    }

    setTimeout(check, 200)
}
check();

