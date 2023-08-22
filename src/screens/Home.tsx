import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

//  COMPONENTS
import Header from "../components/Header";

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    // TODO: FETCH DATA FROM BACKEND ABOUT USER AND MOUNT IT TO USERSLICE
  }, []);

  return (
    <SafeAreaView className="flex-col">
      <View className="flex w-full h-full">
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          <Header />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
