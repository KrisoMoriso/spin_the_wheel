var list_1 = [
    "Kris",
    "Kajetan"
]
var list_2 = [
    "Maja",
    "Olek"
]
browser.storage.local.set({excluded_names:["Krzysztof"]})

setTimeout(function(){


    // add buttons
    var page_div = document.querySelector('.left-column')

    var button_list_1 = document.createElement("button")
    button_list_1.className = "my-button q-btn"
    button_list_1.style.position = "flex"
    button_list_1.textContent = "list_1"
    page_div.appendChild(button_list_1)
    button_list_1.addEventListener('click', button_list_1_listener)

    var button_list_2 = document.createElement("button")
    button_list_2.className = "my-button q-btn"
    button_list_2.style.position = "flex"
    button_list_2.textContent = "list_2"
    page_div.appendChild(button_list_2)
    button_list_2.addEventListener('click', button_list_2_listener)

    var button_list_3 = document.createElement("button")
    button_list_3.className = "my-button q-btn"
    button_list_3.style.position = "flex"
    button_list_3.textContent = "list_all"
    page_div.appendChild(button_list_3)
    button_list_3.addEventListener('click', button_list_3_listener)


    
    
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
    var textbox_exclude = document.querySelector('.my-textbox')
    if(text != null) {
        console.log(text.innerText)
        textbox_exclude.value = text.innerText
    }

    setTimeout(check, 200)
}
setTimeout(check, 600)

function button_list_1_listener(){
    browser.storage.local.get("excluded_names").then(x => {
        var new_list = []
        list_1.forEach( element =>{
            new_list.push(element)
        }
        )
        x.excluded_names.forEach(element => {
            var i = new_list.indexOf(element)
            if (i >= 0){
                new_list.splice(i, 1)
                }
        });
        put_names_in(new_list)
    })
}
function button_list_2_listener(){
    browser.storage.local.get("excluded_names").then(x => {
        var new_list = []
        list_2.forEach( element =>{
            new_list.push(element)
        }
        )
        x.excluded_names.forEach(element => {
            var i = new_list.indexOf(element)
            if (i >= 0){
                new_list.splice(i, 1)
                }
        });
        put_names_in(new_list)
    })
}
function button_list_3_listener(){
    browser.storage.local.get("excluded_names").then(x => {
        var new_list = []
        list_1.forEach( element =>{
            new_list.push(element)
        }
        )
        list_2.forEach( element =>{
            new_list.push(element)
        }
        )
        x.excluded_names.forEach(element => {
            var i = new_list.indexOf(element)
            if (i >= 0){
                new_list.splice(i, 1)
                }
        });
        put_names_in(new_list)
    })
}
function put_names_in (names_list ){
// put names in
        const textbox = document.querySelector('.basic-editor')
        var namesString = names_list.join('\n')
        textbox.innerText = namesString
    
    
        const inputEvent = new Event('input', { bubbles: true })
        textbox.dispatchEvent(inputEvent)
        const blurEvent = new Event('blur', { bubbles: true })
        textbox.dispatchEvent(blurEvent)
}

