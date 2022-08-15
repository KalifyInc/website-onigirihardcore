import { useRouter } from 'next/router'
import Head from 'next/document'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'

import posts from '../src/posts/index'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Header />
            <SlugDetails>
                {
                    posts && posts.map(post => (
                        post.slug === slug ? (
                            <section key={post?.id}>
                                <img src={post?.image}></img>
                                <h1>{post?.title}</h1>
                                <p className="block__content">{post?.body}</p>
                                <p className="block__content">{post?.body2}</p>
                                <p className="block__content">{post?.body3}</p>
                                <p className="block__content">{post?.body4}</p>
                                <p className="block__content">{post?.body5}</p>

                                {
                                    post?.ytid ?
                                        <iframe width="555" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                }

                                <Head>
                                    <meta name="title" content={post.title} />
                                    <meta name="robots" content="index, follow" />
                                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />

                                    <meta name="description" content={post.description} />
                                    <meta property="og:type" content="website" />
                                    <meta property="og:url" content="https://onigirihardcore.vercel.app/" />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:image" content={post.image} />

                                    <meta property="twitter:card" content="summary_large_image" />
                                    <meta property="twitter:url" content="https://onigirihardcore.vercel.app/" />
                                    <meta property="twitter:title" content={post.title} />
                                    <meta property="twitter:description" content={post.description} />
                                    <meta property="twitter:image" content={post.image} />
                                </Head>
                            </section>
                        ) : (
                            null
                        )
                    ))
                }
            </SlugDetails>
            <Footer />
        </>
    )
}

export default Post