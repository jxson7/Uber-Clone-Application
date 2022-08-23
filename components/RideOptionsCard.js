import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravel } from "../slices/navSlice";



// addition of MPG is required. 
const data = [
  {
    id: "Uber-X-123",
    title: "Audi TT ('16)",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
    mpg: 26 ,
  },
  {
    id: "Uber-XL-456",
    title: "Ford Galaxy ('22) ",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
    mpg: 44.1,
  },
  {
    id: "Uber-Lux-789",
    title: "Ford Mustang ('21)",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
    mpg: 19,

  },
];

// if surge charging is present, value increases
const SURGE_CHARGE_RATE = 1.5;
const DIESEL_CO2_RATE = 2.68;
const PETROL_CO2_RATE = 2.31;
const GALLON_TO_LITRE = 4.546;
const CONVERSION = 1616.57143



const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravel);
  

  return (
    <SafeAreaView style={tw`bg-white flex-grow `}>
      <View style={tw`-top-10`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`absolute top-3 left-5 p-3 z-50 rounded-full`]}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl `}>
          My Vehicles - Distance: {travelTimeInformation?.distance?.text}
        </Text>
        
      </View>

      <FlatList
        style={tw`-top-10`}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, mpg, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-6 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl text-center font-semibold`}>{title}</Text>
              <Text> Travel: {travelTimeInformation?.duration?.text}</Text>
            </View>

            
            <Text style={tw`text-lg text-justify`}>
          
            {/* <View>
            const dist = {travelTimeInformation.distance.text}
            dist = Number(dist.replace(/[^\d]/g, ''));    

            </View> */}
         
            {/* ({travelTimeInformation?.distance?.text}/{selected?.mpg}*{GALLON_TO_LITRE.text}*{DIESEL_CO2_RATE}) */}

            {new Intl.NumberFormat("en-gb", {
              }).format(
                ((travelTimeInformation?.distance?.value /
                  CONVERSION / mpg)*GALLON_TO_LITRE*DIESEL_CO2_RATE)
                  
              )}
              

            </Text>
            <Text style= {tw`font-bold`}>
             CO2 KG
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`-top-10`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            {" "}
            Chose {selected?.title}{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
