// imperative way of programming


let list=[1,2,3];

for(let i =0;i<list.length;i++){

    list[i] = list[i] +1;

}

console.log(list);

// declaritive

let list2 = list.map(function(item){return item+2});

console.log(list2);


// reduce takes single/accumlated value and the next time in the array

const sum = (a,x) => a + x;

let list3 = list.reduce(sum);

console.log(list3);

// concat
 let con = [1,2,3].concat([4,5,6]);
 console.log(con);

 // object assign
 const obj={num:2};
 const newObj = Object.assign({},obj);
 newObj.num =4;
 console.log(newObj);

 // predefined function call
 var obj1 ={num:5}

 let addToThis=function(x,y){

    return this.num+x+y;

 }

 console.log(addToThis.call(obj1,1,2));

 // predefined function apply => only for array

 let listx = [1,2,3];
 console.log(addToThis.apply(obj1,list2));