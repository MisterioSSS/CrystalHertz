const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');
let okno = document.querySelector('.okno');

toggle.addEventListener('click', () => {
  if (sidebar.className === 'sidebar') {
    sidebar.classList.add('open');
    if (okno.classList.contains('open')) {
      okno.style.transform = 'translateX(200px)';
    }
  } else {
    sidebar.classList.remove('open');
    if (okno.classList.contains('open')) {
      okno.style.transform = 'translateX(0)';
    }
  }
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });

    navItem.classList.add('active');
  });
});
