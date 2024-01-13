import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    newTaskContainer: {
        position: 'relative',

        width: '100%',
        height: 200,
        backgroundColor: '#0D0D0D',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    newTaskContentContainer: {
        position: 'absolute',
        bottom: -44,

        width: '100%',
        height: 88,
        padding: 16,
        borderRadius: 8,
    },

    newTaskFormContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    newTaskInput: {
        width: '80%',
        height: 54,
        paddingVertical: 0,
        paddingHorizontal: 16,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#FFFFFF',
    },

    newTaskButton: {
        cursor: 'pointer',

        width: 52,
        height: 54,
        borderRadius: 8,
        backgroundColor: '#1E6F9F',
        fontWeight: 'bold',
        color: '#FFFFFF',

        alignItems: 'center',
        justifyContent: 'center',
    },

    newTaskImg: {
        width: 120,
    },
})
