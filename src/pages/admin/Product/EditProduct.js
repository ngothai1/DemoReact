import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditProduct = ({ post }) => {
   const location = useLocation();
   const { state } = location;
   const ListData = state ? state.ListData : null;
   console.log("ListData from state:", ListData);
  

  const [postData, setPostData] = useState({
    name: "",
    price: "",
    sale_price: "",
    image: null,
    status: "",
    description: "",
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState("0");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    // Đặt giá trị ban đầu cho postData từ dataEdit
    if (post) {
      setPostData({
        name: post.name,
        price: post.price,
        sale_price: post.sale_price,
        status: post.status,
        description: post.description,
      });
      setStatus(post.status ? "1" : "0");
    }
  }, [post]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostData({ ...postData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("price", postData.price);
    formData.append("sale_price", postData.sale_price);
    formData.append("image", postData.image);
    formData.append("status", status);
    formData.append("description", postData.description);

    try {
      await dispatch(updateProduct(post.id, formData, user?.result?.name));
      // Xử lý sau khi sản phẩm được cập nhật thành công, có thể chuyển hướng đến trang danh sách
      navigate("/admin");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error.message);
      // Xử lý lỗi, có thể hiển thị thông báo cho người dùng
    }
  };

  return (
    <Container>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder=""
            value={postData.name}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            className="form-control"
            placeholder=""
            value={postData.price}
            onChange={(e) =>
              setPostData({ ...postData, price: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="sale_price">Sale_Price</label>
          <input
            type="text"
            name="sale_price"
            id="sale_price"
            className="form-control"
            placeholder=""
            value={postData.sale_price}
            onChange={(e) =>
              setPostData({ ...postData, sale_price: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="form-control"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="0">Ẩn</option>
            <option value="1">Hiển thị</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            cols="135"
            rows="5"
            id="description"
            name="description"
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </Container>
  );
};

export default EditProduct;
