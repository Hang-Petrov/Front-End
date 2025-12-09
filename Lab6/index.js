document.getElementById("loadBtn").addEventListener("click", function () {

    document.getElementById("result").innerHTML = "<p>Завантаження...</p>";

    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            const picture = user.picture.large;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const phone = user.phone;
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

            document.getElementById("result").innerHTML = `
                <img src="${picture}" alt="Фото">

                <div class="field"><b>Країна:</b> ${country}</div>
                <div class="field"><b>Поштовий індекс:</b> ${postcode}</div>
                <div class="field"><b>Телефон:</b> ${phone}</div>
                <h2>${fullName}</h2>
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML =
                "<p style='color:red;'>Помилка завантаження!</p>";
            console.error(error);
        });
});
