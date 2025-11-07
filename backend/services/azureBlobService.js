const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
  BlobSASPermissions,
} = require('@azure/storage-blob');
// const path = require('path');

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
const containerName = process.env.AZURE_CONTAINER_NAME;

const sharedKey = new StorageSharedKeyCredential(accountName, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKey
);

async function uploadToAzureBlob(filePath, originalName, mimeType) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  await containerClient.createIfNotExists(); // makes sure container exists

  const blobName = `resumes/${Date.now()}-${originalName}`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
console.log('📤 Uploading to Azure Blob:');
console.log('- File:', filePath);
console.log('- Name:', originalName);
console.log('- Type:', mimeType);

  await blockBlobClient.uploadFile(filePath, {
    blobHTTPHeaders: {
      blobContentType: mimeType,
    },
    metadata: {
      originalName,
      uploaded: new Date().toISOString(),
    },
  });

  return {
    blobName,
    url: blockBlobClient.url,
  };
}

function generateSASUrl(blobName, expiryHours = 168) {
  const blobClient = blobServiceClient
    .getContainerClient(containerName)
    .getBlobClient(blobName);

  const expiresOn = new Date();
  expiresOn.setHours(expiresOn.getHours() + expiryHours);

  const sas = generateBlobSASQueryParameters(
    {
      containerName,
      blobName,
      permissions: BlobSASPermissions.parse('r'),
      startsOn: new Date(),
      expiresOn,
    },
    sharedKey
  );

  return `${blobClient.url}?${sas.toString()}`;
}

module.exports = {
  uploadToAzureBlob,
  generateSASUrl,
};
