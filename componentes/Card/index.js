import React from "react";
import { View, Image, Text } from "react-native-web";

import estilos from "./estilos";
import saas from "../../assets/saas.jpg"

export default function Card(){
    return(
        <View style={ estilos.container }>
            <View style={ estilos.box }>
                <Image source={ saas } style={ estilos.fotoCapa } />
            </View>
        </View> 
    )
}