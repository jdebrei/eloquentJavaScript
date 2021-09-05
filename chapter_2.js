function chapter2() {
    //exercise 1 
    for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
    
    //exercise 2
    for (let n = 1; n <= 100; n++){
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }

    //exercise 3 
    let size = 20;
    let board = "";

    for (let y = 0; y < size; y++){
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
}

/* Binding reserved words:
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield*/