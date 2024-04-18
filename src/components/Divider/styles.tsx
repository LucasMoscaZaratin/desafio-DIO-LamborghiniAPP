import { StyleSheet } from "react-native";
import {COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    dividerContainer:{
        alignItems: "center",
    },
    divider:{
        alignItems: "center",
        height: 1,
        width: "80%",
        marginVertical: 10,
        backgroundColor: `${COLORS}`,
    },
})