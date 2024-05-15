import React, { useEffect, useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import SlideDetails from './SlideDetails'

import { useKeenSlider } from 'keen-slider/react'
import { SkeletonSlide } from './Skeleton/SkeletonSlide'
import formatDate from '../utils/formatDate'

const Slide = ({ posts }) => {
    const [loading, setLoading] = useState(true);
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        if (posts) {
            setLoading(false);
            setPostsData(posts);
        }
    }, [posts]);

    const [refCallback] = useKeenSlider({ loop: true },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 10000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <SlideDetails>
            {loading ? (
                <SkeletonSlide />
            ) : (
                <div ref={refCallback} className="keen-slider">
                    {postsData && postsData.slice(0, 5).map(post => (
                        <div className="keen-slider__slide" key={post}>
                            <a href={post.slug}>
                                <img src={post.frontmatter.image} alt={post.frontmatter.title} width={1024} height={500} loading='lazy' />
                            </a>
                            <div className="slider-description">
                                <div className="slide-tag">
                                    <span className="latest">HOT NEWS 🔥</span>

                                    <span className="tag">{post.frontmatter.categories === 'Movies' ? <span className="movies">Filmes & Séries</span> : null || post.frontmatter.categories === 'Games' ? <span className="games">Video Games</span> : null || post.frontmatter.categories === 'Technologies' ? <span className="tecnologies">Ciência & Tecnologia</span> : null || post.frontmatter.categories === 'Animes' ? <span className="animes">Animes & HQs</span> : null || post.frontmatter.categories === 'Development' ? <span className="development">4Devs</span> : null}</span>

                                    <span className="date">{formatDate(post.frontmatter.date)}</span>
                                    <span> - </span>
                                    <span className="author">
                                        <a href='https://yagasaki.dev/about' target='_blank' rel="noreferrer">Anderson &apos;Yagasaki&apos; Marlon</a>
                                    </span>
                                </div>

                                <a href={post.slug}><h1>{post.frontmatter.title}</h1></a>
                                <p>{post.frontmatter.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </SlideDetails>
    )
}

export default Slide
