import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DuAnScreen() {
    const[projects,setProjects] = useState([]);

    useEffect(()=>{
        const fecthProject = async() =>{
            try{
                const existingProjects = await AsyncStorage.getItem('myProject');
                if(existingProjects){
                    setProjects(JSON.parse(existingProjects));
                }
            }catch(error){
                console.log('lỗi khi lấy dự án', error);
            }
        };
        fecthProject();
    },[]);
    const renderItem = ({ item }) => (
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      );
    
      return (
        <View style={styles.container}>
          <FlatList
            data={projects}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      projectItem: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
      },
      projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    });