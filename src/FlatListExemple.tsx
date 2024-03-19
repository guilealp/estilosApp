import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item{
    id:string;
    nome: string;
    idade:string;
    email:string;
}
const dados: Item[]=[
    {id:'1',nome:"aparecida",idade:'77',email:'aparecido@gmail'},
    {id:'2',nome:"maria",idade:'18',email:'maria@gmail'},
    {id:'3',nome:"joao",idade:'35',email:'joao@gmail'},
    {id:'4',nome:"emilly",idade:'77',email:'aparecido@gmail'},
    {id:'5',nome:"lucas",idade:'18',email:'maria@gmail'},
    {id:'6',nome:"andre",idade:'35',email:'joao@gmail'},
    {id:'7',nome:"henrique",idade:'77',email:'aparecido@gmail'},
    {id:'8',nome:"maria",idade:'18',email:'maria@gmail'},
    {id:'9',nome:"joao",idade:'35',email:'joao@gmail'},
    {id:'10',nome:"aparecida",idade:'77',email:'aparecido@gmail'},
    {id:'11',nome:"maria",idade:'18',email:'maria@gmail'},
    {id:'12',nome:"joao",idade:'35',email:'joao@gmail'},
];

const renderItem = ({ item }:{item:Item})=>(
    <TouchableOpacity style={styles.item}> 
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
);
function FlatListExemple():React.JSX.Element{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false} data={dados} renderItem={renderItem} keyExtractor={(item)=>item.id}/>
        
            <View style={styles.footer}>
                <TouchableOpacity>
                <Image source={require('./assets/images/home.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/orders.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image source={require('./assets/images/profile.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    item:{
        backgroundColor:'yellow',
        padding:20,
        marginVertical:8,
        marginHorizontal:16
    },
    header:{
        backgroundColor: "green",
        alignItems:'center',
        paddingVertical:40
    },
    headerText:{   
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    footer:{
        borderTopWidth:0.2,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10
    },
    footerIcon:{
        width:30,
        height:30
    }
});

export default FlatListExemple;