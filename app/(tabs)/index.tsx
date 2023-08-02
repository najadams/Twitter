import { StyleSheet, Image,FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Tweet } from '../../components/Tweet';
import tweets from '../../assets/data/tweets';

export default function TabOneScreen() {
  return (
   <View>
       <FlatList
        data={tweets} 
        renderItem={({item}) => <Tweet tweet={item} />}/>
   </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:10,
    borderBottomWidth:StyleSheet.hairlineWidth ,
    borderColor: 'lightgrey'
  },
  
});
