
function myFunction() {
    var x, word;
    

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
var myWords = ["alcachofa", "colonia", "extremadura"];
var index = Math.round(Math.random()*(myWords.length-1));

function Game() {
	var word = myWords[index];
	console.log(word + ' ' + word.length)
	var progress = ''
	for (i = 0; i < word.length; i++) {
	
	    progress = progress + " _";
	}
	console.log(progress)
	document.getElementById("result").innerHTML = progress;
	var error = 0;
	function play() {
	
	    letter = document.getElementById("letter").value;
	    for (i = 0; i < word.length; i++) {
	        if(letter == word[i]){
	        
	            progress = progress.split(' ');
	            progress[i+1] = word[i];
	            progress = progress.join(' ');
	        }else if(i == word.length-1 && word.indexOf(letter) == -1){
	            error++;
	            console.log("Fail: " + letter + ' ' + error);
	        }
	    }
        document.getElementById("result").innerHTML = progress;
        var image = document.getElementById('myImage');
        switch (error){
            case 1:
                image.src = "hang.jpg";
                break;
            case 2:
                image.src = "head.jpg";
                break;
            case 3:
                image.src = "body.jpg";
                break;
            case 4:
                image.src = "arm.jpg";
                break;
            case 5:
                image.src = "arm2.jpg";
                break;
            case 6:
                image.src = "leg.jpg";
                break;
            case 7:
                image.src = "end.jpg";
                document.getElementById("result").innerHTML = word;
                break;
        }
	}
	return play;
}

var f = Game();

	//if (word.indexOf(letter) == -1){
   //         error++;
 //           console.log("Fail: " + letter)
