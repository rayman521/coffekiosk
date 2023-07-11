import { configureStore, createSlice } from '@reduxjs/toolkit'
import coffeeMenu from './data/menuData'

  let menu =  createSlice(
        {
            name : 'menu',
            initialState : coffeeMenu,
            reducers : {
    
            }
        })
        export let {} = menu.actions;

  let orderInfo = createSlice(
    {
        name : 'orderInfo',
        initialState : {totalprice : ""  , cnt : 1},
        reducers : {
            addInfo(state,action){
                state.totalprice = action.payload;
            },
            UpCnt(state){
                state.cnt += 1;
            },
            DownCnt(state){
                if(state.cnt == 1){
                    alert("1개 이상 수량을 선택해 주세요");
                }else {
                    state.cnt -= 1; 
                }    
            },
            TotalPay(state,action){
                console.log(action.payload.price);
                
                //state.totalprice *= 
            }



        }
    })      
    export let {addInfo,UpCnt,DownCnt,TotalPay} = orderInfo.actions;

export default configureStore({
  reducer: { 
        menu : menu.reducer,
        orderInfo : orderInfo.reducer
  }
}) 