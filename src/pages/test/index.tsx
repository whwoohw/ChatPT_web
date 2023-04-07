import axios from "axios";
import { useEffect, useState } from "react";

const TestPage = () => {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   const getResponse = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/image/");
  //       setData(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getResponse();
  // }, []);

  // useEffect(() => {
  //   const getResponse = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/result/edit");
  //       setData(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getResponse();
  // }, []);

  const createResponse = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/result/create/");
      setData(response.data.content);
      console.log(response.data);
      console.log(response.data.content);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data);
  return (
    <>
      <button onClick={createResponse}>답변 생성</button>
    </>
  );
};
export default TestPage;
