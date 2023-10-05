export default function fileToBlob(e: any) {
  let fileInput = e.files[0];

  if (fileInput) {
    let blobURL = URL.createObjectURL(fileInput);

    return blobURL;
  }
}
