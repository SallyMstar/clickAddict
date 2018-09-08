// Starter page for newProject js

const catName1 = "Harley";
const catName2 = "Pogo";
let counter1 = document.getElementById("counter1").textContent;
let counter2 = document.getElementById("counter2").textContent;
let count1 = 0;
let count2 = 0;


document.getElementById("catName1").textContent = catName1;
document.getElementById("catName2").textContent = catName2;

const display = function(position,count) {
	if(count === 1) {
		counter = count + " click";		
	} else {
	counter = count + " clicks";
	}
	document.getElementById("counter"+position).textContent = counter;

}

// when the cat image is clicked, increment the counter
// and update the display to show the number of clicks
$('#subject1 img').click(function(e) {
	count1++;
	display(1,count1);
});

$('#subject2 img').click(function(e) {
	count2++;
	display(2, count2);
});