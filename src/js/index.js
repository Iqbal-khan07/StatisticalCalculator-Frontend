(function () {
        let data = [{
            "fldName": "Tokyo",
            "fldLat": 35.6850,
            "fldLong": 139.7514,
            "fldCountry": "Japan",
            "fldAbbreviation": "JPN",
            "fldCapitalStatus": "primary",
            "fldPopulation": 35676000
        }, {
            "fldName": "New York",
            "fldLat": 40.6943,
            "fldLong": -73.9249,
            "fldCountry": "United States",
            "fldAbbreviation": "USA",
            "fldCapitalStatus": "NA",
            "fldPopulation": 19354922
        }, {
            "fldName": "Mexico City",
            "fldLat": 19.4424,
            "fldLong": -99.1310,
            "fldCountry": "Mexico",
            "fldAbbreviation": "MEX",
            "fldCapitalStatus": "primary",
            "fldPopulation": 19028000
        }, {
            "fldName": "Los Angeles",
            "fldLat": 34.1139,
            "fldLong": -118.4068,
            "fldCountry": "United States",
            "fldAbbreviation": "USA",
            "fldCapitalStatus": "NA",
            "fldPopulation": 12815475
        }, {
            "fldName": "Dhaka",
            "fldLat": 23.7231,
            "fldLong": 90.4086,
            "fldCountry": "Bangladesh",
            "fldAbbreviation": "BGD",
            "fldCapitalStatus": "primary",
            "fldPopulation": 12797394
        }, {
            "fldName": "Buenos Aires",
            "fldLat": -34.6025,
            "fldLong": -58.3975,
            "fldCountry": "Argentina",
            "fldAbbreviation": "ARG",
            "fldCapitalStatus": "primary",
            "fldPopulation": 12795000
        }, {
            "fldName": "Cairo",
            "fldLat": 30.0500,
            "fldLong": 31.2500,
            "fldCountry": "Egypt",
            "fldAbbreviation": "EGY",
            "fldCapitalStatus": "primary",
            "fldPopulation": 11893000
        }, {
            "fldName": "Beijing",
            "fldLat": 39.9289,
            "fldLong": 116.3883,
            "fldCountry": "China",
            "fldAbbreviation": "CHN",
            "fldCapitalStatus": "primary",
            "fldPopulation": 11106000
        }, {
            "fldName": "Manila",
            "fldLat": 14.6042,
            "fldLong": 120.9822,
            "fldCountry": "Philippines",
            "fldAbbreviation": "PHL",
            "fldCapitalStatus": "primary",
            "fldPopulation": 11100000
        }, {
            "fldName": "Moscow",
            "fldLat": 55.7522,
            "fldLong": 37.6155,
            "fldCountry": "Russia",
            "fldAbbreviation": "RUS",
            "fldCapitalStatus": "primary",
            "fldPopulation": 10452000
        }, {
            "fldName": "Paris",
            "fldLat": 48.8667,
            "fldLong": 2.3333,
            "fldCountry": "France",
            "fldAbbreviation": "FRA",
            "fldCapitalStatus": "primary",
            "fldPopulation": 9904000
        }, {
            "fldName": "Seoul",
            "fldLat": 37.5663,
            "fldLong": 126.9997,
            "fldCountry": "Korea, South",
            "fldAbbreviation": "KOR",
            "fldCapitalStatus": "primary",
            "fldPopulation": 9796000
        }]

        let table = document.querySelector("table");
        let tableHeadings = Object.keys(data[0]);
        createTableHead(table, tableHeadings);

        for(let i=0; i < data.length; i++){
            let cityData = Object.values(data[i]);
            let tableRow = table.insertRow();
            for(let content of cityData) {
                let cell = tableRow.insertCell();
                cell.appendChild(document.createTextNode(content));
            }
        }


})();

function createTableHead(table, tableHeadings){
    let thead = table.createTHead();
    let row = table.insertRow(0);
    for(let heading of  tableHeadings){
        let th = document.createElement("th");
        let text = document.createTextNode(heading.substring(3, heading.length));
        th.appendChild(text);
        row.appendChild(th);
    }
    thead.appendChild(row)
}

