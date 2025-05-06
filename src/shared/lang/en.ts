import { Lang } from "./ja";

export const en: Lang = {
    component: {
        back: {
            title: "HOME"
        }
    },
    top: {
        first: "Hello world!!",
        second: "Are you ready?",
        third: "Let's go!!"
    },
    home: {
        title: "Home",
        name: "TERUSI",
        description: "software engineer",
        card: {
            card1: {
                title: "introduction",
                description: "Let me introduce myself!"
            },
            card2: {
                title: "skill",
                description: "I will focus on the skills I know well."
            },
            card3: {
                title: "activity",
                description: "This section describes my usual activities."
            },
            card4: {
                title: "about",
                description: "Tech stack, key points, special thanks, etc."
            }
        }
    },
    intro: {
        title: "Introduction",
        contents: {
            contents1: "Click on the button."
        },
        introduction: {
            sectionTitle: "About me",
            title: "introduction",
            contents:
                "Hello. My name is TERUSI. I am a software engineer. I became an engineer in 2023. Currently, the main focus is on the front end."
        },
        carrier: {
            title: "Carrier",
            list: {
                highSchoolOut: {
                    when: "2019/3",
                    contents: "Graduated from Joso Gakuin."
                },
                universityIn: {
                    when: "2019/4",
                    contents:
                        "Enrolled in the Department of Computer Science, Faculty of Engineering at Tokyo University of Science."
                },
                jobHunting: {
                    when: "2022/5",
                    contents: "Receive a job offer from an IT company."
                },
                graduationResearch: {
                    when: "2023/2",
                    contents:
                        "From April 2022 I completed my graduation research in the Optimization Algorithms laboratory. The topic was the optimization of training menus in athletics."
                },
                universityOut: {
                    when: "2023/3",
                    contents: "Graduated from Tokyo University of Science."
                },
                companyIn: {
                    when: "2023/4",
                    contents:
                        "I joined an IT company as a software engineer. I becomes a new employee."
                },
                ossStart: {
                    when: "2023/11",
                    contents: "Become an OSS committer for the first time."
                }
            }
        },
        introData: {
            title: "others",
            intro1: {
                title: "Favorite food",
                headerContents: "meat 🍖🍗",
                bodyContents: "I want to eat good, expensive meat...🤤"
            },
            intro2: {
                title: "Favorite sport 1",
                headerContents: "Track and Field 🏃🏻‍♂️",
                bodyContents:
                    "I was a long-distance runner during high school and university. In my third and fourth years, I competed in the qualifying rounds for the Hakone Ekiden. Although I’m not running anymore, I still enjoy watching races on TV."
            },
            intro3: {
                title: "Favorite sport 2",
                headerContents: "Soccer⚽️",
                bodyContents:
                    "I played football in primary and secondary school. I don't play now. But I often watch Japan's national team games and the World Cup."
            },
            intro4: {
                title: "Favorite artist",
                headerContents: "Spitz",
                bodyContents:
                    "I like many different artists, but Spitz is exceptional. They heal me when I am tired."
            }
        }
    },
    skills: {
        title: "skills",
        clickMessage: "click a card",
        webSkills: {
            title: "1. web",
            skill1: {
                path: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
                title: "Javascript",
                description:
                    "I think I only understand about 30% of this language 🤪. I need to read MDN a lot more."
            },
            skill2: {
                path: "https://www.typescriptlang.org/",
                title: "Typescript",
                description:
                    "I use it more than JS.  We would also like to consider the performance part."
            },
            skill3: {
                path: "https://ja.react.dev/",
                title: "React",
                description:
                    "I use it more than vanilla js. I hope to be able to read React's code one day."
            },
            skill4: {
                path: "https://nextjs.org/",
                title: "Next.js",
                description:
                    "I'm using it as my main tool. I'd like to understand it because it's difficult to do the RSC etc."
            },
            skill5: {
                path: "https://vanilla-extract.style/",
                title: "vanilla-extract",
                description:
                    "Use with Next.js. It would be very nice to be able to write in TS-only. I would be more than happy if turbo-pack was supported.."
            },
            skill6: {
                path: "https://storybook.js.org/",
                title: "storybook",
                description:
                    "I found out about its existence through the OSS. Useful for creating stand-alone components!"
            },
            skill7: {
                path: "https://expressjs.com/ja/",
                title: "express.js",
                description:
                    "It is used to create simple REST APIs, but recently, it has been shifting to Bun."
            },
            skill8: {
                path: "https://vitest.dev/",
                title: "vitest",
                description: "Used for work, etc. Writing test code is fun!"
            },
            skill9: {
                path: "https://bun.sh/",
                title: "bun.js",
                description:
                    "It's a promising technology. The hot reload is faster than Nodemon's hot reload."
            }
        },
        nativeSkill: {
            title: "2. native",
            skill1: {
                path: "https://reactnative.dev/",
                title: "React Native",
                description:
                    "The technology I used in my first job is easy to learn for someone with front-end web development experience. Surprisingly, version 1.0 has yet to be released. It will be interesting to see how it evolves, especially with future developments in React."
            }
        },
        otherSkill: {
            title: "3. other",
            skill1: {
                path: "https://www.python.org/",
                title: "python",
                description:
                    "It is an excellent language for performing complex calculations in data analysis and mathematics.It was used in a prototype of a tool using the GPT API, although it is not used much in work. I was indebted to them for my university research."
            },
            skill2: {
                path: "https://www.raspberrypi.com/",
                title: "raspberry Pi",
                description:
                    "I had the opportunity to touch it at work. I thought it was interesting to make an IoT tool, but I felt I had had enough."
            },
            skill3: {
                path: "https://github.co.jp/",
                title: "git/github",
                description:
                    "I use it for source code management; I don't know all the git commands but I try to use the CUI as much as possible. In my work, I try to use Github ingeniously to efficiently turn around projects."
            },
            skill4: {
                path: "https://www.rust-lang.org/learn",
                title: "Rust",
                description:
                    "I started this language when I thought it had stopped growing. In a word, I thought it was an amazingly clever language."
            }
        },
        official: "official site"
    },
    active: {
        title: "Activities",
        clickList: "click a item of list"
    },
    activeDetail: {},
    about: {
        title: "About this site",
        detail: "This section describes some of the innovations I have made in creating this site.",
        tech: {
            title: "1. Technology used",
            detail: "このサイトで使用した技術スタックを列挙します",
            tech1: "Next.js",
            tech2: "vanilla-extract",
            tech3: "framer-motion",
            tech4: "next-mdx-remote"
        },
        appeal: {
            title: "2. Particulars, etc.",
            point1: "It was created with Next.js, which I am familiar with.",
            point2: "Popups are implemented with global state management. Global management makes it easy to create pop-ups even if they are created on a separate page.",
            point3: "We have added multilingual support. I heard that there were some methods such as using libraries, but I did not understand them well, so I used a routing system to support them.",
            point4: "The content of active was written in markdown. At first, I was going to use a CMS, but I heard that many OSS documents are written in mdx, so I decided to use that, which I was interested in.",
            point5: "I have included techniques that I can implement now in the web front-end area.",
            source: "https://github.com/ShionTerunaga/new-site-2024"
        },
        design: {
            title: "3. About design and styling",
            contents:
                "I had a person named Kasumi help me with the design and styling. We are very grateful to her for making the site look so good. Thank you very much😍",
            github: "Kasumi's github",
            githubUrl: "https://github.com/kasumi0"
        }
    }
};
