import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Project = ({ navigation }) => {
  const handlePress = (action) => {
    switch (action) {
      case 'Home':
        navigation.navigate('Home');
        break;
      default:
        console.log('Unknown action');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('Home')} >
        <View style = {styles.center}>
          <Text style = {styles.head}>My Project</Text>
          <Image source={require('./assets/icon.png')} style = {styles.img}/>
          <Text style = {styles.head2}>Mina Web-based Online Ordering and Sales Information System</Text>
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
    textAlign: 'center',
    marginTop: 100
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },

  img: {
    height: 250,
    width: 250,
    marginTop: 15
  }
});

export default Project;