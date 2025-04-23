import React from 'react';
import Landingpage from '../components/Landingpage.tsx';
import Aboutus from '../components/Aboutus';
import Projectcards from '../components/Projectcards.tsx';
import Animation from '../components/Animation';
import Cards from '../components/Cards';
import Contact from '../components/Contact.jsx';




export default function Home() {
  return (
    <>
      <Landingpage />
      <Aboutus />
      <Projectcards />
      <Animation />
      <Cards />
      <Contact />
     

    </>
  );
}
