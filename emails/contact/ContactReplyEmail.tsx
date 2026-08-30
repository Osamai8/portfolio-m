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

type ContactReplyEmailProps = {
    name: string;
};

const ContactReplyEmail = ({
    name,
}: ContactReplyEmailProps) => {
    return (
        <Html>
            <Head />

            <Preview>
                Thanks for reaching out to Osama.
            </Preview>

            <Body
                style={{
                    backgroundColor: "#121212",
                    fontFamily:
                        "Arial, Helvetica, sans-serif",
                    margin: 0,
                    padding: "40px 20px",
                }}
            >
                <Container
                    style={{
                        maxWidth: "560px",
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
                            margin: "0 0 24px",
                        }}
                    >
                        Hey {name},
                    </Heading>

                    <Text
                        style={{
                            color: "#d4d4d4",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            margin: "0 0 16px",
                        }}
                    >
                        Thanks for reaching out through my portfolio.
                        I’ve received your message and will get back to
                        you as soon as I can.
                    </Text>

                    <Text
                        style={{
                            color: "#d4d4d4",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            margin: "0 0 24px",
                        }}
                    >
                        Looking forward to chatting with you.
                    </Text>

                    <Hr
                        style={{
                            borderColor: "#2a2a2a",
                            margin: "28px 0",
                        }}
                    />

                    <Section>
                        <Text
                            style={{
                                color: "#f5f5f5",
                                fontSize: "15px",
                                fontWeight: "600",
                                margin: 0,
                            }}
                        >
                            Osama Islam
                        </Text>

                        <Text
                            style={{
                                color: "#888",
                                fontSize: "14px",
                                margin: "4px 0 0",
                            }}
                        >
                            Full-Stack Developer
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

ContactReplyEmail.PreviewProps = {
    name: "Habibi"
} as ContactReplyEmailProps
export default ContactReplyEmail;