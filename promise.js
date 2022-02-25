const emps =[
    {ename: 'Tristan',email:'tristan@gmail.com'},
    {ename: 'Jawad',email:'jawad@gmail.com'},
    {ename: 'Laksmi',email:'llaksmi@gmail.com'},
]

function getAllEmps(){
    setTimeout(() =>{
        let result ='';
        emps.forEach((emp,index)=>{
            result+=`<li> ${emp.ename}</li>`;
        });
      
        document.body.innerHTML=result;
    },1000)
}

// i am promising that if you het good marks you will be rewarded
// or if you fail you have to retake the test
// promise object properties
// pending
// fullfilled
// rejected
//  supports properties state and result
// while a promise object is pendig status result is undefined
// while a promise object is fullfilled the result is a value
//  while a promise object is rejected, the result is an error object
// this can be catch() function will be fired

function createEmp(newEmp){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        emps.push(newEmp);
        const error=false;
            if(!error){
                resolve();
            }else{
                reject('error: something went wrong')
            }
    },2000)
 });
}

getAllEmps();

createEmp({ename: 'Arnold',email:'arnold@gmail.com'},getAllEmps).then(getAllEmps)
.catch((err)=> console.log(err));