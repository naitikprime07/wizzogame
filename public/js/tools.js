const $ = (str) => {
	return document.querySelector(str);
}


const jumpLink = (str) => {
	window.location.href = str
}

const randomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomToFixedNum = (min, max) => {
	return (Math.random() * (max - min + 0) + min).toFixed(1);
}

const getRandomColor = function () {
	return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}

const stop=()=>{
	var mo=function(e){passive: false ;};
	document.body.style.overflow='hidden';
	document.addEventListener("touchmove",mo,false);
}

const move=()=>{
	var mo=function(e){passive: false };
	document.body.style.overflow='';
	document.removeEventListener("touchmove",mo,false);
}

const getArrayItems = (arr, num) => {
	var temp_arr = arr.slice(0);
	var return_arr = [];
	for (var i = 0; i < num; i++) {
		if (temp_arr.length > 0) {
			var arrIndex = Math.floor(Math.random() * temp_arr.length);
			return_arr[i] = temp_arr[arrIndex];
			temp_arr.splice(arrIndex, 1)
		} else {
			break;
		}
	}
	return return_arr;
}

function lazyImg() {
    const img = document.querySelectorAll(".lazy")
    const callback = en => {
        en.forEach(item => {
            if (item.isIntersecting) {
                const imgs = item.target
                const dataSrc = imgs.getAttribute("data-src")
                setTimeout(() => {
                    imgs.setAttribute('src', dataSrc)
                }, 500)
                observer.unobserve(imgs)
            }
        })
    }
    const observer = new IntersectionObserver(callback)
    img.forEach(item => {
        observer.observe(item)
    })
}

function throttle(func, wait){
    let previous = 0;
    return function(){
        let now = Date.now(), context = this, args = [...arguments];
        if(now - previous > wait){
            func.apply(context, args);
            previous = now;
        }    
    }        
}