import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const projects = [
  {
    id: 1,
    title: 'Dự Án Phân Loại Chất Thải',
    description: 'Một ứng dụng giúp người dùng phân loại rác thải sinh hoạt.',
    image: require('../../assets/images/pin.png'),
  },
  {
    id: 2,
    title: 'Ứng Dụng Quản Lý Chi Tiêu',
    description: 'Ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng tháng.',
    image: require('../../assets/images/ctrsh.png'),
  },
  {
    id: 3,
    title: 'Ứng Dụng Quản Lý Chi Tiêu',
    description: 'Ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng tháng.',
    image: require('../../assets/images/ctrsh.png'),
  },
  {
    id: 4,
    title: 'Ứng Dụng Quản Lý Chi Tiêu',
    description: 'Ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng tháng.',
    image: require('../../assets/images/ctrsh.png'),
  },
];

const ProjectItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

export default function Listview() {
  return (
    <View >
        <Text style={{
            fontSize:20,
            textAlign:'center',
            marginTop:10
        }}>DỰ ÁN TRIỂN KHAI</Text>
         <FlatList
      data={projects}
      renderItem={ProjectItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.flatListContent}
    />
    </View>
   
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 170,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
