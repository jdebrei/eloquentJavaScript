const chapter6 = () => {
    //Methods example
    let rabbit = {};
    rabbit.speak = function(line) {
        console.log(`The rabbit says '${line}'`);
    };
    rabbit.speak("I'm alive!");
    rabbit.speak("I'm tired");
}