import React, { useEffect, useState } from "react";
import BaseImage from "./BaseImage";
import { useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPosts } from "../../../actions/posts";
import { selectPosts } from "./selectPosts";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleEdit = (post) => {
     console.log();

    navigate({
      pathname: `/admin/EditProduct/${post.id}`,
      state: { ListData: post },
    });
  };
  const handleDelete = (post) => {

  };

  return (
    <Container>
      <a href="admin/AddProduct" className="btn btn-primary mb-3">
        Thêm mới
      </a>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Sale_Price</th>
            <th>Image</th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => {
              // sử dụng destructuring assignment để lấy ra các thuộc tính cần thiết từ post
              const {
                id,
                name,
                price,
                sale_price,
                image,
                status,
                description,
              } = post;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{sale_price}</td>
                  <td>
                    {image && (
                      <img
                        width="40px"
                        // sử dụng template literals để nối chuỗi
                        src={`data:image/jpeg;base64,${BaseImage(image.data)}`}
                        alt={name}
                      />
                    )}
                  </td>
                  <td>
                    {/* sử dụng ternary operator để viết điều kiện đơn giản */}
                    {status ? "Hiển thị" : "Ẩn"}
                  </td>
                  <td>{description}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(post)}
                    >
                      Sữa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(post)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListProduct;
