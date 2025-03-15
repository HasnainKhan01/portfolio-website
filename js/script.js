document.querySelector('.cta').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#more').scrollIntoView({ behavior: 'smooth' });
  });