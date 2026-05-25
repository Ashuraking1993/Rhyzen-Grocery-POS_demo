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
                    ).value.trim();

                if (user === "") {

                    alert(
                        "Please enter username"
                    );

                    return;
                }

                localStorage.setItem(
                    "rhyzen_auth",
                    "true"
                );

                localStorage.setItem(
                    "rhyzen_user",
                    user
                );

                window.location.href =
                    "dashboard.html";

            });

    });

function logout() {

    localStorage.removeItem(
        "rhyzen_auth"
    );

    localStorage.removeItem(
        "rhyzen_user"
    );

    window.location.href =
        "index.html";
}