import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const CardDetail = () => {
  return (
    <View style={styles.container}>
      <TextInput>Title</TextInput>
      <TextInput>Text</TextInput>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
