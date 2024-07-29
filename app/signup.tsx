import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

import { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createClient } from '@supabase/supabase-js'


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { supabase } from '../supabase';


export default function Signup() {

  //Toggle password visibility

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  //Toggle remember me check box 

  const [isSelected, setSelection] = useState(false);

  //Validation

  const [firstName,setFirstName] = useState("")
  const [firstNameVerify,setFirstNameVerify] = useState(false)

  const [lastName,setLastName] = useState("")
  const [lastNameVerify,setLastNameVerify] = useState(false)

  const [otherName,setOtherName] = useState("")
  const [otherNameVerify,setOtherNameVerify] = useState(false)

  const [nhis,setNhis] = useState("")
  const [nhisVerify,setNhisVerify] = useState(false)

  const [email,setEmail] = useState("")
  const [emailVerify,setEmailVerify] = useState(false)

  const [passwordVerify,setPasswordVerify] = useState(false);


  function handleFirstName(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const firstNameVar = e.nativeEvent.text;
    setFirstName(firstNameVar);
    setFirstNameVerify(false);

    if (firstNameVar.length > 1)
    {
      setFirstNameVerify(true);
    }
  }

  function handleLastName(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const lastNameVar = e.nativeEvent.text;
    setLastName(lastNameVar);
    setLastNameVerify(false);

    if (lastNameVar.length > 1)
    {
      setLastNameVerify(true);
    }
  }

  function handleOtherName(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const otherNameVar = e.nativeEvent.text;
    setOtherName(otherNameVar);
    setOtherNameVerify(false);

    if (otherNameVar.length > 1)
    {
      setOtherNameVerify(true);
    }
  }

  function handleNhis(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const nhisVar =e.nativeEvent.text;
    setNhis(nhisVar);
    setNhisVerify(false);

    if (/^\d{8,}$/.test(nhisVar))
    {
      setNhisVerify(true);
    }
  }

  function handleEmail(e: NativeSyntheticEvent<TextInputChangeEventData>){
    const emailVar =e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);

    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar))
    {
      setEmailVerify(true);
    }
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
  
  //Signin

const registerUser = async(firstName:string, lastName:string, otherName:string, nhis:string, email:string, password:string, User_Id:string | undefined) =>{

const { data, error } = await supabase
.from('User_info')
.upsert({ 
  firstName,
  lastName,
  otherName,
  nhis,
  email,
  User_Id
})
.select()
console.log(error)

}

  const handleSubmit = async() => {
    
    const { data, error } = await supabase.auth.signUp({
      email : email,
      password : password
    });

    if (error) {
      if (error.status === 429) {
        Alert.alert('Rate Limit Exceeded', 'You have hit the rate limit for sign-up attempts. Please try again later.');
      } else {
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Success', 'Sign-up successful!');
    }

    registerUser(firstName, lastName, otherName, nhis, email, password, data?.user?.id)
    
    //Display message
    Alert.alert('You have successfully signed up')

    //Go to login page
    router.push('/')
  }

  const handleGoogleSignup = async() => {

const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github'
})
    Alert.alert('Google signup', 'Sign up with google')

  }

  return (
    <ScrollView
    keyboardShouldPersistTaps="always"
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
          <Text style={styles.formHeading}>Create a new account</Text>
          <View style={styles.infoField}>
            <View>
              <Text style={styles.inputText}>First Name</Text>
              <TextInput style={styles.inputField} value={firstName} placeholder='First Name' onChange={e=>handleFirstName(e)}/>
              {firstName.length < 1 ?null : firstNameVerify ?<Feather name="check-circle" color="#0f0" size={20}/> : <Feather name="alert-circle" color="#f00" size={20}/>}
            </View>
            {
              firstName.length < 1 ?null : firstNameVerify ? null :
              <Text style={{color : '#f00'}}>Name should be more than one character</Text>
            }
            <View>
              <Text style={styles.inputText}>Last Name</Text>
              <TextInput style={styles.inputField} value={lastName} placeholder='Last Name' onChange={e=>handleLastName(e)}/>
              {lastName.length < 1 ?null : lastNameVerify ?<Feather name="check-circle" color="#0f0" size={20}/> : <Feather name="alert-circle" color="#f00" size={20}/>}
            </View>
            {
              lastName.length < 1 ?null : lastNameVerify ? null :
              <Text style={{color : '#f00'}}>Name should be more than one character</Text>
            }
            <View>
              <Text style={styles.inputText}>Other Name</Text>
              <TextInput style={styles.inputField} value={otherName} placeholder='Other Name' onChange={e=>handleOtherName(e)}/>
              {otherName.length < 1 ?null : otherNameVerify ?<Feather name="check-circle" color="#0f0" size={20}/> : <Feather name="alert-circle" color="#f00" size={20}/>}
            </View>
            {
              otherName.length < 1 ?null : otherNameVerify ? null :
              <Text style={{color : '#f00'}}>Name should be more than one character</Text>
            }
            <View>
              <Text style={styles.inputText}>NHIS Number</Text>
              <TextInput style={styles.inputField} value={nhis} placeholder='########' maxLength={8} onChange={e=>handleNhis(e)}/>
              {nhis.length < 1 ?null : nhisVerify ?<Feather name="check-circle" color="#0f0" size={20}/> : <Feather name="alert-circle" color="#f00" size={20}/>}
            </View>
            {
              nhis.length < 1 ?null : nhisVerify ? null :
              <Text style={{color : '#f00'}}>NHIS should contain only 8 numbers</Text>
            }
            <View>
              <Text style={styles.inputText}>Email Address</Text>
              <TextInput style={styles.inputField} value={email} placeholder='Email' onChange={e=>handleEmail(e)}/>
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
              {password.length < 1 ?null : passwordVerify ?<Feather name="check-circle" color="#0f0" size={20}/> : <Feather name="alert-circle" color="#f00" size={20}/>}
            </View>
            {
              password.length < 1 ?null : passwordVerify ? null :
              <Text style={{color : '#f00'}}>Uppercase, Lowercase, Number and 8 or more characters</Text>
            }
          </View>
          <Pressable
          onPress={()=>{
            handleSubmit()
            console.log("signed up")
          }
          }
          style={styles.signin}
          >
            <Text style={styles.formHeading}>Signup</Text>
          </Pressable>
          <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 10}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={()=> router.push('/')}>
              <Text style={styles.signup}>Login here </Text>
            </TouchableOpacity>
          </View>
          <Text style= {styles.getAccess}>Signup another way</Text>
          <Pressable
          onPress={()=> handleGoogleSignup}
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
  signin : {
    backgroundColor : '#0f0',
    marginTop : 20,
    padding : 15,
    width : '50%',
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center',

  },
  signup : {
    marginLeft: 10,
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

