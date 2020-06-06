import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  margin: 5px 0;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  padding: 5px 10px;
  background: green;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 14px;
`;

export const CentralizedText = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 5px;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
