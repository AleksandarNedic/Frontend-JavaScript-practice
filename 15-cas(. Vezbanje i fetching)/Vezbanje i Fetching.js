//Vezbe

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
    for (const user of users) {
        console.log(user.name);
    }
})
//====================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => {
    let ulElement = document.createElement('ul');
    for (const post of posts) {
        let ilElement = document.createElement('li');
        ilElement.textContent = post.title;
        ulElement.appendChild(ilElement);
    }
    document.body.appendChild(ulElement);
})
//===========================================
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(todos => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < todos.length; i++) {
       if (todos[i].completed === true) {
           let liElement = document.createElement('li');
            liElement.textContent = todos[i].title;
            liElement.style.backgroundColor = todos[i].completed === true ? 'green' : 'red';
            ulElement.appendChild(liElement);
       }
       document.body.appendChild(ulElement);
}})
//=============================================
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].price > 500) {
            let liElement = document.createElement('li');
            liElement.innerHTML = `${data.products[i].title}<br>${data.products[i].price}`;
            ulElement.appendChild(liElement);

        }
    }
    document.body.appendChild(ulElement);
})
//=======================================
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    let divElement = document.createElement('div');
    for (let i = 0; i < data.products.length; i++) {
       let pElement = document.createElement('p');
       pElement.innerHTML = `${data.products[i].title}<br>${data.products[i].price};`
        divElement.appendChild(pElement);

        }
    document.body.appendChild(divElement);
})
//=======================================
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.results.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = data.results[i].name;
        ulElement.appendChild(liElement);
    }
    document.body.appendChild(ulElement);
})
//========================================
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(res => res.json())
.then(data => {
    let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.innerHTML = `Name:${data.name}<br>Weight:${data.weight}<br>Height:${data.height}`;
      divElement.appendChild(pElement);
      document.body.appendChild(divElement);
})
//=============================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(breeds => {
    let ulElement = document.createElement('ul');
    for (const breed of breeds) {
        let liElement = document.createElement('li');
        liElement.textContent = breed.name;
        ulElement.appendChild(liElement);
    }
    document.body.appendChild(ulElement);
})
//==========================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    console.log(data)
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        if (data[i].affection_level >= 4) {
            let pElement = document.createElement('p');
            pElement.innerHTML = `Name:${data[i].name}<br>Affection_level ${data[i].affection_level}`
            divElement.appendChild(pElement);
        }

    }
    document.body.appendChild(divElement);
})
//========================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(breeds => {
    let selectElement = document.createElement('select');
    for (let breed of breeds) {
        let option = document.createElement('option');
        option.textContent = breed.name;
        selectElement.appendChild(option);
    }
    document.body.appendChild(selectElement);
})
//=================================
fetch('https://jsonplaceholder.typicode.com/users?limit=5')
.then(res => res.json())
.then(users => {
    let divElement = document.createElement('div');
    for (let i = 0; i < users.length; i++) {
        let pElement = document.createElement('p');
        pElement.innerHTML = `Name:${users[i].name}<br>Email:${users[i].email}`;
        divElement.appendChild(pElement);
    }
    document.body.appendChild(divElement);
})
//=================================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => {
    let ulElement = document.createElement('ul');
    for (let post of posts) {
        if (post.title.toLowerCase().includes('qui')) {
            let liElement = document.createElement('li');
            liElement.textContent = post.title;
            ulElement.appendChild(liElement);
        }
    }
    document.body.append(ulElement)
})
//===================================
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        let sum = 0;
        for (let i = 0; i < data.products.length; i++) {
            sum += data.products[i].price;
        }

        let avgPrice = sum / data.products.length;
        let divElement = document.createElement('div');
        let pElement = document.createElement('p');
        pElement.textContent = `Prosječna cijena svih proizvoda: ${avgPrice}`;
        divElement.appendChild(pElement);
        document.body.appendChild(divElement);
    });
