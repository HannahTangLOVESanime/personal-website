$(document).ready(function () {

  // Get the filename of the page currently open.
  let currentPage = window.location.pathname.split("/").pop();

  // GitHub Pages may open the homepage without showing index.html.
  if (currentPage === "") {
    currentPage = "index.html";
  }

  // Load the navigation information from menu.json.
  $.getJSON("data/menu.json")
    .done(function (data) {

      // Begin creating the navigation.
      let menuHTML = `
        <nav class="main-menu">
          <div class="website-name">
            Hannah's Portfolio
          </div>

          <div class="menu-links">
