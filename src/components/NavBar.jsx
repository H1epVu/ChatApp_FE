import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    const [id, setId] = useState(null)

    const login = () => {
        navigate('/login')
    }

    const register = () => {
        navigate('/register')
    }

    const logout = () => {
        localStorage.clear();
        setId(null)
        navigate('/')
        window.location.reload()
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
    }, [localStorage.getItem('id')]);

    return (
        <Navbar className="bg-dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="link-light text-decoration-none">
                        <h2>ChatApp </h2>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    {id != null ? (
                        <Stack direction="horizontal" gap={3}>
                            <Link to="/person" className="link-light text-decoration-none">
                                Cá nhân <i class="bi bi-person-fill"></i>
                            </Link>
                            <Link to="/contact" className="link-light text-decoration-none">
                                Kết nối <i class="bi bi-person-fill-add"></i>
                            </Link>
                            <Link to="/messages" className="link-light text-decoration-none">
                                Thông Báo <i class="bi bi-bell-fill"></i>
                            </Link>
                        </Stack>
                    ) : (
                        <></>
                    )}
                </Nav>
                <Nav>
                    {!id ? (
                        <Stack direction="horizontal" gap={3}>
                            <Link to="/login" className="link-light text-decoration-none" onClick={login}>
                                Đăng nhập
                            </Link>
                            <Link to="/register" className="link-light text-decoration-none" onClick={register}>
                                Đăng ký
                            </Link>
                        </Stack>
                    ) : (
                        <Link to="/" className="link-light text-decoration-none" onClick={logout}>
                            Đăng xuất
                        </Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;