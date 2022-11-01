import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Animated } from 'react-native'
import { colors, SPACING } from '../../utils/theme'
import Button from '../ui/Button'

const { width, height } = Dimensions.get('window')

const Modal = ({ show }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current


  useEffect(() => {
    if (show) {
      fadeIn()
    }
    if (!show) {
      fadeOut()
    }
    // if (show) {
    //   Animated.timing(
    //     fadeAnim,
    //     {
    //       toValue: 1,
    //       duration: 700,
    //       useNativeDriver: true
    //     },
    //   ).start()
    // } else {
    //   Animated.timing(
    //     fadeAnim,
    //     {
    //       toValue: 0,
    //       duration: 5000,
    //       useNativeDriver: true
    //     },
    //   ).stop()
    // }
  }, [show]);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true
    }).start();
  }
  return (
    <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
      <ScrollView>
        <Text style={styles.title}>Give reward</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formField}>
            <Text style={styles.label}>To</Text>
            <TextInput style={styles.input} />
            {/* //autoFocus={true} */}
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Amount</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Message</Text>
            <TextInput style={[styles.input, styles.textarea]} numberOfLines={SPACING * 10} />
          </View>
          <Button text="Give" />
          {/* <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.btnText}>Give</Text>
            </TouchableOpacity>
          </View> */}
        </KeyboardAvoidingView>
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute', top: -SPACING * 5, left: 0, backgroundColor: colors.dark, width: width, height: height - SPACING * 9,
    borderTopLeftRadius: SPACING * 2.5, borderTopRightRadius: SPACING * 2.5, overflow: 'hidden', paddingHorizontal: SPACING * 2
  },
  title: { color: colors.white, alignSelf: 'center', paddingVertical: SPACING * 3, fontSize: SPACING * 1.8, fontWeight: 'bold' },
  formField: { paddingBottom: SPACING * 3 },
  label: { color: colors.form, paddingLeft: 5, fontSize: SPACING + 1, paddingBottom: 4 },
  input: { borderWidth: 1, borderColor: colors.form, width: '100%', height: SPACING * 4.5 },
  textarea: { height: SPACING * 10 },
  button: {
    width: width - (SPACING * 10), height: SPACING * 4, borderRadius: SPACING * 3, left: SPACING * 3,
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center'
  },
  btnText: { fontWeight: 'bold', color: colors.dark }
})
export default Modal
