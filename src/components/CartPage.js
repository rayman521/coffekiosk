// 주문 커피 장바구니
function CartPage() {
    return (
        <div className="CartPage">
        <h1>장바구니</h1>
        <div className="Cart">
          <ul>
            <li className="Cart__item">
              <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"/>
              <div className="Cart__itemDesription">
                <div>커피잔 100개 번들 10,000원 10개</div>
                <div>100,000원</div>
              </div>
            </li>
            <li className="Cart__item">
              <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"/>
              <div className="Cart__itemDesription">
                <div>커피잔 1000개 번들 15,000원 5개</div>
                <div>75,000원</div>
              </div>
            </li>
          </ul>
          <div className="Cart__totalPrice">
            총 상품가격 175,000원
          </div>
          <button className="OrderButton">주문하기</button>
        </div>
      </div>
    )   
}

export default CartPage;