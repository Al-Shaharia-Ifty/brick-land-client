import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1aQhFZJdcbhk90UaC9gKu6ITyEaVkHujIEHeUU4B3jjpJuNIHnaxRy3QzYIT537JW0pLUtuTGDuzVwAyQSWxrl00PgAZ9fXB"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://mighty-temple-71110.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {order.name}</p>
          <h2 className="card-title">Pay for {order.productName}</h2>
          <p>
            Your Order <span className="text-teal-600">{order.order}</span>
          </p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div className="card mx-auto flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
