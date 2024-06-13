import { Skeleton } from "@nextui-org/react";

export default function Loading() {
    return (
        <div className="wrapper-dogs columns-3xs space-y-5">
            {
                Array.from({ length: 5 }, (_, index) => (
                    <article key={index} className="wrapper-menu-box-skeleton">
                        <Skeleton className="w-full rounded-[5px]">  
                            <div className="w-full h-[12rem] rounded-[5px] bg-default-300"></div>
                        </Skeleton>
                    </article>
                ))
            }
        </div>
    )
}