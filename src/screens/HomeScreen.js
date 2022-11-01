import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors, SPACING } from '../utils/theme'
import Text from '../components/ui/Text'
import { tabs } from '../utils/data'
import Feed from '../components/reuse/Feed'
import MyRewards from '../components/reuse/MyRewards'
import Modal from '../components/reuse/Modal'
const { width, height } = Dimensions.get('window')

const HomeScreen = ({ user, rewards }) => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [show, setShow] = useState(false)

  // const handleTabChange = id => set

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.row, styles.header]}>
        <Image style={{ height: 50, width: 50, borderRadius: SPACING * 5 }} source={{ uri: user.image }} />
        <View style={styles.headerContent}>
          <Text style={[styles.boldText, styles.name]}>{user.name}</Text>

          <View style={[styles.row, styles.userAmounts]}>
            <Text style={styles.lightText}>Given{" "}</Text>
            <Text style={styles.boldText}>${user.given}</Text>
            <Text style={styles.devider}>/</Text>
            <Text style={styles.lightText}>Recieved{" "}</Text>
            <Text style={styles.boldText}>${user.recieved}</Text>
          </View>
        </View>
      </View>


      {/* Tabs */}
      <View style={styles.tabs}>
        <View style={[styles.row, styles.tabsHeader]}>
          {tabs.map(tab => {
            return <View style={styles.tab} key={tab.id}>
              <TouchableOpacity
                activeOpacity={0.2}
                style={[styles.centerAlign, {
                  backgroundColor: activeIndex === tab.id ? colors.white : colors.secondary,

                }]}
                onPress={() => setActiveIndex(tab.id)}
              >
                <Text style={[styles.tabTitle, { color: activeIndex === tab.id ? colors.light : colors.dark }]}>{tab.text}</Text>
              </TouchableOpacity>
            </View>
          })}
        </View>

        {/* Tab Content */}
        <View style={styles.tabsContent}>
          {activeIndex === 1 && <Feed />}
          {activeIndex === 2 && <MyRewards />}

          {/* Modal */}
          {show && <Modal show={show} />}

          {/* Modal Button */}
          <View style={styles.modalBtn}>
            <TouchableOpacity style={styles.centerAlign} onPress={() => setShow(!show)}>
              <Ionicons name={show ? 'close' : 'add'} size={SPACING * 3} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>





        <View style={[styles.row, styles.tabs]}></View>
      </View>

      {/* <View style={styles.row}></View>
      <Text style={styles.row}></Text> */}


    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary },
  header: { padding: SPACING * 2, alignItems: 'center' },
  headerContent: { paddingLeft: SPACING, top: -2 },
  lightText: { fontWeight: "400" },
  boldText: { fontWeight: 'bold' },
  row: { flexDirection: 'row' },
  devider: { paddingHorizontal: SPACING },
  name: { fontSize: SPACING * 1.5 },
  tabs: { overflow: 'hidden' },
  tabsHeader: { backgroundColor: colors.white, overflow: 'hidden', height: SPACING * 5, borderTopLeftRadius: SPACING * 2.5, borderTopRightRadius: SPACING * 2.5 },
  tab: { width: '50%' },
  centerAlign: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabTitle: { fontWeight: 'bold' },
  tabsContent: { backgroundColor: colors.white, paddingHorizontal: SPACING * 2, height: height - SPACING * 14, width: width - SPACING },
  modalBtn: {
    position: 'absolute', bottom: SPACING * 2, right: SPACING * 2,
    backgroundColor: colors.dark, width: SPACING * 5, height: SPACING * 4, borderRadius: SPACING * 3
  },
  modalView: {
    position: 'absolute', top: -SPACING * 5, left: 0, flex: 1, backgroundColor: colors.dark, width: width, height: height - SPACING * 11,
    borderTopLeftRadius: SPACING * 2.5, borderTopRightRadius: SPACING * 2.5, overflow: 'hidden'
  },
})

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  user: state.user.user,
  loading: state.rewards.loading,
  rewards: state.rewards.rewards,
  hasErrors: state.rewards.hasErrors,
})
// Connect Redux to React
export default connect(mapStateToProps)(HomeScreen)
