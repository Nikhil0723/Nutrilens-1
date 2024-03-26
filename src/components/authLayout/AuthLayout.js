import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";
import { Container } from "reactstrap";


const AuthLayout = () => {
    return (

        <main className="d-flex flex-column justify-content-center align-items-center w-100 mt-8" >
            <ButtonGroup>
                <Button color="primary">
                    <Link className="text-decoration-none text-white" style={{ fontSize: "1.5rem" }} to={"/login"} >Log In</Link>
                </Button>
                <Button color="secondary">
                    <Link className="text-decoration-none text-white" style={{ fontSize: "1.5rem" }} to={"/signup"} >
                        Sign Up
                    </Link>
                </Button>
            </ButtonGroup>

        </main>
    );
};

export default AuthLayout;