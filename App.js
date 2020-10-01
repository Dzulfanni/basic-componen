// import React from 'react'
// import {View, Text} from 'react-native'

// class App extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text> Hello Word</Text>
//       </View>
//     )
//   }
// }
// export default App


import React from 'react';
import {View, Text, Image, TextInput, Button, Alert, ActivityIndicator, Switch, ScrollView} from 'react-native';

const App=()=>{
  return(
    <ScrollView style= {{backgroundColor: "white", flex:8}}>
      <Text style={style.awal}>Welcome to MyApps </Text>
      <Text style={style.kedua}>TTL: Pengulon, 5 Februari 2002</Text>
      <Text style={style.ketiga}>Cita-cita: Pengusaha</Text>
      <TextInput style={style.input} placeholder="Berikan Komentar anda"></TextInput>
      <Button
      style={StyleSheet.button}
      title="Klik UNtuk Tambah Komentar"
      onPress= {()=>Alert.alert("Terimmkasih")}/>
      <ActivityIndicator size= "small" color="red"/>
      <Switch style={{color:"green"}}/>

    </ScrollView>
  );
}
export default App

const styles = StyleSheet.Create({
  awal : {
    color: 'red',
    textAlight: 'center',
    fontWeight: 'bold'
    fontSize: 15,
    marginTop: 25
  },
  kedua :{
    width: 100,
    height : 100,
    marginLeft: 125,
    marginTop: 30
  },
  ketiga:{
    color : 'white',
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 18,
  }

})


