import React from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { feed } from '../../utils/data'
import { colors, SPACING } from '../../utils/theme'
import Text from '../ui/Text'

const MyRewards = ({ user }) => {
  return (
    <FlatList
      // horizontal={true}
      data={feed.filter(feed => feed.userId === user.id)}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => <View style={styles.feedView}>
        <Image style={styles.image} source={{ uri: item.image }} />

        <View style={styles.feedContent}>
          <Text style={[styles.boldText, styles.description]}>{item.description}</Text>
          <Text style={[styles.reward]}>{item.reward}</Text>
          <Text style={[styles.time]}>{item.time}</Text>
        </View>
      </View >
      }
    />
  )
}

const styles = StyleSheet.create({
  feedView: {
    marginVertical: SPACING + .75, flexDirection: 'row', width: '100%', backgroundColor: colors.white
  },
  image: { height: SPACING * 4, width: SPACING * 4, borderRadius: SPACING * 2 },
  feedContent: { paddingLeft: SPACING * 1.5 },
  boldText: { fontWeight: 'bold' },
  reward: { color: colors.light, marginTop: SPACING, fontSize: SPACING + 1 },
  time: { color: colors.light, fontSize: SPACING + 1 },
  description: { fontSize: SPACING + 4 }
})

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  user: state.user.user
})
// Connect Redux to React
export default connect(mapStateToProps)(MyRewards)
