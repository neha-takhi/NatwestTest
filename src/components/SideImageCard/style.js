import styled from 'styled-components';

export const CardWrapper = styled.div`
display: flex;
.image-wrapper , .content-wrapper{
position: relative;
background: white;;
padding: 15px;
}
.main-image, .content-wrapper {
    width: 240px;
    height: 240px;
}
.side-image {
    width: 35px;
    height: 35px;
    position: absolute;
    right: 0%;
    top: 0%;
}

.content-wrapper {
    margin-left: 15px;
    .heading {
        font-size: 22px;
        font-weight:bold;
        margin-bottom: 20px;
    }
    .content {
        display: flex;
        align-items: center;
    }
}

`;
