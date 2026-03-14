function love() {
        var name = document.getElementById("name").value;
        var partnerName = document.getElementById("partnerName").value;
        var lovePercentage = Math.floor(Math.random() * 100) + 1;
        var result = document.getElementById("result");
        result.innerHTML = name + " and " + partnerName + " have a love compatibility of " + lovePercentage + "%!";
    }