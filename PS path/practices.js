//alert('Starting....');
console.log('Starting....');


// Adding GET property to object

student = {
	name: "Eudys",
	lastname: "Bautista",
	age: "32"
};


console.log('logging student...');
console.log(student);


console.log('Adding GET property');

Object.defineProperty(student, 'fullName', {

	get: function(){
		return this.name +' '+ this.lastname
	}
});


console.log('logging student...');
console.log(student);

console.log('logging fullName student...');
console.log(student.fullName);
