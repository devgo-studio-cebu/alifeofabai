import type { APIRoute } from "astro"

import { Resend } from "resend"

import MerchEmail from "@/emails/MerchEmail"
import { MerchFormSchema } from "@/schemas/MerchFormSchema"

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json()
    const result = MerchFormSchema.safeParse(body)

    if (!result.success) {
        return new Response(
            JSON.stringify({
                message: `Email failed to send: ${result.error}`,
            }),
            {
                status: 500,
            },
        )
    }

    const {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        country,
        province,
        city,
        barangay,
        streetAddress,
        postCode,
        shirtDesign,
        shirtSize,
    } = result.data

    const { error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        subject: `Order from ${firstName} ${lastName}`,
        react: MerchEmail({
            fullName: `${firstName} ${lastName}`,
            contactNumber: phoneNumber,
            emailAddress,
            fullAddress: `${streetAddress}, ${barangay}, ${city}, ${province}, ${postCode}, ${country}`,
            orderDetail: `${shirtDesign} - ${shirtSize}`,
        }),
    })

    if (error) {
        return new Response(
            JSON.stringify({
                message: `Email failed to send: ${error}`,
            }),
            {
                status: 500,
            },
        )
    }

    return new Response(
        JSON.stringify({
            message: "Email sent successfully!",
        }),
        {
            status: 200,
        },
    )
}
