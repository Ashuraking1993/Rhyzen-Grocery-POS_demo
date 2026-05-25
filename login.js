document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById(
                "loginForm"
            );

        form.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                const user =
                    document.getElementById(
                        "username"
                    ).value;

                const pass =
                    document.getElementById(
                        "password"
                    ).value;

                if (
                    user === "admin" &&
                    pass === "Admin@123"
                ) {

                    localStorage.setItem(
                        "rhyzen_auth",
                        "true"
                    );

                    window.location.href =
                        "dashboard.html";

                } else {

                    alert(
                        "Invalid credentials"
                    );

                }

            });

    });