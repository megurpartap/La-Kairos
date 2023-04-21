const host = "https://lakairos.onrender.com"

const loadNumberOfTables = () => {
    fetch(`${host}/reservation/getNumberOfTablesAvailable`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const tableNumbers = document.getElementById("tableNumbers");
            if (data.availableTables > 0) {
                tableNumbers.innerText = `Hurry Up! There are still ${data.availableTables} tables Available to Book 🥳`
            } else {
                tableNumbers.innerText = `Sorry! But Right now there is no table available. Come check by later ☹`
            }
        })
}

$(document).ready(function () {
    $(".thankYouCross").click(function () {
        $(".thankYouSection").css("display", "none");
        $(".thankYouBackground").css("display", "none");
    });
    $(".contactUsForm").submit(async function (e) {
        e.preventDefault();
        placeOrder();
    });
})



const placeOrder = () => {
    const formData = new FormData();
    var customerName = document.getElementById("nameInput").value;
    var customerEmail = document.getElementById("emailInput").value;
    var customerPhoneNumber = document.getElementById("phoneInput").value;
    var numberOfPeople = document.getElementById("seatInput").value;
    var reservationDate = document.getElementById("dateInput").value;
    var reservationTime = document.getElementById("timeInput").value;
    var instructions = document.getElementById("InstructionsInput").value;
    formData.set("customerName", customerName);
    formData.set("customerEmail", customerEmail.toLowerCase());
    formData.set("customerPhoneNumber", customerPhoneNumber);
    formData.set("numberOfPeople", numberOfPeople);
    formData.set("reservationDate", reservationDate);
    formData.set("reservationTime", reservationTime);
    formData.set("instructions", instructions);
    fetch(`${host}/reservation/create`, {
            method: "POST",
            body: formData,
        })
        .then(function (response) {
            var tempObject = response.json();
            if (!response.ok) {
                return tempObject.then(json => {
                    throw new Error(json.error);
                });
            } else {
                return tempObject;
            }
        })
        .then((data) => {
            loadNumberOfTables()
            thankYouAppear();
        }).catch((error) => {
            const errorMessage = error.message;
            const errorDiv = document.getElementById('thankYouHeading');
            errorDiv.innerText = errorMessage;
            thankYouAppear();
        });

    function thankYouAppear() {
        $(".submitButton").attr("id", "restartConfetti");
        $(".thankYouBackground").css("display", "block");
        $(".thankYouSection").css("display", "block");
    }
};