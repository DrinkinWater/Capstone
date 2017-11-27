import React from 'react';
import { TouchableHighlight, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';

const Message = ({ onPress, title, style, sender }) =>
  {
    if (sender === "patient") {
      return(
        <TouchableHighlight
          onPress={onPress}
          underlayColor={ 'transparent' }
          delayPressIn={0} >
          <View style={[styles.message, styles.patientMsg]}>
            <Text style={styles.messageText}>{title}</Text>
          </View>
        </TouchableHighlight>
      )
    }
   
   else {
    return(
      <TouchableHighlight
        onPress={onPress}
        underlayColor={ 'transparent' }
        delayPressIn={0} >
        <View style={[styles.message, styles.doctorMsg]}>
          <Text style={styles.doctorMessageText}>{title}</Text>
        </View>
      </TouchableHighlight>
     )
  }
};

Message.propTypes = {
  onPress: PropTypes.func,
};

export default Message;