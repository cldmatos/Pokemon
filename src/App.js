
import React, {useEffect, useState} from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState('');

function loadAPI(pokeName){
  let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
  .then(response => response.json())
  .then(res => {
    console.log(res)
    setPokemon(res)
  })
  .catch(err => console.log(err));
}

  useEffect(() => {

  }, []);

    function handleConsulta(e) {
        e.preventDefault();
          loadAPI(input);
          setInput('');
        }

  return (
    <div className = 'container'>
      <header>
        <strong>Pokemon API</strong>
      </header>

      <form onSubmit={handleConsulta}>
        <input className='caixa' placeholder="Informe o nome do pokemon: " value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <button type="submit"> Consultar </button>
      </form>

      <div className='card'>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <div>Name: {pokemon.name} </div>
        <div>Nº: {pokemon.id} </div>
        <div>Peso: {pokemon.weight / 10}kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
    </div>
  );
}

export default App