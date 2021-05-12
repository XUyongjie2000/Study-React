import React from "react"

class CartTotal extends React.Component {
    //2.3定义一个方法 用来计算总价
    comutedTotal = () => {
        let sum = 0;
        this.props.list.forEach(item => {
            sum += item.price * item.num
        });
        return sum
    }
    render() {
        return (
            <div className="total">
                <span>总价：{this.comutedTotal()}</span>
                <button>结算</button>
            </div>
        )
    }
}
export default CartTotal