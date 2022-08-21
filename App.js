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

import Quiz from './components/Quiz';



/* starting page */
function WSPortal ({ navigation }){
  return (
    <View style={styles.container_portal}>
      
      <TouchableOpacity style={styles.plan_behave} onPress={() => navigation.navigate('Wealthsimple Plans')}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

/* tips page */
function FTips ({ navigation }){
  
  <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Plans')}>
          <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Protal')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Quiz Assessements')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
  </View>
}

/* plans page */
function WSPlans ({ navigation }){
  return (
    <View style={styles.container}>
      
      <Text style={styles.name_main}>Wealthsimple Plans</Text>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <Text style={styles.name_sub}>Current Plans</Text>
          <SafeAreaView style={styles.container_currentplans}>
            <ScrollView horizontal={true} style={styles.scrollView_currentplans}>
              <TouchableOpacity style={styles.plan_behave} onPress={() => navigation.navigate('Canada Learning Bond Plan')}>
                <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />
                <Text style={styles.text}> Canada Learning Bond Plan </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.plan_behave} onPress={() => navigation.navigate('Canada Learning Bond Plan')}>
                <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />
                <Text style={styles.text}> How to Get a Mortgage Plan </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.plan_behave} onPress={() => navigation.navigate('Canada Learning Bond Plan')}>
                <Image style={styles.plan_images} source={require('./assets/work.jpeg')} />
                <Text style={styles.text}> How to Get a Mortgage Plan </Text>
              </TouchableOpacity>

              </ScrollView>
            </SafeAreaView>

          <Text style={styles.name_sub}>Recommendations</Text>
          <Image style={styles.plan_imagesrec} source={require('./assets/work.jpeg')} />
          <Text style={styles.name_sub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
          <Image style={styles.plan_imagesrec} source={require('./assets/work.jpeg')} />
          <Text style={styles.name_sub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Plans')}>
          <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Protal')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Quiz Assessements')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

/* CLB plan */
function CLB ({ navigation }){
  return (
    <View style={styles.container}>

      
      {/*main text - CLB*/}
      <Text style={styles.name_sub}>Canada Learning Bond</Text>

      {/*plan banner - CLB*/}
      <Image style={styles.plan_imagesclb} source={require('./assets/work.jpeg')} />

      {/*progress bar - CLB*/}
      <Text style={styles.name_comp}>CLB - 100% Complete!</Text>
      <Text style={styles.name_comp}>Try out the quiz for a chance to earn WS credits!</Text>
      <View style={styles.progress_bar}></View>

      {/*day 1*/}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={styles.name_day}>Day 1</Text>
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
          <Text style={styles.name_day}>Day 2</Text>
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
          <Text style={styles.name_day}>Day 3</Text>
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

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Protal')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Quiz Assessements')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

/* quiz page */
function QA ({ navigation }){
  
  <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Plans')}>
          <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Wealthsimple Protal')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Quiz Assessements')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
  </View>
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wealthsimple Protal" component={WSPortal} />
        <Stack.Screen name="Financial Tips" component={FTips} />
        <Stack.Screen name="Wealthsimple Plans" component={WSPlans} />
        <Stack.Screen name="Canada Learning Bond Plan" component={CLB} />
        <Stack.Screen name="Quiz Assessements" component={QA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  text : {
    color: 'black',
    fontSize: 20,
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
    marginLeft: 15,
  },
  name_main: {
    fontSize: 40,
    color: '#fff',
    //fontFamily: 'Comfortaa_400Regular',
    marginTop: 5,
    marginBottom: 5,
  },

  name_sub: {
    fontSize: 20,
    color: '#fff',
    //fontFamily: 'Comfortaa_400Regular',
    marginBottom: 30,
  },

  name_comp: {
    fontSize: 15,
    color: '#fff',
    //fontFamily: 'Comfortaa_400Regular',
    marginBottom: 10,
  },

  name_day: {
    fontSize: 20,
    color: '#fff',
    //fontFamily: 'Comfortaa_400Regular',
    marginBottom: 30,
    borderTopWidth: 0.5,
    borderTopColor: '#EBEBEB',
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_portal: {
    flex: 1,
    backgroundColor: 'white',
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
    marginVertical: 10,
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
    paddingBottom: 10, 
  },

  iconBehave: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },

  plan_behave: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    marginRight: 20,
  },

  plan_images: {
    borderRadius: 15,
    width: 300,
    height: 200,
    marginBottom: 10,
  },

  plan_imagesclb: {
    borderRadius: 15,
    width: 500,
    height: 200,
    marginBottom: 10,
  },


  plan_imagesrec: {
    borderRadius: 15,
    width: 320,
    height: 200,
    marginBottom: 10,
  },

  progress_bar: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: '80%',
    height: 20,
    justifyContent: 'space-evenly',
    marginBottom: 20, 
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    marginBottom: 35,
  }

});
