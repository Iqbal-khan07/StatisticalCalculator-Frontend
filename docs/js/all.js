(function () {
    fetch("../data.json").then(function (response) {
        return response.json()
    }).then(function (data) {
        let table = document.querySelector("table");
        let tableHeadings = Object.keys(data[0]);
        createTableHead(table, tableHeadings);

        for(let i=0; i < data.length; i++){
            let cityData = Object.values(data[i]);
            let tableRow = table.insertRow();
            for(let content of cityData) {
                let cell = tableRow.insertCell()
                cell.appendChild(document.createTextNode(content))
            }
        }

    })

})();

function createTableHead(table, tableHeadings){
    let thead = table.createTHead()
    let row = table.insertRow(0)
    for(let heading of  tableHeadings){
        let th = document.createElement("th")
        let text = document.createTextNode(heading.substring(3, heading.length));
        th.appendChild(text);
        row.appendChild(th);
    }
    thead.appendChild(row)
}

