import React, { createContext, useEffect, useState, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();
  const [totalQuantidade, setTotalQuantidade] = useState(0);
  const [message, setMessage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  function verifyAndAdd(item) {
    const index = cart.findIndex((c) => c.id === item.id);
    if (index < 0) {
      item.quantidade = 1;
      setCart((cart) => [...cart, item]);
      setMessage({
        status: "success",
        text: "Item adicionado com sucesso no carrinho!",
      });
      return;
    }
    setMessage({
      status: "warning",
      text: "Item já foi adicionado no carrinho!",
    });
  }

  const showModal = () => {
    setModalVisible(true);
  };

  function hideModal() {
    setModalVisible(false);
    clearCart();
    handleCartVisible(false);
  }

  function clearMessage() {
    setMessage();
  }

  useEffect(() => {
    const array = cart.map((c) => {
      const { quantidade, price } = c;
      return { quantidade, price };
    });

    const valorTotal = array.reduce((accumulator, current) => {
      return accumulator + current.quantidade * current.price;
    }, 0);
    const quantidadeTotal = array.reduce((accumulator, current) => {
      return accumulator + current.quantidade;
    }, 0);
    setTotalValue(valorTotal);
    setTotalQuantidade(quantidadeTotal);
  }, [cart]);

  function increment(id) {
    const index = cart.findIndex((a) => a.id === id);
    cart[index].quantidade = cart[index].quantidade + 1;
    setCart((cart) => [...cart]);
  }

  function decrement(id) {
    const index = cart.findIndex((a) => a.id === id);
    cart[index].quantidade = cart[index].quantidade - 1;
    setCart((cart) => [...cart]);
  }

  function remove(id) {
    let newCart = cart;
    const index = newCart.findIndex((c) => c.id === id);
    newCart = newCart.splice(index, 1);
    setCart((newCart) => [...newCart]);
  }

  function clearCart() {
    setCart([]);
  }

  const store = {
    verifyAndAdd,
    message,
    clearCart,
    clearMessage,
    cart,
    totalQuantidade,
    totalValue,
    increment,
    decrement,
    remove,
    modalVisible,
    showModal,
    hideModal,
    cartVisible,
    handleCartVisible,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  const {
    remove,
    cart,
    verifyAndAdd,
    message,
    clearMessage,
    totalQuantidade,
    totalValue,
    increment,
    clearCart,
    modalVisible,
    decrement,
    showModal,
    hideModal,
    cartVisible,
    handleCartVisible,
  } = context;

  return {
    cart,
    remove,
    verifyAndAdd,
    clearCart,
    modalVisible,
    clearMessage,
    message,
    totalQuantidade,
    totalValue,
    increment,
    decrement,
    showModal,
    hideModal,
    cartVisible,
    handleCartVisible,
  };
}
