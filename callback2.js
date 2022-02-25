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

function createEmp(newEmp,callback){
    setTimeout(()=>{
        emps.push(newEmp);
        callback();
    },2000)
}

getAllEmps();

createEmp({ename: 'Arnold',email:'arnold@gmail.com'},getAllEmps);