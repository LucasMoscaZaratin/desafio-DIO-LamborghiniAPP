import { TouchableOpacity, View, Text } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import { styles } from "./style";

export default function BuyButtom(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttom}>
                <AntDesign
                    name="shoppingcart"
                    size={24}
                    color="#fff"
                    style={styles.icon}
                />
                <Text style={styles.buttomText}> Buy This </Text>
            </TouchableOpacity>
        </View>
    )
}