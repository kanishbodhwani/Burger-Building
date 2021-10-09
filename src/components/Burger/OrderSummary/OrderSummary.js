// Modal logic comes here 
import React, {Component} from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // This can be a functional component
    componentWillUpdate() {
        console.log("[OrderSummary] will update")
    }
    render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
        return (
            <li key={igKey}> 
                <span style={{textTransform: "capitalize"}}> 
                {igKey} 
                </span>: 
                {this.props.ingredients[igKey]} 
            </li>
        )
    });
    
    return (
        <Aux>
            <h3> Your Order </h3>
            <p> A delicious burger with following ingredients:  </p>
            <ul> {ingredientSummary} </ul>
            <p> Continue to Checkout? </p>
            <Button clicked={this.props.purchaseCancelled} btnType="Danger"> Cancel </Button>
            <Button clicked={this.props.purchaseContinue} btnType="Success"> Continue </Button>
        </Aux>
    )
};
}

export default OrderSummary;