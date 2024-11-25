import { BlobServiceClient } from "@azure/storage-blob";

// services
import { hookService } from "@/services";

// helpers
import { getStorgeHostUrl } from "@/helpers";

// types
import { UploadFilePayload } from "./AzureService.types";

const azureService = {
  uploadFile: async ({
    file,
    blobName,
    containerName,
    token,
    onProgress,
  }: UploadFilePayload) => {
    try {
      // generate sas token & upload url
      const { sasToken } = await hookService.getSASToken({ token });
      const uploadUrl = `${getStorgeHostUrl()}/?${sasToken}`;

      // get blob service
      const blobService = new BlobServiceClient(uploadUrl);

      // get container
      const containerClient = blobService.getContainerClient(containerName);

      // create blob client
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      // upload file
      await blockBlobClient.uploadData(file, {
        blobHTTPHeaders: { blobContentType: file.type },
        onProgress: ({ loadedBytes }) => {
          onProgress?.((loadedBytes * 100) / file.size);
        },
      });
    } catch (err: any) {
      throw new Error(err.message || "Failed to upload a file.");
    }
  },
};

export { azureService };
