import React, {useState, useRef, useEffect} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../Redux/action';

const TaskScreen = () => {
  const DataShow = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  const [getSelected, setSelected] = useState('0');
  const Press = (Data: any) => {
    dispatch(addTask(Data));
  };

  useEffect(() => {
    setSelected(DataShow.length);
  }, [DataShow]);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => Press('Data')}>
          <Text>Click</Text>
        </TouchableOpacity>
        <Text>{getSelected}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TaskScreen;
