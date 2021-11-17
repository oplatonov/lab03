import React from 'react';
import { Text } from 'react-native';
import { styles } from './Styles';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { pushCallAction } from '../../actions/CallHistoryAction';

export const PhoneText = (props: { phone: number }) => {
    if (props.phone) return <Text style={styles.phoneText}>{props.phone}</Text>;
    else return null;
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({
        pushCall: pushCallAction,
    },
    dispatch
);