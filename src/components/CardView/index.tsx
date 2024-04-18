import React from "react";
import { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import lamborghiniLogo from '../../../assets/logo.png';
import { styles } from "./style";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL} from "../../constants/car";
import { COLORS } from "../../constants/colors";
import BuyButtom from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";


export default function CardView(){

    const [carData, setCarData] = useState<CarModel | null>(null)

    useEffect(()=>{
        (async()=>{
            await loadCarData(1, setCarData)
        })();
    },[]);

    const renderLogoBox = () =>(
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={lamborghiniLogo} />
        </View>
    );
    
    const renderCarDetails = () =>(
        <View style={{alignItems: "center"}}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    );

    const renderCarImage = () =>(
        <Image
            style={styles.carImage}
            source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
        />
    );

    const renderPriceControls = () =>(
        <View style={styles.priceLabelContainer}>
            <Button 
            onPress={() => handlePreviousItem(carData, setCarData)}
            color={COLORS}
            title="<"
            />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button 
            onPress={() => handleNextItem(carData, setCarData)}
            color={COLORS}
            title=">"
            />
        </View>
    )


    return(
        <View style={styles.imageContainer} >
            {renderLogoBox()}

            <Divider/>
            {renderCarDetails()}
            {renderCarImage()}

            <Divider/>
            <BuyButtom/>
            {renderPriceControls()}
        </View>
    )
}