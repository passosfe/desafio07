import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartList,
  CartItemContainer,
  ProductInfoContainer,
  ProductInfoTextContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DeleteFromCart,
  SubtotalContainer,
  AmountContainer,
  ChangeAmount,
  AmountText,
  SubtotalPrice,
  PlaceOrderContainer,
  TotalTitle,
  TotalPriceText,
  PlaceOrderButton,
  PlaceOrderText,
  EmptyCartContainer,
  EmptyCartText,
} from './styles';

Icon.loadFont();

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <CartList
          data={cart}
          ListFooterComponent={() => (
            <PlaceOrderContainer>
              <TotalTitle>Total</TotalTitle>
              <TotalPriceText>{total}</TotalPriceText>
              <PlaceOrderButton>
                <PlaceOrderText>FINALIZAR PEDIDO</PlaceOrderText>
              </PlaceOrderButton>
            </PlaceOrderContainer>
          )}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CartItemContainer>
              <ProductInfoContainer>
                <ProductImage source={{ uri: item.image }} />
                <ProductInfoTextContainer>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductInfoTextContainer>
                <DeleteFromCart
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </DeleteFromCart>
              </ProductInfoContainer>
              <SubtotalContainer>
                <AmountContainer>
                  <ChangeAmount onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ChangeAmount>
                  <AmountText>{item.amount}</AmountText>
                  <ChangeAmount onPress={() => increment(item)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ChangeAmount>
                </AmountContainer>
                <SubtotalPrice>{item.subtotal}</SubtotalPrice>
              </SubtotalContainer>
            </CartItemContainer>
          )}
        />
      ) : (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" size={64} color="#ccc" />
          <EmptyCartText>SEU CARRINHO ESTÁ VAZIO</EmptyCartText>
        </EmptyCartContainer>
      )}
    </Container>
  );
}
