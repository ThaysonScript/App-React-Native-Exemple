import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const resultShare = await Share.share({
      message: `Meu imc hoje e: ${props.resultImc}`,
    });
  };
  return (
    <View style={styles.boxResult}>
      <View>
        {props.resultImc !== null ? (
          <TouchableOpacity style={styles.boxShareButton} onPress={onShare}>
            <Text style={styles.textShared}>Share</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>

      {/* imprimir resultado do calculo do imc */}
      <Text style={styles.text}>{props.messageResultImc}</Text>
      <Text style={styles.textResult}>{props.resultImc}</Text>
    </View>
  );
}
