import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Loginpage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <Text style={styles.title}>로그인</Text>

      {/* 입력창 */}
      <TextInput placeholder="아이디를 입력해주세요" style={styles.input} />
      <TextInput placeholder="비밀번호를 입력해주세요" secureTextEntry style={styles.input} />

      {/* 로그인 버튼 */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push('/Home_page/Homepage')}
      >
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      {/* 하단 메뉴 */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => alert('ID 찾기 준비 중')}>
          <Text style={styles.linkText}>ID 찾기</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>|</Text>
        <TouchableOpacity onPress={() => alert('PW 찾기 준비 중')}>
          <Text style={styles.linkText}>PW 찾기</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>|</Text>
        <TouchableOpacity onPress={() => router.push('/Entry_page/Signuppage')}>
          <Text style={styles.linkText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: '#4F73FF',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  linkText: {
    color: '#222',
    fontSize: 13,
  },
  divider: {
    marginHorizontal: 6,
    color: '#999',
  },
});
