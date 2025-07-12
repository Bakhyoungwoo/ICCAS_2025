import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function PlantRewardPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/Exercise/CoinRewardPage');
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 2;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../../assets/images/flowers/tulip.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.barBackground}>
          <View style={[styles.barFill, { width: `${progress}%` }]}>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>
        </View>
      </View>
    </View>
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
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 180,
    marginBottom: 20,
  },
  barBackground: {
    width: 200,
    height: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFill: {
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
});
