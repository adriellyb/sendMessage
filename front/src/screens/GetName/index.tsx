import React, { useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

/** */
import { styles } from './styles';

export default function GetName({ navigation }:any) {

    const [text, setText] = useState("");
    const [loaded] = useFonts({
        Light: require('../../../assets/fonts/RobotoMono-Light.ttf'),
        Regular: require('../../../assets/fonts/RobotoMono-Regular.ttf'),
        Medium: require('../../../assets/fonts/RobotoMono-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/RobotoMono-SemiBold.ttf'),
        Bold: require('../../../assets/fonts/RobotoMono-Bold.ttf'),
    });

    const goToGetEmail = () => {
        {
            navigation.navigate({
                name: "GetEmail",
                params: { name: text },
                merge: true,
            })
        }
    }

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground
            source={require("../../../assets/background2.png")}
            style={styles.imageView}
        >
            <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                <View style={styles.stepView}>
                    <Text style={[styles.stepText, { fontFamily: "Bold" }]}>1</Text>
                </View>
            </Shadow>

            <View style={styles.viewContent}>
                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <View style={styles.boxContent}>
                        <Text style={[styles.labelTitle, { fontFamily: "Bold" }]}>Qual é o seu nome?</Text>
                        <TextInput
                            value={text}
                            onChangeText={(text:any) => setText(text)}
                            style={styles.input}
                        />
                    </View>
                </Shadow>

                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <TouchableOpacity 
                        style={styles.buttonView} 
                        activeOpacity={.8}
                        onPress={() => { goToGetEmail() }}
                    >
                        <Text style={[styles.buttonText, { fontFamily: "Bold" }]}>Seguir</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </TouchableOpacity>
                </Shadow>
            </View>

        </ImageBackground>
    )
}