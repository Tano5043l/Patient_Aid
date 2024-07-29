import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, ImageBackground} from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function Profile() {



  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require ('@/assets/images/Knust_seal.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
            <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
              <Text style={styles.title}>Patient Profile</Text>
              <Pressable
                onPress={()=> router.push('/')}
                style={styles.logout}
                >
                  <Text style={styles.logoutText}>Logout</Text>
              </Pressable>
            </View>
            <View style={styles.profile}>
              <Image
              source={require('@/assets/images/profile.png')}
              style={styles.profileImage}
              />
              <Text style={styles.profileText}>Edit Profile Image</Text>        
            </View>
            <View style={styles.profileInfo}>
              <View>
                <Text style={styles.inputText}>First Name</Text>
                <Text style={styles.details}>John</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Last Name</Text>
                <Text style={styles.details}>Doe</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Date of Birth</Text>
                <Text style={styles.details}>DD/MM/YY</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Gender</Text>
                <Text style={styles.details}>Male</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Blood Type</Text>
                <Text style={styles.details}>A+</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Insurance Number</Text>
                <Text style={styles.details}>1110989808</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Emergency Contact(Relationship)</Text>
                <Text style={styles.details}>0245678273</Text>
              </View>
              <Pressable
              onPress={()=> Alert.alert('Request Information', 'You can request for patient information here')}
              style={styles.requestInfo}
              >
                <Text style={styles.requestInfoText}>Request Infomation</Text>
              </Pressable>
            </View> 
          </View>
        </ImageBackground>  
      </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
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
  logout : {
    backgroundColor : '#ff0',
    marginTop : 20,
    padding : 15,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf : 'center'
  },
  logoutText : {
    fontSize : 15,
    fontWeight : 'bold',
  },
  profile : {
    marginBottom : 30,
  },
  profileImage : {
    width : 100,
    height : 100,
    borderRadius : 50,
    alignSelf : 'center',
  },
  profileText : {
    fontWeight : 'bold',
    fontSize : 20,
    alignSelf : 'center',
  },
  profileInfo : {
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 10,

  },
  details : {
    marginBottom : 10,
    height : 40,
    padding : 10,
    borderWidth : 1,
    borderColor : '#E6E8EB',
    borderRadius : 5,
  },
  inputText : {
    fontWeight : 'bold',
    color : '#1AACAC',
    padding : 10,
  },
  requestInfo : {
    backgroundColor : '#0f0',
    marginTop : 10,
    padding : 15,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf : 'center'
  },
  requestInfoText : {
    fontSize : 15,
    fontWeight : 'bold',
  },
  
});
