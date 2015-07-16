//empty objects literal with value added using . notation
var myself = {};
var people = [];
var btn = document.getElementById('submit');
var btn2 = document.getElementById('online');

myself.name = "Jason";
myself.age = "51";
myself.email = "evans5161@sbcglobal.net";


console.log(myself.name);

var otherPerson = {
	name : "Bob",
	age : "51",
	email : "noemail2@email.net"
};

console.log(otherPerson);

function Person(name, age, email){
	this.name = name,
	this.age = age,
	this.email = email

};
// object prototype
Person.prototype.hello = function(){
	console.log("My name is " + this.name);
}


//object prototpye
Person.prototype.job = function(job){
	this.job = job;
}


Person.prototype.online = function(){
	var status;
    var num = Math.random();
    if(num > .5){
        status = 'online';
    }else {
        status = 'offline';
    }
    this.status = status;
}

function randomStatus(){
    for(var i = 0; i < people.length; i++){
        people[i].online();
}
}

btn2.addEventListener('click', function(){
    randomStatus();

    console.log(userStatus());

});


people.push(new Person("Bob", "55", "noemail3@email.net"));
people.push(new Person("Jane", "50", "noemail4@email.net"));
people.push(new Person("Dylan", "12", "noemail5@noemail.net"));

//Bob.hello();
//Bob.job("Coder");
//console.log(Bob);
//console.log(Jane);
//Jane.hello();
//console.log(people);



submit.addEventListener('click', function(event){
	event.preventDefault();
	var	name = document.getElementById('name').value; 
	var	age = document.getElementById('age').value;
	var	email = document.getElementById('email').value;
	var job = document.getElementById('job').value;

	var newPerson = new Person(name, age, email);
	newPerson.job(job);

	people.push(newPerson);
		
	console.log(newPerson);

});




function userStatus(){
	var onlineList = [];

	for(var i = 0; i < people.length; i++){
   		if(people[i].hasOwnProperty('status') && people[i].status === 'online'){
   	 		var person = people[i];
            onlineList.push(person);
            
   		}

	}
	return onlineList;
}
	



