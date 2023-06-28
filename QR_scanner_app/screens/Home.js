import { StatusBar } from 'expo-status-bar';
import React ,  { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ImageBackground, TouchableOpacity, TextInput, Platform,Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const API_URL = ''



export default function Home() {
    const navigation = useNavigation();


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };


    const onSubmitHandler = async() => {
        
        
            try {
              const res = await fetch('https://bitotsavbackend-production.up.railway.app/api/v1/users/login', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
              });
              const data = await res.json();
              console.log(data);

              setMessage({
                body: data.message,
                title: "",
                status: "info",
              });

              if (data.status == "success") {
                // setCookie("jwt", data.token, {
                //   maxAge: 3600 * 24,
                // });
                // setCookie("user", JSON.stringify(data.user), { maxAge: 3600 * 24 });
                
                setIsError(false)

                if(data.user.role =="security" || data.user.role =="admin" ){
                  setTimeout(() => {

                    navigation.navigate("Scanner", {token: data.token});
                    
                  }, 1000);

                }




                console.log("logged in")
              }
         
            } catch (err) {

              setIsError(true);

              setMessage({
                body: err.message,
                title: "",
                status: "error",
              });
         
          }
    
     
       
    };



    const getMessage = () => {
       
        return  message.body;
    }


  return (
    <View style={styles.container}>

<View style={styles.card}>
<Image  style={styles.logo} source={require('../assets/lock.png')} />
                <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}></TextInput>
                        {!isLogin && <TextInput style={styles.input} placeholder="Name" onChangeText={setName}></TextInput>}
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}></TextInput>
                    
                        <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message.body ? getMessage() : null}</Text>
                        

                       
                      
                    </View>    
                 
                </View>
            </View>
            <Button title='Login'  onPress={onSubmitHandler} />
        {/* <Button title='Scan' onPress={() => navigation.navigate("Scanner")}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    width: 200,
    height: 200,
  }
});
