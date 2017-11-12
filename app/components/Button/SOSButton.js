import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';

const SOSButton = ({ onLongPress, title, style }) =>
  (
    <TouchableHighlight
      onLongPress={onLongPress}
      underlayColor={ 'transparent' } >
      <Image
        source={require('../../../assets/images/sos_button.png')}
        style={styles.SOSButton}
        />
    </TouchableHighlight>
  );

SOSButton.propTypes = {
  onLongPress: PropTypes.func,
};

export default SOSButton;
