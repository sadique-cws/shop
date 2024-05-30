"use client"

import { UploadDropzone } from "@/utils/uploadthing"

const FileUpload = ({onChange, endPoint}) => {
  return (
    <UploadDropzone 
    endpoint={endPoint} 
    onClientUploadComplete={(res) => {
        console.log("onClientUploadComplete res", res);
        onChange(res?.[0].url, res?.[0].name);
    }}
    onUploadError={(error) => {
        console.log("onUploadError res", error?.message);
    }}>

    </UploadDropzone>
  )
}

export default FileUpload