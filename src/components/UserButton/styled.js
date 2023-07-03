import styled from "styled-components";

export const UserButtonStyled = styled.div`
  position: fixed;
  z-index: 10;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;

  & > div:first-child {
    position: absolute;
    padding: 7px;
    width: 100px;
    top: -90px;
    right: -10px;
    background-color: #555;
    display: none;
  }

  & > div.active:first-child {
    display: initial;
  }

  & > div:first-child::after {
    content: "";
    position: absolute;
    background-color: #555;
    z-index: -1;
    bottom: -10px;
    right: 26px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
  }

  & .button-logout {
    background-color: #f00;
    font-size: 18px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 5px;
    cursor: pointer;
  }
  
  & > div:last-child {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #555;
    cursor: pointer;
    transition: .3s;
  }

  & > div.active:last-child {
    transform: scale(1.1);
  }

  & > div:last-child:hover {
    transform: scale(1.1);
  }
`;