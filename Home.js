import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Home = ({ navigation }) => {
  const handlePress = (action) => {
    switch (action) {
      case 'About':
        navigation.navigate('About');
        break;
      default:
        console.log('Unknown action');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('About')} >
        <View style = {styles.center}>
          <Image source = {require('./assets/pic.jpg')} style = {styles.img}/>
          <Text style = {styles.head}>Cedrick Jasper R. Sarabia</Text>
          <Text style = {styles.par}>Bachelor of Science in Information Technology</Text>
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

  img: {
    height: 200,
    width: 200,
    borderRadius: 200,
    marginTop: 150,
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },

  par: {
    fontSize: 17,
    marginTop: 15,
    textAlign: 'center'
  }
});

export default Home;