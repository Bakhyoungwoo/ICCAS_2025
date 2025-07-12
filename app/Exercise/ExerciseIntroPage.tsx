import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExerciseIntroPage() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push('/Exercise/ExerciseVideoPage')}
    >
      <View style={styles.box}>
        <Text style={styles.title}>1. 심호흡 운동</Text>
        <View style={styles.bullets}>
          <Text style={styles.bullet}>• 어떤걸 위한 운동인지</Text>
          <Text style={styles.bullet}>• 해당 운동 시 주의사항</Text>
          <Text style={styles.bullet}>  • 격려문구</Text>
          <Text style={styles.bullet}>    • etc</Text>
        </View>
      </View>
      <Text style={styles.bottomText}>화면 터치 시 운동 시작</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#ddd',
    width: '80%',
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  bullets: {
    marginLeft: 8,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 6,
  },
  bottomText: {
    marginTop: 50,
    fontSize: 16,
  },
});
