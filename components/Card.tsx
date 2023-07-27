import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <Text style={{marginBottom:10}}>{item.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: item.image_breeds }}
        resizeMode="contain"
      />
      <View style={{ flexDirection: 'row', width: '100%',paddingVertical:20 }}>
        <Text style={{ width: '50%' }}>{item.origin}</Text>
        <Text style={{ width: '50%' }}>{item.intelligence}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      width: '100%',
      marginTop: 40,
      paddingTop:20,
      paddingHorizontal: 20,
      alignContent: 'center',
      marginBottom: 50,
      borderColor: 'black',
      borderWidth: 2,
    },
    image: {
      aspectRatio: 1,
      width: '100%',
    },
});
