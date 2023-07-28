import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form() {

  // alterando estados com useState
  const [altura, setAltura] = useState(null)
  const [peso, setPeso] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha os campos")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function CalcularImc() {
    let calculo = setImc((peso / (altura * altura)).toFixed(2))
    return calculo
  }

  function ValidarCampos() {
    if(peso !== null && altura !== null) {
      // calcular o imc
      CalcularImc()

      // definir como vazio para realizar outro calculo
      setAltura(null)
      setPeso(null)

      // modificar propriedades do useState
      setMessageImc("Seu imc e: ")
      setTextButton("Calcular novamente")
    }
    else {
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha os campos")
    }
  }

  return (
    <View>
      <View style={styles.form}>
        <Text>Altura</Text>
        {/* onchangetext = mudar o useState( estado ) a cada digito */}
        {/* value = definir o valor como o estado atual do setAltura */}
        <TextInput onChangeText={setAltura} value={altura} placeholder="Digite uma altura" keyboardType="numeric" />

        <Text>Peso</Text>
        <TextInput onChangeText={setPeso} value={peso} placeholder="Digite um Peso" keyboardType="numeric" />

        {/* onPress = onClick de html */}
        {/* () => ValidarCampos() == chamar funcao calcularIMC quando click button */}
        <Button title={textButton} onPress={() => ValidarCampos()}/>
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
