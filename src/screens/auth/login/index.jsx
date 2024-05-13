import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import * as Yup from "yup";
import { useFormik } from "formik";
import tw from "twrnc";
import * as SecureStore from "expo-secure-store";

import Button from "../../../components/button";
import { login } from "../../../services/auth";
import Input from "../../../components/input";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    getFieldProps,
  } = formik;

  const handleSubmit = async () => {
    setLoading(true);
    setAuthError("");
    // const res = await login(values);
    // setLoading(false);
    // if (!res?.token)
    //   return setAuthError(res?.message || "Something went wrong");
    // await SecureStore.setItemAsync("token", res?.token);
    navigation.navigate("App");
  };

  return (
    <View style={tw`h-[100%] bg-white  justify-center items-center`}>
      <View style={tw`h-[85%] w-full bg-white `}>
        
        <View style={tw`w-full`}>
          <Text style={tw`text-center font-extrabold text-[3rem]`}>
            Supa<Text style={tw`text-[#f5a442]`}>Menu</Text>
          </Text>
          <Text style={tw`text-center font-bold mt-3 `}>Welcome ...</Text>
          <Text style={tw`text-center text-gray-400  mt-3`}>
            Please fill in the information
          </Text>
        </View>

        {authError.length > 0 && (
          <Text style={tw`mt-1 text-red-500 text-center`}>{authError}</Text>
        )}
        <View style={tw`mt-`}>
          <View style={tw`px-6 py-2`}>
            <View style={tw`mt-`}></View>
            <Input
              Icon={<Feather name="mail" size={24} color="silver" />}
              placeholder="Your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              borderColor={touched.email && errors.email ? "red" : "gray"}
            />
            {touched.email && errors.email && (
              <Text style={tw`text-red-500`}>{errors.email}</Text>
            )}
            
            <View style={tw`mt-`}>
              <Input
                Icon={<Feather name="lock" size={24} color="silver" />}
                placeholder="Password"
                security={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                borderColor={
                  touched.password && errors.password ? "red" : "gray"
                }
              />
              {touched.password && errors.password && (
                <Text style={tw`text-red-500`}>{errors.password}</Text>
              )}
            </View>

            <View style={tw`mt-`}>
              
              
              <Button
                mode={"contained"}
                style={tw`bg-[#f5a442] w-full p-[10] mt-4`}
                onPress={handleSubmit}
              >
                {loading ? "Logging in ..." : "Sign in"}
              </Button>
              <Text style={tw`text-center mt-2`}>OR</Text>
              <Pressable
               
                style={tw`flex flex-row  border-2 border-gray-200 items-center justify-between p-5 text-black w-full  mt-4 rounded-md`}
                onPress={handleSubmit}

              >
                <AntDesign name="google" size={24} color="blue"/>
                 <Text style={tw`text-gray-500`}>Login with Google</Text> 
              </Pressable>
              <Pressable
               
                style={tw`flex flex-row border-2 border-gray-200   items-center justify-between p-5 text-black w-full  mt-4 rounded-md`}
                onPress={handleSubmit}

              >
                <EvilIcons name="sc-facebook" size={30} color="blue" />
                 <Text style={tw`text-gray-500`}>Login with Facebook</Text> 
              </Pressable>
              <Text style={tw`text-center text-[#b87321] mt-2 `}>
                Forgot Password?
              </Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={tw`mt-4`}>
                  <Text style={tw` text-center  text-gray-500`}>
                   Don't have a account? <Text style={tw`text-[#b87321]`}>Register</Text> 
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
