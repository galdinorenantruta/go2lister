import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
          className="bg-blue-500 p-3 rounded-md mb-4"
          onPress={() => router.push("/(tabs)")}
        >
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>

        {/* regiter */}
        <TouchableOpacity
          className="bg-green-500 p-3 rounded-md"
          onPress={() => router.push("/register")}
        >
          <Text className="text-white text-center">Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
