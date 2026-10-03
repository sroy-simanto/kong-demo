const usersContainer = document.querySelector("#users");

fetch("https://kong-demo.onrender.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const userElement = document.createElement("div");

      userElement.innerHTML = `
                <h3>${user.name}</h3>
                <p>ID: ${user.id}</p>
                <p>Email: ${user.email}</p>
                <hr>
            `;

      usersContainer.appendChild(userElement);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    usersContainer.textContent = "Failed to load users";
  });
