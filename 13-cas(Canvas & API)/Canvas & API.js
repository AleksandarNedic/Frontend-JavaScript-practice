//Vezbe


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(user => {
    for (let i = 0; i < user.length; i++) {
        console.log(user[i].username);
    }
})
//===================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(user => {
    let ulElement = document.querySelector('#lista');
    for (let i = 0; i < user.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = user[i].title;
        liElement.style.fontStyle = 'italic';
        ulElement.appendChild(liElement);
    }
})
//=================================================
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(user => {
    let divElement = document.createElement('div');
    for (let i = 0; i < user.products.length; i++) {
        let pElement = document.createElement('p');
        pElement.textContent = user.products[i].title;
        divElement.appendChild(pElement);
        document.body.append(divElement);

    }
})
//==================================
fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response => response.json())
.then(user => {
    console.log(user.email);
})
//========================================
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(user => {
    console.log(user);
    let divElement = document.createElement('div');
    for (let i = 0; i < user.length; i++) {
        if(user[i].completed === true) {
            let pElement = document.createElement('p');
            pElement.textContent = user[i].title;
            divElement.appendChild(pElement);
        }
    }
    document.body.append(divElement);
})
//========================
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response => response.json())
.then(pokemon => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < pokemon.results.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = pokemon.results[i].name;
        ulElement.appendChild(liElement);
    }
    document.body.append(ulElement);
})
//=====================================
fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon.height, pokemon.weight);
    let divElement = document.createElement('div');
    let pElement = document.createElement('p');
    pElement.textContent = `${pokemon.name}:height:${pokemon.height}, weight: ${pokemon.weight}`;
    console.log(pElement)
    divElement.appendChild(pElement);
    document.body.append(divElement);
})
//===================================
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    console.log(data);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.products.length; i++) {
        console.log(data.products[i]);
        if(data.products[i].price > 500) {
            let li = document.createElement('li');
            li.textContent = `${data.products[i].title} ${data.products[i].price}$` ;
            ulElement.appendChild(li);
        }

    }
    document.body.append(ulElement);
})
//=========================================
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
          if (data[i].address.suite.includes('Suite')) {
              let liElement = document.createElement('li');
              liElement.textContent = `${data[i].name} ${data[i].address.suite}`
              ulElement.appendChild(liElement);
          }
        }
      document.body.append(ulElement);

})
//======================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.includes('qui')) {
            let liElement = document.createElement('li');
            liElement.textContent = `${data[i].title}:${data[i].body}`
            ulElement.appendChild(liElement);
        }
    }
    document.body.append(ulElement);
})
//==============================================
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    let div = document.querySelector('#users')
    for (let i = 0; i < data.length; i++) {
        let pElement = document.createElement('p');
        pElement.textContent = `${data[i].name} ${data[i].email}`;
        div.appendChild(pElement);

    }
})
//============================================
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(todos => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].completed === true) {
            let liElement = document.createElement('li');
            liElement.textContent = `${todos[i].title}`;
            liElement.classList.add('completed');
            ulElement.appendChild(liElement);
        }
    }
    document.body.append(ulElement);
})
//=====================================================
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    let pElement = document.querySelector('#avgPrice')
    let sum = 0;
    for (let i = 0; i < data.products.length; i++) {
        sum += data.products[i].price;
    }
    let avgPrice = sum / data.products.length;
    pElement.textContent = `Prosjecna cijena svih proizvoda je: ${avgPrice}`;
    console.log(avgPrice);
})
//==============================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < posts.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = posts[i].title
        .split(' ')
            .slice(0, 3)
        .join(' ');
        ulElement.appendChild(liElement);
    }
      document.body.append(ulElement);
})
//============================================
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    for (let i = 0; i < users.length; i++) {
        let firstName = users[i].name.split(' ')[0];
        if (firstName.length > 5) {
            let pElement = document.createElement('p');
                pElement.textContent = firstName;
            document.body.append(pElement);
               
        }
    }
    })
//=============================================
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response => response.json())
.then(data => {
    let pokemonList = data.results;
    for (let i = 0; i < pokemonList.length; i++) {
        fetch(pokemonList[i].url)
        .then(response => response.json())
        .then(pokemon => {
            if (pokemon.base_experience > 50) {
                console.log(pokemon.base_experience);
            }
        })
    }
})
//===============================================
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    let divElement = document.createElement('div');
    for (let i = 0; i < data.products.length; i++) {
        let pElement = document.createElement('p');
        pElement.textContent = `${data.products[i].title} ${data.products[i].price}`;
        pElement.style.color = 'blue';
        divElement.appendChild(pElement);
    }
    document.body.append(divElement);

})
//========================================
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    let selectElement = document.createElement('select');
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement('option');
        option.textContent = `${data[i].name}`;
        selectElement.appendChild(option);
        divElement.appendChild(selectElement);
    }
    document.body.append(divElement);

})
//================================================
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        for (let i = 0; i < posts.length; i++) {

            let div = document.createElement('div');
            let title = document.createElement('h3');
            title.textContent = posts[i].title;
            let body = document.createElement('p');
            body.textContent = posts[i].body.slice(0, 20) + '...';
            div.appendChild(title);
            div.appendChild(body);
            document.body.appendChild(div);
        }

    });
//=================================
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    let divElement = document.createElement('div');
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.products.length; i++) {
        let firstLetter = data.products[i].title.slice(0, 1);
        if (firstLetter === 'S') {
            let liElement = document.createElement('li');
            liElement.textContent = `FAAAAAAAAAAAAAAAAAAAA${data.products[i].title}`;
            ulElement.appendChild(liElement);
            console.log('RADI')

        }
    }
    divElement.appendChild(ulElement);
    document.body.append(divElement);
})