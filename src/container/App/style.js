import styled, { keyframes } from 'styled-components';
import { slideInUp, slideInDown } from 'react-animations';
const slideInUpAnimation = keyframes`${slideInUp}`;
const slideInDownAnimation = keyframes`${slideInDown}`;


export const LogoWrapper = styled.div`
.logo-image {
    position: absolute;
    top: 45%;
    left: 23%;
}
.food-image {
    max-width: 100%;
    height: auto;
}
`;

export const CommunityWrapper = styled.div`
    display: flex;
    justify-content: ${props=> props.justifyContent};
    .heading {
        font-size: 32px;
        font-weight: bold;

        .community {
            position: relative;
            width: max-content;
            &:after {
                content: " ";
                display: block;
                position: absolute;
                height: 5px;
                background: #ffdac9;
                opacity: 0.5;
                width: 100%;
                left: 0%;
                top: calc(50% - 2px);
            }
        }
        .left-content {
            width: 350px;
            font-size: 18px;
            font-weight: bold;
        }
        .know-more {
            font-size: 18px;
            background: #ffdac9;
            width: max-content;
        }
    }
    .slide-image-card-wrapper {
        display: flex;
        justify-content: space-around;

       
    }
    
`;

export const SlideInUpDiv = styled.div`
  animation: 1s ${slideInUpAnimation};
`;
export const SlideInDownDiv = styled.div`
  animation: 1s ${slideInDownAnimation};
`;

export const AppWrapper = styled.div`
background: #f3f2f2;

.nav-tabs {
    position: fixed;
}
.tab-content {
    padding-top: 40px;
}
`;

export const OurMenuWrapper = styled.div`
display: flex;
justify-content: space-between; 
.menu-list {
    border-right: 1px solid black;
    margin-left: 5px;
}
`;