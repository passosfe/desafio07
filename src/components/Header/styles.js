import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: #000;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  color: #fff;
  background: #7159c1;
  min-height: 16px;
  min-width: 16px;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  overflow: hidden;
`;
