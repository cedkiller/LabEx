import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const About = ({ navigation }) => {
  const handlePress = (action) => {
    switch (action) {
      case 'Education':
        navigation.navigate('Education');
        break;
      default:
        console.log('Unknown action');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('Education')} >
        <View>
          <Text style = {styles.head}>About</Text>
          <Text style = {styles.par}>
            Hi there, my name is Cedrick Jasper R. Sarabia, and I live at 17 Patani Ally St. Gen. Mal. Ext. Bagong Barrio, Caloocan City, I am 22 years old. and my interests include watching anime, playing video games, and practicing computer coding. Eventually, I hope to work as a software engineer.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginTop: 200
  },

  par: {
    fontSize: 15,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 30
  }
});

export default About;