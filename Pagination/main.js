const listItems = new Array(
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22"
);

const listElm = document.getElementById("list")
const pagination = document.getElementById("pagination")

let currentPage = 1
let rows = 5
let btns = new Array()

function displayList (items, container, pagesPerRow, page) {
    container.innerHTML = ""
    page--

    let itemsStart = pagesPerRow * page
    let itemsEnd = itemsStart + pagesPerRow
    let paginatedItems = items.slice(itemsStart, itemsEnd)

    paginatedItems.forEach ((item) => {
        let itemElm = document.createElement("div")

        itemElm.classList.add("item")
        itemElm.innerText = item

        container.appendChild(itemElm)
    })
}

function setupPagination (items, listElm, container, pagesPerRow) {
    let pageCount = Math.ceil(items.length / pagesPerRow)  
    container.innerHTML = ""
    makeArrowButton("first", container, items, listElm, rows)
    makeArrowButton("previous", container, items, listElm, rows)

    for (let i = 1; i < pageCount + 1; i++) {
        let button = makeButton(i, items)
        container.appendChild(button)
    }

    makeArrowButton("next", container, items, listElm, rows)
    makeArrowButton("last", container, items, listElm, rows)
}

function makeButton (page, items) {
    let button = document.createElement("button")
    button.innerText = page
    btns.push(button)

    if (currentPage === page) button.classList.add("active")

    button.addEventListener("click", function () {
        currentPage = page
        displayList(items, listElm, rows, currentPage)

        let currentActiveBtn = document.querySelector(".pageNumbers button.active")
        currentActiveBtn.classList.remove("active")
    
        button.classList.add("active")
    })

    return button
}

function arrowBtnFunction(type, currentActiveBtn) {
    let btnSettings = new Array()

    switch (type) {
        case "first": 
            btnSettings["currentPage"] = 1
            btnSettings["condition"] = true
            btnSettings["siblingBtn"] = btns[0]
            break

        case "previous": 
            btnSettings["currentPage"] = currentPage - 1
            btnSettings["condition"] = currentPage > 1
            btnSettings["siblingBtn"] = currentActiveBtn.previousSibling
            break

        case "next": 
            btnSettings["currentPage"] = currentPage + 1
            btnSettings["condition"] = currentPage < rows
            btnSettings["siblingBtn"] = currentActiveBtn.nextElementSibling
            break

        case "last": 
            btnSettings["currentPage"] = rows
            btnSettings["condition"] = true
            btnSettings["siblingBtn"] = btns[btns.length - 1]
            break
    }

    return btnSettings
}

function setArrowBtnContent(type, button) {
    switch (type) {
        case "first": 
            button.innerText = "Start"
            break

        case "previous": 
            button.innerText = "<"
            break

        case "next": 
            button.innerText = ">"
            break

        case "last": 
            button.innerText = "End"
            break
    }
}

function makeArrowButton(type, container, items, listElm, rows) {
    let button = document.createElement("button")
    setArrowBtnContent(type, button)

    button.addEventListener("click", function () {
        let currentActiveBtn = document.querySelector(".pageNumbers button.active")
        let btnSettings = arrowBtnFunction(type, currentActiveBtn)
        if (btnSettings["condition"]) {
            currentPage = btnSettings["currentPage"]

            displayList(items, listElm, rows, currentPage)
    
            currentActiveBtn.classList.remove("active")
            btnSettings["siblingBtn"].classList.add("active")
        }
    })

    container.appendChild(button)
}

displayList(listItems, listElm, rows, currentPage)
setupPagination(listItems, listElm, pagination, rows) 