document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var instancesSidenav = M.Sidenav.init(sidenav);
  var modal = document.querySelectorAll('.modal');
  var instancesModal = M.Modal.init(modal);
  var materialBox = document.querySelectorAll('.materialboxed');
  var instancesMaterialBox = M.Materialbox.init(materialBox);
});