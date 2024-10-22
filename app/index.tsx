import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authslice";
import { RootState } from "../store/store";
import { useFocusEffect } from "@react-navigation/native";

const LoginScreen = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useFocusEffect(
    useCallback(() => {
      if (isAuthenticated) {
        console.log("authenticated");
        router.push("/(tabs)");
      }
    }, [isAuthenticated])
  );

  const handleLogin = () => {
    const user = { email, password };

    dispatch(login(user));
    {
      isAuthenticated
        ? Toast.show({
            type: "success",
            text1: "Login successfull",
            visibilityTime: 4000,
            position: "top",
          })
        : Toast.show({
            type: "error",
            text1: "User name or password incorrect",

            visibilityTime: 4000,
            position: "top",
          });
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View className="w-full px-6">
        <Text className="text-2xl font-bold text-center mb-6">Login Page</Text>

        {/* e-mail */}
        <TextInput
          className="border rounded-md p-3 mb-4 bg-gray-100"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        {/* password */}
        <TextInput
          className="border rounded-md p-3 mb-6 bg-gray-100"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* login btn */}
        <TouchableOpacity
          className="bg-green-500 p-3 rounded-md"
          onPress={handleLogin}
        >
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>

        {/* regiter */}
        <TouchableOpacity
          className="bg-cyan-500 p-3 rounded-md mt-4"
          onPress={() => router.push("/register")}
        >
          <Text className="text-white text-center">Register</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default LoginScreen;
