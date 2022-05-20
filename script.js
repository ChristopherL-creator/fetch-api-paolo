

// // fetch('./student-data.json').then(responseCallBack).then(resultCallBack)
// fetch('./student-data.json').then(responseCallBack).then(resultCallBack).catch(manageError);

// function responseCallBack(response){
// console.log('Response',  response);
// return response.text();
// }


// function resultCallBack(result){
// console.log('Result', result);
// }

// function manageError(error) {
//     console.error(error)
// }

// console.log('prima');

// fetch('./student-data.json').then((resp)=>resp.json(), ).then((res)=> console.log('Risultato ', res));

// setTimeout(logDopo, 0);

// setTimeout(logDopo, 10);

// setTimeout(logDopo, 100);

// setTimeout(logDopo, 1000);

// setTimeout(logDopo, 10000);


// function logDopo() {
//     console.log('dopo')
// }


fetch('https://62860d1f96bccbf32d6e2c06.mockapi.io/students').then(responseCallBack).then(resultCallBack).catch(manageError);

function responseCallBack(response){
console.log('Response',  response);
return response.json();
}


function resultCallBack(result){
console.log('Result', result);
const array = convertResultInArrayOfStudents(result);
console.log('array', result)
displayStudents(array)
}

function manageError(error) {
    console.error(error)
}


function displayStudents(arrayOFStudents) {
    const arrayContainer = document.createElement('div');

    for (let i = 0; i < arrayOFStudents.length; i++) {
        const student = arrayOFStudents[i];
        const studentContainer = document.createElement('div');
        const span = document.createElement('span');
        const img = document.createElement('img');
        img.classList.add('imglink');
        const node = document.createTextNode(' Name: ' + student.name + ';'); 
        const nodeSurname = document.createTextNode(' Surname: ' + student.surname + ';');
        const nodeDob = document.createTextNode(' Days to birthday: ' + student.getDaysToBirthday() + '.');
        
        span.appendChild(img);
        span.appendChild(node);
        span.appendChild(nodeSurname);
        span.appendChild(nodeDob);
        studentContainer.appendChild(span);
        arrayContainer.appendChild(studentContainer);
    }

    document.body.appendChild(arrayContainer);
}


function convertResultInArrayOfStudents(result) {
    arrayOFStudents = result.map(obj => Student.fromObj(obj));
    return arrayOFStudents;
}