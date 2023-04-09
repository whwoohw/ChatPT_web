import { useCallback, useRef, useState } from "react";
import { submitImageAPI } from "../../api/imageinput";
import { UploadImage } from "../../types/input";

import DragDrop from "../../components/dragdrop";
import { Image, Title, Wrapper } from "./image-input.styled";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageInputPage = () => {
  const navigate = useNavigate();
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
        if (response?.success) {
          navigate("/");
        }
      } else {
        alert("파일을 업로드하세요!");
      }
    },
    [imageFile]
  );

  return (
    <Wrapper>
      <Title>인바디 이미지 등록하기</Title>
      {imageFile ? (
        <Image src={imageFile.thumbnail} alt={imageFile.type} />
      ) : (
        <div
          style={{
            border: "2px dashed black",
            width: "200px",
            height: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          이미지를 업로드해주세요!
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onUploadImage}
      ></input>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "50px",
          marginTop: "50px",
        }}
      >
        <Fab variant="extended" onClick={onUploadImageButtonClick}>
          파일 업로드
        </Fab>
        <Fab variant="extended" onClick={submitImage}>
          파일 제출하기
        </Fab>
      </div>
    </Wrapper>
  );
};

export default ImageInputPage;
