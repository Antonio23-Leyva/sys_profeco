// const click = document.getElementById("btnCagar");



function getAllProducts() {
let url = 'http://localhost:3000/sys/profeco/products/all';
        fetch(url)
            .then(response => response.json())
            .then(data => viewData(data))
            .catch( error => console.log(error))

        const viewData = (data) => {
            console.log(data);
            let body = "";
            for (var i = 0; i < data.length; i++) {
                body += `<tr>    
        <td>${data[i].id_product}</td>
        <td>${data[i].name}</td>
        <td>${data[i].description}</td>
        <td>${data[i].price}</td>
        <td>${data[i].available}</td>
        <td>${data[i].size}</td>
        <td>${data[i].quantity}</td> 
        <td>${data[i].category}</td>
        <td>${data[i].fk_product}</td>
        </tr>`
            }
            document.getElementById('data').innerHTML = body
        }
    }