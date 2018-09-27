const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');
const button4 = document.getElementById('fourth');

first.onclick = () => {
	alert(Math.floor(Math.random() * 100))
};

second.onclick = () => {
    prompt('scrivi')
};
