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
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import EEGData from "../assets/images/EEGdata.png";
import Background from "../assets/images/background.png";
import Done from "../assets/images/done.png";

export default function App({ navigation }) {
  const onAnalyze = () => {
    navigation.navigate("Analyze");
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "CSV", value: "csv" },
    { label: "TXT", value: "txt" },
  ]);
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={Styles.image}
      >
        <View style={Styles.eegimgdiv}>
          <Image style={Styles.eegdataimg} source={EEGData}></Image>
        </View>

        {/* another test line */}

        <View style={Styles.innerContainer}>
          <View style={Styles.statusContainer}>
            <Text style={Styles.txt}>Status:</Text>
          </View>
          <View style={Styles.statusUploadContainer}>
            <Image source={Done} style={Styles.doneimg}></Image>
            <Text style={Styles.uploadtxt}>EEG Data Analyzed</Text>
          </View>
          <View style={Styles.analyzebtn}>
            <TouchableOpacity style={Styles.loginBtn} onPress={onAnalyze}>
              <Text style={Styles.loginText}>Analyze EEG Data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const Styles = StyleSheet.create({
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#BB005E",
  },
  doneimg: {
    flexDirection: "row",
    alignItems: "center",
    margin: "1%",
    width: "13%",
    height: "180%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "72%",
  },
  txt: {
    color: "#264CE3",
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  uploadtxt: {
    color: "#264CE3",
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  statusUploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
  },

  analyzebtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "9%",
  },
  loginText: {
    color: "#FFFFFF",
  },

  eegdataimg: { width: "109%", height: "300%", marginTop: "24%" },
  eegimgdiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  selectfiles: {
    borderBottomWidth: 2,
  },
});
