"use client"
import { Camera, Search, Upload } from 'lucide-react';
import React, { use, useState } from 'react'
import { Button } from '../ui/button';

import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const home_search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [isImageSearchActive, setIsImageSearchActive] = useState(false)
  const [imagePreview, setImagePreview] = useState("")
  const [searchimage, setSearchimage] = useState(null)
  const [isUploading, setIsUploading] = useState()

  const router =useRouter()

  const onDrop = acceptedFiles => {
    let file = acceptedFiles[0]

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB")
        return;
      }

      setIsUploading(true);
      setSearchimage(file);

      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result)
        setIsUploading(false)
        toast.success("Image uploaded Successfully");
      }



      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to read the image")
      };

      reader.readAsDataURL(file)
    }
  }
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      "image/*": ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: 1,
  })



  const handleSubmit = (e) => {
    e.preventDefault();
    
      if (!searchTerm.trim()) {
        toast.error("Please upload an image");
        return;
      }
    
      router.push(`/cars?search=${encodeURIComponent(searchTerm)}`) // Redirect to the search page with the search term
      
  };


  let handleImageSubmit = async(e) => {
      e.preventDefault();
      if (!searchimage) {
        toast.error("Please enter a search term or upload an image");
        return;
      }


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='relative flex items-center'>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter make, model, or use our AI image Search...'
            className='py-6 pl-10 pr-12 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-2xl' />

          <div className='absolute right-[100px]'>
            <Camera
              size={35}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className='cursor-pointer rounded-xl p-1.5'
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />

          </div>

          <Button type="submit" className="absolute right-2 rounded-full">Search</Button>

        </div>
      </form>

      {isImageSearchActive && (
        <div className='border-2 border-dashed border-gray-300 rounded-3xl mt-4 p-4'>
          <form onSubmit={handleImageSubmit}>
            <div>{imagePreview ? (
              <div className='flex flex-col items-center'>
                <img
                  src={imagePreview}
                  alt="Car Preview"
                  className=' h-64 object-contain mb-4 '
                />
                <Button
                  variant="outline"
                  
                  onClick={() =>{
                    setSearchimage(null); 
                    setImagePreview("")
                    toast.info("Image removed")
                  }}
                >Remove Image
                </Button>
              </div>
            ) : (
              <div {...getRootProps()} className='cursor-pointer'>
                <input {...getInputProps()} />
                <div className='flex my-5 flex-col items-center'>
                  <Upload className='h-12 w-12 text-gray-400 mb-2' />
                  {
                    isDragActive && !isDragReject ?
                      <p className='text-xl text-gray-200'>Leave the file here to upload</p> :
                      <p className='text-xl text-gray-200'>Drag & Drop a car image or click to select </p>
                  }
                  {isDragReject && (
                    <p className='text-red-500 mb-2'>Invalid image type</p>
                  )}
                  <p
                    className='text-gray-400 text-sm'>
                    Supports: JPG, PNG (max 5MB)
                  </p>
                </div>

              </div>
            )}</div>

            {imagePreview && (
              <Button
                type="submit"
                className='w-full mt-5 bg-blue-500 text-white rounded-full py-2'
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Search"}
              </Button>
            )}
          </form>
        </div>)}
    </div>
  )
}

export default home_search
