import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Shadow } from 'react-native-shadow-2';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

/** */
import { styles } from './styles';
interface FormData {
    email: string;
}

export default function GetEmail({ navigation, route }: any) {

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            email: '',
        }
    })
    const [author, setAuthor] = useState("");

    const [loaded] = useFonts({
        Light: require('../../../assets/fonts/RobotoMono-Light.ttf'),
        Regular: require('../../../assets/fonts/RobotoMono-Regular.ttf'),
        Medium: require('../../../assets/fonts/RobotoMono-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/RobotoMono-SemiBold.ttf'),
        Bold: require('../../../assets/fonts/RobotoMono-Bold.ttf'),
    });

    useEffect(() => {
        if (route.params?.name) {
            setAuthor(route.params?.name);
        }
    }, [route.params?.name]);


    const goToWriteMessage = (data: FormData) => {
        {
            navigation.navigate({
                name: "WriteMessage",
                params: {
                    data: {
                        author: author,
                        email: data.email
                    }
                },
                merge: true,
            })
        }
    }

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground
            source={require("../../../assets/background.png")}
            style={styles.imageView}
        >
            <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                <View style={styles.stepView}>
                    <Text style={[styles.stepText, { fontFamily: "Bold" }]}>2</Text>
                </View>
            </Shadow>

            <View style={styles.viewContent}>
                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <View style={styles.boxContent}>
                        <Text style={[styles.labelTitle, { fontFamily: "Bold" }]}>Pra quem você quer mandar?</Text>
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
                                    placeholder="exemplo@email.com"
                                    style={styles.input}
                                />
                            )}
                            name="email"
                        />
                    </View>
                </Shadow>

                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <TouchableOpacity
                        style={styles.buttonView}
                        activeOpacity={.8}
                        onPress={ handleSubmit(goToWriteMessage)}
                    >
                        <Text style={[styles.buttonText, { fontFamily: "Bold" }]}>Seguir</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </TouchableOpacity>
                </Shadow>
            </View>

            <Image
                source={require('../../../assets/homeicon.png')}
                style={{ width: 50, height: 50, alignSelf: "center" }}
            />
        </ImageBackground>
    )
}