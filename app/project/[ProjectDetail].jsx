import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function ProjectDetail() {
  const { title, description, about, image, startDate, endDate } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: title,
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>Ngày bắt đầu: {startDate}</Text>
      <Text style={styles.date}>Ngày kết thúc: {endDate}</Text>
      <Text style={styles.about}>Mô tả công việc: {about}</Text>
      <Button title='Tham Gia Dự Án'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap:3,
    backgroundColor: '#fff', // Màu nền trắng
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8, // Bo tròn góc
    marginBottom: 16, // Khoảng cách dưới ảnh
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8, // Khoảng cách dưới tiêu đề
    color: '#333', // Màu chữ tiêu đề
  },
  description: {
    fontSize: 16,
    marginBottom: 8, // Khoảng cách dưới mô tả
    color: '#666', // Màu chữ mô tả       
  },
  date: {
    fontSize: 14,
    marginBottom: 4, // Khoảng cách dưới ngày
    color: '#888', // Màu chữ ngày
  },
  about: {
    fontSize: 16,
    color: '#444', // Màu chữ mô tả công việc
  },
});
