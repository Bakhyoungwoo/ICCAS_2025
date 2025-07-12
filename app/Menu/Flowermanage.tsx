import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function FlowerDetail() {
  const router = useRouter();
  const progress = 60;

  return (
    <View style={styles.container}>
      {/* 상단 타이틀 + 뒤로가기 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.back}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>꽃 관리</Text>
      </View>

      {/* 진행률 바 */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]}>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>
        <View style={styles.progressBackground} />
      </View>

      {/* 꽃 이미지 */}
      <Image
        source={require('../../assets/images/flowers/tulip.png')} // 이미지 경로 조정 필요
        style={styles.image}
        resizeMode="contain"
      />

      {/* 꽃 이름 & 설명 */}
      <Text style={styles.name}>튤립</Text>
      <Text style={styles.desc}>사랑의 시작, 사랑의 고백</Text>
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
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  backButton: {
    paddingRight: 10,
  },
  back: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    width: '80%',
    height: 20,
    marginTop: 80,
    justifyContent: 'center',
  },
  progressBackground: {
    position: 'absolute',
    width: '100%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  progressBar: {
    position: 'absolute',
    height: 20,
    backgroundColor: '#B2B8FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
  },
  desc: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
  },
});
