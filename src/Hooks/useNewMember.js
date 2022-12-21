import { useEffect, useState } from "react";

const useNewMember = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { name: name, email: email, role: "member" };
    // console.log(currentUser);
    if (email) {
      fetch(`https://mighty-temple-71110.herokuapp.com/user/member/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useNewMember;
