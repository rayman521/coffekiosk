import { configureStore, createSlice } from '@reduxjs/toolkit'
import coffeeMenu from './data/menuData'

  let menu =  createSlice(
        {
            name : 'menu',
            initialState : coffeeMenu,
            reducers : {
    
            }
        })

  let orderInfo = createSlice(
    {
        name : 'orderInfo',
        initialState : {cnt : 1},
        reducers : {
            UpCnt(state){
                state.cnt += 1;
            },
            DownCnt(state){
                if(state.cnt == 1){
                    alert("1개 이상 수량을 선택해 주세요");
                }else {
                    state.cnt -= 1; 
                }    
            },ResetCnt(state){
                   state.cnt = 1; 
            }
            
        }
    })      
    export let {UpCnt,DownCnt,ResetCnt} = orderInfo.actions;

    //장바구니 내역
    let cartList =  createSlice(
        {
            name : 'cartList',
            initialState : [],
            reducers : {

                //카트 추가
                addCart(state,action){
                    state.push(action.payload);
                },
                //리스트 초기화 
                delCoffee(state){
                    state.length = 0;
                }
            }
        })
        export let {addCart,delCoffee} = cartList.actions;

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
        orderInfo : orderInfo.reducer,
        cartList : cartList.reducer,
        totalPrice : totalPrice.reducer
  }
}) 