import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
    },

    homeInner: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    homeMain: {
        maxWidth: 1024,
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 16,
        paddingTop: 60,
    },

    homeContent: {
        marginTop: 32,
    },
})
