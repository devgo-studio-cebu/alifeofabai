import { z } from "zod"

export const merchFormSchema = z.object({
    firstName: z.string().trim(),
    lastName: z.string().trim(),
    country: z.string().trim(),
    province: z.string().trim(),
    city: z.string().trim(),
    barangay: z.string().trim(),
    streetAddress: z.string().trim(),
    postCode: z.string().length(4).trim(),
    phone: z.string().length(10).trim(),
    emailAddress: z.string().email().trim(),
    shirtDesign: z.enum([
        "17B Jersey",
        "Pasitib Muscle Tee",
        "Cookies Navy Blue",
    ]),
    shirtSize: z.enum(["S", "M", "L", "XL"]),
})
