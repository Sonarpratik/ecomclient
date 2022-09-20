import {css} from "styled-components";

export const mobile = (props)=>{
    return css`
    @media only screen and (max-width:400px){
    ${props}
    }
    `;

};
export const tablet = (props)=>{
    return css`
    @media only screen and (max-width:750px){
    ${props}
    }
    `;

};