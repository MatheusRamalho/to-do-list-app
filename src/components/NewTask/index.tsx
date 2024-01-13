import React, { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { PlusCircle } from 'lucide-react-native'

import { styles } from './styles'
import { NewTaskProps } from './types'

export const NewTask = ({ onNewTask }: NewTaskProps) => {
    const [newTask, setNewTask] = useState('')

    const handleCreateNewTask = () => {
        onNewTask(newTask)
        setNewTask('')
    }

    return (
        <View style={styles.newTaskContainer}>
            <Image
                style={styles.newTaskImg}
                source={require('../../../assets/logo.png')}
                alt="Logo Todo, escrito to em azul e do em roxo, com um desenho de um foguete"
            />

            <View style={styles.newTaskContentContainer}>
                <View style={styles.newTaskFormContainer} id="formBanner">
                    <TextInput
                        style={styles.newTaskInput}
                        id="new-task-input"
                        placeholder="Adicione uma nova tarefa..."
                        value={newTask}
                        onChangeText={(text) => setNewTask(text)}
                        placeholderTextColor="#808080"
                    />

                    <TouchableOpacity style={styles.newTaskButton} id="new-task-button" onPress={handleCreateNewTask}>
                        <PlusCircle color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
