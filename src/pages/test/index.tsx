import axios from "axios";
import { useEffect, useState } from "react";

const TestPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/image/");
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getResponse();
  }, []);

  console.log(data);
  return <></>;
};
export default TestPage;
