import {
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { register } from "../store/authslice";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    try {
      const user = { email, password, isAdmin }; // Incluindo a senha
      dispatch(register(user));
      console.log(user);
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View className="w-full px-6">
        <Text className="text-2xl font-bold text-center mb-6">
          Register Page
        </Text>

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

        <View className="flex-row items-center mb-4">
          <Text className="mr-2">Admin:</Text>
          <Switch value={isAdmin} onValueChange={setIsAdmin} />
        </View>

        {/* Register btn */}
        <TouchableOpacity
          className="bg-cyan-500 p-3 rounded-md mb-4"
          onPress={handleRegister}
        >
          <Text className="text-white text-center">Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 p-3 rounded-md"
          onPress={() => router.back()}
        >
          <Text className="text-white text-center">Go to Login Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
