
var myWords = ["alcachofa", "colonia", "extremo", "campamento", "programa", "murcielago"];
var index = Math.round(Math.random()*(myWords.length-1));

function Game() {
	var i;
	var end = false;
	var word = myWords[index].toUpperCase();
	var progress = ''
	for (i = 0; i < word.length; i++) {
	    progress = progress + " _";
	}
	document.getElementById("result").innerHTML = progress;
	var error = 0;
	function play() {
		var i;
	    letter = document.getElementById("letter").value.toUpperCase();
	    for (i = 0; i < word.length; i++) {
	        if(letter == word[i] && ! end){
	            progress = progress.split(' ');
	            progress[i+1] = word[i];
	            progress = progress.join(' ').toUpperCase();
	        }else if(i == word.length-1 && word.indexOf(letter) == -1 && ! end){
	            error++;
	            console.log("Fail: " + letter + ' Errors:' + error);
	        }
			if(progress.replace(/\s/g, '') == word){end = true;}
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
				end = true;
                break;
        }
	}
	return play;
}

var play = Game();
