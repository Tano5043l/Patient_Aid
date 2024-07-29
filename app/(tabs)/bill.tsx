import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, Pressable, Alert, TouchableOpacity, ImageBackground} from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Bill() {



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require ('@/assets/images/Knust_seal.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Bill</Text>
            <View style={styles.info2}>
              <View style={styles.info}>
                <View style={styles.heading}>
                  <Text style={styles.headingText}>Details</Text>
                  <Text style={styles.headingText}>Amount(GHS)</Text>
                  <Text style={styles.headingText}>Status</Text>
                </View>
                <View style={styles.data}>
                <Text style={styles.text2}>Lab test. (Malaria test)</Text>
                <Text style={styles.text3}>50</Text>
                <Text style={styles.text3}>Complete</Text>
                </View>
                <View style={styles.data}>
                <Text style={styles.text2}>Lab test. (Thyphoid test)</Text>
                <Text style={styles.text3}>80</Text>
                <Text style={styles.text3}>Pending</Text>
                </View>
                <View style={styles.data}>
                <Text style={styles.text2}>Lab test. (Malaria test)</Text>
                <Text style={styles.text3}>30</Text>
                <Text style={styles.text3}>Not paid</Text>
                </View>
              </View>
              <Pressable
              onPress={()=> router.push('paybill')}
              style={styles.makePayment}
              >
                <Text style={styles.makePaymentText}>Make Payment</Text>
              </Pressable>
            </View>
            {/* <View style={styles.info1}>
                    <Ionicons
                      name={'checkmark-circle'}
                      size={50}
                      color="#0f0"
                      style= {{marginBottom : 10}}
                    />
              <Text style={styles.text1}>You have no outstanding payments</Text>
            </View> */}
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
    flex: 1,
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
  info1 : {
    flex :1,
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 10,
    marginTop : 50,
    minHeight : 150,
    justifyContent : 'center',
    alignItems : 'center'
  },
  info2 : {
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 10,
    marginTop : 50,
    minHeight : 200,
  },
  text1 : {
    fontWeight : 'bold',
    fontSize : 18,
    margin : 5,
  },
  text2 : {
    flex : 0.33,
    fontWeight : 'black',
    fontSize : 15,
    textAlign : 'left',
  },
  text3 : {
    flex : 0.33,
    fontWeight : 'black',
    fontSize : 15,
    textAlign : 'center',
    alignSelf : 'center'
  },
  info : {
    flex :1,
  },
  heading : {
    flex : 1,
    flexDirection : 'row',
    marginBottom : 10,
  },
  headingText :{
    flex : 0.33,
    fontWeight : 'bold',
    fontSize : 15,
    textAlign : 'center',

  },
  data : {
    flex : 1,
    flexDirection : 'row',
    borderBottomWidth : 1,

  },
  makePayment : {
    backgroundColor : '#0f0',
    marginTop : 20,
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


// import Ionicons from '@expo/vector-icons/Ionicons';
// import { StyleSheet, Image, Platform } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
//           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user's current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
//           to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
