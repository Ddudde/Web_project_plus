let tid;
document.addEventListener("DOMContentLoaded",function(){
	adr1.onclick = function(event) {
		window.scrollTo(0,choc.offsetTop - 100);
	}
	adr2.onclick = function(event) {
		window.scrollTo(0,cooookie.offsetTop - 100);
	}
	adr3.onclick = function(event) {
		window.scrollTo(0,drozh.offsetTop - 100);
	}
	document.onscroll = progr;
	for(let el of document.querySelectorAll('#elem'))
	{
		el.onmouseenter = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'flex';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'block';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'inline-block';
			progr();
		};
		el.onmouseleave = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'none';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'none';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'none';
			progr();
		};
	}
	for(let el of document.querySelectorAll('#elem1'))
	{
		el.onmouseenter = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'flex';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'block';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'inline-block';
			progr();
		};
		el.onmouseleave = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'none';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'none';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'none';
			progr();
		};
	}
});
window.onload = progr;
function progr()
{
	let proc = ((window.pageYOffset + window.innerHeight)/(k1.offsetTop+k1.offsetHeight)) / 0.0296;
	prog.style.width = proc + '%';
}