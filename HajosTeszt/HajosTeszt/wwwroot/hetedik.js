var kérdések
var kérdéssorszám =0;

window.onload = () => {
    letöltés();
}

    function letöltés() {
        fetch('/questions.json')
            .then(response => response.json())
            .then(data => letöltésBefejeződött(data)
            );
        function letöltésBefejeződött(d) {
            console.log("Sikeres letöltés")
            console.log(d)
            kérdések = d;
            kérdésMegjelenítés(0);
        }
    }



function kérdésMegjelenítés(k) {
        let kérdés_ide = document.getElementById("kérdés_szöveg")
        kérdés_ide.innerHTML = kérdések[k].questionText;
        console.log(`$ {kérdések.length} kérdés jött} `)

   // document.getElementById("válasz1").innerHTML = kérdések[k].answer1

        for (var i = 1; i <= 3; i++) {
            let kérdés_elem = document.getElementById("válasz" + i)
            kérdés_elem.innerHTML = kérdések[k]["answer" + i]
    }

    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image
}

function előrekattintás() {
    
    kérdéssorszám++;
    if (kérdéssorszám == kérdések.length) {
        kérdéssorszám = 0;
    }
    kérdésMegjelenítés(kérdéssorszám);
    törlés()
}

function visszakattintás() {
    
    if (kérdéssorszám > 0) {
        kérdéssorszám = kérdéssorszám - 1;

    }
    else {
        kérdéssorszám = kérdések.length - 1;
    }
    kérdésMegjelenítés(kérdéssorszám)
    törlés()
}

function válaszok(n) {
    if (n == kérdések[kérdéssorszám].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jó");
        console.log("+")
    }
    else {
        console.log("-")
        document.getElementById("válasz" + n).classList.add("rossz");

    }
}

function törlés() {
    document.getElementById("válasz1").classList.remove("jó");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jó");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jó");
    document.getElementById("válasz3").classList.remove("rossz");
}