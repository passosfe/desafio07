import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px;
  border-radius: 4px;
  background: #fff;
`;

export const CartItemContainer = styled.View`
  margin: 10px 5px;
`;

export const ProductInfoContainer = styled.View`
  flex-direction: row;
`;

export const ProductInfoTextContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const DeleteFromCart = styled.TouchableOpacity`
  align-self: center;
  height: 24px;
  width: 24px;
`;

export const SubtotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  margin-top: 10px;
  border-radius: 4px;
  padding: 5px;
  align-items: center;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChangeAmount = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  margin: 5px;
`;

export const AmountText = styled.TextInput`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  height: 26px;
  width: 51px;
  text-align: center;
`;

export const SubtotalPrice = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  margin: 5px;
`;

export const PlaceOrderContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const TotalTitle = styled.Text`
  margin: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;

export const TotalPriceText = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -1.6px;
`;

export const PlaceOrderButton = styled.TouchableOpacity`
  background: #7159c1;
  margin: 30px 0 20px;
  border-radius: 4px;
  width: 100%;
  align-items: center;
`;

export const PlaceOrderText = styled.Text`
  margin: 13px;
  color: #fff;
  font-weight: bold;
`;
