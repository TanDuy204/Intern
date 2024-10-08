import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { IconButton } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import moment from 'moment';

export default function ReportProgressForm() {
    const [reportDate, setReportDate] = useState(moment().format('YYYY-MM-DD'));
    const [comment, setComment] = useState('');
    const [attachedImage, setAttachedImage] = useState(null);
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [employeeName, setEmployeeName] = useState(''); // Thêm state cho tên nhân viên
    const [position, setPosition] = useState(''); // Thêm state cho vị trí
    const navigation = useNavigation();
    const { title } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: title,
        });
    }, [navigation, title]);

    const handleImageUpload = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setAttachedImage(result.assets[0]);
        }
    };

    const handleFileUpload = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: "*/*",
            multiple: true,
        });

        if (result.type === 'success') {
            setAttachedFiles(prevFiles => [...prevFiles, result]);
        }
    };

    const handleSubmit = () => {
        console.log('Tên nhân viên:', employeeName);
        console.log('Vị trí:', position);
        console.log('Ngày báo cáo:', reportDate);
        console.log('Mô tả:', comment);
        console.log('Hình ảnh đính kèm:', attachedImage);
        console.log('Tệp đính kèm:', attachedFiles);

        Alert.alert('Đã gửi báo cáo thành công');
        setEmployeeName('');
        setPosition('');
        setReportDate(moment().format('YYYY-MM-DD'));
        setComment('');
        setAttachedImage(null);
        setAttachedFiles([]);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.form}>Báo Cáo Tiến Độ Công Việc</Text>
                
                {/* Thêm trường Tên nhân viên */}
                <Text style={styles.label}>Tên nhân viên:</Text>
                <TextInput
                    style={styles.input}
                    value={employeeName}
                    onChangeText={setEmployeeName}
                    placeholder="Nhập tên nhân viên"
                />

                {/* Thêm trường Vị trí */}
                <Text style={styles.label}>Vị trí:</Text>
                <TextInput
                    style={styles.input}
                    value={position}
                    onChangeText={setPosition}
                    placeholder="Nhập vị trí"
                />

                <Text style={styles.label}>Ngày báo cáo:</Text>
                <TextInput
                    style={styles.input}
                    value={reportDate}
                    onChangeText={setReportDate}
                    placeholder="Nhập ngày (YYYY-MM-DD)"
                />

                <Text style={styles.label}>Mô tả:</Text>
                <TextInput
                    style={styles.textArea}
                    value={comment}
                    onChangeText={setComment}
                    placeholder="Mô tả chi tiết hơn..."
                    multiline
                />

                <View style={styles.uploadContainer}>
                    <IconButton icon="image" size={40} onPress={handleImageUpload} />
                    <Text style={styles.uploadText}>Chọn hình ảnh</Text>
                </View>

                {attachedImage && (
                    <View style={styles.attachedFile}>
                        <Text style={styles.attachedFileText}>Hình ảnh đính kèm: {attachedImage.fileName || 'Hình ảnh đã chọn'}</Text>
                    </View>
                )}

                <View style={styles.uploadContainer}>
                    <IconButton icon="file" size={40} onPress={handleFileUpload} />
                    <Text style={styles.uploadText}>Chọn tệp</Text>
                </View>

                <Button title="Gửi báo cáo" onPress={handleSubmit} />
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    form: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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
    textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        height: 100,
    },
    uploadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    uploadText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    attachedFile: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
        padding: 10,
        marginVertical: 4,
    },
    attachedFileText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
});
