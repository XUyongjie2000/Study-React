import React from "react"

class CartTitle extends React.Component {
    render() {
        //1.3渲染name
        return (
            <div className="title">{this.props.name}的商品</div>
        )
    }
}
export default CartTitle