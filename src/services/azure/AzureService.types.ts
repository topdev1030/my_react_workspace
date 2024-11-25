export type UploadFilePayload = {
  file: Blob;
  blobName: string;
  containerName: string;
  token: string;
  onProgress?: (percent: number) => void;
};
