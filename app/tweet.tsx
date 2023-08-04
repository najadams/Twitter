import { useSearchParams } from "expo-router"
import tweets from "../assets/data/tweets"
import { Tweet } from "../components/Tweet"

export default function TweetScreen(){
    const {id} = useSearchParams();
    console.warn(id);
    
    return <Tweet tweet={tweets[0]} />
}
