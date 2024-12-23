const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColosr = document.getElementById("toggle-colors");

const rootStyle = document.documentElement.style;


// cambiar entre temas
toggleTheme.addEventListener('click', ()=>{
	document.body.classList.toggle('dark');
	if(toggleIcon.src.includes('moon-stars-fill.svg')){
		toggleIcon.src='assets/icons/sun.svg'
		toggleText.textContent='Light Mode'
	}else{
		toggleIcon.src='assets/icons/moon-stars-fill.svg'
		toggleText.textContent='Dark Mode'
	};
})


toggleColosr.addEventListener('click', (e)=>{
	rootStyle.setProperty("--primary-color", e.target.dataset.color)
});