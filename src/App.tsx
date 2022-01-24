import Routes from './routes';
import './App.css';
import { useEffect } from 'react';

function App() {

  function scrollActive() {
    const sections = document.querySelectorAll('section[id]');

    const scrollY = window.pageYOffset;

    sections.forEach((current:any) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav__menu a[href*=${sectionId}]`)?.classList.add('active-link')
      } else {
        document.querySelector(`.nav__menu a[href*=${sectionId}]`)?.classList.remove('active-link')
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollActive);
    return (() => {
      window.removeEventListener('scroll', scrollActive);
    })
  }, []);

  return (
      <Routes />
  );
}

export default App;
