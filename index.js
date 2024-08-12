function commonCharacterCount(firstPerson, secondPerson) {
    var count = 0;
    firstPerson = Array.from(firstPerson);
    secondPerson = Array.from(secondPerson);

    firstPerson.forEach(e => {
        if (secondPerson.includes(e)) {
            count++;
            secondPerson.splice(secondPerson.indexOf(e), 1);
        }
    });

    return count;
}

function flamesIteration(total) {
    const flames = "FLAMES";
    const length = flames.length;
    let result = [];

    for (let i = 1; i <= total; i++) {
        let index = (i - 1) % length;
        result.push(flames[index]);
    }

    return result.pop();
}

function resultMessage(result) {
    let message;
    if (result === "F") {
        message = "You will be Friends";
    } else if (result === "L") {
        message = "You will be Lovers";
    } else if (result === "A") {
        message = "You will be Admirers";
    } else if (result === "M") {
        message = "You will be Married";
    } else if (result === "E") {
        message = "You will be Enemy";
    } else if (result === "S") {
        message = "You will be Strangers";
    }
    return message;
}

function calculate() {
    var firstPerson = document.getElementById("firstPerson").value.replace(/\s/g, '').toUpperCase();
    var secondPerson = document.getElementById("secondPerson").value.replace(/\s/g, '').toUpperCase();

    if(firstPerson !== "" && secondPerson !== ""){
        var commonCount = commonCharacterCount(firstPerson, secondPerson);
        var total = (firstPerson.length - commonCount) + (secondPerson.length - commonCount);
        var result = flamesIteration(total);
        var message = resultMessage(result);

        document.getElementById("result").value = message;
    } else {
        alert("Please enter both names!");
    }
}

function reloadSite(){
    location.reload();
    console.log("Page reloaded");
}