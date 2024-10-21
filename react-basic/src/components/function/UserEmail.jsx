import { useEffect, useState } from "react";

export const UserEmail = (props) => {
  const [email, setEmail] = useState("");

  const fetchEmail = async () => {
    const response = await fetch(`https://reqres.in/api/users/${props.userId}`);
    const result = await response.json();
    // console.log(result);
    const email = result.data.email;
    setEmail(email);
  };

  useEffect(() => {
    fetchEmail();
  }, [props.userId]);

  return (
    <div>
      <h1>User Email</h1>
      <p>Email: {email}</p>
    </div>
  );
};
