import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable, Switch, Alert} from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import AppLoading from 'expo-app-loading';s
//import { useFonts, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold, } from '@expo-google-fonts/comfortaa';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


/* starting page -> this is what the user will first see when they download the app. they can sign up or log in */
function WSPlans ({ navigation }){
  return (
    <View style={styles.container}>
      
      <Text style={styles.name_main}>Wealthsimple Plans</Text>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <Text style={styles.name_sub}>Current Plans</Text>
          <SafeAreaView style={styles.container_currentplans}>
            <ScrollView horizontal={true} style={styles.scrollView_currentplans}>
              <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />
              <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </Text>
              </ScrollView>
            </SafeAreaView>

          <Text style={styles.name_sub}>Recommendations</Text>
          <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
          <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Plans')}>
          <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Canada Learning Bond Plan')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

function CLB ({ navigation }){
  return (
    <View style={styles.container}>
      
      {/*main text - CLB*/}
      <Text style={styles.name_sub}>Canada Learning Bond</Text>

      {/*plan banner - CLB*/}
      <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />

      <Text style={styles.name_sub}>CLB - 80% Complete</Text>

      {/*day 1*/}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={styles.name_sub}>Day 1</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.name_sub}>Overview</Text>
          <Text style={styles.name_sub}>Daily Tip</Text>
          <Text style={styles.name_sub}>Reasource</Text>
        </CollapseBody>
      </Collapse>

      {/*day 2*/}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={styles.name_sub}>Day 2</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.name_sub}>Overview</Text>
          <Text style={styles.name_sub}>Daily Tip</Text>
          <Text style={styles.name_sub}>Reasource</Text>
        </CollapseBody>
      </Collapse>

      {/*day 3*/}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={styles.name_sub}>Day 3</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.name_sub}>Overview</Text>
          <Text style={styles.name_sub}>Daily Tip</Text>
          <Text style={styles.name_sub}>Reasource</Text>
        </CollapseBody>
      </Collapse>

    
      {/*navigations bar*/}
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Plans')}>
          <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Canada Learning Bond Plan')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wealthsimple Plans" component={WSPlans} />
        <Stack.Screen name="Canada Learning Bond Plan" component={CLB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  text : {
    color: 'white',
    fontSize: 30,
  },
  name_main: {
    fontSize: 40,
    color: '#fff',
    //fontFamily: 'Comfortaa_400Regular',
    marginBottom: 50,
  },

  name_sub: {
    fontSize: 20,
    color: '#fff',
    //fontFamily: 'Comfortaa_400Regular',
    marginBottom: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_currentplans: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  scrollView_currentplans: {
    marginBottom: 30,
  },

  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },

  navBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#EBEBEB',
    paddingTop: 7, 
    paddingBottom: 25, 
  },

  iconBehave: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },

  plan_images: {
    width: 300,
    height: 200,
    marginBottom: 10,
  }

});
