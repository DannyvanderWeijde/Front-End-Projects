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

function setupPagination (items, container, pagesPerRow) {
    let pageCount = Math.ceil(items.length / pagesPerRow)  
    container.innerHTML = ""

    for (let i = 1; i < pageCount + 1; i++) {
        let button = makeButton(i, items)
        container.appendChild(button)
    }
}

function makeButton (page, items) {
    let button = document.createElement("button")
    button.innerText = page

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

displayList(listItems, listElm, rows, currentPage)
setupPagination(listItems, pagination, rows) 