import { configureStore, createSlice } from '@reduxjs/toolkit'
import coffeeMenu from './data/menuData'

  let menu =  createSlice(
        {
            name : 'menu',
            initialState : coffeeMenu,
            reducers : {
    
            }
        })

    //장바구니 내역
    let cartList =  createSlice(
        {
            name : 'cartList',
            initialState : [],
            reducers : {

                //카트 추가
                addCart(state,action){
                    state.push(action.payload.state);
                },
                //리스트 초기화 
                delCoffee(state){
                    state.length = 0;
                },UpCnt(state,action){
                    state[action.payload].cnt += 1;
                },DownCnt(state,action){

                    if(state[action.payload].cnt == 1){
                            alert('1잔 이상 주문하셔야 합니다.')
                    }else {
                        state[action.payload].cnt -= 1;   
                    }
                }
            }
        })
        export let {addCart,delCoffee,UpCnt,DownCnt} = cartList.actions;

        //총 금액
        let totalPrice =  createSlice(
            {
                name : 'totalPrice',
                initialState : {price : 0},
                reducers : {
                    

                }
            })
            export let {addPrice,reset} = totalPrice.actions;

export default configureStore({
  reducer: { 
        menu : menu.reducer,
        cartList : cartList.reducer,
        totalPrice : totalPrice.reducer
  }
}) 