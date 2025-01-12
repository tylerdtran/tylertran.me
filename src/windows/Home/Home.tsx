import { Layout, LandingPage, About, Experience, Footer, Projects } from '../../components/exports';

export default function Home() {
    return (
        <Layout>
            <LandingPage />
            <About />
            <Experience />
            <Projects />
            {/* <BlogCarousel /> */}
            <Footer />
        </Layout>
    )
}

