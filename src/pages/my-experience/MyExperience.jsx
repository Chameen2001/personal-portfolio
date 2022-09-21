import { Grid } from '@mui/material'
import React from 'react'
import { Box, BoxTitle, ExRow, H2, H3, H4, H5, Icon, Level, Li, MainGrid, MainTitleGrid, Section, Ul } from './MyExperience.styles'
import { MdVerified } from 'react-icons/md'
import 'aos/dist/aos.css'


export default function MyExperience() {
  return (
    <Section>
      <MainGrid container>
        <MainTitleGrid item xl={12} xs={12}>
          <Grid data-aos="zoom-out" container direction="column" alignItems="center">
            <Grid item> <H4>APORTS</H4> </Grid>
            <Grid item> <H2>my experience</H2> </Grid>
          </Grid>
        </MainTitleGrid>
        <Grid item xl={12} xs={12}>
          <Grid container justifyContent="space-evenly">
            <Grid item data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <Box>
                <Grid container>
                  <Grid item xl={12} xs={12}>
                    <Grid container justifyContent="center">
                      <BoxTitle item>
                        <H3>frontend development</H3>
                      </BoxTitle>
                    </Grid>
                  </Grid>
                  <Grid item xl={12} xs={12}>
                    <Grid container >
                      <ExRow item xl={12} xs={12}>
                        <Grid container display="flex" justifyContent="space-evenly">
                          <Grid item xl={6} xs={6}>
                            <Grid container justifyContent="center">
                              <Grid item xl={6} xs={6}>
                                <Ul>
                                  <Li><Icon><MdVerified /></Icon></Li>
                                  <Li><H4>html</H4></Li>
                                </Ul>
                                <Level><H5>Experienced</H5></Level>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xl={6} xs={6}>
                            <Ul>
                              <Li><Icon><MdVerified /></Icon></Li>
                              <Li><H4>Css</H4></Li>
                            </Ul>
                            <Level><H5>Experienced</H5></Level>
                          </Grid>
                        </Grid>
                      </ExRow>
                      <ExRow item xl={12} xs={12}>
                        <Grid container display="flex" justifyContent="space-evenly">
                          <Grid item xl={6} xs={6}>
                            <Grid container justifyContent="center">
                              <Grid item xl={6} xs={6}>
                                <Ul>
                                  <Li><Icon><MdVerified /></Icon></Li>
                                  <Li><H4>javascript</H4></Li>
                                </Ul>
                                <Level><H5>Experienced</H5></Level>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xl={6} xs={6}>
                            <Ul>
                              <Li><Icon><MdVerified /></Icon></Li>
                              <Li><H4>bootstrap</H4></Li>
                            </Ul>
                            <Level><H5>Experienced</H5></Level>
                          </Grid>
                        </Grid>
                      </ExRow>
                      <ExRow item xl={12} xs={12}>
                        <Grid container display="flex" justifyContent="space-evenly">
                          <Grid item xl={6} xs={6}>
                            <Grid container justifyContent="center">
                              <Grid item xl={6} xs={6}>
                                <Ul>
                                  <Li><Icon><MdVerified /></Icon></Li>
                                  <Li><H4>react</H4></Li>
                                </Ul>
                                <Level><H5>Experienced</H5></Level>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xl={6} xs={6}>
                            <Ul>
                              <Li><Icon><MdVerified /></Icon></Li>
                              <Li><H4>jquery</H4></Li>
                            </Ul>
                            <Level><H5>Experienced</H5></Level>
                          </Grid>
                        </Grid>
                      </ExRow>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <Box>
                <Grid container>
                  <Grid item xl={12} xs={12}>
                    <Grid container justifyContent="center">
                      <BoxTitle item>
                        <H3>backend development</H3>
                      </BoxTitle>
                    </Grid>
                  </Grid>
                  <Grid item xl={12} xs={12}>
                    <Grid container >
                      <ExRow item xl={12} xs={12}>
                        <Grid container display="flex" justifyContent="space-evenly">
                          <Grid item xl={6} xs={6}>
                            <Grid container justifyContent="center">
                              <Grid item xl={6} xs={6}>
                                <Ul>
                                  <Li><Icon><MdVerified /></Icon></Li>
                                  <Li><H4>node js</H4></Li>
                                </Ul>
                                <Level><H5>Experienced</H5></Level>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xl={6} xs={6}>
                            <Ul>
                              <Li><Icon><MdVerified /></Icon></Li>
                              <Li><H4>express js</H4></Li>
                            </Ul>
                            <Level><H5>Experienced</H5></Level>
                          </Grid>
                        </Grid>
                      </ExRow>
                      <ExRow item xl={12} xs={12}>
                        <Grid container display="flex" justifyContent="space-evenly">
                          <Grid item xl={6} xs={6}>
                            <Grid container justifyContent="center">
                              <Grid item xl={6} xs={6}>
                                <Ul>
                                  <Li><Icon><MdVerified /></Icon></Li>
                                  <Li><H4>mongodb</H4></Li>
                                </Ul>
                                <Level><H5>Experienced</H5></Level>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xl={6} xs={6}>
                            <Ul>
                              <Li><Icon><MdVerified /></Icon></Li>
                              <Li><H4>mysql</H4></Li>
                            </Ul>
                            <Level><H5>Experienced</H5></Level>
                          </Grid>
                        </Grid>
                      </ExRow>
                      <ExRow item xl={12} xs={12}>
                        <Grid container display="flex" justifyContent="space-evenly">
                          <Grid item xl={6} xs={6}>
                            <Grid container justifyContent="center">
                              <Grid item xl={6} xs={6}>
                                <Ul>
                                  <Li><Icon><MdVerified /></Icon></Li>
                                  <Li><H4>hibernate</H4></Li>
                                </Ul>
                                <Level><H5>Experienced</H5></Level>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xl={6} xs={6}>
                            <Ul>
                              <Li><Icon><MdVerified /></Icon></Li>
                              <Li><H4>spring / spring boot</H4></Li>
                            </Ul>
                            <Level><H5>Experienced</H5></Level>
                          </Grid>
                        </Grid>
                      </ExRow>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </MainGrid>
    </Section>
  )
}
