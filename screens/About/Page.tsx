import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { ViewContainer } from '../../components/ViewContainer/ViewContainer';
import { mapStateToProps } from '../CallHistory/Components';
import { styles } from './Styles';

export const About = () => {
    React.useState('1-HELLOWORLD-55');
  
    return (
        <ViewContainer>
            <Text style={styles.baseText}>
                Some page mobile app. Lab 03.
                    <Text style={styles.innerText}> Platonov Oleg </Text>
            </Text>
      </ViewContainer>
    );
};
  
export default connect(mapStateToProps)(About);