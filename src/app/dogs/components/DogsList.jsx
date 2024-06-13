import DogCard from "./DogCard"

export default function DogsList(dataDogs, breed_dog) {
    return (
        <div className="wrapper-dogs columns-3xs space-y-5">
        {
            dataDogs?.dataDogs?.map((element, index) => {
                return (
                    <DogCard key={index+1} image_url={element} index={index} breed_dog={breed_dog} />
                )
            })
        }
        </div>
    )
}