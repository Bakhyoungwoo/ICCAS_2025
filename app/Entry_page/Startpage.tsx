import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function Startpage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Re:Bloom</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => router.push('/Entry_page/Loginpage')}>
          <Text style={styles.menuText}>로그인</Text>
        </TouchableOpacity>

        <Text style={styles.menuDivider}>|</Text>

        <TouchableOpacity onPress={() => router.push('/Entry_page/Signuppage')}>
          <Text style={styles.menuText}>회원가입</Text>
        </TouchableOpacity>

        <Text style={styles.menuDivider}>|</Text>

        <TouchableOpacity onPress={() => alert('ID/PW 찾기 페이지로 이동 예정')}>
          <Text style={styles.menuText}>ID/PW 찾기</Text>
        </TouchableOpacity>
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
    paddingBottom: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 200,
    color: '#000',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuText: {
    fontSize: 14,
    color: '#000',
  },
  menuDivider: {
    fontSize: 14,
    color: '#999',
    marginHorizontal: 4,
  },
});
