import styled from "styled-components";
import Direk from "./components/direk"
import Habar from "./components/habar"
import Hudud from "./components/hudud"
import Oshpaz from "./components/oshpaz"
import Hodim from "./components/hodim"
import Kofe from "./components/kofe"
import Labby from "./components/labby.png"
import { Route, Routes, NavLink, Navigate } from "react-router-dom"
export default function App() {
  return (
    <Appcontainer>
      <aside>
        <img src={Labby} />
        <NavLink to="/xabar">Xabarlar</NavLink>
        <hr />
        <NavLink to="/hudud">Hududlar va Bo’limlar</NavLink>
        <hr />
        <NavLink to="/direk">Direktorlar</NavLink>
        <hr />
        <NavLink to="/hodim">Hodimlar</NavLink>
        <hr />
        <NavLink to="/kofe">Kofe Ladylar</NavLink>
        <hr />
        <NavLink to="/oshpaz">Oshpazlar</NavLink>

      </aside>

      <Routes>
        <Route element={<Habar />} path="/xabar" />
        <Route element={<Hudud />} path="/hudud" />
        <Route element={<Direk />} path="/direk" />
        <Route element={<Hodim />} path="/hodim" />
        <Route element={<Kofe />} path="/kofe" /> 
        <Route element={<Oshpaz />} path="/oshpaz" />
        <Route element={<Navigate to="/xabar" />} path="*" />
      </Routes>

    </Appcontainer>
  );
}

const Appcontainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #E5E5E5;
  display: flex;
  transition: 0.5s;
  aside{
    width: 30%;
    height: 100%;
    background-color: white;
    padding: 40px 70px;
    img{
      margin-bottom: 52px;
    }
    a{
      text-decoration: none;
      color:#535353;
      font-size: 22px;
      padding: 5px 10px;
      &:hover{
        color: #3d3d3d;
      }
      &.active{
        background-color: blue;
        color: white;
        transition: 0.5s;
      }
    }
    hr{
      margin: 22px 0;
    }

  }
  
`
