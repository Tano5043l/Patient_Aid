import { Image, StyleSheet, Platform, ScrollView, View, Text, ImageBackground,} from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import * as Progress from 'react-native-progress';




export default function Template() {



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require ('@/assets/images/Knust_seal.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
          <Text style={styles.title}>Status</Text>
          <View>
            <Progress.Bar progress={0.3} width={350} color="#0f0" borderColor="#333" unfilledColor="#E0E0E0" animated={true}/>
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
});
