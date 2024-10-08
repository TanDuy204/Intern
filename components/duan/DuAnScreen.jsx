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
      setReload(); 
    } catch (error) {
      console.log('Lỗi khi xóa dự án', error);
    }
  };

  const renderRightActions = (id) => (
    <TouchableOpacity
      style={styles.deleteButton} 
      //onPress={()=>deleteProject(id)}
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
      default:
        return '#333'; // Màu mặc định
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => route.push(`/duan/${item.id}?title=${item.title}&startDate=${item.startDate}&status=${item.status}&about=${item.about}&endDate=${item.endDate}&description=${item.description}&image=${item.image}`)}>
      <Swipeable renderRightActions={() => renderRightActions(index)}>
        <View style={styles.projectItem}>
          <Image source={item.image} style={styles.projectImage} />
          <View style={styles.projectContent}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text style = {styles.projecDate}>
              {`Bắt đầu: ${item.startDate} - Kết thúc: ${item.endDate}`}
            </Text>
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
      <View>
        <Text style={styles.headerText}>Thông Tin Dự Án</Text>
      </View>
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
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 20,
    color: '#fff', 
    height:45,
    textAlign:'center',
    backgroundColor: '#086db5', 
    padding: 10,
    fontWeight:'bold'
  },
  projectItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  projectContent: {
    flex: 1,
    justifyContent: 'center',
  },
  projectTitle: {
    fontSize: 20, // Tăng kích thước chữ tiêu đề
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Đổi màu chữ cho tiêu đề
  },
  deleteButton: {
    backgroundColor: '#e74c3c', // Thay đổi màu nút xóa
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 132,
    borderRadius: 8,
    marginLeft: 10, // Thêm khoảng cách giữa nút và item
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  statusText: {
    color: '#fff',
    backgroundColor: '#086db5', // Giữ nguyên màu
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  projecDate:{
    fontSize:13.2,
    marginBottom: 8
  }
});
