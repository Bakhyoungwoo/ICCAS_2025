import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExerciseVideoPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 시범 영상 */}
      <View style={styles.previewBox}>
        <Text style={styles.previewText}>시범영상</Text>
      </View>

      {/* 본 영상 */}
      <View style={styles.mainVideoBox}>
        <Text style={styles.mainText}>본 영상</Text>
        <Text style={styles.subInfo}>본 영상 화면에서{"\n"}횟수 / 자세정확도 등 표시</Text>
      </View>

      {/* 하단 컨트롤 바 */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.controlText}>◁</Text>
        </TouchableOpacity>

        <Text style={styles.controlText}>⏸</Text>

        <TouchableOpacity onPress={() => router.push('/Exercise/ExerciseSummaryPage')}>
          <Text style={styles.controlText}>⛶</Text>
        </TouchableOpacity>
      </View>

      {/* 운동 종료 버튼 (테스트용 or 실제 영상 끝난 후 호출될 수 있음) */}
      <TouchableOpacity
        style={styles.endButton}
        onPress={() => router.push('/Exercise/ExerciseSummaryPage')}
      >
        <Text style={styles.endButtonText}>운동 종료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  previewBox: {
    backgroundColor: '#aaa',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 8,
  },
  mainVideoBox: {
    backgroundColor: '#bbb',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
  },
  previewText: {
    fontSize: 24,
    color: '#fff',
  },
  mainText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subInfo: {
    marginTop: 10,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  controlText: {
    fontSize: 12,
    color: '#444',
  },
  endButton: {
    backgroundColor: '#5C7BEE',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 24,
  },
  endButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
