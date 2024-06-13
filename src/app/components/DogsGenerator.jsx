"use client"

import {Input} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { useCallback, useState } from "react";
import { toast, ToastContainer, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function DogsGenerator() {

    const router = useRouter()

    const [MAX_IMAGE_COUNT,] = useState(12)
    const [loading, setLoading] = useState(false)
    const [valueInput, setValueInput] = useState('')

    const handleChangeValueInput = useCallback((event) => {
        let value = String(event.target.value).toLowerCase()
        setValueInput(value)
    }, [])

    const handleGenerateDogs = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const res = await fetch(`https://dog.ceo/api/breed/${valueInput}/images/random/${MAX_IMAGE_COUNT}`)
            if (!res) {
                setLoading(false)
                toast.error('Failed to Collect Dogs Data.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Slide,
                });
                throw new Error('Failed to Collect Dogs Data.')
            } else {
                const response = await res.json()
                if (response) {
                    setLoading(false)
                    router.push(`/dogs?breed=${valueInput}`)
                }
            }
        } catch (error) {
            setLoading(false)
            toast.error('Failed to Collect Dogs Data.', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
        }
    }

    return (
        <div className="px-5">
            <form onSubmit={handleGenerateDogs} className="mt-24">
                <div className="submit-quotes-component md:w-[50rem] w-full mx-auto">
                    <Input
                        size="lg"
                        isClearable
                        type="text"
                        variant="bordered"
                        classNames="label"
                        value={valueInput}
                        className="font-bold"
                        label="Nama Ras Anjing"
                        labelPlacement="outside"
                        onChange={handleChangeValueInput}
                        placeholder="hound"
                        startContent={
                            <span>🐕</span>
                        }
                    />
                </div>
                <div className="flex justify-center">
                    <button type="button" onClick={handleGenerateDogs} className={`${(loading) && 'opacity-50 pointer-events-none'} bg-blue-600 font-bold text-white text-[1.25rem] md:w-[50rem] w-full py-3 px-2 mt-5 text-center rounded-[8px] shadow-lg`}>
                    {
                        loading ? 'Loading dogs...' : 'Search Dogs'
                    }
                    </button>
                </div>
            </form>
        </div>

    )
}