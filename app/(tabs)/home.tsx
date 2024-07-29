import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, ImageBackground} from 'react-native';
import { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomeScreen() {

  const[notification,setNotification] = useState('');
  const [notificationAvailable,setNotificationAvailable] = useState(true)

  const handleNotification = () => {
    
  }


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require ('@/assets/images/Knust_seal.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Did you know?</Text>
            <View style={styles.tip}>
              <Text style={styles.text}>Tip of the day</Text>
              <View style= {{flex : 0.1, alignItems : 'center'}}>
              <Ionicons
                    name={ 'bulb'}
                    size={24}
                    color="#ff0" 
                  />
                  <Text style= {{fontSize : 10}}>Next hint</Text>
              </View>
            </View>
            <View style={styles.discover}>
              <ImageBackground
              source={require('@/assets/images/discover.jpeg')}
              style={styles.discoverBackground}
              imageStyle= {{borderRadius : 20}}
              >
                <Text style={styles.discoverText}>Discover</Text>
              </ImageBackground>
            </View>
            <View style={styles.bar}>
              <Pressable
              onPress={() => Alert.alert('Notifications')}
              style={styles.bar1}>
                <Text style={{alignSelf : 'center'}}>Notifications</Text>
              </Pressable>
              <Pressable
              onPress={() => Alert.alert('Appointments')}
              style={styles.bar2}>
                <Text style={{alignSelf : 'center'}}>Appointments</Text>
              </Pressable>
            </View>
            <View style={styles.notification}>
                <Ionicons
                  name={ 'flask'}
                  size={24}
                  color="#000"
                  style={{flex : 0.2}} 
                />
                <Text style={styles.notificationText}>Lab results available</Text>
            </View>
            <View style={styles.notification}>
                <Ionicons
                  name={ 'calendar'}
                  size={24}
                  color="#000" 
                  style={{flex : 0.2}}
                />
                <Text style={styles.notificationText}>Appointment reminder</Text>
            </View>
            <View style={styles.notification}>
                <Ionicons
                  name={ 'wallet'}
                  size={24}
                  color="#000" 
                  style={{flex : 0.2}}
                />
                <Text style={styles.notificationText}>Payment required</Text>
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
    backgroundColor: 'rgba(26, 172, 172, 0.8)',
    padding : 20,
    flexGrow : 1,
  },
  title: {
    fontWeight : 'bold',
    fontSize : 20,
    alignSelf : 'center',
    marginTop : 50,
  },
  text : {
    flex : 0.9,
    fontWeight : 'bold',
    fontSize : 15,
    alignSelf : 'center',
  },
  tip : {
    flexDirection : 'row',
    backgroundColor : '#fff',
    marginTop : 20,
    padding : 10,
    borderRadius : 20,
  },
  discover : {
    marginTop : 50,
    borderRadius : 20,
    minHeight : 150,
  },
  discoverBackground : {
    flex : 1,
    padding : 10,
    borderRadius : 20,
    overflow : 'hidden',
    justifyContent : 'flex-end',
  },
  discoverText : {
    fontWeight : 'bold',
    fontSize : 30,
    alignSelf : 'center',
    color : '#fff',
    
  },
  bar : {
    flexDirection : 'row',
    backgroundColor : '#E6E8EB',
    height : 35,
    borderRadius : 20,
    marginTop : 20,
    justifyContent : 'space-between'
  },
  bar1 : {
    flex : 0.5,
    borderRadius : 20,
    backgroundColor : '#fff',
    padding : 7,
  },
  bar2 : {
    flex : 0.5,
    padding : 7,
  },
  notification : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : '#fff',
    marginTop : 20,
    borderRadius : 25,
    minHeight : 70,
    padding : 25,
  },
  notificationText : {
    flex : 0.8,
    fontWeight : 'bold',
    alignSelf : 'center',

  },
});
