// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Aruba": null,
    "Cancun Mexico": null,
    "Hawaii": null,
    "Florida": null,
    "California": null,
    "Jamacia": null,
    "Europe": null,
  }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Dropdown
const dt = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dt, {});

// Modal
const md = document.querySelectorAll('.modal');
M.Modal.init(md, {});

// Forms login/register
$(document).ready(function() {
  $("#bt").click(function() {
    if ($('.rotate').length > 0) {
      $("#iwp").removeClass("rotate");
    }
    if ($('.rotateb').length > 0) {
      $("#iwp").removeClass("rotateb");

    }
    $("#iwp").addClass("rotate");

  });
  $("#bt2").click(function() {

    if ($('.rotate').length > 0) {
      $("#iwp").removeClass("rotate");
    }
    if ($('.rotateb').length > 0) {
      $("#iwp").removeClass("rotateb");
    }
    $("#iwp").addClass("rotateb");
  });
});
