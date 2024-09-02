"use strict";

const btnMenu = document.querySelector(".menu__btn");
const sidebar = document.querySelector(".sidebar");
const filterForm = document.querySelector(".form-filter");
const btnFilter = document.querySelector(".table__head");
const labelYear = document.querySelector(".year");

btnMenu.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

btnFilter.addEventListener("click", function () {
  filterForm.classList.toggle("hidden");
});

const date = new Date();
const year = date.getFullYear();
labelYear.textContent = year;
