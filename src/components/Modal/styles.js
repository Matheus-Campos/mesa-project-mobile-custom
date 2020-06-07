import styled, {css} from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  background: whitesmoke;
  padding: 30px 20px;
  margin: 20px;
  align-items: stretch;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  padding: 5px 10px;
  background: black;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 160px;
  width: 100%;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 14px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const TextField = styled.TextInput`
  height: 40px;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border: 1px solid black;
  background: white;
`;

export const Label = styled.Text`
  font-size: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
