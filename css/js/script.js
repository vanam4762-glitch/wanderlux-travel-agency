function calculateTripCost() {

    const destination =
        document.getElementById("destination");

    const travellers =
        parseInt(
            document.getElementById("travellers").value
        );

    const days =
        parseInt(
            document.getElementById("days").value
        );

    const travelStyle =
        document.getElementById("travelStyle");


    if (
        destination.value === "" ||
        !travellers ||
        !days ||
        travelStyle.value === ""
    ) {

        alert(
            "Please complete all trip calculator fields."
        );

        return;
    }


    const dailyCost =
        parseFloat(destination.value);

    const multiplier =
        parseFloat(travelStyle.value);


    const totalCost =
        dailyCost *
        travellers *
        days *
        multiplier;


    const destinationName =
        destination.options[
            destination.selectedIndex
        ].text;


    const travelStyleName =
        travelStyle.options[
            travelStyle.selectedIndex
        ].text;


    document.getElementById(
        "calculatorResult"
    ).innerHTML =

        "<strong>Estimated Trip Cost:</strong> $" +

        totalCost.toFixed(2) +

        "<br><br>" +

        "Estimated cost for " +

        travellers +

        " traveller(s) to " +

        destinationName +

        " for " +

        days +

        " day(s): $" +

        totalCost.toFixed(2) +

        " – " +

        travelStyleName +

        " Travel Package.";

}



function submitAppointment() {

    const name =
        document.getElementById(
            "appointmentName"
        ).value.trim();

    const email =
        document.getElementById(
            "appointmentEmail"
        ).value.trim();

    const phone =
        document.getElementById(
            "appointmentPhone"
        ).value.trim();

    const date =
        document.getElementById(
            "appointmentDate"
        ).value;

    const message =
        document.getElementById(
            "appointmentMessage"
        ).value.trim();


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        message === ""
    ) {

        alert(
            "Please complete all appointment fields."
        );

        return;
    }


    document.getElementById(
        "appointmentResult"
    ).textContent =

        "Thank you, " +

        name +

        ". Your appointment request has been recorded.";

}



function submitContactForm() {

    const name =
        document.getElementById(
            "contactName"
        ).value.trim();

    const email =
        document.getElementById(
            "contactEmail"
        ).value.trim();

    const message =
        document.getElementById(
            "contactMessage"
        ).value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert(
            "Please complete all contact form fields."
        );

        return;
    }


    document.getElementById(
        "contactResult"
    ).textContent =

        "Thank you, " +

        name +

        ". Your message has been received.";

}



/* Scroll animation */

const revealElements =
    document.querySelectorAll(
        ".section, .card, .form-section"
    );


revealElements.forEach(
    function(element) {

        element.classList.add("reveal");

    }
);


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(
        function(element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight - 80
            ) {

                element.classList.add(
                    "visible"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);

const heroSection = document.querySelector(".hero");

const heroImages = [
    "hero1.jpg",
    "hero2.jpeg",
    "hero3.jpeg"
];

let currentHero = 0;

function changeHeroImage() {
    if (!heroSection) {
        return;
    }

    heroSection.style.backgroundImage =
        "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('" +
        heroImages[currentHero] +
        "')";

    currentHero++;

    if (currentHero >= heroImages.length) {
        currentHero = 0;
    }
}

changeHeroImage();

setInterval(changeHeroImage, 4000);
