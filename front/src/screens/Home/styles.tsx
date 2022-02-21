import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: "10%",
        // paddingVertical: "25%"
    },
    textView: {
        color: "#FFF",
        fontSize: 24,
        textAlign: "center",
        textShadowColor: "#000",
        textShadowRadius: 20
    },
    buttonView: {
        height: 50,
        width: "auto",
        backgroundColor: "#FE9FE6",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

        paddingHorizontal: "10%"
    },
    buttonText: {
        fontSize: 20,
        paddingRight: 10
    }
})