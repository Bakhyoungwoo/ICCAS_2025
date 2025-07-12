import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExerciseSummaryPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>오늘의 운동 끝!{'\n'}수고하셨습니다</Text>

      <Text style={styles.subHeader}>운동 통계</Text>

      <View style={styles.summaryBox}>
        <View style={styles.pieChartPlaceholder}>
          <Text style={styles.chartLabel}>운동 한 부위</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>총 운동시간</Text>
          <Text style={styles.detailValue}>20:00</Text>
        </View>

        <Text style={styles.etc}>.</Text>
        <Text style={styles.etc}>.</Text>
        <Text style={styles.etc}>.</Text>
      </View>

      {/* ✅ 보상 보기 버튼 추가 */}
      <TouchableOpacity
        style={styles.endButton}
        onPress={() => router.push('/Exercise/PlantRewardPage')}
      >
        <Text style={styles.endButtonText}>보상 보기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 60, marginBottom: 40 },
  subHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  summaryBox: {
    backgroundColor: '#FFF4C2',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    alignItems: 'center',
  },
  pieChartPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#bbb',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartLabel: { fontSize: 14, color: '#000' },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  detailLabel: { fontSize: 16, fontWeight: '600' },
  detailValue: { fontSize: 16 },
  etc: { fontSize: 18, color: '#999' },

  endButton: {
    backgroundColor: '#5C7BEE',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  endButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
