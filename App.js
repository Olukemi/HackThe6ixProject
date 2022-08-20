
import { StyleSheet, Text, SafeAreaView, Image,Button, Alert} from 'react-native';
import React from 'react';

export default function App () {
  const onPressHandler = ()=>{

  }
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style = {styles.tinyLogo}
        resizeMode = "contain"
        source= {{uri: 'https://usersnap.com/blog/wp-content/uploads/2016/08/LanguageIcon-selection-884x1024.jpg?x18216'}}
      />
      <Text style ={styles.text_body1}></Text> 
      <Button
      color = "black"
      title ="Tip of the Day"
      onPress={() =>
      Alert.alert("Today's financial tip is:","Do your taxes",
      [{text:"Great"},{text:"Cancel"},
      ])}> 
      </Button>
      <Text style ={styles.text_body2}></Text> 
      <Text style ={styles.text_streak}>Streak: 27 | Weeks: 10</Text>
      <Image 
        source= {{
          width:200,
          height:300,
          marginVertical: 80,
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
  text_body1:{
    color: 'black',
    backgroundColor: 'gainsboro',
    height: 1,
    width: 200,
    textAlign: 'center',
    paddingTop: 1,
    paddingBottom: 1,
    fontFamily: 'Times New Roman',
    bottom: 10,
  },
  text_body2:{
    color: 'black',
    backgroundColor: 'gainsboro',
    height: 1,
    width: 200,
    textAlign: 'center',
    paddingTop: 1,
    paddingBottom: 1,
    fontFamily: 'Times New Roman',
    marginBottom: 60,
  },
  text_streak:{
    color: 'black',
    backgroundColor: 'gainsboro',
    margin:40,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '20',
    bottom:50,
  },   
  tinyLogo:{
    width:25,
    height:25,
    //marginBottom: 180,
    marginLeft: 350,
    bottom: 120,
  },
});
