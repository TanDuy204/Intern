import { View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Sliders() {
  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView
        horizontal={true}  // Cuộn ngang
        showsHorizontalScrollIndicator={false}  // Ẩn thanh cuộn
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: 10,  // Khoảng cách hai bên
        }}
      >
        <Image
          source={require('../../assets/images/duan1.png')}
          style={{
            height: 200,
            width: 350,
            borderRadius: 25,  // Bo góc cho hình ảnh
            marginRight: 10,  // Khoảng cách giữa các ảnh
            borderWidth: 1, // Độ rộng viền
            borderColor: '#6666FF', // Màu của viền
          }}
        />
        <Image
          source={require('../../assets/images/duan2.png')}
          style={{
            height: 200,
            width: 350,
            borderRadius: 25,  // Bo góc cho hình ảnh
            marginRight: 10,  // Khoảng cách giữa các ảnh
            borderWidth: 1, // Độ rộng viền
            borderColor: '#6666FF', // Màu của viền
          }}
        />
          <Image
          source={require('../../assets/images/duan3.png')}
          style={{
            height: 200,
            width: 350,
            borderRadius: 25,  // Bo góc cho hình ảnh
            marginRight: 10,  // Khoảng cách giữa các ảnh
            borderWidth: 1, // Độ rộng viền
            borderColor: '#6666FF', // Màu của viền
          }}
        />
           <Image
          source={require('../../assets/images/duan4.png')}
          style={{
            height: 200,
            width: 350,
            borderRadius: 25,  // Bo góc cho hình ảnh
            marginRight: 10,  // Khoảng cách giữa các ảnh
            borderWidth: 1, // Độ rộng viền
            borderColor: '#6666FF', // Màu của viền
          }}
        />
      </ScrollView>
    </View>
  );
}
