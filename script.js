const textArea = document.getElementById("textarea");

const totalChar = document.getElementById("total-char");

const remainingChar = document.getElementById("remaining-char");

textArea.addEventListener("keyup",()=>{
    updateCounter();
    // console.log("pressed");
});

function updateCounter(){
    totalChar.innerText=textArea.value.length

    remainingChar.innerText = textArea.getAttribute("maxLength") - textArea.value.length
}