import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
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
