import React, { useState } from "react";
import { View, Text, 
  TextInput, TouchableOpacity, 
  Vibration, Pressable,
  Keyboard } from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form() {
  // alterando estados com useState
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha os campos");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function CalcularImc() {
    let alturaFormated = altura.replace(',', '.')
    let calculo = setImc((peso / (alturaFormated * alturaFormated)).toFixed(2));
    return calculo;
  }

  function Verificar() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("*campo obrigatorio*");
    }
  }

  function ValidarCampos() {
    if (peso !== null && altura !== null) {
      // calcular o imc
      CalcularImc();

      // definir como vazio para realizar outro calculo
      setAltura(null);
      setPeso(null);

      // modificar propriedades do useState
      setMessageImc("Seu imc e: ");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
    } else {
      Verificar();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha os campos");
    }
  }

  return (
    <Pressable style={styles.boxForm} onPress={Keyboard.dismiss}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>

        {/* onchangetext = mudar o useState( estado ) a cada digito */}
        {/* value = definir o valor como o estado atual do setAltura */}
        <TextInput
          onChangeText={setAltura}
          value={altura}
          placeholder="Digite uma altura"
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <TextInput
          onChangeText={setPeso}
          value={peso}
          placeholder="Digite um Peso"
          keyboardType="numeric"
          style={styles.input}
        />

        {/* onPress = onClick de html */}
        {/* () => ValidarCampos() == chamar funcao calcularIMC quando click button */}
        <TouchableOpacity
          onPress={() => ValidarCampos()}
          style={styles.botaoCalcular}
        >
          <Text style={styles.textBotao}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </Pressable>
  );
}
