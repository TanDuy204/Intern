import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProjectDetail() {
  const { title, description, about, image, startDate, endDate, status } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: title,
    });
  }, [navigation, title]);

  const handleJoinProject = async () => {
    const newProject = { title, description, about, image, startDate, endDate, status };

    try {
      // lấy danh sách đã lưu từ AsyncStorage
      const existingProject = await AsyncStorage.getItem('myProject');
      const projects = existingProject ? JSON.parse(existingProject) : [];

      // thêm dự án mới vào danh sách
      projects.push(newProject);

      // lưu lại danh sách các dự án vào AsyncStorage
      await AsyncStorage.setItem('myProject', JSON.stringify(projects));
      alert('Bạn đã tham gia dự án thành công');
    } catch (error) {
      console.log('Lỗi khi vào dự án', error);
      alert('Đã xảy ra lỗi khi lưu dự án');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>Ngày bắt đầu: {startDate}</Text>
      <Text style={styles.date}>Ngày kết thúc: {endDate}</Text>
      <Text style={styles.about}>Mô tả công việc: {about}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleJoinProject}>
        <Text style={styles.btnText}>Tham Gia Dự Án</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  about: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22,
  },
  btn: {
    backgroundColor: '#086db5',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
