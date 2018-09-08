// ------------- the cats -----------------
// Create the cat constructor
function Cat(name,pic) {
	this.name = name,
	this.pic = pic,
	this.count = 0
};

// Create an array to hold the cats
const cats = [];

// Create the cat objects
let harley = new Cat("Harley","img/harley.jpg");
let pogo = new Cat("Pogo","img/pogo.jpg");
let nibbles = new Cat("Nibbles","img/poppy.png");
let spook = new Cat("Spook","img/spooky.png");
let spike = new Cat("Spike","img/spike.png");

// Add the cat objects to the cats array
cats.push(harley, pogo, nibbles, spook, spike);

console.log(cats);  // just double-checking that the cats were added properly

//-------------- the page display ------------

document.body.innerHTML = "";  // Clear the page

// For each cat in the array, create the choices
for(let cat of cats) {
	// create the menu of names to select which cat to view
	let catName = cat.name;
	let selector = document.createElement('div');
		selector.id = "subject";
		selector.textContent = catName;
		document.body.append(selector);
		
    selector.addEventListener('click', (function(catName) {
        return function() {
        	let options = document.querySelectorAll('#profile');
        	console.log(options);
        	for(option of options) {
	        	if(option.textContent.includes(catName)) {
		        	$(option).css({'display':'block'});
	        	} else {
	        		$(option).css({'display':'none'});
        	};

        };
    }})(cat.name));
	};



	// add instructions
	let header = document.createElement('header');
	header.textContent = "Select a name above to view a cat or click the blue header to view all.  Then click the pics to vote for your favs!";
	document.body.append(header);

	header.addEventListener('click', (function() {
		let allCats = document.querySelectorAll('#profile');
		$(allCats).css({'display': "inline-block"});
	}))


// For each cat in the array, create the display
for(let cat of cats) {
	// assign copies of the cat variables
	let catName = cat.name;
	let catCount = cat.count;
	let catPic = cat.pic;


	// create the image element for each cat
	let pic = document.createElement('div');
		pic.innerHTML = "<img src = "+catPic+">";

	// create the counter element for each cat
	let counter = document.createElement('span');
		counter.id = "counter";
		counter.textContent = catCount + " clicks";

	// create the profile element for each cat
	let profile = document.createElement('div');
		profile.id = "profile";

		// apply the class to set initial profile view to hidden
		profile.className = 'hidden';

		// add the cat name, pic, and counter to the profile
		profile.textContent = catName;
		profile.append(pic);
		profile.append(counter);

	// add the complete cat profile to the page
	document.body.append(profile);


// ----- add the click event & tally for each cat
    pic.addEventListener('click', (function(catCount) {
        return function() {
        	catCount ++;
			if(catCount === 1) {
				tally = catCount + " click";		
			} else {
				tally = catCount + " clicks";
			}
			counter.textContent = tally;
			console.log(tally);
        };
    })(cat.count));

// ----- end tally function

};