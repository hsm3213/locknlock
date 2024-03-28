const tabContent = function(){
	const tabs = document.querySelector('.head_tab');
	const tabBtn = tabs.querySelectorAll('ul li');
	const tabCont = document.querySelectorAll('.container .content');

	tabBtn.forEach(function(btn, idx){
		btn.addEventListener('click', function(){
			tabBtn.forEach(function(btnAll) {
				btnAll.classList.remove('on');
			});
			btn.classList.add('on');
			tabCont.forEach(function(cont){
				cont.classList.remove('on');
				tabCont[idx].classList.add('on');
			});
		});
	});
};