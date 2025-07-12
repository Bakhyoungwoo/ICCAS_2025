import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Signuppage() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [surgeryDate, setSurgeryDate] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [dateError, setDateError] = useState('');

  const validateId = (value: string) => /^[a-z0-9]+$/.test(value);
  const validatePassword = (value: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/.test(value);
  const validateNickname = (value: string) => value.length <= 6;
  const validateDate = (value: string) =>
    /^\d{4}-\d{1,2}-\d{1,2}$/.test(value);

  const handleSignUp = () => {
    let hasError = false;
    setIdError('');
    setPasswordError('');
    setNicknameError('');
    setDateError('');

    if (!id) {
      setIdError('아이디를 입력해주세요.');
      hasError = true;
    } else if (!validateId(id)) {
      setIdError('영소문자와 숫자만 사용할 수 있습니다.');
      hasError = true;
    }

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
      hasError = true;
    } else if (!validatePassword(password)) {
      setPasswordError(
        '8~20자, 영문 대소문자+숫자+특수기호를 모두 포함해야 합니다.'
      );
      hasError = true;
    }

    if (!nickname) {
      setNicknameError('닉네임을 입력해주세요.');
      hasError = true;
    } else if (!validateNickname(nickname)) {
      setNicknameError('닉네임은 6자 이하여야 합니다.');
      hasError = true;
    }

    if (!surgeryDate) {
      setDateError('수술 날짜를 입력해주세요.');
      hasError = true;
    } else if (!validateDate(surgeryDate)) {
      setDateError('날짜 형식은 YYYY-MM-DD입니다.');
      hasError = true;
    }

    if (!hasError) {
      console.log({ id, password, nickname, surgeryDate });
      router.replace('/Entry_page/Signupconfirm'); // ✅ 완료 페이지로 이동
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>회원가입</Text>
      <ScrollView contentContainerStyle={styles.formContainer}>

        <TextInput
          style={styles.input}
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChangeText={setNickname}
        />
        {nicknameError ? <Text style={styles.error}>{nicknameError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="아이디를 입력해주세요"
          value={id}
          onChangeText={setId}
          autoCapitalize="none"
        />
        {idError ? <Text style={styles.error}>{idError}</Text> : null}

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eye}>{showPassword ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="수술 날짜를 입력해주세요 (YYYY-MM-DD)"
          value={surgeryDate}
          onChangeText={setSurgeryDate}
        />
        {dateError ? <Text style={styles.error}>{dateError}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    paddingBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  eye: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3B63F2',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 6,
    marginLeft: 4,
  },
});
