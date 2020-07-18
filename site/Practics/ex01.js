/* var myOb = {
    nombre: "Cristian",
    curso: "HTML/CSS/JS",
    plataforma: "Coursera"
};
for (var prop in myOb) {
    console.log(prop + ": " + myOb[prop]);
} */




/* var names2 = ["Cris", "Joyce", "Pilar"];

for (var name in names2) {
    console.log("Hola, " + names2[name])
} */


function makeMultiplier (multiplier){
    // var multiplier = 2
    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();


    return (
        function (x) {
            return multiplier * x
        }
    );
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100))