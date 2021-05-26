var elems = [];
let itog = 0;
let kazna = 60000;
let mobile = true;
document.addEventListener("DOMContentLoaded",function(){
	updschet();
	pay.onclick = function(event) {
		if(itog == 0)
		{
			deshpoim();
			return;
		}
		if(itog > kazna)
		{
			visned();
			return;
		}
		verif();
	}
	chMob();
	window.onresize = chMob;
});
function updschet()
{
	itog = 0;
	for(let el of elems)
		itog += parseInt(el.querySelector('#kol').innerHTML) * parseInt(el.querySelector('#fix').innerHTML);
	smeta.innerHTML = itog;
	kazn.innerHTML = kazna;
}
function deshpoim()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	opok.style.display = 'block';
	podlova.onclick = function(event) {
		overlay.style.display = 'none';
	}
}
function visned()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	nomaney.style.display = 'block';
	okey.onclick = function(event) {
		overlay.style.display = 'none';
	}
}
function verif()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	warning.style.display = 'block';
	no.onclick = function(event) {
		overlay.style.display = 'none';
	}
	yes.onclick = function(event) {
		kazna -= itog;
		updschet();
		udachopl();
	}
}
function udachopl()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	udop.style.display = 'block';
	chor.onclick = function(event) {
		overlay.style.display = 'none';
	}
}
function toDesk()
{
	for(let el of elems)
	{
		let imager = el.querySelector('#imager');
		let over = imager.children[0];
		over.style.display = 'none';
		let kolvo = over.children[0];
		kolvo.style.margin = 'auto 0';
		kolvo.children[1].style.color = '#43484D';
		el.appendChild(kolvo);
		let zag = el.querySelector('#zag');
		let fix = zag.children[1];
		zag.removeChild(fix);
		fix.style.margin = 'auto 0';
		el.appendChild(fix);
	}
}
function toMobil()
{
	for(let el of elems)
	{
		let imager = el.querySelector('#imager');
		let over = imager.children[0];
		over.style.display = 'flex';
		let kolvo = el.children[3];
		el.removeChild(kolvo);
		kolvo.style.margin = 'auto';
		kolvo.children[1].style.color = '#FFF';
		over.appendChild(kolvo);
		let zag = el.querySelector('#zag');
		let fix = el.children[3];
		el.removeChild(fix);
		fix.style.margin = '0';
		zag.appendChild(fix);
	}
}
function chMob()
{
	if(window.innerWidth < 650 && !mobile)
	{
		mobile = true;
		toMobil();
	}
	if(window.innerWidth > 649 && mobile)
	{
		mobile = false;
		toDesk();
	}
}