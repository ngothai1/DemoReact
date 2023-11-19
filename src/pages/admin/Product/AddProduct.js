import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../actions/posts";
import {useNavigate} from "react-router-dom"


const AddProduct = () => {
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
    navigate("/admin")
    setStatus("0");
    try {
      await dispatch(createProduct(formData, user?.result?.name));
      // Xử lý sau khi sản phẩm được tạo thành công, có thể làm mới trạng thái form
      setPostData({
        name: "",
        price: "",
        sale_price: "",
        image: null,
        status: "",
        description: "",
      });
      
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error.message);
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
        <div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="status"
                value="0"
                checked={status === "0"}
                onChange={handleStatusChange}
              />
              Ẩn
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="status"
                value="1"
                checked={status === "1"}
                onChange={handleStatusChange}
              />
              Hiển thị
            </label>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </Container>
  );
};

export default AddProduct;
