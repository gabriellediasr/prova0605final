import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Bem-vindo à Página Inicial da AV2 (3ª tentativa)</h1>
        <p>Agora vai!!</p>
      </div>
      <div className="content">
        <div className="feature1">
        <img src={require('./FOTO5.jpg')} alt="Feature 1" />
        <p>Vista de cima Cimatec Park</p>
        </div>
        <div className="feature2">
        <img src={require('./FOTO6.jpg')} alt="Feature 2" />
        <p>Portaria Senai Cimatec</p>
        </div>
        <div className="feature3">
        <img src={require('./FOTO7.jpg')} alt="Feature 3" />
        <p>Portaria SESI Saúde Piatã</p>
        </div>
        <div className="feature4">
        <img src={require('./FOTO8.jpg')} alt="Feature 3" />
          <p>Portaria SESI Piatã</p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;









































