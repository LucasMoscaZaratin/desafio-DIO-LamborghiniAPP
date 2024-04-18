import { fetchGetCarsData } from "../../api/getCars"
import { CarModel } from "./props"

//Fazer uma solicitação para a API
export const loadCarData = async(id:number, setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarsData(id);
    try{
        if(response){
            setCarData(response);
        }
    }catch(error){
        console.log("Erro ao buscar na API:", error);
        setCarData(null);
    }
};

export const handlePreviousItem = async(
    carData: CarModel | null, 
    setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) => {
        let response = null;
        try{
            if(carData && carData.id > 1){
                response = await fetchGetCarsData(carData.id - 1 );
            }
            if(response){
                setCarData(response);
            }
        }catch(error){
            console.log("Erro ao chamar a API:", error);
        }
};

export const handleNextItem = async(
    carData: CarModel | null, 
    setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) => {
        let response = null;
        try{
            if(carData && carData.id < 10){
                response = await fetchGetCarsData(carData.id + 1 );
            }
            if(response){
                setCarData(response);
            }
        }catch(error){
            console.log("Erro ao chamar a API:", error);
        }
};