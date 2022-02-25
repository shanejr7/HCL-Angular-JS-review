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

// Async and await make promise easier to write
// async makes a function returna promise
// await makes a function wait for a promise

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


async function test(){
    await createEmp({ename: 'Arnold',email:'arnold@gmail.com'},getAllEmps).then(getAllEmps);
    getAllEmps();
}


test();

