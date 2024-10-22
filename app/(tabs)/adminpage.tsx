import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const adminpage = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View>
        <Text className=" font-bold text-xl">
          This Page is only for Administrator
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default adminpage;
