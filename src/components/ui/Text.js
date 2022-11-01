import React from 'react'
import { Text } from 'react-native'
import { colors, SPACING } from '../../utils/theme'
// CarmenSans-Regular, Roboto-Regular, CocoGothic, CocoGothic-Bold
export default props => <Text {...props} style={[{ fontFamily: 'CarmenSans-Regular', color: colors.dark, fontSize: SPACING * 1.2 }, props.style]}>{props.children}</Text>