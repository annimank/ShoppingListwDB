import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';
import styles from './styles';

const db = SQLite.openDatabase('shoppinglist.db');

export default function App() {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists items (id integer primary key not null, title text, amount real);');
    }, null, updateList);
  }, []);

  const clearDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS items;');
    });
  };

  // Call the clearDatabase function when needed
  // For example, you can call it when the app starts or on a specific action
  //clearDatabase();

  const saveItem = () => {
    db.transaction(tx => {
      tx.executeSql('insert into items (title, amount) values (?, ?);', [title, amount]);
    }, null,
      () => {
        updateList();
        setTitle('');
        setAmount('');
      }
    )
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from items;', [], (_, { rows }) =>
        setItems(rows._array)
      );
    });
  }

  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from items where id = ?;`, [id]);
      }, null, updateList
    )
  }

  const listSeparator = () => {
    return (
      <View
        style={styles.listSeperator}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <Image style={{ width: 250, height: 250 }} source={require('./assets/bnmLogo.png')} />
      </View>
      <View style={styles.inputCont}>
        <TextInput placeholder='Item' style={styles.textInput}
          onChangeText={(title) => setTitle(title)}
          value={title} />

        <TextInput placeholder='Amount' style={styles.textInput}
          onChangeText={(amount) => setAmount(amount)}
          value={amount}
          keyboardType='numeric' />

       <Button color='#7D4B00' title='ADD' onPress={saveItem}/>
      </View>


      <FlatList
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemAmount}>{item.amount}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.buyButton}>Bought</Text>
            </TouchableOpacity>
          </View>
        )}
        data={items}
      />

    </View>
  );
}
