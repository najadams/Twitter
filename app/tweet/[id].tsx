import { useSearchParams } from "expo-router"
import tweets from "../../assets/data/tweets"
import { Tweet } from "../../components/Tweet"
import { Text } from 'react-native'

export default function TweetScreen(){
    const {id} = useSearchParams();
    console.warn(id);
    const tweet = tweets.find((t) => t.id == id)
    
    if (!tweet){
        return <Text> tweet {id} not found </Text>
    }
    return <Tweet tweet={tweet} />
}
