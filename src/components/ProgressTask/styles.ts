import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    progressTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#333333',
    },

    progressTaskContentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    progressTaskValueContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 5,
        paddingHorizontal: 12.8,
        borderRadius: 8,
        backgroundColor: '#333333',
        fontSize: 14,
        color: '#D9D9D9',
    },

    progressTaskText: {
        fontSize: 16,
        color: '#4EA8DE',
    },

    progressTaskText2: {
        fontSize: 16,
        color: '#8284FA',
    },
})
