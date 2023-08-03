import { View, Text, Image, StyleSheet } from "react-native";
import tweets from "../assets/data/tweets";
import { TweetType } from "../types";
import { Entypo } from '@expo/vector-icons';

type TweetProps={
    tweet: TweetType;
}
export const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image
       src={tweet.user.image} 
       style={styles.userImage}/>
       <View style={styles.mainContainer}>
        <View style={{ flexDirection:"row" }}>
            <Text>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username}</Text>
            <Text style={styles.username} >. 2h</Text>
            <Entypo name="dots-three-horizontal" style={{marginLeft: 'auto'}} size={16} color="grey" />
        </View>
            <Text>{tweet.content}</Text>
        {tweet.image && <Image src={tweet.image} style={styles.Image} />}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding:10,
      borderBottomWidth:StyleSheet.hairlineWidth ,
      borderColor: 'lightgrey',
      backgroundColor: 'white'
    },
    userImage:{
      width: 50,
      height: 50 ,
      borderRadius: 50
    },
    mainContainer:{
      marginLeft: 5,
      flex: 1
    },
    name:{
      fontWeight: '600'
    },
    content:{
      lineHeight: 20,
      marginTop: 5
    },
    Image:{
        width: '100%',
        aspectRatio: 16 / 9,
        marginTop: 10,
        borderRadius: 15
    },
    username:{
        color: 'gry',
        marginLeft: 5
    }
  });
  