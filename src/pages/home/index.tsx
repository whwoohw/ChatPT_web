import { useCallback, useRef, useState } from "react";
import { submitImageAPI } from "../../api/home";
import { UploadImage } from "../../types/home";
import { Button, Image, Wrapper } from "./home.styled";
import DragDrop from "../../components/dragdrop";

const Homepage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);

  const onUploadImageButtonClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files;
      if (fileList && fileList[0]) {
        const url = URL.createObjectURL(fileList[0]);
        setImageFile({
          file: fileList[0],
          thumbnail: url,
          type: fileList[0].type,
        });
      }
    },
    []
  );

  const submitImage = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (imageFile) {
        const formdata = new FormData();
        const image = imageFile.file;
        formdata.append("image", image);
        const response = await submitImageAPI(formdata);
        console.log(response?.data);
      } else {
        alert("파일을 업로드하세요!");
      }
    },
    [imageFile]
  );

  return (
    <Wrapper>
      {imageFile ? (
        <Image src={imageFile.thumbnail} alt={imageFile.type} />
      ) : (
        <div>이미지를 업로드해주세요!</div>
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onUploadImage}
      ></input>
      <DragDrop inputRef={inputRef} />
      <Button onClick={onUploadImageButtonClick}>파일 업로드</Button>
      <Button onClick={submitImage}>파일 제출하기</Button>
    </Wrapper>
  );
};

export default Homepage;
