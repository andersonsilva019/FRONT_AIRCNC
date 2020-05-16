import React,{ useState, useMemo } from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.svg'
import './styles.css'

function NewSpot({ history }) {

  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  },[thumbnail])

  async function handleSubmit(e){
    e.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');
    
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('price', price);
    data.append('techs', techs);

    await api.post('/spots', data, {
      headers: { user_id  }
    });

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})`}}
        className={ thumbnail ? 'has-thumbanil' : ''}
      >
        <input type="file" onChange={e => setThumbnail(e.target.files[0])}/>
        <img src={camera} alt="Selecione a imagem"/>
      </label>
      <label htmlFor="company">EMPRESA *</label>
      <input 
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)} 
        type="text"
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>Separadas por vírgulas</span></label>
      <input 
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)} 
        type="text"
      />

      <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input 
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)} 
        type="text"
      />

      <button className="btn" type="submit">Cadastrar</button>
    </form>
  );
}

export default NewSpot;