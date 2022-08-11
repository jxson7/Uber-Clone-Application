import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravel } from '../slices/navSlice'


const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-Lux-789",
    title: "Uber Lux",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

// if surge charging is present, value increases
const SURGE_CHARGE_RATE = 1.5;


const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravel);


  return (
    <SafeAreaView style ={tw`bg-white flex-grow `}>
      <View style={tw`-top-10`}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("NavigateCard")} 
        style={[tw`absolute top-3 left-5 p-3 z-50 rounded-full`]}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl `}>Select A Ride - {travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList
      style={tw`-top-10`}
      data = {data}
      keyExtractor = {(item => item.id)}
      renderItem = {({item:{id, title, multiplier, image}, item}) => (
        <TouchableOpacity 
        onPress={() => setSelected(item)}
        
        style={tw`flex-row justify-between items-center px-6 ${id === selected?.id && "bg-gray-200"}`}>
          <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          
          }}
          source= {{uri: image}}/>
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text> Travel Time: {travelTimeInformation?.duration.text}</Text>
          </View>
          <Text style={tw`text-xl`}>
            {new Intl.NumberFormat('en-gb', {
              style: 'currency',
              currency: 'GBP'
            }
            ).format(
            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) /100
            )
            }
          </Text>
        </TouchableOpacity>

      )}

      />

      <View style={tw`-top-10`}>
        <TouchableOpacity disabled={!selected}style = {tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}> Chose {selected?.title} </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})