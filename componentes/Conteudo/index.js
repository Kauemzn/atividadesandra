import React from 'react';
import { View, Text, Image } from 'react-native';

import sandra from '../../assets/sandra.jpg';
import estilos from './estilos'; 

export default function Conteudo() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Sobre o sus</Text>

      <Text style={ estilos.paragrafo }>O Sistema Único de Saúde (SUS) é um dos maiores e mais complexos sistemas de saúde pública do mundo</Text>
      <Text style={ estilos.paragrafo }>Abrangendo desde o simples atendimento para avaliação da pressão arterial, por meio da Atenção Primária, até o transplante de órgãos, garantindo acesso integral, universal e gratuito para toda a população do país.</Text>
    
      <Text style={ estilos.subtitulo }>Historia do sus</Text>
      <Text style={ estilos.paragrafo }>Seu inicio se deu nos anos 70 e 80, quando diversos grupos se engajaram no movimento sanitário, com o objetivo de pensar um sistema público para solucionar os problemas encontrados no atendimento da população defendendo o direito universal à saúde</Text>
      <Image source={ sandra } style={ estilos.imagem }/>
    </View>
  )
}