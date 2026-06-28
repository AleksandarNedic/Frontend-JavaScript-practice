//Vezbe

fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = data[i].name;
        ulElement.appendChild(li);
    }
    document.body.appendChild(ulElement);
})
//=========================================

fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    console.log(data);
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        let pElement = document.createElement('p');
        pElement.innerHTML = `${data[i].name}<br> 
        Metric:${data[i].weight.metric}`;
        divElement.appendChild(pElement);
        console.log(data[i].weight.metric);
    }
   document.body.appendChild(divElement);

})
//=======================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        if (data[i].temperament.includes('Affectionate')) {
            let pElement = document.createElement('p');
            pElement.innerHTML = `${data[i].name}<br>
             ${data[i].temperament}`;
            divElement.appendChild(pElement);
        }
    }
    document.body.appendChild(divElement);
})
//=========================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let selectElement = document.createElement('select')
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement('option');
        option.textContent = data[i].name;
        selectElement.appendChild(option);
        divElement.appendChild(selectElement);
    }
    document.body.appendChild(divElement);
})
//================================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        let splitAge = data[i].life_span.split(' - ');
        let minAge =  Number(splitAge[0]);
        console.log(minAge);
        if (minAge > 15) {
            let pElement = document.createElement('p');
            pElement.innerHTML = `${data[i].name}<br>
             ${data[i].life_span}`
            divElement.appendChild(pElement);
        }
    }
     document.body.appendChild(divElement);
})
//============================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        if (data[i].adaptability >= 5) {
            let li = document.createElement('li');
            li.innerHTML = `${data[i].name}<br>
              ${data[i].adaptability}`;
            ulElement.appendChild(li);
        }
    }
    document.body.appendChild(ulElement);
})
//=======================================================
function sortNames (names) {
    return names.sort((a, b) => a.name.localeCompare(b.name));
}
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let sortedNames = sortNames(data);
    let ulElement = document.createElement('ul');
    for (let i = 0; i < sortedNames.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = sortedNames[i].name;
        ulElement.appendChild(li);
    }
    document.body.appendChild(ulElement);
})
//========================================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let sum = 0;
    let divElement = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        let splitMetric = data[i].weight.metric.split(' - ');
        let min = Number(splitMetric[0]);
        let max = Number(splitMetric[1]);
        let avg = (min + max) / 2;
        sum += avg;

    }
    let avgWeight = sum / data.length;
    let pELement = document.createElement('p');
    pELement.innerHTML = `Prosjecna tezina svih macaka:${avgWeight}%`;
    divElement.appendChild(pELement);

    document.body.appendChild(divElement);
})
//==============================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        if (data[i].dog_friendly >= 4) {
            let ilElement = document.createElement('li');
            ilElement.innerHTML = `${data[i].name}<br>${data[i].dog_friendly}`
            ulElement.appendChild(ilElement);
        }
    }
    document.body.appendChild(ulElement);
})
//==================================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(data => {
    let allTemperaments = [];
    let ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let splitTemperaments = data[i].temperament.split(', ')
        allTemperaments.push(...splitTemperaments);
    }
    let fillteredTemepraments = [...new Set(allTemperaments)];
    let liElement = document.createElement('li');
    liElement.innerHTML = `${fillteredTemepraments}`;
    ulElement.appendChild(liElement);
    document.body.appendChild(ulElement);
})
//=====================================
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
    console.log(users);
    let divElement = document.createElement('div');
    for (let i = 0; i < users.length; i++) {
           let pElement = document.createElement('p');
           pElement.innerHTML = `Name:${users[i].name}<br>
           City:${users[i].address.city}`
        divElement.appendChild(pElement);
    }
    document.body.appendChild(divElement);
})
//=========================================
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(todos => {

    let ulElement = document.createElement('ul');
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i].userId);
       if (todos[i].userId === 1) {
           let liElement = document.createElement('li');
           liElement.innerHTML = `${todos[i].userId}<br>
            Todo:${todos[i].title}`;
            ulElement.appendChild(liElement);

       }
     }
    document.body.appendChild(ulElement);
})
//===============================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(breeds => {
    let divElement = document.createElement('div');
    for (let i = 0; i < breeds.length; i++) {
        if (breeds[i].temperament.includes('Intelligent')) {
            let pElement = document.createElement('p');
            pElement.innerHTML = `Ime rase:${breeds[i].name}<br>
            Temperament:${breeds[i].temperament}`
            divElement.appendChild(pElement);
        }
    }
    document.body.appendChild(divElement);
})
//=========================================================
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => {

    for (let i = 0; i < posts.length; i++) {
            if (posts[i].id <= 5) {
                let divElement = document.createElement('div');
                let h2Element = document.createElement('h2');
                h2Element.innerHTML = `${posts[i].title}`
                divElement.appendChild(h2Element);
                let bodyElement = document.createElement('p');
                bodyElement.innerHTML = `${posts[i].body}`;
                divElement.appendChild(bodyElement);
                document.body.appendChild(divElement);
            }
    }

})
//===========================================
fetch('https://api.thecatapi.com/v1/breeds')
.then(res => res.json())
.then(breeds => {
    let divElement = document.createElement('div');
    for (let i = 0; i < breeds.length; i++) {
        if (breeds[i].affection_level >= 4 ) {
            let pElement = document.createElement('p');
            pElement.innerHTML = `Ime:${breeds[i].name}<br>
            Ljubaznost:${breeds[i].affection_level}`
            divElement.appendChild(pElement);
        }

    }
    document.body.appendChild(divElement)
})


