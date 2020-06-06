import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  height: 200px;
`;

export const InfoContainer = styled.View`
  padding: 10px 15px;
`;

export const InfoBackground = styled.View`
  background: white;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

export const InfoLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  font-size: 14px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: baseline;
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

export const Separator = styled.View`
  border: 1px solid black;
`;
