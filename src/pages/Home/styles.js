import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 20px;
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const CardContainer = styled.View`
  width: 220px;
  background: #fff;
  margin-right: 15px;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 21px;
`;

export const Price = styled.Text`
  margin: 14px 0;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
`;

export const AddToCart = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  width: 200px;
  height: 42px;
  border-radius: 4px;
  justify-content: space-between;
  margin-top: auto;
`;

export const ProductAmountView = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  padding: 12px;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 14px;
`;

export const AddToCartText = styled.Text`
  align-self: center;
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
