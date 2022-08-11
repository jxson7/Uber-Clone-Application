import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import {Icon} from "react-native-elements";
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setDestination, setOrigin} from '../slices/navSlice';
import NavOptions from './NavOptions';
import {GOOGLE_MAPS_APIKEY} from "@env";
import NavigateCard from './NavigateCard';
import MapScreen from '../views/MapScreen';

const data =[
    {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "116 Overdown Road, Tilehurst, Reading, UK",
    },
    {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
    },
    

];

const NavFavourites = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();


    return  <FlatList data={data} keyExtractor={(item)=> item.id}
        ItemSeparatorComponent={() => (
            <View
                style={[tw`bg-gray-200`, {height: 0.5}]}
            />
        )}
        renderItem={({item: {location, destination, icon} }) => (
            <TouchableOpacity
            onPress={(data, details=null) => {
                dispatch(setOrigin({
                  location:location,
                  description: destination
                  
                })
                
                )
                dispatch(setDestination(null))

                }}
                debounce={400}

                
                
        
            

            
            style={tw`flex-row items-center p-5`}>
                
                <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                    
                </View>
                
            </TouchableOpacity>
        )
    }/>;
        
    
};

export default NavFavourites

const styles = StyleSheet.create({})