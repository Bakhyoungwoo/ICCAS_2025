import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CoinRewardPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/Exercise/ExerciseFeedbackPage');
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/rewards/coin.png')} // 대소문자 주의
        style={styles.coin}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/rewards/chest.png')}
        style={styles.chest}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  coin: { width: 80, height: 80, marginBottom: 20 },
  chest: { width: 120, height: 120 },
});

