import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "rgb(39, 43, 51)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    characterContent: {
        backgroundColor: 'rgb(60, 62, 68)',
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        borderRadius: 15,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    characterImage: {
        width: 200,
        height: 200,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15
    },
    text: {
        color: '#fff'
    },
    label: {
        color: 'rgb(158, 158, 158)'
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    }
    
})