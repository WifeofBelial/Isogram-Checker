let btn = document.querySelector("#check-txt");
btn.addEventListener("click", isIsogram);

const resultTxt = document.querySelector("#result-txt");

function isIsogram(){
    let sentence = document.getElementById("input-txt").value.toLowerCase();
    console.log(sentence);
    let isIsogram = true;

    for (let i = 0; i < sentence.length && isIsogram; i++) {

        for (let j = i+1; j < sentence.length-1; j++) {
            if (sentence[i] === sentence[j]){
                console.log(false);
                resultTxt.innerHTML = `${"This sentence is NOT an isogram!"}`;
                isIsogram =false;
            } else {
                resultTxt.innerHTML = `${"This sentence is an isogram!"}`;
            }
        }
    }
}