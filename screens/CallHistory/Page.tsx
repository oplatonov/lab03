import { FlatList } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { ViewContainer } from '../../components/ViewContainer/ViewContainer';
import { connect } from 'react-redux';
import { Styles } from './Styles';
import { CallItem, mapStateToProps } from './Components';

const CallHistory = (props: PropsWithChildren<ICallHistoryPage>) => {
  const renderItem = (props: PropsWithChildren<{ item: number }>) => (
    <CallItem phone={props.item} /> 
  );

  return (
    <ViewContainer>
      <FlatList
        style={Styles.list}
        data={props.CallHistory}
        renderItem={renderItem}
        keyExtractor={(item) => `${item}`}
      />
    </ViewContainer>
  );
};

export default connect(mapStateToProps)(CallHistory);