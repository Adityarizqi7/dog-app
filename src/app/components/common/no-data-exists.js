import Image from "next/image";
import NotExistsImage from "../../../assets/no-data.png"

export default function NoDataExists() {
    return (
        <div className="text-center">
            <Image 
                width={300}
                height={300}
                alt="Picture of 404"
                src={NotExistsImage}
                className='mx-auto'
            />
            <h4 className="mt-3 font-medium">Mohon maaf, Ras Anjing yang anda cari tidak tersedia untuk saat ini.</h4>
        </div>
    )
}