import styled from 'styled-components'

const SlugDetails = styled.div`
    background: var(--background);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.18rem;
    color: var(--font);

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;

        @media (max-width: 768px) {
            object-fit: contain;
            height: 20rem;
            margin-bottom: 3%;
        }
    }

    blockquote {
        margin: 1rem;

        p {
            font-style: italic;
            color: var(--blue-alt);
            border-left: 2px solid var(--blue-alt);
            padding-left: 1rem;
        }
    }

    section {
        margin-left: 28rem;
        width: 71%;

        @media (max-width: 1920px) {
            width: 50%;
            margin: auto;
            margin-bottom: 5%;
        }

        @media (max-width: 1600px) {
            margin-left: 20rem;
            width: 50%;
        }

        @media (max-width: 1440px) {
            margin-left: 14rem;
            width: 60%;
        }

        @media (max-width: 1366px) {
            margin-left: 12rem;
            width: 70%;
        }

        @media (max-width: 768px) {
            margin-left: 5rem;
            width: 80%;
        }

        @media (max-width: 500px) {
            margin-left: 1rem;
            width: 90%;
        }

        margin-bottom: 5rem;
        padding-bottom: 1rem;

        h1 {
            margin-top: -1rem;
            color: var(--blue);
            font-size: 2rem;
            font-weight: 700;
            line-height: 35px;
            text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);
        }

        h2 {
            color: var(--blue);
        }

        a {
            color: var(--blue);
        }

        .anchor {
            fill: var(--blue);
            margin-right: 0.2rem;
        }

        p {
            margin-bottom: 1.8rem;
        }

        .keepUpdate {
            text-align: center;
            flex-direction: column;
            font-weight: 600;
            font-style: italic;
        }

        ul {
            margin-top: -1rem;
        }

        li {
            margin-left: -1rem;
        }

        .date {
            margin-bottom: 0rem;
            margin-left: 48rem;
        }

        .block__content {
            width: 100%;
            min-width: 80%;
            max-width: 100%;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.5rem;

            .uil-share {
                cursor: pointer;
                color: var(--green);
                transition: 1s;

                &:hover {
                    color: var(--blue);
                }
            }
        }

        blockquote {
            background: var(--background-alt);
            padding: 1rem;
            font-size: 1rem;
            border-radius: 15px;
            font-style: italic;
            font-family: 'Cascadia Code', sans-serif;
        }

        .title__content {
            width: 60rem;

            @media (max-width: 1366px) {
                width: 100%;
            }

            @media (max-width: 768px) {
                font-size: 1.6em;
                line-height: 30px;
                width: 100%;
            }

            @media (max-width: 500px) {
                font-size: 1.6em;
                line-height: 30px;
                width: 90%;
            }
        }

        .image__content {
            img {
                display: flex;
                justify-content: center;
                margin: 0 auto;
                width: 80%;
                height: 100%;
            }
        }

        .citation {
            font-weight: 100;
            font-style: italic;
            color: var(--blue);

            a {
                p {
                    font-size: 1.5rem;
                    border-left: 2px solid var(--blue);
                    padding-left: 1rem;
                    width: 100%;
                }

                :hover {
                    text-decoration: underline;
                }
            }
        }

        .touch {
            display: flex;
            padding: 2rem 2rem 1rem 2rem;

            @media (max-width: 768px) {
                flex-direction: column;
                padding: 3rem 2rem;
                text-align: center;
            }

            background: var(--background-alt);
            border-radius: 15px;
            margin: 2rem;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                flex-direction: column;
            }

            .leftContent {
                width: 60%;

                h2 {
                    margin-top: 0rem;
                }

                p {
                    font-size: 1rem;
                    color: var(--font);
                    margin-top: 1rem;
                }
            }

            .rightContent {
                margin-left: 2rem;

                @media (max-width: 768px) {
                    margin-left: 0rem;
                }

                span {
                    font-size: 1.3rem;
                    background: var(--background);
                    color: var(--white);
                    border-radius: 25px;
                    padding: 1rem 2rem;
                    border: none;

                    a {
                        color: var(--white);
                        text-decoration: none;
                    }

                    &:hover {
                        filter: brightness(1.1);
                    }
                }
            }
        }

        iframe {
            width: 60rem;
            margin-left: 0rem;
            height: 38rem;
            border: none;

            @media (max-width: 500px) {
                width: 100%;
                height: 25rem;
            }

            @media (max-width: 768px) {
                width: 100%;
                height: 25rem;
            }
        }
    }
`

export default SlugDetails
