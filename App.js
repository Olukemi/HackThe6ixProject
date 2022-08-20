import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.text_title}>Tip of the day!</Text> 
      <Text style ={styles.text_body}>Banks in Canada include: 
      {'\n'}
      TD Bank, RBC, CIBC 
      </Text> 
      <Text style ={styles.text_streak}>Streak: 27</Text>
      <Image 
        source= {{
          width:200,
          height:300,
          scale: 20,
          uri: "https://emoneyadvisor.com/wp-content/uploads/2021/10/Video-Marketing-Resized.jpg",
       }}
      />
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_title:{
    color:"black",
    backgroundColor: "white",
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '40',
    marginTop: -200,
  },
  text_body:{
    color: 'black',
    backgroundColor: 'powderblue',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '20',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 4,
    marginBottom: 20,
  },
  text_streak:{
    color: 'black',
    backgroundColor: 'powderblue',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '20',
    marginBottom:20,
  }, 
});
