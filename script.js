// href clicked active link start
document.addEventListener('DOMContentLoaded', () => {
  const currentHTMLPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentHTMLPage === linkPath) {
      link.classList.add('active');
    }
  });
});
// href clicked active link end


//....................................... ......category active link start .........................................
document.addEventListener('DOMContentLoaded', function () {
  const categoryPh = document.querySelector('.category-scroll-container');
  const categoryLinks = document.querySelectorAll('.category-link');

  // const currentURL = new URL(window.location.href);
  // const currentPath = currentURL.pathname + currentURL.search;

  // categoryLinks.forEach(link => {
  //     const linkURL = new URL(link.href, window.location.origin);
  //     const linkPath = linkURL.pathname + linkURL.search;

  //     if (currentPath === linkPath) {
  //         link.classList.add('active');
  //     }

  //     link.addEventListener('click', function () {
  //         sessionStorage.setItem('category-scroll-x', categoryPh.scrollLeft);
  //     });
  // });

  const currentHTMLPage = window.location.pathname;
  categoryLinks.forEach(link => link.classList.remove('active'));

  categoryLinks.forEach(link => {
    if (currentHTMLPage.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }

    link.addEventListener('click',function(){
      sessionStorage.setItem('category-scroll-x', categoryPh.scrollLeft);
    });
  });

  const categoryScrollX = sessionStorage.getItem('category-scroll-x');
  if (categoryScrollX !== null) {
      categoryPh.scrollLeft = parseInt(categoryScrollX, 10);
  }
});
//................................................category active link end..... .........................................



