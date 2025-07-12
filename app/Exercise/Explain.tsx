// app/Home_page/WorkoutPage.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WorkoutPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 상단 바 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>운동하기</Text>
      </View>

      {/* 운동 루틴 */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>오늘의 운동 루틴</Text>
        <View style={styles.subInfoBox}>
          <Text style={styles.subInfo}>n회 반복 | n세트 | 예상소요시간</Text>
        </View>
        <View style={styles.routineBox}>
          <Text style={styles.routineItem}>1. 심호흡 운동</Text>
          <Text style={styles.routineItem}>2. 손목 운동</Text>
          <Text style={styles.routineItem}>3. 어깨 돌리기</Text>
        </View>
      </View>

      {/* 주의사항 */}
      <View style={styles.notice}>
        <Text style={styles.noticeTitle}>운동시주의사항</Text>
        <Text style={styles.noticeContent}>운동진행방법안내(‘영상을 보며 따라해주세요...’)</Text>
      </View>

      {/* 시작 버튼 */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => router.push('/Exercise/ExerciseIntroPage')}
      >
         <Text style={styles.startText}>시작!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backArrow: { fontSize: 24 },
  title: { fontSize: 20, fontWeight: 'bold', marginLeft: 10 },
  section: { alignItems: 'center', marginTop: 20 },
  subTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  subInfoBox: {
    backgroundColor: '#ddd',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 16,
  },
  subInfo: { fontSize: 12 },
  routineBox: {
    width: '90%',
    backgroundColor: '#ddd',
    padding: 16,
    borderRadius: 10,
  },
  routineItem: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  notice: { marginTop: 40, alignItems: 'center' },
  noticeTitle: { fontWeight: 'bold', marginBottom: 6 },
  noticeContent: { fontSize: 12, color: '#333' },
  startButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  startText: { fontWeight: 'bold', fontSize: 16 },
});
