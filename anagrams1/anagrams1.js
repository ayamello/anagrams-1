const content = document.getElementById("divContent");
const divResult = document.getElementById("divResult");
const input = document.getElementById('word');

const button = document.getElementById("findButton");
button.addEventListener("click", function () {
    let typedText = document.getElementById("word").value;
    btnReset.style.display = 'table-cell';

    content.style.display = 'none';
    divResult.style.backgroundColor = 'rgb(127, 189, 214, .2)';
    divResult.style.margin = '-30px auto';

    const p = document.createElement("p");
    p.classList.add('word');
    p.innerHTML = `<strong>${typedText.toUpperCase()}</strong>`
    divResult.appendChild(p);
    const result = document.createElement('p');
    result.classList.add('result');
    result.textContent = `${getAnagramsOf(typedText)}`;
    divResult.appendChild(result);
});

function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(word) {
    let arr = [];
    for(let i = 0; i < palavras.length; i++) {
        if(alphabetize(word) === alphabetize(palavras[i])) {
            arr.push(palavras[i]);
        }
    }
    return arr;
}

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function () {
    let typedText = document.getElementById("word");
    typedText.value = "";
    divResult.innerHTML = "";
    btnReset.style.display = 'none';
    content.style.display = 'block';
})