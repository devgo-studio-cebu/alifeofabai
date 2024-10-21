import { Body, Container, Html, Text } from "@react-email/components"

type MerchEmailProp = {
    fullName: string
    emailAddress: string
    contactNumber: string
    fullAddress: string
    orderDetail: string
}

export default function MerchEmail({
    fullName,
    emailAddress,
    contactNumber,
    fullAddress,
    orderDetail,
}: MerchEmailProp) {
    return (
        <Html>
            <Body style={{ fontFamily: "sans-serif" }}>
                <Container>
                    <Text>Name: {fullName}</Text>
                    <Text>Email Address: {emailAddress}</Text>
                    <Text>Contact Number: {contactNumber}</Text>
                    <Text>Address: {fullAddress}</Text>
                    <Text>Order Detail: {orderDetail}</Text>
                </Container>
            </Body>
        </Html>
    )
}
