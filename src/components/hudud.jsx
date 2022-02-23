
import strelka from "./strelka.svg"

import styled from "styled-components"

const Hudud = () => {


    return (
        <Wrapper>
      <div>
      <div className="top">
                <h1>Hududlar</h1>
                <div className="yangiHudud">
                    +   Yangi hudud qo’shish
                </div>
            </div>
            <div className="bottom">
                <div>Orzu</div>
                <div>Nukus</div>
                <div>Alfa Lighting</div>
                <div>Rohat</div>
                <div>Export</div>
                <div>Tashselmash</div>
                <div>Gaz plita</div>
                <div>Kondisioner</div>

            </div>
      </div>
        </Wrapper>
    )
}

export default Hudud;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: gary;

.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;
    h1{
    font-size: 56px;
}
    .yangiHudud{
        width: 317px;
        height: 59px;
        background: #6d6a6a;
        padding: 15px 16px;
        color: white;
        font-size: 22px;

    }
}

.bottom{
    display: grid;
    grid-template-columns:repeat(4,220px) ;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
    div{
        display: block;
        height: 111px;
        background: #c2bcbc;
        padding:36px 0;
        font-size: 25px;
        text-align: center;
        text-transform: uppercase;

    }
  
}


`;