//================================================
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    console.log(data)
       let divElement = document.createElement('div');
       for (let i = 0; i < data.products.length; i++) {
           if (data.products[i].title.startsWith('A')) {
               let h2Element = document.createElement('h2');
               h2Element.textContent = data.products[i].title;
               divElement.appendChild(h2Element);
               let pElement = document.createElement('p');
               pElement.textContent = data.products[i].price;
               divElement.appendChild(pElement);
           }
       }
       document.body.appendChild(divElement);
       // Nema proizvoda koji pocinju sa S xD
})
//=======================================
fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(pokemon => {
    for (let i = 0; i < pokemon.results.length; i++) {
        fetch(pokemon.results[i].url)
        .then(res => res.json())
        .then(url => {
            if (url.base_experience > 50) {
                console.log(`Pokemoni sa base_experience > 50:${pokemon.results[i].name}`);
            }
        })
    }})
//==========================================================================================
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
    let selectElement = document.createElement('select');
    for (let user of users) {
        let option = document.createElement('option');
        option.textContent = user.name;
        selectElement.appendChild(option);
    }
    document.body.appendChild(selectElement);
})
//========================================
fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
.then(breeds => {
    let divElement = document.createElement('div');
    for (let i = 0; i < breeds.length; i++) {
        if (breeds[i].temperament.includes('Intelligent')) {
            let pElement = document.createElement('p');
            pElement.innerHTML = `Ime:${breeds[i].name}<br>Temperament:${breeds[i].temperament}`;
            divElement.appendChild(pElement);

        }
    }
    document.body.appendChild(divElement);

})
//===============================================
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].rating >= 4) {
            let liElement = document.createElement('li');
            liElement.innerHTML = `Ime:${data.products[i].title};<br>Rating:${data.products[i].rating}`;
            ulElement.appendChild(liElement);
        }
    }
    document.body.appendChild(ulElement);
})
//==========================================
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(res => res.json())
.then(pokemon => {
    console.log(pokemon);
    for (let i = 0; i < pokemon.results.length; i++) {
        fetch(pokemon.results[i].url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let divElement = document.createElement('div');
            let pElement = document.createElement('p');
            pElement.innerHTML = `Ime:${data.name}<br>Type:${data.types[0].type.name}`
            divElement.appendChild(pElement);
            document.body.append(divElement);
        })
    }
})
//========================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => {
    for (let post of posts) {
        let divElement = document.createElement('div');
        let h2Element = document.createElement('h2');
        h2Element.textContent = post.title;
        divElement.appendChild(h2Element);
        let pElement = document.createElement('p');
        pElement.textContent = post.body.slice(0, 20);
        divElement.appendChild(pElement);
        document.body.append(divElement);
    }

})
//==========================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(breeds => {
    console.log(breeds);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < breeds.length; i++) {
        let lifeSpan = Number(breeds[i].life_span.split(' - ')[1]);
        if (lifeSpan >= 15) {
            let liELement = document.createElement('li');
            liELement.innerHTML = `${breeds[i].name}<br>Life_span:${breeds[i].life_span}`;
            ulElement.appendChild(liELement);
        }
    }
    document.body.appendChild(ulElement);
})
//==============================
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.products.length; i++) {
        let liElement = document.createElement('li');
        liElement.innerHTML = `Ime:${data.products[i].title}<br>Cena:${data.products[i].price}`;
        ulElement.appendChild(liElement);
    }
    document.body.appendChild(ulElement);
})
//====================================
fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(res => res.json())
.then(pokemon => {
    let divElement = document.createElement('div');
    let pElement = document.createElement('p');
    pElement.innerHTML = `Ime:${pokemon.name}<br>
    Visina: ${pokemon.height}<br>
    Tezina: ${pokemon.weight}`;
    divElement.appendChild(pElement);
    document.body.append(divElement);
})
//=======================================
fetch('https://jsonplaceholder.typicode.com/users/')
.then(res => res.json())
.then(users => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < users.length; i++) {
        if (users[i].address.city.startsWith('S')) {
            let liElement = document.createElement('li');
            liElement.innerHTML = `${users[i].name} <br> Grad: ${users[i].address.city}}`
            ulElement.appendChild(liElement);

        }
    }
    document.body.appendChild(ulElement);
})
//=================================================
fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(breeds => {
        let ulElement = document.createElement('ul');

        for (let i = 0; i < breeds.length; i++) {
            if (breeds[i].adaptability >= 5) {
                let liElement = document.createElement('li');
                liElement.innerHTML = `
                ${breeds[i].name} <br>
                Temperament: ${breeds[i].temperament}`;
                ulElement.appendChild(liElement);
            }
        }
        document.body.appendChild(ulElement);
    });