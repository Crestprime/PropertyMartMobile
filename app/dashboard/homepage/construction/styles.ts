import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({


    cardContainer: {

        height: 100,
        width: '100%',
        borderRadius: 8,
        padding: 5,
        backgroundColor: '#F9FAFB',
        // borderWidth: 1,
        borderColor: 'grey',
        // marginBottom:2,
        // margin:10,
        
        
    },

    activeBtn: {
        // borderWidth: 1,
        backgroundColor: '#2D66DD',
        color: 'white',
    },

    inactiveBtn: {
        borderWidth: 1,
        borderColor: 'grey',
   
    },

    activeBtnTxt: {
        color:'white'
    },

    inActiveBtnTxt: {
        color:'black'
    },

    decline: {
        height: 30,
        minWidthidth: 80,
        marginRight:10,
        borderWidth: 1,
        borderColor: '#FECDCA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#FEF3F2',
        padding:5
        
    },
    declineCard: {
        height: 100,
        width: '100%',
        marginTop:20,
        backgroundColor: '#FEF3F2',
        padding: 10,
        borderRadius:10
    },

    declineText: {
        color: '#B42318',
        // fontSize: 16,
    },

    subText: {
        color: '#B42318',
    },

    bgDuration: {
        backgroundColor: '#F9FAFB',
        borderRadius:10
    }
})