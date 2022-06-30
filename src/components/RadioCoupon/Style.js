import styled from "styled-components";
import { color } from "../../styles/Variable";

const { midnight500 } = color;

const RadioCoupons = styled.div`
    .label-coupon {
        padding: 8px 0;

        > small {
            display: block;
            margin-top: 4px;
            color: ${midnight500};
            font-size: 12px;
            font-weight: 400;
        }
    }    
`;

export default RadioCoupons;