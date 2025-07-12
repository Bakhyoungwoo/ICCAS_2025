import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Mainmenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>메인메뉴</Text>

      <TouchableOpacity
        style={[styles.menuButton, { borderColor: '#FFA500' }]}
        onPress={() => router.push('/Menu/profilemodified')}
      >
         <Text>프로필 수정</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.menuButton, { borderColor: '#32CD32' }]}>
        <Text>건강 리포트</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, { borderColor: '#9370DB' }]}
        onPress={() => router.push('/Menu/Flowermanage')}
      >
        <Text>꽃 관리</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuButton, { borderColor: '#00CED1' }]}
        onPress={() => router.push('/Menu/Collection')}
      >
        <Text>수집 요소 확인</Text>
      </TouchableOpacity>



      <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>탐험</Text>
        <Text style={styles.bottomText}>menu</Text>
        <Text style={styles.bottomText}>운동하기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  menuButton: {
    width: '80%',
    paddingVertical: 14,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#5C7BEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
  },
});