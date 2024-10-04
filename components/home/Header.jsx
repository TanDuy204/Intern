import { View, Text, Image } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

export default function Header() {
    const { user } = useUser();

    return (
        <View style={{
            padding: 20,
            paddingTop: 35,
            backgroundColor: '#086db5',
            flexDirection: 'row', // Đặt hướng dòng cho View chính
            justifyContent: 'space-between', // Đẩy các phần tử sang hai bên
            alignItems: 'center', // Căn giữa theo chiều dọc
            borderBottomLeftRadius: 20,  // Bo góc dưới bên trái
            borderBottomRightRadius: 20, // Bo góc dưới bên phải
            height:170
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <Image 
                    source={{ uri: user?.imageUrl }} 
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25, // Hình tròn
                        
                        
                    }} 
                />
                <View>
                    <Text style={{ color: '#fff' }}>Welcome,</Text>
                    <Text style={{
                        fontSize: 19,
                        fontFamily: 'Outfit-Bold', // Đảm bảo font đã được tải
                        color: '#fff' // Màu chữ
                    }}>
                        {user?.fullName}
                    </Text>
                </View>
            </View>
            {/* Ảnh login di chuyển sang bên phải */}
            <Image
                source={require('./../../assets/images/logo.png')} // Căn chỉnh đường dẫn cho đúng
                style={{ width: 60, height: 60 }} 
            />
        </View>
    );
}
