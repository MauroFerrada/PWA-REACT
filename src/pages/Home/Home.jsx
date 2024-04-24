import style from './Home.module.css';
// useState es un Hook de React que te permite agregar una variable de estado a tu componente.
import { useState } from 'react';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  );
};

export default Home;