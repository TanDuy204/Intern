import { View, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const data_Sliders = [
  {
    id: 1,
    image: require('../../assets/images/duan1.png'),
  },
  {
    id: 2,
    image: require('../../assets/images/duan2.png'),
  },
  {
    id: 3,
    image: require('../../assets/images/duan3.png'),
  },
  {
    id: 4,
    image: require('../../assets/images/duan4.png'),
  },
];

const renderItem = ({ item }) => (
  <View style={styles.imageContainer}>
    <Image
      source={item.image}
      style={styles.image}
    />
  </View>
);

export default function Sliders() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data_Sliders}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false} // Ẩn chỉ báo cuộn ngang
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageContainer: {
    width: 300, // Kích thước cố định cho mỗi hình ảnh
    marginRight: 10, // Khoảng cách giữa các hình ảnh
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
});
