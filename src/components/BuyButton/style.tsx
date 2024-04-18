import { StyleSheet } from "react-native";
import {COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: `${COLORS}`,
        padding: 10,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8
    },
    buttom:{
        flexDirection: "row",
    },
    icon:{
        marginRight: 10,
    },
    buttomText:{
        color: '#fff',
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 18
    }
})