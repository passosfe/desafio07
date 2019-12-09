import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

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
  AddOne,
  AmountText,
  RemoveOne,
  SubtotalPrice,
  PlaceOrderContainer,
  TotalTitle,
  TotalPriceText,
  PlaceOrderButton,
  PlaceOrderText,
} from './styles';

Icon.loadFont();

export default class Cart extends Component {
  state = {
    cart: [
      {
        id: 1,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 2,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 3,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 4,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 5,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 6,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 7,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
      {
        id: 8,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        amount: 3,
      },
    ],
  };

  render() {
    const { cart } = this.state;

    return (
      <Container>
        <CartList
          data={cart}
          ListFooterComponent={() => (
            <PlaceOrderContainer>
              <TotalTitle>Total</TotalTitle>
              <TotalPriceText>R$3230,00</TotalPriceText>
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
                <DeleteFromCart>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </DeleteFromCart>
              </ProductInfoContainer>
              <SubtotalContainer>
                <AmountContainer>
                  <AddOne>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </AddOne>
                  <AmountText>{item.amount}</AmountText>
                  <RemoveOne>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </RemoveOne>
                </AmountContainer>
                <SubtotalPrice>R$500,00</SubtotalPrice>
              </SubtotalContainer>
            </CartItemContainer>
          )}
        />
      </Container>
    );
  }
}
