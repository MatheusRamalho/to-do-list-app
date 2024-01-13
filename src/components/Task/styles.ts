import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,

        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#262626',
    },

    taskText: {
        flex: 1,
        width: '100%',
        color: '#D9D9D9',
        fontSize: 16,
    },

    taskLineThrough: {
        flex: 1,
        width: '100%',
        color: '#808080',
        fontSize: 16,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },

    taskButton: {
        cursor: 'pointer',
        paddingVertical: 4.8,
        paddingHorizontal: 3.2,
        borderRadius: 8,
        backgroundColor: 'transparent',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    taskInput: {
        cursor: 'pointer',
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#4EA8DE',

        alignItems: 'center',
        justifyContent: 'center',
    },

    taskInputComplete: {
        cursor: 'pointer',
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
