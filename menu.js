$(document).ready(function () {
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "") {
    currentPage = "index.html";
  }

  $.getJSON("menu.json")
    .done(function (data) {
      let menuHTML = `
        <nav class="main-menu">
          <div class="website-name">Hannah's Portfolio</div>
          <div class="menu-links">
      `;

      data.menuItems.forEach(function (item) {
        let activeClass = "";

        if (item.link === currentPage) {
          activeClass = "active";
        }

        menuHTML += `
          <a href="${item.link}" class="${activeClass}">
            ${item.name}
          </a>
        `;
      });

      menuHTML += `
          </div>
        </nav>
      `;

      $("#menu-container").html(menuHTML);
    })
    .fail(function (jqxhr, textStatus, error) {
      console.error("Could not load menu.json:", textStatus, error);

      $("#menu-container").html(`
        <p class="menu-error">
          The navigation menu could not be loaded.
        </p>
      `);
    });
});
