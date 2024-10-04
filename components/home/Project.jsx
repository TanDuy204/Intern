import React from 'react';
import { View, SectionList, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from "expo-router";

const projects = [
  {
    title: 'Dự Án Triển Khai',
    data: [
      {
        id: 1,
        title: 'Dự Án Phân Loại Chất Thải',
        startDate: '04/10/2024',
        endDate: '10/12/2024',
        description: 'Một ứng dụng giúp người dùng phân loại rác thải sinh hoạt.',
        about:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: require('../../assets/images/pin.png'),
      },
      {
        id: 2,
        title: 'Ứng Dụng Quản Lý Chi Tiêu',
        startDate: '04/10/2024',
        endDate: '10/12/2024',
        about:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        description: 'Ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng tháng.',
        image: require('../../assets/images/ctrsh.png'),
      },
    ],
  },
  {
    title: 'Các Dự Án Khác',
    data: [
      {
        id: 3,
        title: 'Ứng Dụng Quản Lý Chi Tiêu 2',
        startDate: '04/10/2024',
        endDate: '10/12/2024',
        about:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        description: 'Ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng tháng.',
        image: require('../../assets/images/ctrsh.png'),
      },
      {
        id: 4,
        title: 'Ứng Dụng Quản Lý Chi Tiêu 3',
        startDate: '04/10/2024',
        endDate: '10/12/2024',
        about:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        description: 'Ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng tháng.',
        image: require('../../assets/images/ctrsh.png'),
      },
    ],
  },
];

const ProjectItem = ({ item }) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/project/${item.id}?title=${item.title}&startDate=${item.startDate}&about=${item.about}&endDate=${item.endDate}&description=${item.description}&image=${item.image}`)}>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Listview() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProjectItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        contentContainerStyle={styles.flatListContent}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#e0e0e0',
    padding: 5,
  },
  item: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
