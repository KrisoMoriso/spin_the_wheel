var list_1 = [
    "Adam",
    "Franek",
    "Iza",
    "Janek T",
    "Maja",
    "Karolina",
    "Krzysztof J",
    "Laura",
    "Marcel",
    "Maria",
    "Mateusz",
    "Michał",
    "Mihei",
    "Monika",
    "Oliwier",
    "Zuza"
]
var list_2 = [
    "Janek B",
    "Felek",
    "Julian",
    "Jakub W",
    "Jeremi",
    "Kajetan",
    "Olek B",
    "Piotr",
    "Jakub M",
    "Nadia",
    "Weronika",
    "Rafal",
    "Wojtek",
    "Hania",
    "Alex G",
    "Ksawery",
    "Krzysztof Z"
]
browser.storage.local.get("excluded_names").then(x =>{
    if (x == null){
        browser.storage.local.set({excluded_names:[]})
    }
})

browser.storage.local.get("list_number").then(x =>{
    if (x == null){
        browser.storage.local.set({list_number: 3})
    }
})

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
    button_exclude.textContent = "exclude from list"
    page_div.appendChild(button_exclude)
    button_exclude.addEventListener('click', button_exclude_listener)

    var button_reset = document.createElement("button")
    button_reset.className = "my-button q-btn"
    button_reset.style.position = "flex"
    button_reset.textContent = "reset list"
    page_div.appendChild(button_reset)
    button_reset.addEventListener('click', () =>{
        browser.storage.local.set({excluded_names:[]})
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
        browser.storage.local.set({list_number: 1})
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
        browser.storage.local.set({list_number:2})
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
        browser.storage.local.set({list_number: 3})
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

async function button_exclude_listener(){
    var textbox_exclude = document.querySelector('.my-textbox')
    var name_to_exclude = textbox_exclude.value
    browser.storage.local.get("excluded_names").then(x => {
        var excluded_names_list = x.excluded_names
        excluded_names_list.push(name_to_exclude)
        browser.storage.local.set({excluded_names:excluded_names_list})

        browser.storage.local.get("list_number").then(list_number => {
            console.log(list_number)
            if (list_number.list_number == "1"){
                console.log(1)
                button_list_1_listener()
            } else if (list_number.list_number == "2"){
                console.log(2)
                button_list_2_listener()
            } else if (list_number.list_number == "3"){
                console.log(3)
                button_list_3_listener()
            }
        })
    })
}