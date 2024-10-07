import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

export default function DuAnScreen() {
  const [projects, setProjects] = useState([]);
  const route = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const existingProjects = await AsyncStorage.getItem('myProject');
        if (existingProjects) {
          setProjects(JSON.parse(existingProjects));
        }
      } catch (error) {
        console.log('Lỗi khi lấy dự án', error);
      }
    };
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    try {
      const updatedProjects = projects.filter((project, index) => index !== id);
      setProjects(updatedProjects);
      await AsyncStorage.setItem('myProject', JSON.stringify(updatedProjects));
    } catch (error) {
      console.log('Lỗi khi xóa dự án', error);
    }
  };

  const renderRightActions = (id) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => {
        Alert.alert(
          "Xóa dự án",
          "Bạn có chắc chắn muốn xóa dự án này?",
          [
            {
              text: "Hủy",
              style: "cancel"
            },
            {
              text: "Xóa",
              onPress: () => deleteProject(id)
            }
          ]
        );
      }}
    >
      <Text style={styles.deleteButtonText}>Xóa</Text>
    </TouchableOpacity>
  );
  const getStatusColor = (status) => {
    switch (status) {
      case 'Đang tiến hành':
        return '#f39c12'; // Màu vàng cho trạng thái "Đang tiến hành"
      case 'Đã xong':
        return '#27ae60'; // Màu xanh lá cây cho trạng thái "Đã xong"
    }
  };
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => route.push(`/duan/${item.id}?title=${item.title}&startDate=${item.startDate}&status=${item.status}&about=${item.about}&endDate=${item.endDate}&description=${item.description}&image=${item.image}`)}>
      <Swipeable renderRightActions={() => renderRightActions(index)}>
        <View style={styles.projectItem}>
          <Image source={item.image} style={styles.projectImage} />
          <View style={styles.projectContent}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            {/* Hiển thị trạng thái với màu sắc tùy theo trạng thái */}
            <Text style={[styles.statusText, { backgroundColor: getStatusColor(item.status) }]}>
              {item.status}
            </Text>
          </View>
        </View>
      </Swipeable>
    </TouchableOpacity>
    
  );
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={projects}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  projectItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  projectImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
    marginRight: 16,
  },
  projectContent: {
    flex: 1,
    justifyContent: 'center',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  deleteButton: {
    backgroundColor: '#f43434',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 142,
    borderRadius: 8,
  },
  statusText: {
  color: '#fff',
  backgroundColor: '#086db5', // Bạn có thể điều chỉnh màu sắc nếu muốn
  paddingHorizontal: 12,
  paddingVertical: 6,
  alignSelf: 'flex-start',
  fontSize: 14,
},


});
