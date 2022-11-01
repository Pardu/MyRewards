import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { colors, SPACING } from '../../utils/theme'

const { width, height } = Dimensions.get('window')

const Button = ({ text }) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    width: width - (SPACING * 10), height: SPACING * 4, borderRadius: SPACING * 3, left: SPACING * 3,
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center'
  },
  btnText: { fontWeight: 'bold', color: colors.dark }
})

export default Button
