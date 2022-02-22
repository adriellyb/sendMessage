import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Shadow } from 'react-native-shadow-2';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

/** */
import { styles } from './styles';
interface FormData {
    name: string;
}

export default function GetName({ navigation }: any) {

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            name: '',
        }
    })
    const [loaded] = useFonts({
        Light: require('../../../assets/fonts/RobotoMono-Light.ttf'),
        Regular: require('../../../assets/fonts/RobotoMono-Regular.ttf'),
        Medium: require('../../../assets/fonts/RobotoMono-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/RobotoMono-SemiBold.ttf'),
        Bold: require('../../../assets/fonts/RobotoMono-Bold.ttf'),
    });

    const goToGetEmail = (data: FormData) => {
        {
            navigation.navigate({
                name: "GetEmail",
                params: { name: data.name },
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
                                />
                            )}
                            name="name"
                        />
                    </View>
                </Shadow>

                <Shadow offset={[-6, 6]} startColor={'#000'} finalColor={"#000"} distance={3}>
                    <TouchableOpacity
                        style={styles.buttonView}
                        activeOpacity={.8}
                        onPress={handleSubmit(goToGetEmail)}
                    >
                        <Text style={[styles.buttonText, { fontFamily: "Bold" }]}>Seguir</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </TouchableOpacity>
                </Shadow>
            </View>

        </ImageBackground>
    )
}