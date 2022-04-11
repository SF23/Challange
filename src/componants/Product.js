
import React, { Component } from "react";
import styled from 'styled-components';
export default class Product extends Component {
    render() {
        return
        (
            <ProductFrame>
                <h1>he</h1>
        {/* <ProductImageWrapper>  */}
                    <img src={this.props.product.img}/>

               {/* </ProductImageWrapper> */}

                <ProductInfoWrapp>
                    <span>{this.props.product.name}</span>
                    <span>{this.props.product.price}</span>
                </ProductInfoWrapp>
            </ProductFrame>
        );
    }

}


const ProductFrame = styled.div`border-raduis : 7 px;
min-height : 150 px;
min-width: 150 px;
background-color : rgb(110,110,110, 0.7);
margin : 10px;
display:flex;
flex-direction: column;
`;

const ProductImage = styled.img`width:100%;
height:100%;
border-raduis:25px;`
    ;



const ProductInfoWrapp = styled.div`margin-top:auto;
margin-buttom:5px;
display:findByLabelText;
flex-direction : column;
& > span {
    text-align : center;
}`
    ;
