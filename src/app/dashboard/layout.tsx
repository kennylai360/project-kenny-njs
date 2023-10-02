import Head from "next/head";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Head>
                <title>ANSDAJNDJ</title>
            </Head>
            <h1>akmsdakdmk</h1>
            <section>{children}</section>
        </div>
    )
}