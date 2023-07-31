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

                //주문목록 추가
                addCart(state,action){
                    
                    let addMenu = action.payload.state;
                    
                    //주문목록
                     if(state.length > 0){

                        //중복체크
                        let overlabCkYn = false;  
                        
                        for(let i =0; i < state.length; i++){
                            let ckYn = state[i].name.includes(addMenu.name)
                                overlabCkYn = ckYn;
                        }
                        
                        //중복 요소가 있을경우
                        if(overlabCkYn == true){
                            alert("해당 메뉴는 이미 존재합니다. 주문목록을 확인해주세요")
                        }else {
                            state.push(addMenu);
                        }

                     }else{
                        state.push(addMenu);           
                    }

                //주문목록 메뉴삭제
                },deleteCart(state,action) {

                    if(action.payload == 0){
                        state.shift();
                    }else {
                        state.splice(action.payload,1);
                    }
                
                //주문목록 초기화 
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