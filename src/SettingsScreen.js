import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AlphabetIndex = ({ onPress }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <ScrollView
      contentContainerStyle={styles.alphabetContainer}
      showsVerticalScrollIndicator={false}
    >
      {alphabet.map((letter, index) => (
        <Text
          key={index}
          onPress={() => onPress(letter)}
          style={styles.alphabetLetter}
        >
          {letter}
        </Text>
      ))}
    </ScrollView>
  );
};

const SettingsScreen = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const contacts = [
    { name: 'Alice', letter: 'A' },
    { name: 'Bob', letter: 'B' },
    { name: 'Charlie', letter: 'C' },
  ];

  const handleLetterPress = (letter) => {
    // Aqui, você poderia filtrar a lista de contatos com base na letra selecionada
    setSelectedLetter(letter);
  };

  const filteredContacts = selectedLetter
    ? contacts.filter((contact) => contact.letter === selectedLetter)
    : contacts;

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {/* Renderiza o índice alfabético */}
      <AlphabetIndex onPress={handleLetterPress} />

      {/* Lista de contatos */}
      <View style={styles.contactsContainer}>
        {filteredContacts.map((contact, index) => (
          <View key={index} style={styles.contactItem}>
            <Text>{contact.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alphabetContainer: {
    position: 'absolute',
    top: '25%',
    right: 0,
    transform: [{ translateY: -130 }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  alphabetLetter: {
    fontSize: 15,
    marginVertical: 4,
  },
  contactsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SettingsScreen;
