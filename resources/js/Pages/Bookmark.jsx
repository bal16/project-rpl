import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import Navbar from "@/Components/Navbar";
import NavbarResponsive from "@/Components/NavbarResposive";
import Post from "@/Components/Post";
import Sidebar from "@/Components/Sidebar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Bookmark({ auth, posts, bookmark:initialBookmark, stores }) {
    // console.log(bookmark.length);
    const [bookmark, setBookmark] = useState(initialBookmark);
    return (
        <>
            <DefaultLayout>
                <Head title="Bookmark" />
                <Navbar auth={auth} />
                <MainContent>
                    <Header></Header>
                    {bookmark.length != 0 ? <></> : <p className="justify-center mt-5">Belum Ada Bookmark</p>}
                    <section className="">
                        {posts.map((a, index) => (
                            <Post
                                key={index}
                                content={a}
                                auth={auth}
                                Bookmark={bookmark}
                            />
                        ))}
                    </section>
                </MainContent>
                <Sidebar stores={stores} auth={auth} />
            </DefaultLayout>
            <NavbarResponsive auth={auth} />
        </>
    );
}
