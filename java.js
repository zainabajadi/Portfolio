const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
  });
});


