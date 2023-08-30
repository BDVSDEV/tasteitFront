import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef, useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`h-14 w-12 relative border border-white ${index === selectedImageIndex ? 'selected' : ''}`}
            onClick={() => {
              setSelectedImageIndex(index);
              handleScrollTo(image.id);
            }}
          >
            <span className="sr-only">Go to image {index + 1}</span>
            <Image
              src={image.url}
              className="absolute inset-0"
              alt="Thumbnail"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <div
          ref={(image) => imageRefs.current.push(image)}
          className="relative aspect-[29/34] w-full"
          id={images[selectedImageIndex].id}
        >
          <Image
            src={images[selectedImageIndex].url}
            priority={true}
            className="absolute inset-0"
            alt={`Product image ${selectedImageIndex + 1}`}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
