import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../components/data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from  '../../components/Footer' ;

const AppWrapper = styled.div`
 background-color: var(--bg-color);

`;


function Home() {
  return (
    <AppWrapper>

    <Menu/>

    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url= {dadosIniciais.categorias[0].videos[0].url}
      videoDescripiton ={"AnimeFlix um lugar onde você conectado com País do sol nascente"}
     />

     <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      
      />
        <Footer/>
    


    </AppWrapper>
  
  );
}

export default Home
