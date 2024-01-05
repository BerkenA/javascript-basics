const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
const petContainer = document.querySelector(".pet-container");
console.log(petContainer);


// Create a html variable to hold our html in it when we use the loop

// Loop over the array
// change the innerHTML
// square brackets are used for arrays

const totalItemsPets = pets.length;

console.log(totalItemsPets);

let html ="";

for(let i = 0; i < totalItemsPets; i++) {
    console.log(pets[i].colour);
    console.log(pets[i].age);
    html += `
        <div>
            <p style="color: ${pets[i].colour}" >Colour : ${pets[i].colour}</p>
            <h2>Age: ${pets[i].age}</h2>
            <p>Friendly: ${pets[i].friendly ? "Yes its friendly" : "No its not friendly"}</p>
        </div>
    `;
    console.log(html);
}

petContainer.innerHTML = html;