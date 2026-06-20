//JavaScript vežbe – switch (osnovni nivo)
//Brojevi + switch
let number = 1;
switch(number){
    case 1:
        console.log('One');
        break;

}
let grade = 5;
switch (grade) {
    case 5:
        console.log('Five');
        break;
}
let day = 3;
switch (day) {
    case 3:
        console.log('Wednesday');
        break;
}
let month = 12;
switch (month) {
    case 12:
        console.log('December');
        break;
}
let statusCode = 2;
switch (statusCode) {
    case 2:
        console.log('success');
        break;
}

//String + switch
let color = 'red';
switch (color) {
    case 'red':
        console.log('stop')
        break;
}
let language = 'JS';
switch (language) {
    case 'JS':
        console.log('JavaScript');
        break;
}
let login = 'admin';
switch (login) {
    case 'admin':
        console.log('Administrator');
        break;
}
let city = 'Belgrade';
switch (city) {
    case 'Belgrade':
        console.log('Capital city');
        break;
}
let status = 'online';
switch (status) {
    case 'online':
        console.log('User is active');
        break;
}

//Boolean + switch
let jeOnline = true;
switch (jeOnline) {
    case true:
        console.log('Online');
        break;
}
let isAdult = false;
switch (isAdult) {
    case false:
        console.log('Underage')
        break;
}
let haveAccess = true;
switch (haveAccess) {
    case true:
        console.log('Access');
        break;
}

//Array + switch
let grades = [5, 4 ,3];
switch (grades[0]) {
    case 5:
        console.log('excellent');
        break;
}
let statuse = ['Online', 'Offline'];
switch (statuse[1]) {
    case 'Offline':
        console.log('User is not active');
        break;
}
let programmingLanguages =  ['HTML', 'CSS', 'JavaScript'];
switch (programmingLanguages[2]) {
    case 'JavaScript':
        console.log('JS programming language');
        break;
}

//Kombinovane vežbe
let  number1 = 0;
switch (number1) {
    case 0:
        console.log('Zero');
        break;
}

day = 'saturday';
switch (day) {
    case 'saturday':
        console.log('Weekend');
        break;
}
let logIn = 'user';
switch (logIn) {
    case 'user':
        console.log('common user');
        break;
}
let signal = 'green';
switch (signal) {
    case 'green':
        console.log('Start');
        break;
}
let result = 3;
switch (result) {
    case 3:
        console.log('Good');
        break;
}
let errorCode = 404;
switch (errorCode) {
    case 404:
        console.log('Site is not found');
        break;
}
let plan = 'premium';
switch (plan) {
    case 'premium':
        console.log('Premium user');
        break;
}
let time = 'night';
switch (time) {
    case 'night':
        console.log('Good Night!');
        break;
}
let tip = 'mobile';
switch (tip) {
    case 'mobile':
        console.log('Mobile device');
        break;
}

