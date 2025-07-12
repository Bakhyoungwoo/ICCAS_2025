import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Homepage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 상단 탭 */}
      <View style={styles.topTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>프로필정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>경과</Text>
        </TouchableOpacity>
      </View>

      {/* 회색 원 - 오른쪽 중간 (누르면 roommodified로 이동) */}
      <View style={styles.rightCircleWrapper}>
        <TouchableOpacity
          style={styles.topRightCircle}
          onPress={() => router.push('/Home_page/Roommodified/roommodified')}
        />
      </View>

      {/* 중앙 인디케이터 버튼들 */}
      <View style={styles.indicatorContainer}>
        <View style={styles.indicatorDot} />
        <View style={styles.indicatorDot} />
        <View style={styles.indicatorDot} />
      </View>

      {/* 하단 메뉴바 */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>탐험</Text>

        <TouchableOpacity onPress={() => router.push('/Menu/Menupage')}>
          <Text style={styles.bottomText}>menu</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Exercise/Explain')}>
          <Text style={styles.bottomText}>운동하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  topTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#5C7BEE',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  inactiveTab: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  inactiveTabText: {
    color: '#000',
    fontSize: 14,
  },
  rightCircleWrapper: {
    alignItems: 'flex-end',
    marginTop: 40,
    marginRight: 20,
  },
  topRightCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 100,
    gap: 16,
  },
  indicatorDot: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 15,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#5C7BEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
  },
});
