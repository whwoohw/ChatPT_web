import { useCallback, useRef } from "react";
import { Button } from "./home.styled";

const Homepage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImageButtonClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.files);
    },
    []
  );

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onUploadImage}
      ></input>
      <Button onClick={onUploadImageButtonClick} />
    </>
  );
};

export default Homepage;
