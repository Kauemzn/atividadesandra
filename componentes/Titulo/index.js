import React from 'react';
import { View, Text} from 'react-native';

import estilos from './estilos';

export default function Titulo() {
    return(
        <View style={ estilos.container }>
            <Text style={ estilos.titulo }>Sistema Único de Saúde</Text>
        </View>
    );    
}
