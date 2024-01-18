import React, { useState } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { v4 as uuidv4 } from 'uuid'

import { NewTask } from '../../components/NewTask'
import { ProgressTask } from '../../components/ProgressTask'
import { Task } from '../../components/Task'
import { TaskProps } from '../../components/Task/types'

import { styles } from './styles'
import { Message } from '../../components/Message'

export const Home = () => {
    const handleAddNewTask = (taskTitle: string) => {
        const newTaskList = [...tasks]

        if (taskTitle === '' || taskTitle === null) {
            Alert.alert('Aviso!', `Preencha o campo para adicionar uma nova tarefa`)
        }

        if (taskTitle !== '') {
            newTaskList.push({
                id: uuidv4(),
                title: taskTitle,
                isComplete: false,
                onDeleteTask: handleDeleteTask,
                onToggleTask: handleAddNewTask,
            })

            setTasks(newTaskList)
        }
    }

    const handleDeleteTask = (id: string) => {
        Alert.alert('Remover', `Deseja realmente remover a tarefa`, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: () => {
                    const newTaskList = [...tasks]

                    newTaskList.filter((element) => {
                        if (element.id === id) {
                            const index = newTaskList.indexOf(element)
                            newTaskList.splice(index, 1)
                        }

                        return false
                    })

                    setTasks(newTaskList)
                },
            },
        ])
    }

    const handleToggleCheck = (id: string) => {
        const newTaskList = [...tasks]

        newTaskList.filter((element) => {
            if (element.id === id) {
                const index = newTaskList.indexOf(element)

                newTaskList[index].id = element.id
                newTaskList[index].title = element.title
                newTaskList[index].isComplete = element.isComplete === false
                newTaskList[index].onDeleteTask = element.onDeleteTask
                newTaskList[index].onToggleTask = element.onToggleTask
            }

            return false
        })

        setTasks(newTaskList)
    }

    const [tasks, setTasks] = useState<TaskProps[]>([])

    const totalTasks = tasks.length
    const completeTasks = tasks.filter((task) => task.isComplete === true)
    const totalCompleteTasks = completeTasks.length

    return (
        <View style={styles.homeContainer}>
            <View style={styles.homeInner}>
                <NewTask onNewTask={handleAddNewTask} />

                <View style={styles.homeMain}>
                    <ProgressTask tasksCount={totalTasks} completedTasksCount={totalCompleteTasks} />

                    <View style={styles.homeContent}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={tasks}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Task
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    isComplete={item.isComplete}
                                    onDeleteTask={handleDeleteTask}
                                    onToggleTask={handleToggleCheck}
                                />
                            )}
                            ListEmptyComponent={() => (
                                <Message
                                    message="Você ainda não tem tarefas cadastradas"
                                    subMessage="Crie tarefas e organize seus itens a fazer"
                                />
                            )}
                            contentContainerStyle={{ paddingBottom: 500 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
