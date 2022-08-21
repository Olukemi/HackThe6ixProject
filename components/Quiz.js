import React, { useState } from 'react'
import { View, Text, ImageBackground, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, StyleSheet } from 'react-native'
// import { COLORS, SIZES } from '../constants';
import data from '../data-quiz/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
 
const Stack = createStackNavigator();

function Quiz ({navigation}) {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [moveToNext, setMoveToNext] = useState(false);
    const [nextText, setnextText] = useState("Next");
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    function handleNext() {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // setnextText("Submit");
           setShowScoreModal(true);
           
           // navigation.navigate("ShowCredit");
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            
        }
        if (currentQuestionIndex!= allQuestions.length- 1)
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question */}
                <Text style={{
                    color: "black",
                    fontSize: 30
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? "green"
                            : option==currentOptionSelected 
                            ? "red" 
                            : "black",
                            backgroundColor: option==correctOption 
                            ? "green" +'20'
                            : option==currentOptionSelected 
                            ? "red" +'20'
                            : "black" +'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: "black"}}>{option}</Text>
                            {
                                option==correctOption ? (
                                    <View style={{
                                        backgroundColor: "green"
                                    }}>
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', padding: 20, borderRadius: 5
                }}>
                    <Text style={{fontSize: 20, color: "black", textAlign: 'center'}}>{nextText}</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length-1],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: "#7BCCB5"
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    function takeBack(){
        setShowScoreModal(false)
        // navigation.navigate('Wealthsimple Protal');
    }

    const image1= {uri: '../icons/bgQuiz.png'};
    return (
        <ImageBackground source={require('../icons/bgQuiz.png')} style={{width: "100%", height:"100%"}}>
        <SafeAreaView style={{
            flex: 1
        }}>
        
        <StatusBar barStyle="light-content" backgroundColor={"black"} />
        <View style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 60,
            position:'relative'
        }}>
         
           {renderProgressBar()}
            {renderQuestion()}

            {/* Options */}
             {renderOptions()}

             {renderNextButton()}

             <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}
                >
                <View style={{
                            flex: 1,
                            backgroundColor: "#7BCCB5",
                            alignItems: 'center',
                            justifyContent: 'center',
                            
                        }}>
                <Image style={{width:"50%",heigth:"50%"}}source={require('../icons/coin.png')} />
                        
                    
                <Text style={styles.modalTitle}>Congratulations!</Text>
                <Text style={styles.modalSubText}>You have earned:  
                {score == 1 ? "$5": 
                score == 2 ? "$10" : 
                score == 3 ? "$15" :
                score == 4 ? "$20" :
                score == 5 ? "$25" : ""} in WS credit!</Text>

                <TouchableOpacity style={styles.goBackButton} onPress={() => restartQuiz()}>
                    <Text style={{fontSize:20}} >Back to Home</Text>
                </TouchableOpacity>
                </View>
                
            </Modal>

        </View>
        
        </SafeAreaView>
        </ImageBackground>
      );
    }

const styles = StyleSheet.create({

    modalTitle:{
        fontSize: 45, 
        color: "white"
    },
    modalSubText: {
        fontSize: 25,
        color: "white"
    },
    goBackButton: {
        backgroundColor: "white", 
        padding: 13,
        marginTop: "30%",
        justifyContent: "relative",
        borderRadius: 15,
        paddingHorizontal: 30
    },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
}
});


export default Quiz; 