import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

/** */
import { styles } from './styles';

export default function Home() {

    const [loaded] = useFonts({
        Light: require('../../../assets/fonts/RobotoMono-Light.ttf'),
        Regular: require('../../../assets/fonts/RobotoMono-Regular.ttf'),
        Medium: require('../../../assets/fonts/RobotoMono-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/RobotoMono-SemiBold.ttf'),
        Bold: require('../../../assets/fonts/RobotoMono-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground
            source={require('../../../assets/background.png')}
            style={styles.imageView}
        >
            <Image
                source={require('../../../assets/homeicon.png')}
                style={{width: 130 , height: 130 }}
            />

            <Text style={[styles.textView, {fontFamily: "Medium"}]}>Envie aquela mensagem especial pra quem você ama!</Text>

            <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                <TouchableOpacity
                    style={styles.buttonView}
                    activeOpacity={.8}
                    onPress={() => { }}
                >
                    <Text style={[styles.buttonText, {fontFamily: "Bold"}]}>Escrever</Text>
                    <Feather name='edit' size={24} color={"#000"} />
                </TouchableOpacity>
            </Shadow>
        </ImageBackground>
    )
}