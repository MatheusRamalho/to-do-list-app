import { Text, View } from 'react-native'

import { styles } from './styles'
import { ProgressTaskProps } from './types'

export const ProgressTask = ({ tasksCount, completedTasksCount }: ProgressTaskProps) => {
    return (
        <View style={styles.progressTaskContainer}>
            <View style={styles.progressTaskContentContainer}>
                <Text style={styles.progressTaskText}>Criadas</Text>
                <Text style={styles.progressTaskValueContainer}> {tasksCount} </Text>
            </View>

            <View style={styles.progressTaskContentContainer}>
                <Text style={styles.progressTaskText2}>Concluídas</Text>
                <Text style={styles.progressTaskValueContainer}>
                    {completedTasksCount} de {tasksCount}
                </Text>
            </View>
        </View>
    )
}
