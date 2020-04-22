const addClients = document.querySelector('.add-client');
const clientsList = document.querySelector('.clients')
const clients = JSON.parse(localStorage.getItem('clients')) || [];

function addClient(e){
    e.preventDefault();
    const name = this.querySelector("[name=name]").value;
    const number = this.querySelector("[name=number]").value; 
    const payment = this.querySelector("[name=payment]").value; 
    const vehicle = this.querySelector("[name=vehicle]").value; 
    
    const clientData = {
        name,
        number,
        payment,
        vehicle
    };
    clients.push(clientData);
    populateClient(clients, clientsList);
    localStorage.setItem('clients', JSON.stringify(clients));
    //console.table(clients)
    this.reset();
    this.name.focus();
}

// function deleteClient() {
//     for (let i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         var value = localStorage.removeItem(key);
//     }
// } 

function populateClient(items = [], detailsList) {
   detailsList.innerHTML = items.map((item, i) => {
        return `
        <tr>
            <td>${item.name}</td>
            <td>${item.number}</td>
            <td>${item.payment}</td>
            <td>${item.vehicle}</td>
            <td><input type="button" id="item${i}" value="Customer${i+1}"></td>
        </tr>
    `;
    }).join('');
}

addClients.addEventListener('submit', addClient);

populateClient(clients, clientsList);

