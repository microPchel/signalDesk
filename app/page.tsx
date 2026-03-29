import Footer from "@/components/footer";
import Header from "@/components/header";
import Description from "@/components/description_Link";
import Container from "@/components/project_container";
import Project from "@/components/project";
export default function Home() {
    return (
        <>
            <Header />
            <div>
                <h1>Hello from page js</h1>
            </div>
            <Description />
            <Container>
                <Project />
            </Container>
            <Footer />
        </>
    );
}