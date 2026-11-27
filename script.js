
$(document).ready(function() {

    // Form submission event

    $("#contactForm").submit(function(event) {

        event.preventDefault();

        // Get form values

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var subject = $("#subject").val().trim();
        var message = $("#message").val().trim();

        // Validate form fields

        if (name == "" || email == "" ||
            subject == "" || message == "") {

            $("#result").css("color", "red");

            $("#result").text(
                "Please fill all the fields!"
            );

        }

        else if (!email.includes("@") ||
                 !email.includes(".")) {

            $("#result").css("color", "red");

            $("#result").text(
                "Please enter a valid email address!"
            );

        }

        else {

            $("#result").css("color", "green");

            $("#result").text(
                "Thank you, " + name +
                "! Your form has been validated successfully."
            );

            // Clear the form

            $("#contactForm")[0].reset();

        }

    });

});
