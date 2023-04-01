const diseases = ["akiec", "bcc", "bkl", "df", "mel", "nv", "vasc"];

$(function () {

    $("div > select").change(function () {
        //you can write code to check the value of select here
        console.log($(this).val());
        // Select 3 unique diseases at random
        if($(this).val() === "Select a model"){
            document.getElementById('loader').style.display = "block";
            document.getElementById('prediction-list').innerHTML = "";
            return;
        }
        var randomDiseases = [];
        while (randomDiseases.length < 3) {
            var r = Math.floor(Math.random() * 7);
            if (randomDiseases.indexOf(r) === -1) randomDiseases.push(r);
        }
        console.log(randomDiseases);

        // Find Probabilities of these three disesases and sum of them should be 1
        var sum = 0;
        var probabilities = [];
        for (var i = 0; i < 3; i++) {
            var prob = Math.random();
            sum += prob;
            probabilities.push(prob);
        }
        for (var i = 0; i < 3; i++) {
            probabilities[i] /= sum;
            probabilities[i] = probabilities[i].toFixed(3);
        }
        console.log(probabilities);
        document.getElementById('prediction-list').innerHTML = "";
        document.getElementById('loader').style.display = "block";
        window.setTimeout(function () {
            
            document.getElementById('loader').style.display = "none";
            document.getElementById('prediction-list').innerHTML = "";
            for (var i = 0; i < 3; i++) {
                document.getElementById('prediction-list').innerHTML += `<li class="w3-text-blue fname-font" style="list-style-type:none;"><h4>${diseases[randomDiseases[i]]} : ${probabilities[i]}</h4></li>`
            }
            
        }, 1000);
        
    });
});