import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/authslice";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("user: ", user);
  const isAdmin = useSelector((state: RootState) => state.auth.user?.isAdmin);
  const handleLogout = () => {
    dispatch(logout());
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl font-extrabold">Home Screen</Text>
      <View className="items-center gap-8 mt-6">
        <Text className="font-bold text-xl">Welcome {user?.email}</Text>
        {isAdmin ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("adminpage" as never);
            }}
            className="p-4 bg-blue-500 rounded"
          >
            <Text className="text-white">Ir para a página do Admin</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={handleLogout}
          className="p-4 bg-red-500 rounded"
        >
          <Text className="text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
