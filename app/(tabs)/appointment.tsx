import { StyleSheet, Platform, ScrollView, View, Text, ImageBackground} from 'react-native';


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
          <Text style={styles.title}>Schedule Appointment</Text>
          <View style={styles.calendar}>
            <View style={styles.head}>
              <Text style={styles.headtext}>Click on a day to book an appointment</Text>
            </View>
            <Calendar
              // Initially visible month. Default = Date()
              current={'2024-07-13'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2022-01-01'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2034-12-31'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day: any) => {
              console.log('selected day', day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month: any) => {
              console.log('month changed', month);
              }}
              // Hide month navigation arrows. Default = false
              hideArrows={false}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={(subtractMonth: () => any) => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              onPressArrowRight={(addMonth: () => any) => addMonth()}
            />
          <View>
            <Text style={styles.legendtext}>Legend</Text>
            <View style={styles.legend}>
            <View style={{height : 20, width : 20, backgroundColor : '#0f0'}}></View>
            <Text style={styles.text}>Free for booking</Text>
            </View>
            <View style={styles.legend}>
            <View style={{height : 20, width : 20, backgroundColor : '#ff0'}}></View>
            <Text style={styles.text}>Lightly booked</Text>
            </View>
            <View style={styles.legend}>
            <View style={{height : 20, width : 20, backgroundColor : '#f00'}}></View>
            <Text style={styles.text}>Fully booked</Text>
            </View>
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
  calendar : {
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 10,
  },
  head : {
    alignItems : 'center',
  },
  headtext : {
    fontWeight : 'bold',
    fontSize : 19,
    textAlign : 'center',
    width : 200,
  },
  legendtext : {
    fontWeight : 'bold',
    fontSize : 20,
    textAlign : 'left',
  },
  legend : {
    flexDirection : 'row',
    margin : 10,
  },
  text : {
    marginLeft : 10,
  },
});
