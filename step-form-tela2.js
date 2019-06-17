



// botões trilho passos
var passo1 = document.getElementById('passo1');
var passo2 = document.getElementById('passo2');
var passo3 = document.getElementById('passo3');
var passo4 = document.getElementById('passo4');
var passo5 = document.getElementById('passo5');

var passo1Checkpoint = true;
var passo2Checkpoint = false;
var passo3Checkpoint = false;
var passo4Checkpoint = false;
var passo5Checkpoint = false;
var passo6Checkpoint = false;

var passo1stepItens = passo1.children.item(0);
var passo1Border = passo1stepItens.children.item(0);
var passo1Number = passo1stepItens.children.item(1);
var passo1LineAfter = passo1stepItens.children.item(3);

var passo2stepItens = passo2.children.item(0);
var passo2LineBefore = passo2stepItens.children.item(0);
var passo2Border = passo2stepItens.children.item(1);
var passo2Number = passo2stepItens.children.item(2);
var passo2LineAfter = passo2stepItens.children.item(4);

var passo3stepItens = passo3.children.item(0);
var passo3LineBefore = passo3stepItens.children.item(0);
var passo3Border = passo3stepItens.children.item(1);
var passo3Number = passo3stepItens.children.item(2);
var passo3LineAfter = passo3stepItens.children.item(4);

var passo4stepItens = passo4.children.item(0);
var passo4LineBefore = passo4stepItens.children.item(0);
var passo4Border = passo4stepItens.children.item(1);
var passo4Number = passo4stepItens.children.item(2);
var passo4LineAfter = passo4stepItens.children.item(4);
















function step1Click() {
	passo1stepItens.classList.remove('step-before');
	passo1stepItens.classList.remove('step-after-pass');
	passo1stepItens.classList.remove('step-select');
	passo1stepItens.classList.add('step-select');

	passo2stepItens.classList.remove('step-before');
	passo2stepItens.classList.remove('step-select');
	passo2stepItens.classList.remove('step-after-pass');
	passo2stepItens.classList.add('step-after-pass');

	passo3stepItens.classList.remove('step-before');
	passo3stepItens.classList.remove('step-select');
	passo3stepItens.classList.remove('step-after-pass');
	passo3stepItens.classList.add('step-after-pass');

	passo4stepItens.classList.remove('step-before');
	passo4stepItens.classList.remove('step-select');
	passo4stepItens.classList.remove('step-after-pass');
	passo4stepItens.classList.add('step-after-pass');


	document.querySelector('.tabsWrapper').children[0].scrollIntoView(true);
	cont = 0;
};

passo1.addEventListener('click', step1Click);



















function step2Click() {
	passo1stepItens.classList.remove('step-before');
	passo1stepItens.classList.remove('step-after-pass');
	passo1stepItens.classList.remove('step-select');
	passo1stepItens.classList.add('step-before');

	passo2stepItens.classList.remove('step-before');
	passo2stepItens.classList.remove('step-select');
	passo2stepItens.classList.remove('step-after-pass');
	passo2stepItens.classList.add('step-select');

	passo3stepItens.classList.remove('step-before');
	passo3stepItens.classList.remove('step-select');
	passo3stepItens.classList.remove('step-after-pass');
	passo3stepItens.classList.add('step-after-pass');

	passo4stepItens.classList.remove('step-before');
	passo4stepItens.classList.remove('step-select');
	passo4stepItens.classList.remove('step-after-pass');
	passo4stepItens.classList.add('step-after-pass');



	document.querySelector('.tabsWrapper').children[1].scrollIntoView(true);
	cont = 1;
};

passo2.addEventListener('click', step2Click);



















function step3Click() {
	passo1stepItens.classList.remove('step-before');
	passo1stepItens.classList.remove('step-after-pass');
	passo1stepItens.classList.remove('step-select');
	passo1stepItens.classList.add('step-before');

	passo2stepItens.classList.remove('step-before');
	passo2stepItens.classList.remove('step-select');
	passo2stepItens.classList.remove('step-after-pass');
	passo2stepItens.classList.add('step-before');

	passo3stepItens.classList.remove('step-before');
	passo3stepItens.classList.remove('step-select');
	passo3stepItens.classList.remove('step-after-pass');
	passo3stepItens.classList.add('step-select');

	passo4stepItens.classList.remove('step-before');
	passo4stepItens.classList.remove('step-select');
	passo4stepItens.classList.remove('step-after-pass');
	passo4stepItens.classList.add('step-after-pass');



	document.querySelector('.tabsWrapper').children[2].scrollIntoView(true);
	cont = 2;
};

passo3.addEventListener('click', step3Click);




















function step4Click() {
	passo1stepItens.classList.remove('step-before');
	passo1stepItens.classList.remove('step-after-pass');
	passo1stepItens.classList.remove('step-select');
	passo1stepItens.classList.add('step-before');

	passo2stepItens.classList.remove('step-before');
	passo2stepItens.classList.remove('step-select');
	passo2stepItens.classList.remove('step-after-pass');
	passo2stepItens.classList.add('step-before');

	passo3stepItens.classList.remove('step-before');
	passo3stepItens.classList.remove('step-select');
	passo3stepItens.classList.remove('step-after-pass');
	passo3stepItens.classList.add('step-before');

	passo4stepItens.classList.remove('step-before');
	passo4stepItens.classList.remove('step-select');
	passo4stepItens.classList.remove('step-after-pass');
	passo4stepItens.classList.add('step-select');



	document.querySelector('.tabsWrapper').children[3].scrollIntoView(true);
	cont = 3;
};

passo4.addEventListener('click', step4Click);



















// final botões trilho passos
























// slides auto scroll

var cont, slide, btnNext, btnBack, tabsWrapper;
cont = 0;
tabsWrapper = document.querySelector('.tabsWrapper').children;
btnNext = document.querySelector('#btnAvancar');
btnBack = document.querySelector('#btnVoltar');

function nextSlide() {
	cont += 1;
	if (cont > 3) {
		console.log('end');
		cont = 3;
	} else {
		console.log(cont);
		tabsWrapper[cont].scrollIntoView(true);
	};
};

function backSlide() {
	cont -= 1;
	if (cont < 0) {
		console.log('start');
		cont = 0;
	} else {
		console.log(cont);
		tabsWrapper[cont].scrollIntoView(true);	
	};
};




// btnNext.addEventListener('click', nextSlide);
// btnBack.addEventListener('click', backSlide);




btnNext.addEventListener('click', function() {
	nextSlide();
	if (cont === 0) {
		step1Click();
	} else if (cont === 1) {
		step2Click();
	} else if (cont === 2) {
		step3Click();
	} else if (cont === 3) {
		step4Click();
	};
});





btnBack.addEventListener('click', function() {
	backSlide();
	if (cont === 0) {
		step1Click();
	} else if (cont === 1) {
		step2Click();
	} else if (cont === 2) {
		step3Click();
	} else if (cont === 3) {
		step4Click();
	};	
});
















document.querySelector('.closeIntroBtn').addEventListener('click', function() {
	document.querySelector('.introMsgContainer').style.display = 'none';
});

















document.querySelector('.cancelarProdutoBtn').addEventListener('click', function() {
	this.style.display = 'none';
	document.querySelector('.cancelMsg').style.display = 'flex';
});