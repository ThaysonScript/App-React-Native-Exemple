import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  return (
    <View style={styles.boxResult}>
        {/* imprimir resultado do calculo do imc */}
        <Text style={styles.text}>{ props.messageResultImc }</Text>
        <Text>{ props.resultImc }</Text>
    </View>
  );
}
