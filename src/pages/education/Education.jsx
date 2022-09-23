import { Grid } from '@mui/material'
import React from 'react'
import { H2, H4, MainGrid, MainTitleGrid, Section } from './Education.style'

export default function Education() {
  return (
    <Section>
      <MainGrid container xl={10} xs={10}>
        <MainTitleGrid item xl={12} xs={12}>
          <Grid data-aos="zoom-out" container direction="column" alignItems="center">
            <Grid item> <H4>APORTS</H4> </Grid>
            <Grid item> <H2>my experience</H2> </Grid>
          </Grid>
        </MainTitleGrid>
      </MainGrid>
    </Section>
  )
}
