fetch("machines.json").then(function (response) {
    return response.json();
}).then(function (machines){
    let table = document.querySelector("#machines-table");
    let result = "";
    for(let machine of machines){
        result += `
            <tr>
                <td>${machine.id}</td>
                <td>${machine.name}</td>
                <td>${machine.ip}</td>
                <td>${machine.os}</td>
                <td>${machine.completed}</td>
                <td>${machine.difficulty}</td>
            </tr>
        `;
    }
    table.innerHTML = result;
})