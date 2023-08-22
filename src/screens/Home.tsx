import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col">
      <View className="flex w-full h-full">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="w-full"
        >
          <Text>Teasdst</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
