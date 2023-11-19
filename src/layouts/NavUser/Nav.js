import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png"

const Nav = () => {
  return (
    <>
      <title>Shop quần áo</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link rel="stylesheet" href="site/css/lightslider.css" />
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <header className="header">
        <div className="container-navbar">
          <div className="container">
            <div className="header py-md-3">
              <div className="nav-wrap">
                <div className="nav-header">
                  <div className="topbar-top">
                    <div className="row">
                      <div className="col-md-4 d-flex">
                        <div className="logo mr-md-2">
                          <a href="">
                            <img src={logo} width="100px" alt="" />
                          </a>
                        </div>

                        <form action="" method="POST" role="form">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Tìm kiếm"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-success" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-8">
                        <div className="top-bar_right float-right py-md-2">
                          <div className="list-contact">
                            <a href="#" className="map">
                              <i className="fa-solid fa-location-dot"></i> Tìm
                              <span className="number">250</span> cửa hàng
                            </a>
                            <a href="tel:18002086" className="phone ml-md-2">
                              <i className="fa-solid fa-phone"></i>
                              <b>1800 2086</b>
                            </a>
                            <span className="text-free">MIỄN PHÍ</span>
                            <span className="tru">-</span>
                            <span className="call-order">Đặt hàng gọi</span>
                            <a href="tel:02499986999" className="phone">
                              <i className="fa-solid fa-phone"></i> 02499986999
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-bar_bottom mt-md-2">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="topbar-bottom__left">
                          <div className="header-nav">
                            <ul className="nav">
                              <li className="nav-item">
                                <NavLink className="nav-link active" to="/">
                                  Trang Chủ
                                </NavLink>
                              </li>
                              <li className="nav-item dropdown">
                                <NavDropdown
                                  title="Sản phẩm"
                                  id="basic-nav-dropdown"
                                >
                                  <NavDropdown.Item href="#action/3.1">
                                    TẤT CẢ
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Áo Nam
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">
                                    Áo Nữ
                                  </NavDropdown.Item>
                                </NavDropdown>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/about">
                                  Giới Thiệu
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                  Liên Hệ
                                </a>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" href="">
                                  Tin Tức
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topbar-bottom__right">
                          <div className="cart">
                            <ul className="nav float-right bottom-nav">
                              <li className="nav-item">
                                <a className="nav-link" href="/login">
                                  <i className="fa-solid fa-user"></i> Đăng Nhập
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/register">
                                  <i className="fa-solid fa-user-plus"></i> Đăng
                                  Ký
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link mr-md-3" href="#">
                                  <i className="fa-solid fa-cart-shopping"></i>
                                  <span className="count">0</span>Giỏ Hàng
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
