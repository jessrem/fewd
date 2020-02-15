
var questions = [
"What\’s your favorite war?",
"What\’s the next food that will be invented?",
"What is the optimal number of limbs?",
"Do you know of some weird niche drama?", 
"Would the world be better with a dress code?", 
"If you had to calculate, how many vitamins are in multivitamins?",
"If you could make any board game life size, which would it be?",
"Would you go on a one-way mission to Mars?", 
"If you could pick any silly weapon from a movie, which would it be?", 
"Is a hot dog a sandwich?",
"If you could have any Pokémon as a pet, which would you pick?", 
"How bad would it be if you didn\’t have wrists?", 
"You are dead. A witch is bringing you back to life. What are the five items you put on the pentagram?",
"You manifest as a form of weather. What do you pick?",
"Who is the worst CEO of all time?",
]

function currentQuestion(){
	var randomNumber = Math.floor(Math.random() * (questions.length));

	document.getElementById("questionDisplay").innerHTML = questions[randomNumber];
}