import { Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { RootState } from '../../store';
import { Styles } from './Styles';

export const CallItem = ({ phone }: PropsWithChildren<{ phone: number }>) => (
    <View style={Styles.item}>
        <Text>{phone}</Text>
    </View>
);

export const History = (props: PropsWithChildren<ICallHistoryPage>) => {
    (props: PropsWithChildren<{ item: number }>) => (
        <CallItem phone={props.item} />
)};

export const mapStateToProps = (state: RootState) => {
    const { CallHistory } = state;
    
    return { CallHistory: CallHistory.History };
};