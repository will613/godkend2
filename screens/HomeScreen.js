// Impoterer de nødvendige pakker fra react
import React from 'react';
import {SafeAreaView,StyleSheet, ScrollView, View, Text,Image, Pressable} from 'react-native';
//importerer igen farver til brug af styling
import Farver from "../src/conts/farver";
// Import mine boliger som blot er const, der er et array
// i arrayet står der oplysninger om boligen, lokation, billeder osv.
import {Boliger} from "../src/conts/boliger";


// Her oprettes der funktionaliteten til at loppe igennem arrayet, som er Boliger
// Her igennem bestemmes det, hvad der skal vises for brugeren
const content = Boliger.map((Bolig)=>
    <View key={Bolig.id} >
        <Text style={{fontWeight: "bold" , fontSize: 20, margin: 10, alignItems: "center"}} >{Bolig.title}</Text>
        <Text style={{alignItems: "center", fontWeight: "bold"}}>{Bolig.location}</Text>
        <Image alt="Billede af lejlighed" style={{
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 250,
            margin: 10
        }}
             source={Bolig.image}></Image>
        <Text align={"center"}>{Bolig.details}</Text>
    </View>
)


//Opretter kompenen som skal eksporteres til App.js
// Den tager igen navigation som proprs, da jeg opretter en button som skal bruges til navigation
// Her vises komponenten: content, som er den løber igennem mit bolig array og viser dataen på bolig
const HomeScreen =({navigation}) =>{
    return(
        <SafeAreaView styles={styles.contentContainer}>
            <View styles={{flex:1, justifyContent: 'center'}}>
                <Pressable style={styles.button} onPress={()=> navigation.navigate("ProfileScreen")}>
                    <View>
                        <Text styles={styles.buttontext}> Rediger din profil</Text>
                    </View>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
               <View>
                   {content}
               </View>
            </ScrollView>
        </SafeAreaView>
    );
  };



// forskellig ting til styling.
const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: Farver.blue,
    },
    container: {
        flex: 1,
        width: '80%',
        height: '80%',

},
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
 buttontext:{
    color: Farver.white,
     fontSize: 12,
}
})

export default HomeScreen
