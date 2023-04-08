export interface UploadImage {
  file: File;
  thumbnail: string;
  type: string;
}

export interface InfoFormRequest {
  purpose: string;
  body_component: string;
  routine: string;
  time: string;
}
