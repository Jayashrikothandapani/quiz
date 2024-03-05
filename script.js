function result() {
    var score = 0;
    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }
    if (document.getElementById("correct3").checked) {
        score++;
    }
    var result = document.querySelector(".score")
    var ans = document.getElementById("ans")
    
    ans.textContent = "Score:"+score;
    
}
