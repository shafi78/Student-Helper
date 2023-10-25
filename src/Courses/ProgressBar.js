import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const ProgressBar = ({progress}) => {
  return (
    <View>
        <Progress.Bar progress={progress} width={Dimensions.get('screen').width*1} />
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})