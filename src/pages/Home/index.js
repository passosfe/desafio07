import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  CardContainer,
  ProductImage,
  ProductTitle,
  Price,
  AddToCart,
  ProductAmountView,
  ProductAmountText,
  AddToCartText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape({}).isRequired,
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <CardContainer>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <Price>{item.priceFormatted}</Price>
              <AddToCart onPress={() => this.handleAddProduct(item.id)}>
                <ProductAmountView>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
                </ProductAmountView>
                <AddToCartText>ADICIONAR</AddToCartText>
              </AddToCart>
            </CardContainer>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
