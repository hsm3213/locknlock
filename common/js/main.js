// 팝업
const popup = function(target){
	const btnPop = document.querySelector('[data-popup="' + target + '"]');
	const popupEl = document.querySelector('#' + target);
	const btnClose = popupEl.querySelector('.ico_l_close02');
	const popClose = popupEl.querySelector('.btn_pop');
	let popupDimmed;

	function createdDimmed(){
		const createDiv = document.createElement('div');
		createDiv.classList.add('popup_dimmed');
		document.querySelector('body').appendChild(createDiv);
	}
	function removeDimmed(){
		const dimmed = document.querySelector('.popup_dimmed');
		dimmed.remove();
	}
	function popupOpen(){
		popupDimmed = document.querySelectorAll('.popup_dimmed');
		if(popupDimmed.length === 0) createdDimmed();
		document.body.classList.add('scroll_lock');
		popupEl.classList.add('open');
		if(!(popupEl.classList.contains('alert'))){
			popupEl.querySelector('.p_title').focus();
		}
		if(!(popupEl.classList.contains('nobtn'))){
			popClose.addEventListener('click', popupClose);
		}
	}
	function popupClose(){
		popupDimmed = document.querySelectorAll('.popup_dimmed');
		popupEl.classList.remove('open');
		btnPop.focus();
		if(document.querySelectorAll('.popup.open').length === 0){
			removeDimmed();
			document.body.classList.remove('scroll_lock');
		}
	}
	btnPop.addEventListener('click', popupOpen);
	if(btnClose){
		btnClose.addEventListener('click', popupClose);
	}
};

// 탭
const tabContent = function(){
	const tabs = document.querySelectorAll('.tab');
	tabs.forEach(function(el){
		const tabBtn = el.querySelectorAll('.list_tab li button');
		const tabCont = el.querySelectorAll('.cont_tab > .box');
		tabBtn.forEach(function(btn, idx){
			btn.addEventListener('click', function(){
				tabBtn.forEach(function(btnAll) {
					btnAll.setAttribute('aria-selected', false);
				});
				btn.setAttribute('aria-selected', true);
				tabCont.forEach(function(cont){
					cont.hidden = true;
					tabCont[idx].hidden = false;
				});
			});
		});
	});

	const tabsSub = document.querySelectorAll('.tab_sub');
	tabsSub.forEach(function(el){
		const tabSubBtn = el.querySelectorAll('.list_tab_sub li button');
		const tabSubCont = el.querySelectorAll('.box_sub');
		tabSubBtn.forEach(function(btnSub, idx){
			btnSub.addEventListener('click', function(){
				tabSubBtn.forEach(function(btnAll) {
					btnAll.setAttribute('aria-selected', false);
				});
				btnSub.setAttribute('aria-selected', true);
				tabSubCont.forEach(function(cont){
					cont.hidden = true;
					tabSubCont[idx].hidden = false;
				});
			});
		});
	});
};

// 셀렉트 박스
const selectBox = function(){
	const selects = document.querySelectorAll('.select');
	selects.forEach(function(obj){
		const btnSelect = obj.querySelector('[role="button"]');
		const listSelect = obj.querySelector('[role="listbox"]');
		const listOpt = obj.querySelectorAll('[role="option"]');
		function selectOpen(){
			obj.classList.add('open');
			listSelect.style.cssText = 'display:block;';
			btnSelect.setAttribute('aria-expanded', true);
			btnSelect.setAttribute('aria-haspopup', true);
		}
		function selectClose(){
			obj.classList.remove('open');
			listSelect.style.cssText = 'max-height:0;opacity:0;';
			listSelect.style.cssText = 'display:none;';
			btnSelect.setAttribute('aria-expanded', false);
			btnSelect.setAttribute('aria-haspopup', false);
		}
		btnSelect.addEventListener('click', function(e){
			selectOpen();
			document.body.addEventListener('click', function(e){
				if(e.target != btnSelect){
					selectClose();
				}
			});
			listOpt.forEach(function(el){
				el.addEventListener('click', function(){
					listOpt.forEach(function(elem){
						elem.setAttribute('aria-selected', false);
					});
					this.setAttribute('aria-selected', true);
					btnSelect.innerHTML = this.innerHTML;
					selectClose();
					obj.classList.add('selected');
				});
			});
		});
	});
};

// 인풋 텍스트 눈 모양
function iptTextHide(){
	const btnIptToggle = document.querySelector('.ipt_text.eye button');
	btnIptToggle.addEventListener('click', function(){
		if(this.classList.contains('ico_l_eye')){
			this.classList.remove('ico_l_eye');
			this.classList.add('ico_l_eye02');
		} else {
			this.classList.add('ico_l_eye');
			this.classList.remove('ico_l_eye02');
		}
	});
};

// 좋아요 버튼
function likeCount(){
	const btnLike = document.querySelector('.btn_like.type02');
	btnLike.addEventListener('click', function(){
		this.classList.toggle('on');
	});
}