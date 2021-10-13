
import React from "react";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/AuthContext";
import Singup from "./Singup";




function App() {
  return(
      
      <AuthProvider> 
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}> 

            <div className="w-100" style={{maxWidth:"480px"}}>

            <Singup/>
      
              </div>
            </Container>
      </AuthProvider>
      
    
    
  ) 
}

export default App;
