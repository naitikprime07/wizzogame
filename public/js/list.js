let swiperFn=()=>{
	let str="";
	let swiperJson=listJson.slice(40,46);
	swiperJson.forEach((item,i)=>{
	  str+=`<div class="swiper-slide" onclick="jumpLink('game.html?game=${item.id}')">
	  <img src="${item.thumb}" alt="">
	 <div class="BottomBox">
		    <img class="iconimg" src="${item.thumb}" alt="">
			<div class="BottomBox-content">
			<p>${item.title}</p>
			<p class="desc">${item.description}</p>	
			</div>
		</div>
	  </div>`
	})
	$('.swiper-wrapper').innerHTML = str;
}

swiperFn()

let masonryFun = () => {
	let num = window.innerWidth > 960 ? 6 : 6;
	let masonryJson = listJson.splice(0,num);
	let str = "";
	masonryJson.forEach(item => {
		str += `<div class="smallList" onclick=jumpLink("game.html?game=${item.id}")>
		<img src="${item.thumb}" alt="">
		<div class="BottomBox">
		    <img class="iconimg" src="${item.thumb}" alt="">
			<div class="BottomBox-content">
			<p>${item.title}</p>
			<p class="desc">${item.description}</p>	
			</div>
		</div>
	</div>`
	})
	$('.masonry1').innerHTML = str;
}
masonryFun()


let masonryTwoFun = () => {
	let num = window.innerWidth > 960 ? 8 : 9;
	let masonryJson = listJson.splice(0,num);
	let str = "";
	masonryJson.forEach(item => {
	str += `<div class="smallList" onclick=jumpLink("game.html?game=${item.id}")>
		<img src="${item.thumb}" alt="">
		<p>${item.category} Game</p>
		<p>${item.title}</p>
	</div>`
	})
	$('.masonry2').innerHTML = str;
}
masonryTwoFun()


let masonryshiFun = () => {
	let num = window.innerWidth > 960 ? 8 : 9;
	let masonryJson = listJson.splice(0,num);
	let str = "";
	masonryJson.forEach(item => {
	str += `<div class="smallList" onclick=jumpLink("game.html?game=${item.id}")>
		<img src="${item.thumb}" alt="">
		<p>${item.category} Game</p>
		<p>${item.title}</p>
	</div>`
	})
	$('.masonry12').innerHTML = str;
}
masonryshiFun()

let masonryThreeFun = () => {
	let num = window.innerWidth > 960 ? 6 : 6;
	let masonryJson = listJson.splice(0,num);
	let str = "";
	masonryJson.forEach(item => {
		str += `<div class="smallList" onclick=jumpLink("game.html?game=${item.id}")>
		<img src="${item.thumb}" alt="">
		<div class="BottomBox">
		    <img class="iconimg" src="${item.thumb}" alt="">
			<div class="BottomBox-content">
			<p>${item.title}</p>
			<p class="desc">${item.description}</p>	
			</div>
		</div>
	</div>`
	})
	$('.masonry3').innerHTML = str;
}
masonryThreeFun()


let masonryFourFun = () => {
	let num = window.innerWidth > 960 ? 6 : 6;
	let masonryJson = listJson.splice(0,num);
	let str = "";
	masonryJson.forEach(item => {
		str += `<div class="smallList" onclick=jumpLink("game.html?game=${item.id}")>
		<img src="${item.thumb}" alt="">
		<div class="BottomBox">
		    <img class="iconimg" src="${item.thumb}" alt="">
			<div class="BottomBox-content">
			<p>${item.title}</p>
			<p class="desc">${item.description}</p>	
			</div>
		</div>
	</div>`
	})
	$('.masonry4').innerHTML = str;
}
masonryFourFun()




let masonrysixFun = () => {
	let num = window.innerWidth > 960 ? 6 : 6;
	let masonryJson = listJson.splice(0,num);
	let str = "";
	masonryJson.forEach(item => {
		str += `<div class="smallList" onclick=jumpLink("game.html?game=${item.id}")>
		<img src="${item.thumb}" alt="">
		<div class="BottomBox">
		    <img class="iconimg" src="${item.thumb}" alt="">
			<div class="BottomBox-content">
			<p>${item.title}</p>
			<p class="desc">${item.description}</p>	
			</div>
		</div>
	</div>`
	})
	$('.masonry6').innerHTML = str;
}
masonrysixFun()
