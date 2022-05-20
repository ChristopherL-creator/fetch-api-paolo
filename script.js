
//  quando ho tante lambda do un senso di lettura dal basso verso l'alto; 

// fetch('./student-data.json').then(responseCallBack).then(resultCallBack)
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


const responseCallBack = (response) => response.json(); 


//  fromObj prende un oggetto e ne crea classe con proprietà dell'oggetto. classe ha funzione in get, 
// che da date of birth; funzione in set, con cui settare dateofbirth, funzione get per daystobirth;
const createAvatarImgFromSrc = (src) => {
                                            const img = document.createElement('img'); 
                                            img.src = src; 
                                            img.classList.add('imglink');
                                            return img;
}
const createTextSpan = (text) => { 
    const span = document.createElement('span'); 
    //  posso chiamare funzione al posto della costante
    span.appendChild(document.createTextNode(text)); 
    return span; 
} 

const createStudentCard = (student) => { 
    const studentCard = document.createElement('div'); 
    studentCard.classList.add('student-card');
    studentCard.appendChild(createAvatarImgFromSrc(student.imageUrl));
    studentCard.appendChild(createTextSpan(' Name: ' + student.name + '; ' + 
                                           ' Surname: ' + student.surname + '; ' + 
                                           ' Days to birthday: ' + student.getDaysToBirthday() + '.')); 
    return studentCard;
} 

const createArrayOfStudentsCard = (arrayOfStudents) => arrayOfStudents.map(student => createStudentCard(student));


const displayStudents = (arrayOfStudents) => { 
    const arrayContainer = document.createElement('div');
    
    arrayContainer.append(...createArrayOfStudentsCard(arrayOfStudents));
    
    document.body.appendChild(arrayContainer);
}

const convertResultInArrayOfStudents = (result) => result.map(obj => Student.fromObj(obj)); 

const resultCallBack = (result) => displayStudents(convertResultInArrayOfStudents(result));  

const catchError = (error) => console.log(error); 

const initApp = () => fetch('https://62860d1f96bccbf32d6e2c06.mockapi.io/students') 
                     .then(responseCallBack) 
                     .then(resultCallBack) 
                     .catch(catchError);

initApp();

// function createTextSpan(text){ 
//     const span = document.createElement('span'); 
//  posso chiamare funzione al posto della costante
//     span.appendChild(document.createTextNode(text)); 
//     return span;
// }

// function displayStudents(arrayOfStudents) {
//     const arrayContainer = document.createElement('div');

    // for (let i = 0; i < arrayOfStudents.length; i++) {
    //     const student = arrayOfStudents[i];
        // const studentContainer = document.createElement('div');
    //     const studentContainer = createStudentCard(student)
    //     const img = document.createElement('img');
    //     img.classList.add('imglink');
    //     studentContainer.appendChild(img);
        // studentContainer.appendChild(createTextSpan(' Name: ' + student.name + ';' + 
        //                                             ' Surname: ' + student.surname + ';' + 
        //                                             ' Days to birthday: ' + student.getDaysToBirthday() + '.'));
    //     arrayContainer.appendChild(studentContainer);
    // } 
    // const arrayOfCard = createArrayOfStudentsCard(arrayOfStudents);
    // arrayContainer.append(...createArrayOfStudentsCard(arrayOfStudents));

    // document.body.appendChild(arrayContainer);
// }


// function convertResultInArrayOfStudents(result) {
//     arrayOFStudents = result.map(obj => Student.fromObj(obj));
//     return arrayOFStudents;
// }