import './App.css';

import CustomLoader from './CustomLoader'
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import WhatIOffer from './WhatIOffer';
import PortfolioStats from './PortfolioStats';
import Projects from './Projects';
import MySkills from './MySkills';
import GetInTouch from './GetInTouch';
import ContactSection from './ContactSection';

function App() {
  return (
    <section>
      <CustomLoader />
      <HeroSection />

      <AboutMe />

      <WhatIOffer
        content={[
          {
            varient: 'Fully Responsive',
            text: 'I build high-performance websites that adapt flawlessly to any screen size, ensuring a professional experience on all devices.',
            id: 'one'
          },


          {
            varient: 'Latest Bootstrap',
            text: 'I build modern, high-speed websites using the latest version of Bootstrap to ensure sleek, mobile-first designs.',
            id: 'two'
          },

          {
            varient: 'Dedicated Support',
            text:
              'I provide dedicated, reliable support to ensure your website runs smoothly and all your technical queries are resolved quickly.',
            id: 'three'
          },

          {
            varient: 'Tailwind css',
            text: 'I prioritize client satisfaction by delivering personalized service and building long- term relationships based on trust and excellence.',
            id: 'four'
          },


          {
            varient: 'Mordern Design',
            text: 'I create visually stunning, modern designs that prioritize clean aesthetics and intuitive user interfaces. ',
            id: 'five'
          },


          {
            varient: 'Html5/Css3',
            text: 'I build structurally sound and visually polished websites using modern HTML5 and CSS3 standards for maximum efficiency.',
            id: 'six'
          },
        ]}
      />

      <PortfolioStats />

      <MySkills
        content={[
          { item: 'HTML5' },
          { item: 'CSS' },
          { item: 'JAVASCRIPT' },
          { item: 'TAILWIND' },
          { item: 'BOOTSTRAP' },
          { item: 'WEB DESIGN' },
        ]}
      />


      <Projects
        content={[
          {
            head: 'Taroopha Clone',
            text: 'Ecosystem',
            img: './imgs/p1.png',
            link: 'https://viju-taroopha2.netlify.app/',
          },


          {
            head: 'Resturant Clone',
            text: 'Resturant Bill',
            img: './imgs/p2.jpg',
            link: 'https://viju-restbill.netlify.app/',
          },

          {
            head: 'Hotel Clone',
            text: 'Chefs',
            img: './imgs/p3.webp',
            link: 'https://viju-hotel.netlify.app/',
          },


          {
            head: 'Agency Clone',
            text: 'Netflix',
            img: './imgs/p5.png',
            link: 'https://viju-net.netlify.app/',
          },


          {
            head: 'Agency Clone',
            text: 'Digital Marketing',
            img: './imgs/p6.jpg',
            link: 'https://viju-react1web.netlify.app/',
          },


          {
            head: 'Taroopha Clone',
            text: 'Storefront',
            img: './imgs/p7.jpg',
            link: 'https://viju-taroopha.netlify.app/',
          },

        ]}
      />


      <GetInTouch />

      <ContactSection/>

    </section>
  );
}

export default App;
