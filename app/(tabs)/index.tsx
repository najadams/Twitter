import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Tweet } from '../../components/Tweet';
import tweets from '../../assets/data/tweets';

export default function TabOneScreen() {
  return (
   <View>
       <Tweet tweet={tweets[0]}/>
       <Tweet tweet={tweets[1]}/>
       <Tweet tweet={tweets[2]}/>
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
