import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Upload from "../assets/images/upload.png";
import Background from "../assets/images/background.png";
import Loading from "../assets/images/loading.png";

export default function App({navigation}) {
    
    const onAnalyze =()=>{
        navigation.navigate('Analyze');
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'CSV', value: 'csv'},
      {label: 'TXT', value: 'txt'}
    ]);
    return(
        <View style={Styles.container}>
        

           <ImageBackground source={Background} resizeMode="cover" style={Styles.image}>
          
<View style={Styles.uploadimgdiv}>

          <Image style ={Styles.uploadimg} source={Upload}></Image>
</View>
     
          
        <View style={Styles.innerContainer} >
        
        
        </View>
        <View style={Styles.statusContainer}>
            <Text  style={Styles.txt}
            >
                Status:
            </Text>
        </View>
        <View style={Styles.statusContainer}>
            <Image source={Loading} style={Styles.loadingimg}></Image>
            <Text style={Styles.txt} >
                EEG data is analyzed, continue to classification!
            </Text>
        </View>
        <View style={Styles.uploadbtn} >
        <TouchableOpacity style={Styles.loginBtn} onPress={onAnalyze}>
          <Text style={Styles.loginText}>Classify EEG Data</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
    

    )
   };
const Styles= StyleSheet.create({  
 
  
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        
        backgroundColor: "#BB005E",
       
      },
      loadingimg:{
        flexDirection:"row",
        alignItems:"center",
        margin:10

      },
      image: {
        flex: 1,
        justifyContent: "center",
        height:"100%",
        width:"100%"
      },
    container:{
        backgroundColor:"#FFFFFF",
       flex:1,
        justifyContent: 'center', 
      alignItems: 'center',
      height:"100%" 
  
       
    },
    innerContainer:{
        flexDirection:"column",
        alignItems:"center",
marginTop:"5%"
    },
txt:{
color:"#264CE3",
fontSize:17,
fontWeight:"bold",
textDecorationLine: "underline"
},
    statusContainer:{
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
marginTop:"8%"

    },
    uploadbtn:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"9%",
        marginBottom:"5%"
    },
    loginText:{
        color:"#FFFFFF"
      },
    dropdown:{
        marginTop:"5%",
        width:"50%",
    },
    uploadimg:{width:"80%",
  height:"200%",
  marginTop:"25%",

},
uploadimgdiv:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
},
    dropdowndiv:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
    marginTop:"30%"
    },
    selectfiles:{
        borderBottomWidth:2,
        
    }
})