import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, ImageBackground} from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar} from 'react-native-calendars';


import { router } from 'expo-router';

export default function Paybill() {



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require ('@/assets/images/Knust_seal.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Pay Bill</Text>
            <View style={styles.info2}>
              <Text style={styles.headtext}>Select payment you wish to make</Text>
              <View style={styles.details}>
                <View style={styles.data}>
                  <Text style={styles.text2}>Lab test. (Malaria test)</Text>
                  <Text style={styles.text3}>50</Text>
                </View>
              </View>
              <View style={{flexDirection : 'row'}}>
                <Pressable
                onPress={()=> {Alert.alert('Make payment', 'Take user to make payment screen')}}
                style={styles.makePayment}
                >
                  <Text style={styles.makePaymentText}>Proceed</Text>
                </Pressable>
                <Pressable
                onPress={()=> router.push('bill')}
                style={styles.cancel}
                >
                  <Text style={styles.makePaymentText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>  
      </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  scrollContainer : {
    flexGrow : 1,
  },
  container: {
    flex: 1
  },
  backgroundImage : {
    flex: 1,
  },
  content : {
    flex : 1,
    backgroundColor: 'rgba(26, 172, 172, 0.8)',
    padding : 20,
  },
  title: {
    fontWeight : 'bold',
    fontSize : 30,
    alignSelf : 'center',
    marginTop : 50,
    marginBottom : 20,
  },
  info2 : {
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 10,
    marginTop : 50,
    minHeight : 200,
    alignItems : 'center',
  },
  headtext : {
    fontWeight : 'bold',
    fontSize : 19,
    textAlign : 'center',
    width : 200,
  },
  details : {
    flex : 1,
    flexDirection : 'row',
    marginBottom : 10,
  },
  data : {
    flex : 0.9,
    flexDirection : 'row',
    borderBottomWidth : 1,
  },
  text2 : {
    flex : 0.5,
    fontWeight : 'black',
    fontSize : 15,
    textAlign : 'left',
    alignSelf : 'center',
  },
  text3 : {
    flex : 0.5,
    fontWeight : 'black',
    fontSize : 15,
    textAlign : 'right',
    alignSelf : 'center'
  },
  makePayment : {
    backgroundColor : '#0f0',
    marginTop : 20,
    marginRight: 10,
    padding : 15,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf : 'center'
  },
  cancel : {
    backgroundColor : '#f00',
    marginTop : 20,
    marginLeft: 10,
    padding : 15,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf : 'center'
  },
  makePaymentText : {
    fontSize : 15,
    fontWeight : 'bold',
  },
});
