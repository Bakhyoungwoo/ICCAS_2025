import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RoomModified() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>방 꾸미기 화면</Text>
      {/* 위에서 보여준 이미지처럼 탭, 아이콘 등 구성 추가 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
