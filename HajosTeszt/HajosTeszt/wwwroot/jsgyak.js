var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

let hova = document.getElementById("ide")
hova.innerHTML = ""

for (let s = 0; s < 10; s++) {
    let sor = document.createElement("div")
    hova.appendChild(sor)
    sor.classList.add("egymás_mellé")

    for (var o = 0; o < 10; o++) {
        let szám = document.createElement("button")
        sor.appendChild(szám)
        szám.innerText = (s + 1) * (o + 1)
        szám.classList.add("doboz")
        szám.style.color = `rgb(${255-(255/10*s)}, 0, 250)`
    }
}

let pascal = document.getElementById("pascal")

for (var sor = 0; sor < 10; sor++) {
    let pascalsor = document.createElement("div")
    pascalsor.classList.add("sor")
    pascal.appendChild(pascalsor)
    for (var o = 0; o <= sor; o++) {
        let pascalszam = document.createElement("div")
        pascalszam.innerText = faktoriális(sor) / (faktoriális(o) * (faktoriális(sor - o)));
        pascalszam.classList.add("elem")
        pascalsor.appendChild(pascalszam)
        
    }
}