import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const Title = styled.Text`
  color: black;
  font-size: 20px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 12px;
`;

export const ErrorText = styled.Text`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

export const TextField = styled.TextInput`
  height: 40px;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  padding: 5px 10px;
  background: black;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 14px;
`;

export const SignUpText = styled.Text`
  text-align: center;
  text-decoration: underline solid black;
  margin-top: 30px;
`;
