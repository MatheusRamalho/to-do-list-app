import { Text, View } from 'react-native'
import { ClipboardList } from 'lucide-react-native'

import { styles } from './styles'
import { MessageProps } from './types'

export const Message = ({ message, subMessage }: MessageProps) => {
    return (
        <View style={styles.messsageContent}>
            <ClipboardList color="#333333" size={52} />
            <Text style={styles.messageText}> {message} </Text>
            {subMessage && <Text style={styles.messageText}> {subMessage} </Text>}
        </View>
    )
}
