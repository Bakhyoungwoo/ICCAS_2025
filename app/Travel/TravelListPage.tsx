import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExplorePage() {
  const router = useRouter();

  const data = Array(6).fill({ label: '간단한 프로필 표시' });

  return (
    <View style={styles.container}>
      {/* 상단 바 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>탐험</Text>
      </View>

      {/* 카드 목록 */}
      <ScrollView contentContainerStyle={styles.grid}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* 이미지 대신 회색 도형 */}
            <View style={styles.imagePlaceholder} />

            {/* 간단한 텍스트 */}
            <View style={styles.labelBox}>
              <Text style={styles.label}>{item.label}</Text>
            </View>

            {/* 실제 이미지 삽입 시 사용
            <Image
              source={require('../../assets/images/example.png')}
              style={styles.image}
              resizeMode="cover"
            />
            */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  back: { fontSize: 24 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: 80,
  },
  card: {
    width: '42%',
    aspectRatio: 3 / 4,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  labelBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 6,
    margin: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 12,
    color: '#000',
  },
  /*
  image: {
    width: '100%',
    height: '100%',
  },
  */
});
