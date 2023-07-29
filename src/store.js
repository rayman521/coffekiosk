import { configureStore, createSlice } from '@reduxjs/toolkit'
import coffeeMenu from './data/menuData'

 //커피메뉴 Data Store
  let menu =  createSlice(
        {
            name : 'menu',
            initialState : coffeeMenu,
            reducers : {
    
            }
        })

    //장바구니 내역 Store
    let cartList =  createSlice(
        {
            name : 'cartList',
            initialState : [],
            reducers : {

                //장바구니 추가
                addCart(state,action){
                    let addMenu = action.payload.state;
                    
                        state.push(addMenu);

                //리스트 요소 삭제
                },deleteCart(state,action) {

                    if(action.payload == 0){
                        state.shift();
                    }else {
                        state.splice(action.payload,1);
                    }
                
                //리스트 초기화 
                },delCoffee(state){
                    state.length = 0;
                
                //커피갯수 증가함수 ( + )    
                },UpCnt(state,action){
                    state[action.payload].cnt += 1;
                
                //커피갯수 감소함수 ( - )
                },DownCnt(state,action){
                        state[action.payload].cnt -= 1;   
                }
            }
        })
        export let {addCart,deleteCart,delCoffee,UpCnt,DownCnt} = cartList.actions;

        //총 주문금액 Store
        let totalPrice =  createSlice(
            {
                name : 'totalPrice',
                initialState :  {price : 0},
                reducers : {
                    
                    // 총 주문금액 세팅
                    setTotalPrice(state,action){
                        state.price = action.payload; 
                    }
                }
            })
            export let {setTotalPrice} = totalPrice.actions;


export default configureStore({
  reducer: { 
        menu : menu.reducer,
        cartList : cartList.reducer,
        totalPrice : totalPrice.reducer
  }
}) 