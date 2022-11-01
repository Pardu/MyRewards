import React from 'react'
import { Platform, Text } from 'react-native'
import { colors, SPACING } from '../../utils/theme'
const Roboto = require('../../../assets/fonts/Roboto-Regular.ttf')
export default props => <Text {...props} style={[{ fontFamily: Platform.OS === 'ios' ? Roboto : 'CarmenSans-Regular', color: colors.dark, fontSize: SPACING * 1.2 }, props.style]}>{props.children}</Text>