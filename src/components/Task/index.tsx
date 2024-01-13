import { Text, TouchableOpacity, View } from 'react-native'
import { Check, Trash2 } from 'lucide-react-native'

import { styles } from './styles'
import { TaskProps } from './types'

export const Task = ({ id, title, isComplete = false, onDeleteTask, onToggleTask }: TaskProps) => {
    const handleDeleteTask = (id: string) => {
        onDeleteTask(id)
    }

    const handleToggleTask = (id: string) => {
        onToggleTask(id)
    }

    return (
        <View style={styles.taskContainer} id={id}>
            <TouchableOpacity
                style={isComplete ? styles.taskInputComplete : styles.taskInput}
                id="task-input"
                onPress={() => handleToggleTask(id)}
            >
                {isComplete && <Check color="#FFFFFF" size={12} />}
            </TouchableOpacity>

            {isComplete ? <Text style={styles.taskLineThrough}> {title} </Text> : <Text style={styles.taskText}> {title} </Text>}

            <TouchableOpacity style={styles.taskButton} id="task-button" onPress={() => handleDeleteTask(id)}>
                <Trash2 size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}
