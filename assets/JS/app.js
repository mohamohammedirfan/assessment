
/*get the number of characters*/
// function charLength() {

//     let charLength = document.getElementById('length').value;
//     document.getElementById('result').innerHTML = charLength;
//     return charLength;

// }

// document.getElementById('length').addEventListener('change', charLength)

let charLength = document.getElementById('');

function generate(){
    var pass = "charLength";

    var str = "ABCDOFTEN" + "abcdoften";

    for(let i=1;i<=8;i++){
        var char = math.floor(math.random()*str.length);

        pass+=str.charAt(char)

        document.getElementById('result').innerHTML = charLength;

        document.getElementById('length').addEventListener('change', charLength.length)
    }
    return pass;
}



