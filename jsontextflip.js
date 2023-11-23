const objSpace = document.querySelector('.obj-space');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');


let objDiv = document.createElement('div');
objDiv.classList.add('obj-div');
objSpace.appendChild(objDiv);


let currentPar = 0;



document.addEventListener('DOMContentLoaded', () => {
	fetchJSONforPar();
	onoffFflipBtns();
	flipBtns();
});


function fetchJSONforPar(){
	
	fetch('https://baconipsum.com/api/?type=all-meat&paras=5&start-with-lorem=1&format=json')
	.then(res => {
		return res.json();
	})
	.then(data => {
			console.log('working ' + data[`${currentPar}`]);
			objDiv.innerHTML = `<b>PARAGRAPH ${currentPar+1}:</b> ` + data[`${currentPar}`];
	})
	.catch(error => console.log(error));
}
			

function flipBtns(){
	currentPar;
	arrowLeft.addEventListener('click', () => {
			currentPar--;
			console.log(currentPar);
			fetchJSONforPar();
			onoffFflipBtns(currentPar);
		});
	arrowRight.addEventListener('click', () => {
			currentPar++;
			console.log(currentPar);
			fetchJSONforPar();	
			onoffFflipBtns(currentPar);
		});
	
};

function onoffFflipBtns(){

			if (currentPar == 0){
				console.log('cont-undef-left');
				arrowLeft.classList.add('arrow-invisible');
				arrowLeft.disabled = true;
			} else {
				arrowLeft.classList.remove('arrow-invisible');
				arrowLeft.disabled = false;
			}
			if 	(currentPar == 4){
				console.log('cont-undef-right');
				arrowRight.classList.add('arrow-invisible');
				arrowRight.disabled = true;
			} else {
				arrowRight.classList.remove('arrow-invisible');
				arrowRight.disabled = false;
			}

}


