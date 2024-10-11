import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const Landing = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const nav = ()=>{
        token?navigate("/blogs"):navigate("/signin")
    }
    useEffect(()=>{
        nav();
    },[])
}
