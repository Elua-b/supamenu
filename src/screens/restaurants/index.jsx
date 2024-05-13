import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Input from "../../components/input";
import tw from "twrnc";
import icon from "../../../assets/favicon.png";
import { AntDesign } from "@expo/vector-icons";
const Restaurants = () => {
  const restaurants = [
    {
      nama: "KFC",
      items: ["pizza", "burger", "fries"],
      image: require("../../../assets/kfc.png"),
    },
    {
      nama: "KFC",
      items: ["pizza", "burger", "fries"],
      image: require("../../../assets/kfc.png"),
    },
    {
      nama: "KFC",
      items: ["pizza", "burger", "fries"],
      image: require("../../../assets/kfc.png"),
    },
    {
      nama: "KFC",
      items: ["pizza", "burger", "fries"],
      image: require("../../../assets/kfc.png"),
    },
  ];

  return (
    <View style={tw`w-full p-4`}>
      <View style={tw`flex flex-row justify-between items-center px-4 w-full `}>
        <View style={tw`bg-gray-200 p-2 rounded`}>
          <AntDesign name="left" size={24} color="#b87321" />
        </View>

        <Input placeholder="Search..." />
      </View>
      <View style={tw`border-t-2 border-gray-300 mt-4`}>
        {/* <Text style={tw`underline`}></Text> */}
      </View>
      <View style={tw`flex p-4`}>
        <Text style={tw`px-4 text-[#b87321]`}>Nearby Restaurants</Text>
        <View style={tw`flex gap-y-8 items-center justify-between w-full p-3 `}>
          {restaurants.map((restaurant, index) => (
            <View
              key={index}
              style={tw`flex gap-x-5 p-6 flex-row justify-start items-center bg-gray-200 w-full rounded-lg`}
            >
              <View>
                <Image source={restaurant.image} style={tw`w-10 h-10`} />
                {/* <Text>{restaurant.image}</Text> */}
              </View>
              <View>
                <Text>{restaurant.nama}</Text>
                <Text>{restaurant.items}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});
