import { View, Text, SafeAreaView, TextInput, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router'
import { IconButton } from 'react-native-paper';

export default function AddDuan() {

  const navigation = useNavigation();
  const [attachedImage, setAttachedImage] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'TẠO DỰ ÁN MỚI'
    })
  });
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    image: null,
  });
  const handleImageUpload = async () => {
    permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted == false) {
      Alert.alert('Cần phải có quyền truy cập vào thư viện ảnh!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });
    if (!result.canceled) {
      setAttachedImage(result.assets[0]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.label}>Tên Dự Án:</Text>
          <TextInput
            placeholder="Tên Dự Án"
            value={newProject.title}
            onChangeText={(text) => setNewProject({ ...newProject, title: text })}
            style={styles.input}
          />
          <Text style={styles.label}>Mô tả:</Text>
          <TextInput
            placeholder="Mô Tả"
            value={newProject.description}
            onChangeText={(text) => setNewProject({ ...newProject, description: text })}
            style={styles.input}
          />
          <Text style={styles.label}>Ngày bắt đầu:</Text>
          <TextInput
            placeholder="Ngày Bắt Đầu (dd/mm/yyyy)"
            value={newProject.startDate}
            onChangeText={(text) => setNewProject({ ...newProject, startDate: text })}
            style={styles.input}
          />
          <Text style={styles.label}>Ngày kết thúc:</Text>
          <TextInput
            placeholder="Ngày Kết Thúc (dd/mm/yyyy)"
            value={newProject.endDate}
            onChangeText={(text) => setNewProject({ ...newProject, endDate: text })}
            style={styles.input}
          />
          <Text style={styles.label}>Trạng thái:</Text>
          <TextInput
            placeholder="Trạng Thái"
            value={newProject.status}
            onChangeText={(text) => setNewProject({ ...newProject, status: text })}
            style={styles.input}
          />
          <View style={styles.uploadContainer}>
            <IconButton icon="image" size={30} onPress={handleImageUpload} />
            <Text>Ảnh dự án</Text>
          </View>
          {attachedImage && (
            <View style={styles.attachedFile}>
              <Text style={styles.attachedFileText}>Hình ảnh đính kèm: {attachedImage.fileName || 'Hình ảnh đã chọn'}</Text>
            </View>

          )}
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Tạo Dự ÁN</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f9f9f9'
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: "#555"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  button:{
    backgroundColor:'#086db5',
    padding:12,
    borderRadius:8,
    alignItems:'center',
    marginTop:20,
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  }
})