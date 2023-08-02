import { View, Text, Image, StyleSheet } from "react-native";


export const Tweet = (props) => {
    const tweet = props.tweet;
  return (
    <View style={styles.container}>
      <Image
       src={tweet.user.image} 
       style={styles.userImage}/>
       <View style={styles.mainContainer}>
       <Text>{tweet.user.name}</Text>

      <Text>{tweet.content}</Text>
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
    }
  });
  