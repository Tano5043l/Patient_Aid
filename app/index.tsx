import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData,} from 'react-native';

import { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function LogIn() {

  //Toggle password visibility
  
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  //Toggle remember me check box 

  const [isChecked, setIsChecked] = useState(false)

  //Validation

  const [email,setEmail] = useState("")
  const [emailVerify,setEmailVerify] = useState(false)

  const [passwordVerify,setPasswordVerify] = useState(false);


  function handleEmail(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const emailVar =e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);

    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar))
    {
      setEmailVerify(true);
    }
  }

  //Login

  const handleOnpress = () => {
    //Display message
    Alert.alert('You have successfully logged in')

    //Go to login page
    router.push('(tabs)/home')
  }

  function handlePassword(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const passwordVar =e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);

    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordVar))
    {
      setPasswordVerify(true);
    }
  }


  return (
    <ScrollView
    keyboardShouldPersistTaps = 'always'
    >
      <View style={styles.container}>
      <View style={styles.header}>
      <Image
        source={require ('@/assets/images/Knust_seal.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
    </View>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Patient Aid</ThemedText>
        </ThemedView>
        <View style={styles.form}>
          <Text style={styles.formHeading}>Login to your account</Text>
          <View style={styles.infoField}>
            <View>
              <Text style={styles.inputText}>Email Address</Text>
              <TextInput style={styles.inputField} placeholder='Email' onChange={e=>{handleEmail(e)}}/>
              {email.length < 1 ?null : emailVerify ?<Feather name="check-circle" color="#0f0" size={20}/> : <Feather name="alert-circle" color="#f00" size={20}/>}
            </View>
            {
              email.length < 1 ?null : emailVerify ? null :
              <Text style={{color : '#f00'}}>Enter proper email address</Text>
            }
            <View>
              <Text style={styles.inputText}>Password</Text>
              <View style={styles.inputField}>
                <TextInput
                style={{flex : 0.99}}
                placeholder="Enter your password"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
                onChange={e=>handlePassword(e)}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Ionicons
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    size={30}
                    color="grey"
                    style= {{marginLeft : 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {
              password.length < 1 ?null : passwordVerify ? null :
              <Text style={{color : '#f00'}}>Uppercase, Lowercase, Number and 6 or more characters</Text>
            }
            <CheckBox
              title="Remeber me"
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
          </View>
          <Pressable
          onPress={handleOnpress}
          style={styles.login}
          >
            <Text style={styles.formHeading}>Login</Text>
          </Pressable>
          <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 10}}>
            <Text>New User? </Text>
            <TouchableOpacity onPress={() => router.push('signup')}>
              <Text style={styles.signup}>Signup here</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => router.push('')}>
              <Text style={styles.signup}>Forgot password </Text>
          </TouchableOpacity>
          <Text style= {styles.getAccess}>Signup another way</Text>
          <Pressable
          onPress={()=> {Alert.alert('Signup', 'Signup with google')}}
          style={styles.otherAccess}
          >
            <Image
            source={require('@/assets/images/google.jpeg')}
            style= {styles.img}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header : {
    flex: 1,
    flexDirection : 'row',
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    zIndex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(26, 172, 172, 0.8)', // Change this to your desired color and opacity
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  titleContainer: {
    alignSelf : 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop : 50,
    padding: 5,
    gap: 8,
  },
  form : {
    margin : 10,
    alignItems : 'center',
    justifyContent : 'center',
    alignSelf : 'stretch'
  },
  formHeading : {
    fontSize : 20,
    fontWeight : 'bold',

  },
  infoField : {
    textAlign : 'left',
    alignSelf : 'stretch',
    padding : 10,
  },
  inputField : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : '#F8F9FA',
    marginTop : 10,
    marginBottom : 10,
    height : 50,
    padding : 10,
    borderWidth : 1,
    borderBlockColor : '#000',
    borderRadius : 10,
  },
  inputText : {
    fontWeight : 'bold',
  },
  checkbox : {

  },
  login : {
    backgroundColor : '#0f0',
    marginTop : 20,
    padding : 15,
    width : '50%',
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center',

  },
  signup : {
    marginLeft: 0,
    textDecorationLine : 'underline',
    color : '#0019FF'
  },
  getAccess : {
    backgroundColor : '#000',
    color : '#fff',
    borderRadius : 50,
    padding : 5,
    width : '80%',
    textAlign : 'center'
  },
  otherAccess : {
    backgroundColor : '#F8F9FA',
    marginTop : 20,
    borderRadius : 100,
  },
  img : {
    width : 50,
    height : 50,
    borderRadius : 100,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
