import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ReportProgressForm() {
    const [reportDate, setReportDate] = useState('');
    const [comment, setComment] = useState('');
    const [attachedFile, setAttachedFile] = useState(null);
    const navigation = useNavigation();
    const { title, description, about, image, startDate, endDate, status } = useLocalSearchParams();

    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: title,
      });
    }, [navigation, title]);

    const handleFileUpload = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.canceled) {
            setAttachedFile(result.assets[0]);
        }
    };

    const handleSubmit = () => {
        console.log('Ngày báo cáo:', reportDate);
        console.log('Comment:', comment);
        console.log('File đính kèm:', attachedFile);

        Alert.alert('Đã gửi báo cáo thành công');
        setReportDate('');
        setComment('');
        setAttachedFile(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.form}>Báo Cáo Tiến Độ Công Việc</Text>
            <Text style={styles.label}>Ngày báo cáo:</Text>
            <TextInput
                style={styles.input}
                value={reportDate}
                onChangeText={setReportDate}
                placeholder="Nhập ngày (YYYY-MM-DD)"
            />

            <Text style={styles.label}>Comment:</Text>
            <TextInput
                style={styles.input}
                value={comment}
                onChangeText={setComment}
                placeholder="Nhập comment..."
                multiline
                numberOfLines={4}
            />

            <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
                <Text style={styles.uploadButtonText}>Gửi tệp ảnh</Text>
            </TouchableOpacity>

            {attachedFile && (
                <View style={styles.attachedFile}>
                    <Text>File đính kèm: {attachedFile.fileName}</Text>
                </View>
            )}

            <Button title="Gửi báo cáo" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    form:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    uploadButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 16,
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    attachedFile: {
        marginVertical: 16,
    },
});
