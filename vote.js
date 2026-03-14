function vote() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var result = document.getElementById("result")
if (age >= 18) {
    result.innerHTML = name + " "+", you are eligible to vote."
} else {
    result.innerHTML= name +" "+ ", you are not eligible to vote."
}
}