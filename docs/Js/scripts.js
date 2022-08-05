window.addEventListener('scroll', function () {
    let navbar = document.getElementById('pagenav');
    navbar.classList.toggle('scroll_nav', window.scrollY>0);
  })