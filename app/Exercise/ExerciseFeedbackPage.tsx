import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExerciseFeedbackPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const emojis = ['😀', '😐', '😣'];

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.question}>운동강도 어땠나요?</Text>
        <View style={styles.emojiRow}>
          {emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelected(index)}
              style={[
                styles.emojiWrapper,
                selected === index && styles.selectedEmoji,
              ]}
            >
              <Text style={styles.emoji}>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.finishButton}
        onPress={() => {
          // 필요시 선택된 feedback 상태 저장 가능
          router.push('/Home_page/Homepage'); // 홈 화면이나 다른 곳으로 이동
        }}
      >
        <Text style={styles.finishText}>마치기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  box: {
    backgroundColor: '#ddd',
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  emojiWrapper: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
  selectedEmoji: {
    backgroundColor: '#B2B8FF',
  },
  emoji: {
    fontSize: 32,
  },
  finishButton: {
    marginTop: 40,
    backgroundColor: '#ccc',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
  },
  finishText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
