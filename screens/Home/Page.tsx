import React from 'react';
import { Text, View, TextInput, Linking } from 'react-native';
import { ViewContainer } from '../../components/ViewContainer/ViewContainer';
import { RoutingProps } from '../../routing';
import { transformPhone } from './Actions';
import { styles } from './Styles';
import { connect } from 'react-redux';
import { AppDispatch } from '../../store';
import { mapDispatchToProps, PhoneText } from './Components';
import { Button } from 'react-native-elements/dist/buttons/Button';

const Home = (props: RoutingProps & { pushCall: AppDispatch }) => {
  const [phoneNumber, onChangeNumber] = React.useState('1-855-HELLO');
  const [parsedPhone, translatePhone] = React.useState(0);
  return (
    <ViewContainer>
      <Text>Enter PhoneWord:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={phoneNumber}
      />
      <View style={styles.buttonView}>
        <Button
         buttonStyle={styles.buttonView}
          title='Phone Number'
          onPress={() => {
            translatePhone(transformPhone(phoneNumber));
          }}
        />
      </View>
      <PhoneText phone={parsedPhone} />
      <View style={styles.buttonView}>
        <Button
         buttonStyle={styles.buttonView}
         title='Call'
         onPress={() => {
           props.pushCall(parsedPhone);
           Linking.openURL(`tel:${parsedPhone}`);
         }}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
         buttonStyle={styles.buttonView}
         title='Call History'
         onPress={() => {
           props.navigation.push('CallHistory');
         }}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
         buttonStyle={styles.buttonView}
         title='About'
         onPress={() => {
           props.navigation.push('About');
         }}
        />
      </View>
    </ViewContainer>
  );
};

export default connect((state) => state, mapDispatchToProps)(Home);
