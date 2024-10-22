import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import type { Control } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { MerchFormSchema } from "@/schemas/MerchFormSchema"

type MerchFormValues = z.infer<typeof MerchFormSchema>
type MerchFormKeys = keyof MerchFormValues

type FormInputProps = {
    control: Control<MerchFormValues>
    name: MerchFormKeys
    label: string
    type: React.InputHTMLAttributes<HTMLInputElement>["type"]
    description?: React.ReactElement
}

function FormInput({ control, name, label, type, description }: FormInputProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-bold text-[#560E0E]">{label}</FormLabel>
                    <FormControl>
                        <Input {...field} type={type} className="border-[#711312] bg-slate-300" />
                    </FormControl>
                    {description && (
                        <FormDescription className="text-center text-[#560E0E]">{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

type FormSelectProps = Omit<FormInputProps, "type"> & {
    options: {
        value: string
        label: string
    }[]
    styles: string
}

function FormSelect({ control, name, label, options, styles }: FormSelectProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel className="font-bold text-[#560E0E]">{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className={styles}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

type MerchFormProps = {
    onSuccess: () => void
}

export function MerchForm({ onSuccess }: MerchFormProps) {
    const form = useForm<MerchFormValues>({
        resolver: zodResolver(MerchFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            country: "",
            province: "",
            city: "",
            barangay: "",
            streetAddress: "",
            postCode: "",
            shirtDesign: "17B Jersey",
            shirtSize: "S",
        },
    })

    const { toast } = useToast()

    const onSubmit = async (values: MerchFormValues) => {
        try {
            const response = await fetch("/api/send-email.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            toast({ title: `${data.message}` })
            onSuccess()
        } catch (error) {
            if (error instanceof Error) {
                toast({ title: `${error.message}`, variant: "destructive" })
            }

            toast({ title: String(error), variant: "destructive" })
        }
    }

    const shirtDesigns = [
        { value: "17B Jersey", label: "17B Jersey" },
        { value: "Pasitib Musclee Tee", label: "Pasitib Musclee Tee" },
        { value: "Cookies Navy Blue", label: "Cookies Navy Blue" },
    ]

    const shirtSizes = [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
    ]

    return (
        <div className="h-[500px] overflow-auto overscroll-y-none">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#BC2725] p-4">
                    <div className="md:grid md:grid-cols-2 md:gap-x-2">
                        <FormInput control={form.control} name="firstName" label="First Name" type="text" />
                        <FormInput control={form.control} name="lastName" label="Last Name" type="text" />
                    </div>
                    <FormInput control={form.control} name="emailAddress" label="Email Address" type="email" />
                    <FormInput control={form.control} name="phoneNumber" label="Phone Number" type="text" />
                    {["country", "province", "city", "barangay"].map((field) => (
                        <FormInput
                            key={field}
                            control={form.control}
                            name={field as MerchFormKeys}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            type="text"
                        />
                    ))}
                    <FormInput control={form.control} name="streetAddress" label="Street Address" type="text" />
                    <FormInput
                        control={form.control}
                        name="postCode"
                        label="Post Code"
                        type="text"
                        description={
                            <>
                                Look for your post code here:&nbsp;
                                <a
                                    href="https://worldpostalcode.com/philippines/"
                                    target="_blank"
                                    rel="nofollow"
                                    className="underline hover:text-blue-600"
                                >
                                    World Postal Code
                                </a>
                            </>
                        }
                    />
                    <div className="mt-2 flex w-full justify-between gap-2">
                        <FormSelect
                            control={form.control}
                            name="shirtDesign"
                            label="Shirt Design"
                            options={shirtDesigns}
                            styles="w-[175px] border-[#711312] bg-slate-300 overflow-hidden truncate"
                        />
                        <FormSelect
                            control={form.control}
                            name="shirtSize"
                            label="Shirt Size"
                            options={shirtSizes}
                            styles="border-[#711312] bg-slate-300 "
                        />
                    </div>
                    <Button type="submit" className="mt-8 w-full rounded-md bg-[#711312] font-bold text-white">
                        Pre-order
                    </Button>
                </form>
            </Form>
        </div>
    )
}
