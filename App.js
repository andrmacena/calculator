import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
   render() {
      return (
         <View style={styles.body} >
            <View style={styles.sectionContainer}>
               <Text style={styles.sectionDescription}>
                  Editar <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
              </Text>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   body: {
      backgroundColor: '#fff',
   },
   sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
   },
   sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
   },
   highlight: {
      fontWeight: '700',
   },
});
