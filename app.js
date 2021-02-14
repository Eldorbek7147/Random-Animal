const btn_cat = document.getElementById('btn_cat');
const cat_animal = document.getElementById('cat_animal');
const btn_dog = document.getElementById('btn_dog');
const dog_animal = document.getElementById('dog_animal');
const btn_fox = document.getElementById('btn_fox');
const fox_animal = document.getElementById('fox_animal');

btn_cat.addEventListener('click', getRandomCat);
btn_dog.addEventListener('click', getRandomDog);
btn_fox.addEventListener('click', getRandomFox);


function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_animal.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			dog_animal.innerHTML = `<img src=${data.url} alt="dog" />`
		});
}

function getRandomFox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_animal.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}