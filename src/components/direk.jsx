import strelka from "./strelka.svg"
import styled from "styled-components"

const Direk = () => {



    return (
        <Wrapper>
              <div className="top">
                <h1>Direktorlar</h1>
                <div className="yangiHudud">
                    +   Yangi hudud qo’shish
                </div>
            </div>
            <div className="obshiy">
               <div>
               <h2>Tashselmash</h2>
                <div className="lidiv">
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                </div>
               </div>
               <div>
               <h2>Rohat</h2>
                <div className="lidiv2">
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                    <div className="pdiv"><p>Muxtor Shuxratov</p> <img src={strelka} alt="" /></div>
                </div>
               </div>
            </div>
        </Wrapper>
    )
}

export default Direk;

const Wrapper = styled.div`
width: 100%;
height: 100%;
padding: 20px 110px;
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

.obshiy{
    display: flex;
    justify-content: space-between;
    h2{
    font-size: 40px;
    margin-bottom: 34px;
}
.lidiv{
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 102px;
    p{
        font-size: 24px;
        color: #535353;

    }
    .pdiv{
        display: flex;
        gap: 20px;

    }
}
.lidiv2{
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 102px;
    p{
        font-size: 24px;
        color: #535353;

    }
    .pdiv{
        display: flex;
        gap: 20px;

    }
}
}
`;