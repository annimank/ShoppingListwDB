import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBCABC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCont: {
        marginTop: 60,
        marginBottom: 40,
    },
    headerText: {
        fontSize: 50,
        color: 'pink',
    },
    inputCont: {
        flexDirection: 'row',
        margin: 30,
    },
    textInput: {
        margin: 5,
        fontSize: 20,
    },
    buttonCont: {
        marginTop: 20,
        marginBottom: 40,
    },
    listcontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#7D4B00',
    },
    itemTitle: {
        fontSize: 18,
        marginLeft: 0,
        color: '#7D4B00',
    },
    itemAmount: {
        fontSize: 18,
        color: '#7D4B00',
        margin: 20,
    },
    buyButton: {
        fontSize: 15,
        color: '#7D4B00',
        marginRight: 0,
    },
    listSeperator: {
        height: 0,
        width: "100%",
        backgroundColor: "#7D4B00",
        marginLeft: "0%",
    },
    pic: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
    },
    addButton: {
        color: 'pink',
    }
});

export default styles;