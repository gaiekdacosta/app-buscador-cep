import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import api from './services/api';
import { Button, Input } from 'react-native-elements';

const App = () => {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const [ddd, setDDD] = useState("")

  const data = () => {
    api.get(`/${cep}/json/`).then((response: any) => {
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
      setDDD(response.data.ddd)
    }).catch((error) => {
      Alert.alert('Erro ao buscar o CEP', 'Verifique se o CEP está correto.', error);
    })
  }
  
  return(
    <View style={{ flexDirection: "column" }}>
      <View style={styles.topBar}>
        <Text style={styles.title}>BUSCADOR DE CEP</Text>
      </View>
        <Input
          value={cep}
          onChangeText={(e) => setCep(e)}
          placeholder="CEP" />
        <Button
          onPress={data}
          buttonStyle={styles.searchButton}
          title="Buscar" />
        <Input 
          value={logradouro}
          onChangeText={(e) => setLogradouro(e)}
          placeholder="Logradouro" />
        <Input 
          value={bairro} 
          onChangeText={(e) => setBairro(e)}
          placeholder="Bairro" />
        <Input 
          value={localidade} 
          onChangeText={(e) => setLocalidade(e)}
          placeholder="Cidade" />
        <Input 
          value={uf}
          onChangeText={(e) => setUf(e)}
          placeholder="UF" />
        <Input 
          value={ddd}
          onChangeText={(e) => setDDD(e)}
          placeholder="DDD" />
        <Text style={{ textAlign:'center'}}>
          Developed by Gaiek da Costa
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    display:'flex',
    justifyContent:'center',
    flexDirection: "row",
    height: 80,
    backgroundColor: "#FCD800"
  },
  title: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 35
  },
  searchButton: {
    marginLeft: 80, 
    marginRight: 80, 
    marginBottom:20 , 
    backgroundColor:'#02AFE7' 
  }
})

export default App;