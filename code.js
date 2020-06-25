// let clickfunc = () => {
//     console.log("button clicked")
// }

// let anotherFunc = () => {
//     alert('Ive been clicked')
//     button.removeEventListener('click', clickfunc)
// }

// const button = document.querySelector('button')

// button.onclick = clickfunc
// button.onclick = anotherFunc

// button.addEventListener('click', clickfunc)
// button.addEventListener('click', anotherFunc)

// window.addEventListener('resize', function(evt) => {
//   console.log(evt)
//   console.log(window.innerWidth)
// })

// button.addEventListener('click', event => {
//   console.log('event')
// })

let button = document.querySelector("#add-element");

const createCard = () => {
	let newCard = document.createElement("div");
	newCard.setAttribute("class", "card");

	let newH2 = document.createElement("h2");
	newH2.innerText = "Title";

	let newP = document.createElement("p");
	newP.append(content)

	let newEp = document.createElement("p");
	newEp.setAttribute("class", "extra");
	newEp.innerText = extra;

	newCard.append(newH2, newP, newEp);

	let cards = document.getElementById("cards");
	cards.append(newCard);
};

button.addEventListener("click", () => {
	let titleInput = document.getElementById("card-title");
	let contentInput = document.getElementById("card-content");
    let extraInput = document.getElementById("card-extra");
    console.dir(titleInput.value)



	let newCard = createCard(titleInput.value, contentInput.value, extraInput.value);
	document.getElementById("cards").append(newCard);
});
