import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
console.log(myCricketCoach.getDailyWorkout());

let myGolfcoach = new GolfCoach();
console.log(myGolfcoach.getDailyWorkout());


let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfcoach);

for(let tempOfCoaches of theCoaches){
    console.log(tempOfCoaches.getDailyWorkout());

}