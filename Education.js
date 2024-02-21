import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Education = ({ navigation }) => {
  const handlePress = (action) => {
    switch (action) {
      case 'Project':
        navigation.navigate('Project');
        break;
      default:
        console.log('Unknown action');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('Project')} >
        <View>
          <Text style = {styles.head}>College</Text>
          <Text style = {styles.par}>Global Reciprocal College (2021 - Present)</Text>
          <Text style = {styles.head2}>Senior High</Text>
          <Text style = {styles.par}>ABE International College (2016 - 2018)</Text>
          <Text style = {styles.head2}>High School</Text>
          <Text style = {styles.par}>Bagong Barrio National High School (2012 - 2016)</Text>
          <Text style = {styles.head2}>Elementary</Text>
          <Text style = {styles.par}>Morning Breeze Elementary School (2006 - 2012)</Text>
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
    marginTop: 100
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginTop: 30
  },

  par: {
    fontSize: 13,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 30
  }
});

export default Education;