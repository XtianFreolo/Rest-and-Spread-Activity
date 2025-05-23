/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

const animalSightings = ["Lion", "Tiger", "Possum", "Wooly Mamoth", "Sasquatch"]; 

function trackSightings(...animals) {
	console.log("Animal Sightings in the Sanctuary:");
	animals.forEach(animal => {
		console.log(`- ${animal}`);
});
}
trackSightings(...animalSightings);



/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log("Protected Habitats in the Sanctuary:");
protectedHabitats.forEach(habitat => {
	console.log(`- ${habitat}`);
})

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const  updatedRhinoStatus = {
	...rhinoStatus,
	population: 1000,
	status: "Critically Endangered"
};

console.log("Updated Rhino Status:");
console.log("Population:", updatedRhinoStatus.population);
console.log("Status:", updatedRhinoStatus.status);


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};


// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const genetics = {
	dna: "LionDNA123",
};


const lionProfileUpdated = {
	...lionProfile,
	 genetics
};

console.log(`Lion Profile Updated:`);
console.log(lionProfileUpdated);

/*
 * Observations:
 * TODO: Explain here.
 * 
 * This demonstrates that shallow copying using the spread operator does NOT clone nested objects—
 * it simply copies their references. To prevent this shared mutation, a deep copy would be needed.
 * 
 *
 */

/* Task 5: Analyze Ecosystem Health */


const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

const ecosystemHealthUpdated = {
	...ecosystemHealth, 
	foodSupply: {
		...ecosystemHealth.foodSupply,
	}
}
  
// Modify something in a nested object looks like this

ecosystemHealthUpdated.foodSupply.herbivores = "Scarce";
ecostystemHealthUpdated.waterQuality = "Poor";


console.log("Ecosystem Health Updated:");
console.log("Water Quality:", ecosystemHealthUpdated.waterQuality);
console.log("Food Suply of Herbivores:", ecosystemHealthUpdated.foodSupply.herbivores);

// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */
