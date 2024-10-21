import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("adminpage" as never);
          }}
          className="p-4 bg-blue-500 rounded"
        >
          <Text className="text-white">Ir para a página do Admin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
