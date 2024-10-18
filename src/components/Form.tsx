import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { merchFormSchema } from "../schemas/merch-form.schema"

export function Form() {
    const { register, handleSubmit } = useForm<z.infer<typeof merchFormSchema>>(
        {
            resolver: zodResolver(merchFormSchema),
        },
    )

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
            <input {...register("country")} />
            <input {...register("province")} />
            <input {...register("city")} />
            <input {...register("barangay")} />
            <input {...register("streetAddress")} />
            <input {...register("postCode")} />
            <input {...register("phone")} />
            <input {...register("emailAddress")} />
            <select {...register("shirtDesign")}>
                <option value="17B Jersey">17B Jersey</option>
                <option value="Pasitib Muscle Tee">Pasitib Muscle Tee</option>
                <option value="Cookies Navy Blue">Cookies Navy Blue</option>
            </select>
            <select {...register("shirtSize")}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}
