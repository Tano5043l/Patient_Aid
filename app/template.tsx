import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, ImageBackground} from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar} from 'react-native-calendars';



import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Template() {



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require ('@/assets/images/Knust_seal.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
          <Text style={styles.title}>Template</Text>
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
});
