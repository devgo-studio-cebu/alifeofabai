import type { APIRoute } from "astro"

import { Resend } from "resend"

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async () => {
    const { error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        subject: "Hello, World!",
        html: "<strong>It works!</strong>",
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
