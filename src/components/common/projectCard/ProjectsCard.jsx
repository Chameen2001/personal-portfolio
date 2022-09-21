import React from 'react'
import { Card, Connections, Connection, Footer, Icon, Svg, Info, Name, Job, CardBlur, Rect } from './Card.style'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub } from 'react-icons/ai'
import useImage from '../useImage/UseImage'

export default function ProjectsCard(props) {
    const { loading, error, image } = useImage(props.image);
    return (
        <Card id="inner" style={{backgroundImage: `url(${image})`,backgroundPosition:"center",backgroundSize:"contain"}}>
            <Footer>
                <Connections>
                    <Connection><Icon href='https://github.com/Chameen2001'><AiOutlineGithub /></Icon></Connection>
                </Connections>
                {/* <Svg>
                    <path
                        id="p"
                        d="M0,200 Q80,100 450,200 V150 H0 V50"
                        transform="translate(0 100)"
                    />
                    <Rect
                        id="dummyRect"
                        x="0"
                        y="0"
                        height="250"
                        width="350"
                        fill="transparent"
                    />

                    <animate
                        href="#p"
                        attributeName="d"
                        to="M0,50 Q80,100 450,50 V150 H0 V50"
                        fill="freeze"
                        begin="dummyRect.mouseover"
                        end="dummyRect.mouseout"
                        dur="0.1s"
                        id="bounce1"
                    />

                    <animate
                        href="#p"
                        attributeName="d"
                        to="M0,50 Q80,0 450,50 V150 H0 V50"
                        fill="freeze"
                        begin="bounce1.end"
                        end="dummyRect.mouseout"
                        dur="0.15s"
                        id="bounce2"
                    />
                    <animate
                        href="#p"
                        attributeName="d"
                        to="M0,50 Q80,80 450,50 V150 H0 V50"
                        fill="freeze"
                        begin="bounce2.end"
                        end="dummyRect.mouseout"
                        dur="0.15s"
                        id="bounce3"
                    />

                    <animate
                        href="#p"
                        attributeName="d"
                        to="M0,50 Q80,45 450,50 V150 H0 V50"
                        fill="freeze"
                        begin="bounce3.end"
                        end="dummyRect.mouseout"
                        dur="0.1s"
                        id="bounce4"
                    />

                    <animate
                        href="#p"
                        attributeName="d"
                        to="M0,50 Q80,50 450,50 V150 H0 V50"
                        fill="freeze"
                        begin="bounce4.end"
                        end="dummyRect.mouseout"
                        dur="0.05s"
                        id="bounce5"
                    />

                    <animate
                        href="#p"
                        attributeName="d"
                        to="M0,200 Q80,100 450,200 V150 H0 V50"
                        fill="freeze"
                        begin="dummyRect.mouseout"
                        dur="0.15s"
                        id="bounceOut"
                    />
                </Svg> */}
                <Info>
                    <Name>{props.title}</Name>
                    <Job>{props.description}</Job>
                </Info>
            </Footer>
            <CardBlur></CardBlur>
        </Card>
    )
}
