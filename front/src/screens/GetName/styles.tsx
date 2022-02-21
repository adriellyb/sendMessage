import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageView: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: "10%",
        paddingVertical: "20%"
    },
    stepView: {
        width: 50,
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 500,
        alignItems: "center",
        justifyContent: "center",
    },
    stepText: {
        fontSize: 18,
    },
    viewContent: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "space-evenly"
    },
    boxContent: {
        backgroundColor: "#FFF",
        height: 100,
        width: 280,
        borderWidth: 2
    },
    labelTitle: {
        fontSize: 18,

        paddingHorizontal: "5%",
        paddingTop: 10
    },
    input: {
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
        fontSize: 16,

        paddingTop: 15
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
        fontSize: 18,
        paddingRight: 10
    }
})