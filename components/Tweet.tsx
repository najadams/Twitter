import { View, Text, Image, StyleSheet } from "react-native";
import tweets from "../assets/data/tweets";
import { TweetType } from "../types";
import { Entypo, EvilIcons } from '@expo/vector-icons';

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;
}

type TweetProps={
    tweet: TweetType;
}

const IconButton = ({icon, text}: IconButtonProps) => {
  return (
    <View style={{ flexDirection: 'row' , alignItems: 'center' }}>
      {/* icon */}
      <EvilIcons name={icon} size={32}  color="grey"></EvilIcons>
      {/* Number */}
      <Text style={{ fontSize:12, color: 'grey' }}>{text}</Text>
    </View>
  )
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

        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple"  />
        </View>
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
        marginVertical: 10,
        borderRadius: 15
    },
    footer :{
      flexDirection: "row",
      marginVertical: 5,
      justifyContent: 'space-between'
    },
    username:{
        color: 'grey',
        marginLeft: 5
    }
  });
  