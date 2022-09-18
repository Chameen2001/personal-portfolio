import { Grid } from '@mui/material'
import React from 'react'
import { Box, BoxTitle, ExRow, H2, H3, H4, H5, Icon, Level, Li, MainGrid, Ul } from './MyExperience.styles'
import { MdVerified } from 'react-icons/md'


export default function MyExperience() {
  return (
    <MainGrid container>
      <Grid item xl={12} xs={12}>
        <Grid container justifyContent="center"><H2>my experience</H2></Grid>
      </Grid>
      <Grid item xl={12} xs={12}>
        <Grid container justifyContent="space-evenly">
          <Grid item>
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
          <Grid item>
            <Box>
              <Grid container>
                <Grid item xl={12} xs={12}>
                  <Grid container justifyContent="center">
                    <BoxTitle item>
                      <H3>backend development</H3>
                    </BoxTitle>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MainGrid>
  )
}
