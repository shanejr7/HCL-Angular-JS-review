for(let i=0; i<3;i++){
    console.log(i);
}

console.log("-----------------")

let reviews: number[] = [44,21,33,42];

for(let i =0; i < reviews.length; i++){
    console.log(reviews[i]);
}


console.log("-----------------")

let sports: string[] = ["golf","basketball","soccer","football"];

sports.push("gaming");

for(let tempSport of sports){
    console.log(tempSport);
}