import { z } from "zod"

export const MerchFormSchema = z.object({
    firstName: z.string().min(1, "Required").trim(),
    lastName: z.string().min(1, "Required").trim(),
    country: z.string().min(1, "Required").trim(),
    province: z.string().min(1, "Required").trim(),
    city: z.string().min(1, "Required").trim(),
    barangay: z.string().min(1, "Required").trim(),
    streetAddress: z.string().min(1, "Required").trim(),
    postCode: z.string().min(1, "Required").length(4, "Must be 4 digits").regex(/^\d+$/, "Only digits allowed").trim(),
    phoneNumber: z.string().min(1, "Required").length(11, "Must be 11 digits").trim(),
    emailAddress: z.string().min(1, "Required").email("Invalid email").trim(),
    shirtDesign: z.enum(["17B Jersey", "Pasitib Muscle Tee", "Cookies Navy Blue"]),
    shirtSize: z.enum(["S", "M", "L", "XL"]),
})
