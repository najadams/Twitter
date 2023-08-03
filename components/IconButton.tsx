import { View, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

type IconButtonProps = {
    icon: React.ComponentProps<typeof EvilIcons>['name'];
    text?: string | number;
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

export default IconButton;