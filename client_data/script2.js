    /*
    const text = "Hello World! Hey, hello!"
    const splitText = text.split(" ")

    const half = Math.ceil(splitText.length / 2);    

    const firstHalf = splitText.splice(0, half)
    const secondHalf = splitText.splice(-half)

    console.log('first:', firstHalf)
    console.log('second:' ,secondHalf)
    */
        class Client {
            constructor(name, nationality, vehicle) {
                this.name = name;
                this.nationality = nationality;
                this.vehicle = vehicle;
            }
            generateId(){
                const customerId = `${new Date().getFullYear()}-${this.name}${this.nationality}-${this.vehicle}`
                return customerId;
            }
        }

        class UI {
            addClientToList(client) {
                const list = document.getElementById('client-list');
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${client.name}</td>
                <td>${client.nationality}</td>
                <td>${client.vehicle}</td>
                <td>${client.generateId()}</td>
                `;

                list.appendChild(row);
            }
            
            showAlert(message, className){
                const div = document.createElement('div');
                div.className = `alert ${className}`;
                div.appendChild(document.createTextNode(message));
                const container = document.querySelector('.container');
                const form = document.querySelector('#client-form');
                container.insertBefore(div, form);
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                }, 3000);
            }

            clearFields(){
                document.getElementById('name').value = '';
                document.getElementById('nationality').value = '';
                document.getElementById('vehicle').value = '';
            }
            // storeData(client) {
            //     localStorage.setItem('clients', JSON.stringify(client))
            // }
        }

        //Event Listening
        document.getElementById('client-form').addEventListener('submit', function(e){
            //Get form values
            const name = document.getElementById('name').value ;
            const nationality = document.getElementById('nationality').value;
            const vehicle = document.getElementById('vehicle').value;
            

            //instantiate Client
            const client = new Client(name, nationality, vehicle);

            //Instantiate UI
            const ui = new UI();

            //Validate
            if(name === '' || nationality === '' || vehicle === '') {
                //Error alert
                ui.showAlert('Please fill in all fields' , 'error');
            } else {
                //const clients = JSON.parse(localStorage.getItem('clients')) || [];
                //Add Client to list
                ui.addClientToList(client);
                //ui.storeData(client);
                //show success
                ui.showAlert('Client Added', 'success');
                //Clear Fields
                ui.clearFields();
                this.name.focus()
            }
            e.preventDefault();
        })

