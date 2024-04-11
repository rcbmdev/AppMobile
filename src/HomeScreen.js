import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity , View } from "react-native";

const face = require('./assets/face.png');
const menu = require('./assets/menu.png');
const search = require('./assets/search.png');

// const image_v1 = require('./assets/vehicles/v-1.png');
// const image_v2 = require('./assets/vehicles/v-2.png');
// const image_v3 = require('./assets/vehicles/v-3.png');
// const image_v4 = require('./assets/vehicles/v-4.png');

import data from "./dataset/words.json"

const HomeScreen = ({navigation}) => {
    const [words, setWords] = useState(data.words);
    const [filteredWords, setFilteredWords] = useState(data.words);

    // const getImage = (id) => {
    //   if(id == 1) return image_v1;
    //   if(id == 2) return image_v2;
    //   if(id == 3) return image_v3;
    //   if(id == 4) return image_v4;
    // }

    const searchWords = (keyword) => {
      if (typeof keyword !== 'string') {
        keyword = String(keyword); // Convertendo para string se não for
      }
      const lowercasedKeyword = keyword.toLowerCase();
      const results = words.filter(word => {
        return (
          word.word_tent.toLowerCase().includes(lowercasedKeyword) ||
          word.word_port.toLowerCase().includes(lowercasedKeyword) 
          // Adicione outros campos aqui, se desejar
        );
      })
      setFilteredWords(results);
    }
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Image
              source={menu}
              resizeMode="contain"
              style={styles.menuIconStyle}
            />
            {/* <Image
              source={face}
              resizeMode="contain"
              style={styles.faceIconStyle}
            /> */}
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Glossário</Text>
          </View>

          <View style={styles.searchSection}>
            <View style={styles.searchPallet}>
              <TextInput 
                style={styles.searchInput}
                placeholder="Pesquise por uma Palavra"
                onChangeText={(text) => searchWords(text)} 
              />
              <View style={styles.searchIconArea}>
                <Image 
                  source={search}
                  resizeMode="contain"
                  style={styles.searchIconStyle}
                />
              </View>
            </View>
          </View>
          {/* <View style={styles.typesSection}>
            <Text style={styles.typesTextActive}>All</Text>
            <Text style={styles.typesText}>Suv</Text>
            <Text style={styles.typesText}>Sedan</Text>
            <Text style={styles.typesText}>Mpv</Text>
            <Text style={styles.typesText}>Hatch</Text>
          </View> */}
          <View style={styles.listSection}>
            {/* <Text style={styles.headText}>Most Rented</Text> */}

            <ScrollView style={styles.elementPallet}>
              {
                filteredWords.map((word) => {
                  return (
                    <TouchableOpacity 
                      style={styles.element} 
                      key={word.id}
                      activeOpactity={0.8}
                      onPress={()=> navigation.navigate('Info', { id: word.id }) }
                    >
                      <View style={styles.infoArea} >
                        <Text style={styles.infoTitle}>{word.word_tent}</Text>
                        <Text style={styles.infoSub}>{word.word_port}</Text>
                        
                      </View>
                      
                    </TouchableOpacity>
                  );
                })}
              
              

              
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    )
  }

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#e7e7e7'
  },
  container: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },

  titleSection: {
    position: 'absolute',
    top: 120, // Ajuste este valor para a distância desejada
    alignSelf: 'center',
  },
  
  title:{
    fontSize: 32,
    fontWeight: "600"
  },

  searchSection:{
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center"
  },

  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },

  searchInput: {
    width: 245,
    height: 30,
    backgroundColor: "white",
    fontSize: 16, 
    paddingVertical: 5, 
    
  },

  searchIconArea:{
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  searchIconStyle: {
    width: 24,
    height: 24,
    marginRight: -10,
  },

  typesSection:{
    marginTop: 15,
    flexDirection: "row"
  },

  typesText:{
    fontSize: 16,
    marginRight: 40,
    fontWeight: "500",
    color: "#606060"
  },

  typesTextActive:{
    fontSize: 16,
    marginRight: 25,
    fontWeight: "bold",
    color: "black"
  },
  listSection: {
    marginTop: 25
  },
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: '110%',
    height: 440
  },
  element: {
    height: 100,
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 13
  },
  infoArea: {
    flex: 1
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoSub:{
    fontSize: 12,
    fontWeight: '600',
    color: '#696969'
  },
  infoPrice:{
    position: 'absolute',
    bottom: 0,
    fontSize: 10,
    color: '#696969',
    fontWeight: 'bold'
  }, 
  infoAmount:{
    fontSize: 12,
    fontWeight: '600',
    color: 'black'
  },
  imageArea:{
    flex: 1
  },
  vehicleImage:{
    position: 'absolute',
    height: '140%',
    width: '140%',
    top: -15,
    left: -20
  }
})