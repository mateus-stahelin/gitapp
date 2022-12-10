import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();   
  const [usuario, setUsuario ] = useState('');
  const [erro, setErro] = useState(false);
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      // repositories.map((repository) => {
      repositories.forEach((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }
  
  return (
  <S.HomeContainer>
      <S.h1>VERIFICAR REPOSITÓRIOS PÚBLICOS DO GITHUB</S.h1>
      <S.h3>Enter the GitHub username:</S.h3>
    <S.Content>  
      <S.Input className='usuarioInput' placeholder='GitHub User' value={ usuario } onChange={e => setUsuario(e.target.value) } />
      <S.Button type='button' onClick={handlePesquisa}>Search</S.Button>
    </S.Content>
    { erro ? <S.ErrorMsg>User not found! Try again. </S.ErrorMsg> : '' }
  </S.HomeContainer>
  );
}
 
  export default App;