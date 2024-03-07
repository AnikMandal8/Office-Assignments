// const fetchData = ()=>{
//     console.log("fetch");
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data=>data.json())
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
// }

// let ul = document.getElementById('list');
let table = document.querySelector('#table');
async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    data.map(item=>{
        // let li = document.createElement('li');
        // li.innerHTML=item.name;
        // ul.appendChild(li);

        let name = document.createElement('td'); 
        let email = document.createElement('td');
        let website = document.createElement('td'); 
        let tr = document.createElement('tr');

        name.innerHTML = item.name;
        email.innerHTML = item.email;
        website.innerHTML = item.website;
        tr.appendChild(name);
        tr.appendChild(email);
        tr.appendChild(website);
        table.appendChild(tr)
    })
}