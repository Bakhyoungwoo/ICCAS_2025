// Collection.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Collection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>수집 도감</Text>
      </View>

      {/* 꽃 목록 */}
      <ScrollView contentContainerStyle={styles.grid}>
        {/*
          {[
            ['튤립', require('../assets/tulip.png')],
            ['해바라기', require('../assets/sunflower.png')],
            ['양귀비', require('../assets/poppy.png')],
            ['데이지', require('../assets/daisy.png')],
            ['벚꽃', require('../assets/cherryblossom.png')],
            ['장미', require('../assets/rose.png')],
            ['무궁화', require('../assets/hibiscus.png')],
            ['수레국화', require('../assets/cornflower.png')],
          ].map(([label, image], index) => (
            <View key={index} style={styles.item}>
              <Image source={image} style={styles.image} resizeMode="contain" />
              <Text style={styles.label}>{label}</Text>
            </View>
          ))}
        */}
      </ScrollView>

      {/* 하단 탭 */}
      <View style={styles.tabBar}>
        <Text style={styles.tab}>배경</Text>
        <Text style={[styles.tab, styles.activeTab]}>꽃</Text>
        <Text style={styles.tab}>가구</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  back: {
    fontSize: 22,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  item: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E6ECFF',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tab: {
    color: '#444',
    fontSize: 14,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#C6D3FF',
    paddingHorizontal: 12,
    borderRadius: 4,
  },
});
