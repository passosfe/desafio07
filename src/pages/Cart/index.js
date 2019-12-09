import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
} from './styles';

Icon.loadFont();

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
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
              <DeleteFromCart onPress={() => removeFromCart(item.id)}>
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
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
