import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;

  * {
    color: #484848;
    font-weight: 500;
  }

  .top-container {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'itens price-itens'
      'delivery-fee price-fee-delivery';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: #484848;
      color: #fff;
      width: 100%;
      padding: 15px;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      text-align: center;
    }

    .itens {
      grid-area: itens;
      padding-left: 20px;
    }

    .price-itens {
      grid-area: price-itens;
      padding-right: 20px;
    }

    .delivery-fee {
      grid-area: delivery-fee;
      padding-left: 20px;
    }

    .price-fee-delivery {
      grid-area: price-fee-delivery;
      padding-right: 20px;
    }
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 24px;
    padding: 20px;

    * {
      font-weight: 700;
    }
  }
`;
