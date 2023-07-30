import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxForm: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#ffffff',
        marginTop: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 15,
        padding: 15
    },

    formLabel: {
        color: '#000000',
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        width: '100%',
        height: 55,
        paddingLeft: 20,
        backgroundColor: '#f6f6f6',
        borderRadius: 5,
    },
    botaoCalcular: {
        borderRadius: 10,
        backgroundColor: '#ff0043',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15
    },
    textBotao: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold'
    },
});

export default styles;