import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "8f9feca3f422ae10518e39a87b7a0377";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            img: img,
            description: data.details,
            minimum: data.minOrder,
            available: data.available,
            price: data.price,
          };
          // send to your database
          fetch("https://mighty-temple-71110.herokuapp.com/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product add successfully");
                reset();
              } else {
                toast.error("Failed to add Product");
              }
            });
        }
      });
  };
  return (
    <div className="card w-96 mx-auto mt-5 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-3xl">Add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* product name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* Photo */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          {/* product Details */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Product Description"
              className="input input-bordered w-full max-w-xs"
              {...register("details", {
                required: {
                  value: true,
                  message: "Details is Required",
                },
              })}
            />
            <label className="label">
              {errors.details?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.details.message}
                </span>
              )}
            </label>
          </div>
          {/* Minimum Order quantity */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Order"
              className="input input-bordered w-full max-w-xs"
              {...register("minOrder", {
                required: {
                  value: true,
                  message: "Minimum Order is Required",
                },
              })}
            />
            <label className="label">
              {errors.minOrder?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minOrder.message}
                </span>
              )}
            </label>
          </div>
          {/* Available quantity */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("available", {
                required: {
                  value: true,
                  message: "Available Order is Required",
                },
              })}
            />
            <label className="label">
              {errors.available?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.available.message}
                </span>
              )}
            </label>
          </div>
          {/* product price */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn w-full max-w-xs"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
