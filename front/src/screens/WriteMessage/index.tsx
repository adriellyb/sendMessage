import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Shadow } from 'react-native-shadow-2';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

/** */
import { styles } from './styles';

interface FormData {
    message: string;
}

export default function WriteMessage({ navigation, route }: any) {

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            message: '',
        }
    })
    const [info, setInfo] = useState<any>([]);    

    const [loaded] = useFonts({
        Light: require('../../../assets/fonts/RobotoMono-Light.ttf'),
        Regular: require('../../../assets/fonts/RobotoMono-Regular.ttf'),
        Medium: require('../../../assets/fonts/RobotoMono-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/RobotoMono-SemiBold.ttf'),
        Bold: require('../../../assets/fonts/RobotoMono-Bold.ttf'),
    });

    useEffect(() => {
        if (route.params?.data) {
            setInfo(route.params?.data);
        }
    }, [route.params?.data]);

    const onSubmit = (data:FormData) => {
        var sendData = {
            author: info.author,
            to: info.email,
            message: data.message
        }

        console.log(sendData);
        
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
                    <Text style={[styles.stepText, { fontFamily: "Bold" }]}>3</Text>
                </View>
            </Shadow>

            <View style={styles.viewContent}>
                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <View style={styles.boxContent}>
                        <Text style={[styles.labelTitle, { fontFamily: "Bold" }]}>Escreva sua mensagem</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            multiline={true}
                            maxLength={240}
                        />
                        )}
                            name="message"
                        />
                        {/* <Text style={{alignSelf: "flex-end", paddingRight: "5%"}}>{text.length}/240</Text> */}
                    </View>
                </Shadow>

                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <TouchableOpacity
                        style={styles.buttonView}
                        activeOpacity={.8}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={[styles.buttonText, { fontFamily: "Bold" }]}>Seguir</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </TouchableOpacity>
                </Shadow>
            </View>
        </ImageBackground>
    )
}