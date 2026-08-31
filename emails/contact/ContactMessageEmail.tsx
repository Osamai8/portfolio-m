import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

type ContactMessageEmailProps = {
    name: string;
    email: string;
    message: string;
};

const ContactMessageEmail = ({
    name,
    email,
    message,
}: ContactMessageEmailProps) => {
    return (
        <Html>
            <Head />

            <Preview>
                New message from {name} — Osama's Portfolio
            </Preview>

            <Body
                style={{
                    // backgroundColor: "#121212",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    margin: 0,
                    padding: "40px 20px",
                }}
            >
                <Container
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        backgroundColor: "#181818",
                        border: "1px solid #2a2a2a",
                        borderRadius: "12px",
                        padding: "40px",
                    }}
                >
                    <Heading
                        style={{
                            color: "#f5f5f5",
                            fontSize: "24px",
                            fontWeight: "600",
                            margin: "0 0 8px",
                        }}
                    >
                        New message
                    </Heading>

                    <Text
                        style={{
                            color: "#888",
                            fontSize: "14px",
                            margin: "0 0 32px",
                        }}
                    >
                        Someone just reached out through your portfolio.
                    </Text>

                    {/* Sender information */}
                    <Section
                        style={{
                            backgroundColor: "#121212",
                            border: "1px solid #2a2a2a",
                            borderRadius: "8px",
                            padding: "20px",
                        }}
                    >
                        <Text
                            style={{
                                color: "#888",
                                fontSize: "12px",
                                margin: "0 0 5px",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}
                        >
                            From
                        </Text>

                        <Text
                            style={{
                                color: "#f5f5f5",
                                fontSize: "16px",
                                fontWeight: "600",
                                margin: "0 0 12px",
                            }}
                        >
                            {name}
                        </Text>

                        <Text
                            style={{
                                color: "#a3a3a3",
                                fontSize: "14px",
                                margin: 0,
                            }}
                        >
                            {email}
                        </Text>
                    </Section>

                    <Hr
                        style={{
                            borderColor: "#2a2a2a",
                            margin: "32px 0",
                        }}
                    />

                    {/* Message */}
                    <Text
                        style={{
                            color: "#888",
                            fontSize: "12px",
                            margin: "0 0 10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Message
                    </Text>

                    <Section
                        style={{
                            backgroundColor: "#121212",
                            borderLeft: "3px solid #f0a35b",
                            padding: "16px 20px",
                            borderRadius: "4px",
                        }}
                    >
                        <Text
                            style={{
                                color: "#d4d4d4",
                                fontSize: "15px",
                                lineHeight: "1.7",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {message}
                        </Text>
                    </Section>

                    <Hr
                        style={{
                            borderColor: "#2a2a2a",
                            margin: "32px 0 24px",
                        }}
                    />

                    <Text
                        style={{
                            color: "#666",
                            fontSize: "12px",
                            lineHeight: "1.5",
                            margin: 0,
                        }}
                    >
                        Sent from the contact form on Osama's portfolio.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
ContactMessageEmail.PreviewProps = {
    name: "Habibi",
    email: "habibi@yopmail.com",
    message: "Hello my friend",
} as ContactMessageEmailProps

export default ContactMessageEmail;